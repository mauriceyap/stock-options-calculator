import { SHARE_SCHEMES, ShareScheme } from "../shareSchemes";
import { PREDICTION_LEVELS } from "../types";
import { CalculatorInput } from "../types/inputs";
import {
  CalculatedTimeSeries,
  CalculatorOutput,
  PredictedDataPoint,
} from "../types/outputs";

import { calculateDeductionsForShareScheme } from "./deductions/shareSchemeDeductions";
import { initialiseTimeSeries } from "./initialiseTimeSeries";
import {
  addToPredictedDataPoint,
  monthStart,
  roundCalculatorOutputToDP,
} from "./utils";

// The earliest time in the time series is the earliest vesting commencement.
const getEarliestTimeSeriesDate = ({ companies }: CalculatorInput) => {
  const vestingCommencementDateTimes = companies.flatMap(({ allocations }) =>
    allocations.map(({ vestingCommencement }) => vestingCommencement.getTime())
  );
  const earliestVestingCommencementDateTime = Math.min(
    ...vestingCommencementDateTimes
  );
  return new Date(earliestVestingCommencementDateTime);
};

// The latest times in the time series is the latest predicted exit event or final date on which
// shares vest, plus the given number of buffer months.
const getLatestTimeSeriesDate = (
  { companies }: CalculatorInput,
  bufferMonths: number
) => {
  const predictedExitEventDateTimes = companies.map(
    ({ predictedExitEventDate }) => predictedExitEventDate.getTime()
  );
  const finalVestingDateTimes = companies.flatMap(({ allocations }) =>
    allocations.map(({ vestingCommencement, vestingPeriodMonths }) =>
      new Date(
        vestingCommencement.getFullYear(),
        vestingCommencement.getMonth() + vestingPeriodMonths
      ).getTime()
    )
  );

  const latestDate = new Date(
    Math.max(...predictedExitEventDateTimes, ...finalVestingDateTimes)
  );
  latestDate.setMonth(latestDate.getMonth() + bufferMonths);
  return latestDate;
};

const createAddToMonthlyCalculation = (timeSeries: CalculatedTimeSeries) => {
  // An index of the time series by its date as an ISO string
  const timeSeriesIndex: Record<string, number> = timeSeries.reduce(
    (acc, [date], i) => ({ ...acc, [date.toISOString()]: i }),
    {}
  );
  return (
    date: Date,
    companyIndex: number,
    allocationIndex: number,
    vestingShareOptions: number,
    grossGain: PredictedDataPoint
  ) => {
    const calculatedTimeSeriesIndex =
      timeSeriesIndex[monthStart(date).toISOString()];

    timeSeries[calculatedTimeSeriesIndex][1].companyAllocationGrossGains[
      companyIndex
    ].allocations[allocationIndex].vestingShareOptions += vestingShareOptions;

    addToPredictedDataPoint(
      timeSeries[calculatedTimeSeriesIndex][1].companyAllocationGrossGains[
        companyIndex
      ].allocations[allocationIndex].grossGain,
      grossGain
    );
  };
};

export interface CalculateOptions {
  latestTimeseriesDateBufferMonths?: number;
  outputDecimalPlaces?: number;
}

const DEFAULT_CALCULATE_OPTIONS = {
  latestTimeseriesDateBufferMonths: 0,
  outputDecimalPlaces: 2,
} as const;

export const calculate = (
  calculatorInput: CalculatorInput,
  options: CalculateOptions = DEFAULT_CALCULATE_OPTIONS
): CalculatorOutput => {
  const { companies, taxationConfig } = calculatorInput;
  const {
    latestTimeseriesDateBufferMonths = DEFAULT_CALCULATE_OPTIONS.latestTimeseriesDateBufferMonths,
    outputDecimalPlaces = DEFAULT_CALCULATE_OPTIONS.outputDecimalPlaces,
  } = options;

  const totals = {
    grossGain: { low: 0, medium: 0, high: 0 },
    netGain: { low: 0, medium: 0, high: 0 },
    incomeTaxPayable: { low: 0, medium: 0, high: 0 },
    employeeNationalInsurancePayable: { low: 0, medium: 0, high: 0 },
    capitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
    studentLoanRepaymentsPayable: { low: 0, medium: 0, high: 0 },
  };

  // Return empty time series if there are no share allocations
  if (!companies.some(({ allocations }) => allocations.length > 0)) {
    return { timeSeries: [], totals };
  }

  // Initialise the time series.
  const earliestTimeseriesDate = getEarliestTimeSeriesDate(calculatorInput);
  const latestTimeseriesDate = getLatestTimeSeriesDate(
    calculatorInput,
    latestTimeseriesDateBufferMonths
  );
  const companiesAllocationsShareSchemes: ShareScheme[][] = companies.map(
    ({ allocations }) => allocations.map(({ shareScheme }) => shareScheme)
  );
  const timeSeries: CalculatedTimeSeries = initialiseTimeSeries(
    earliestTimeseriesDate,
    latestTimeseriesDate,
    companiesAllocationsShareSchemes
  );

  const addToMonthlyCalculation = createAddToMonthlyCalculation(timeSeries);

  // Add all allocations' gross gains per month to the time series
  companies.forEach(
    (
      {
        allocations,
        leavingDate,
        predictedExitEventDate,
        predictedExitEventSharePriceLow,
        predictedExitEventSharePriceMedium,
        predictedExitEventSharePriceHigh,
      },
      companyIndex
    ) => {
      allocations.forEach(
        (
          {
            vestingCommencement,
            totalOptions,
            expiry,
            optionsImmediateVesting,
            optionsVestingAtExit,
            vestingCliffMonths,
            vestingPeriodMonths,
            strikePrice,
          },
          allocationIndex
        ) => {
          const expired = predictedExitEventDate > expiry;

          const lowGrossGainPerOption = expired
            ? 0
            : Math.max(predictedExitEventSharePriceLow - strikePrice, 0);
          const mediumGrossGainPerOption = expired
            ? 0
            : Math.max(predictedExitEventSharePriceMedium - strikePrice, 0);
          const highGrossGainPerOption = expired
            ? 0
            : Math.max(predictedExitEventSharePriceHigh - strikePrice, 0);

          // Immediately-vesting options
          if (optionsImmediateVesting > 0) {
            addToMonthlyCalculation(
              vestingCommencement,
              companyIndex,
              allocationIndex,
              optionsImmediateVesting,
              {
                low: lowGrossGainPerOption * optionsImmediateVesting,
                medium: mediumGrossGainPerOption * optionsImmediateVesting,
                high: highGrossGainPerOption * optionsImmediateVesting,
              }
            );
          }

          // Options vesting at exit
          if (
            (!leavingDate || predictedExitEventDate <= leavingDate) &&
            optionsVestingAtExit > 0
          ) {
            addToMonthlyCalculation(
              predictedExitEventDate,
              companyIndex,
              allocationIndex,
              optionsVestingAtExit,
              {
                low: lowGrossGainPerOption * optionsVestingAtExit,
                medium: mediumGrossGainPerOption * optionsVestingAtExit,
                high: highGrossGainPerOption * optionsVestingAtExit,
              }
            );
          }

          // Options vesting during tenure
          const optionsVestingPerMonth = Math.round(
            (totalOptions - optionsImmediateVesting - optionsVestingAtExit) /
              vestingPeriodMonths
          );

          // Cliff
          const cliffVestingMonth = new Date(
            vestingCommencement.getFullYear(),
            vestingCommencement.getMonth() + vestingCliffMonths
          );
          if (!leavingDate || cliffVestingMonth > leavingDate) {
            const cliffVestingShareOptions =
              optionsVestingPerMonth * vestingCliffMonths;
            addToMonthlyCalculation(
              cliffVestingMonth,
              companyIndex,
              allocationIndex,
              cliffVestingShareOptions,
              {
                low: lowGrossGainPerOption * cliffVestingShareOptions,
                medium: mediumGrossGainPerOption * cliffVestingShareOptions,
                high: highGrossGainPerOption * cliffVestingShareOptions,
              }
            );
          }

          // After cliff
          const monthlyGrossGain: PredictedDataPoint = {
            low: lowGrossGainPerOption * optionsVestingPerMonth,
            medium: mediumGrossGainPerOption * optionsVestingPerMonth,
            high: highGrossGainPerOption * optionsVestingPerMonth,
          };
          for (
            let fullMonthsVested = vestingCliffMonths + 1;
            fullMonthsVested <= vestingPeriodMonths;
            fullMonthsVested++
          ) {
            const vestingMonth = new Date(
              vestingCommencement.getFullYear(),
              vestingCommencement.getMonth() + fullMonthsVested
            );

            if (leavingDate && vestingMonth > leavingDate) {
              break;
            }

            addToMonthlyCalculation(
              vestingMonth,
              companyIndex,
              allocationIndex,
              optionsVestingPerMonth,
              monthlyGrossGain
            );
          }
        }
      );
    }
  );

  // Calculate gross totals per month
  timeSeries.forEach(([, calculatedDataPoint]) => {
    calculatedDataPoint.companyAllocationGrossGains.forEach(
      ({ allocations }) => {
        allocations.forEach(({ grossGain, shareScheme }) => {
          addToPredictedDataPoint(
            calculatedDataPoint.totalGrossGainByShareScheme[shareScheme],
            grossGain
          );
          addToPredictedDataPoint(
            calculatedDataPoint.totalGrossGain,
            grossGain
          );
        });
      }
    );
  });

  // Calculate gross cumulative values per month
  timeSeries.forEach(([, calculatedDataPoint], i) => {
    SHARE_SCHEMES.forEach((shareScheme) => {
      addToPredictedDataPoint(
        calculatedDataPoint.cumulativeGrossGainByShareScheme[shareScheme],
        calculatedDataPoint.totalGrossGainByShareScheme[shareScheme]
      );

      if (timeSeries[i - 1]) {
        addToPredictedDataPoint(
          calculatedDataPoint.cumulativeGrossGainByShareScheme[shareScheme],
          timeSeries[i - 1][1].cumulativeGrossGainByShareScheme[shareScheme]
        );
      }
    });

    addToPredictedDataPoint(
      calculatedDataPoint.cumulativeGrossGain,
      calculatedDataPoint.totalGrossGain
    );
    if (timeSeries[i - 1]) {
      addToPredictedDataPoint(
        calculatedDataPoint.cumulativeGrossGain,
        timeSeries[i - 1][1].cumulativeGrossGain
      );
    }
  });

  // Calculate deductions and net cumulative values per month
  timeSeries.forEach(([, calculatedDataPoint]) => {
    SHARE_SCHEMES.forEach((shareScheme) => {
      PREDICTION_LEVELS.forEach((predictionLevel) => {
        const {
          incomeTaxPayable,
          employeeNationalInsurancePayable,
          capitalGainsTaxPayable,
          studentLoanRepaymentsPayable,
        } = calculateDeductionsForShareScheme[shareScheme](
          calculatedDataPoint.cumulativeGrossGainByShareScheme[shareScheme][
            predictionLevel
          ],
          taxationConfig
        );

        calculatedDataPoint.cumulativeIncomeTaxPayable[predictionLevel] +=
          incomeTaxPayable;
        calculatedDataPoint.cumulativeEmployeeNationalInsurancePayable[
          predictionLevel
        ] += employeeNationalInsurancePayable;
        calculatedDataPoint.cumulativeCapitalGainsTaxPayable[predictionLevel] +=
          capitalGainsTaxPayable;
        calculatedDataPoint.cumulativeStudentLoanRepaymentsPayable[
          predictionLevel
        ] += studentLoanRepaymentsPayable;
      });
    });

    PREDICTION_LEVELS.forEach((predictionLevel) => {
      calculatedDataPoint.cumulativeNetGain[predictionLevel] =
        calculatedDataPoint.cumulativeGrossGain[predictionLevel] -
        calculatedDataPoint.cumulativeIncomeTaxPayable[predictionLevel] -
        calculatedDataPoint.cumulativeEmployeeNationalInsurancePayable[
          predictionLevel
        ] -
        calculatedDataPoint.cumulativeCapitalGainsTaxPayable[predictionLevel] -
        calculatedDataPoint.cumulativeStudentLoanRepaymentsPayable[
          predictionLevel
        ];
    });
  });

  // Calculate annual gross gains
  timeSeries.forEach(([, calculatedDataPoint], i) => {
    for (let month = 1; month <= 12; month++) {
      if (timeSeries[i + month]) {
        SHARE_SCHEMES.forEach((shareScheme) => {
          addToPredictedDataPoint(
            calculatedDataPoint.annualGrossGainByShareScheme[shareScheme],
            timeSeries[i + month][1].totalGrossGainByShareScheme[shareScheme]
          );
        });

        addToPredictedDataPoint(
          calculatedDataPoint.annualGrossGain,
          timeSeries[i + month][1].totalGrossGain
        );
      }
    }
  });

  // Calculate annual net gains
  timeSeries.forEach(([, calculatedDataPoint], i) => {
    if (timeSeries[i + 12]) {
      PREDICTION_LEVELS.forEach((predictionLevel) => {
        calculatedDataPoint.annualNetGain[predictionLevel] =
          timeSeries[i + 12][1].cumulativeNetGain[predictionLevel] -
          calculatedDataPoint.cumulativeNetGain[predictionLevel];
      });
    }
  });

  return roundCalculatorOutputToDP(
    {
      timeSeries,
      totals: {
        grossGain: timeSeries[timeSeries.length - 1]?.[1]
          .cumulativeGrossGain ?? {
          low: 0,
          medium: 0,
          high: 0,
        },
        netGain: timeSeries[timeSeries.length - 1]?.[1].cumulativeNetGain ?? {
          low: 0,
          medium: 0,
          high: 0,
        },
        incomeTaxPayable: timeSeries[timeSeries.length - 1]?.[1]
          .cumulativeIncomeTaxPayable ?? { low: 0, medium: 0, high: 0 },
        employeeNationalInsurancePayable: timeSeries[timeSeries.length - 1]?.[1]
          .cumulativeEmployeeNationalInsurancePayable ?? {
          low: 0,
          medium: 0,
          high: 0,
        },
        capitalGainsTaxPayable: timeSeries[timeSeries.length - 1]?.[1]
          .cumulativeCapitalGainsTaxPayable ?? { low: 0, medium: 0, high: 0 },
        studentLoanRepaymentsPayable: timeSeries[timeSeries.length - 1]?.[1]
          .cumulativeStudentLoanRepaymentsPayable ?? {
          low: 0,
          medium: 0,
          high: 0,
        },
      },
    },
    outputDecimalPlaces
  );
};
