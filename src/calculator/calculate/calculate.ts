import { SHARE_SCHEMES, ShareScheme } from "../shareSchemes";
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

const OUTPUT_DECIMAL_PLACES = 2;

// The earliest time in the time series is the earliest vesting commencement.
const getEarliestTimeSeriesDate = ({
  companyAllocationGrossGains,
}: CalculatorInput) => {
  const vestingCommencementDateTimes = companyAllocationGrossGains.flatMap(
    ({ allocations }) =>
      allocations.map(({ vestingCommencement }) =>
        vestingCommencement.getTime()
      )
  );
  const earliestVestingCommencementDateTime = Math.min(
    ...vestingCommencementDateTimes
  );
  return new Date(earliestVestingCommencementDateTime);
};

// The latest times in the time series is the latest predicted exit event or final date on which
// shares vest.
const getLatestTimeSeriesDate = ({
  companyAllocationGrossGains,
}: CalculatorInput) => {
  const predictedExitEventDateTimes = companyAllocationGrossGains.map(
    ({ predictedExitEventDate }) => predictedExitEventDate.getTime()
  );
  const finalVestingDateTimes = companyAllocationGrossGains.flatMap(
    ({ allocations }) =>
      allocations.map(({ vestingCommencement, vestingPeriodMonths }) =>
        new Date(
          vestingCommencement.getFullYear(),
          vestingCommencement.getMonth() + vestingPeriodMonths
        ).getTime()
      )
  );
  return new Date(
    Math.max(...predictedExitEventDateTimes, ...finalVestingDateTimes)
  );
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

export const calculate = (
  calculatorInput: CalculatorInput
): CalculatorOutput => {
  const { companyAllocationGrossGains, taxationConfig } = calculatorInput;

  const totals = {
    grossGain: { low: 0, medium: 0, high: 0 },
    netGain: { low: 0, medium: 0, high: 0 },
    incomeTaxPayable: { low: 0, medium: 0, high: 0 },
    employeeNationalInsurancePayable: { low: 0, medium: 0, high: 0 },
    capitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
    studentLoanRepaymentsPayable: { low: 0, medium: 0, high: 0 },
  };

  // Return empty time series if there are no share allocations
  if (
    !companyAllocationGrossGains.some(
      ({ allocations }) => allocations.length > 0
    )
  ) {
    return { timeSeries: [], totals };
  }

  // Initialise the time series.
  const earliestTimeseriesDate = getEarliestTimeSeriesDate(calculatorInput);
  const latestTimeseriesDate = getLatestTimeSeriesDate(calculatorInput);
  const companiesAllocationsShareSchemes: ShareScheme[][] =
    companyAllocationGrossGains.map(({ allocations }) =>
      allocations.map(({ shareScheme }) => shareScheme)
    );
  const timeSeries: CalculatedTimeSeries = initialiseTimeSeries(
    earliestTimeseriesDate,
    latestTimeseriesDate,
    companiesAllocationsShareSchemes
  );

  const addToMonthlyCalculation = createAddToMonthlyCalculation(timeSeries);

  // Add all allocations' gross gains per month to the time series
  companyAllocationGrossGains.forEach(
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
          const lowGrossGainPerOption = Math.max(
            predictedExitEventSharePriceLow - strikePrice,
            0
          );
          const mediumGrossGainPerOption = Math.max(
            predictedExitEventSharePriceMedium - strikePrice,
            0
          );
          const highGrossGainPerOption = Math.max(
            predictedExitEventSharePriceHigh - strikePrice,
            0
          );

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
          if (predictedExitEventDate <= expiry && optionsVestingAtExit > 0) {
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
      Object.keys(calculatedDataPoint.cumulativeGrossGain).forEach((k) => {
        const predictionLevel = k as keyof PredictedDataPoint;
        const {
          incomeTaxPayable,
          employeeNationalInsurancePayable,
          capitalGainsTaxPayable,
          studentLoanRepaymentsPayable,
        } = calculateDeductionsForShareScheme[shareScheme](
          calculatedDataPoint.cumulativeGrossGain[predictionLevel],
          taxationConfig
        );

        calculatedDataPoint.cumulativeIncomeTaxPayable[predictionLevel] =
          incomeTaxPayable;
        calculatedDataPoint.cumulativeEmployeeNationalInsurancePayable[
          predictionLevel
        ] = employeeNationalInsurancePayable;
        calculatedDataPoint.cumulativeCapitalGainsTaxPayable[predictionLevel] =
          capitalGainsTaxPayable;
        calculatedDataPoint.cumulativeStudentLoanRepaymentsPayable[
          predictionLevel
        ] = studentLoanRepaymentsPayable;

        calculatedDataPoint.cumulativeNetGain[predictionLevel] =
          calculatedDataPoint.cumulativeGrossGain[predictionLevel] -
          incomeTaxPayable -
          employeeNationalInsurancePayable -
          capitalGainsTaxPayable -
          studentLoanRepaymentsPayable;
      });
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
      Object.keys(calculatedDataPoint.cumulativeGrossGain).forEach((k) => {
        const predictionLevel = k as keyof PredictedDataPoint;
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
    OUTPUT_DECIMAL_PLACES
  );
};
