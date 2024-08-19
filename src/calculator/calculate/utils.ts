import { SHARE_SCHEMES } from "../shareSchemes";
import { PREDICTION_LEVELS } from "../types";
import {
  CalculatedDataPoint,
  CalculatorOutput,
  PredictedDataPoint,
} from "../types/outputs";

export const monthStart = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth());

export const roundToDP = (value: number, decimalPlaces: number) =>
  Math.round(value * 10 ** decimalPlaces) / 10 ** decimalPlaces;

const roundPredictedDataPointToDP = (
  predictedDataPoint: PredictedDataPoint,
  decimalPlaces: number
): PredictedDataPoint => {
  PREDICTION_LEVELS.forEach((level) => {
    predictedDataPoint[level] = roundToDP(
      predictedDataPoint[level],
      decimalPlaces
    );
  });
  return predictedDataPoint;
};

const roundCalculatedDataPointToDP = (
  calculatedDataPoint: CalculatedDataPoint,
  decimalPlaces: number
): CalculatedDataPoint => {
  calculatedDataPoint.companyAllocationGrossGains.forEach(
    (companyAllocationGrossGain) => {
      companyAllocationGrossGain.allocations.forEach((allocation) => {
        roundPredictedDataPointToDP(allocation.grossGain, decimalPlaces);
      });
    }
  );

  SHARE_SCHEMES.forEach((k) => {
    roundPredictedDataPointToDP(
      calculatedDataPoint.totalGrossGainByShareScheme[k],
      decimalPlaces
    );
  });

  roundPredictedDataPointToDP(
    calculatedDataPoint.totalGrossGain,
    decimalPlaces
  );

  SHARE_SCHEMES.forEach((k) => {
    roundPredictedDataPointToDP(
      calculatedDataPoint.cumulativeGrossGainByShareScheme[k],
      decimalPlaces
    );
  });

  roundPredictedDataPointToDP(
    calculatedDataPoint.cumulativeGrossGain,
    decimalPlaces
  );

  roundPredictedDataPointToDP(
    calculatedDataPoint.cumulativeNetGain,
    decimalPlaces
  );

  roundPredictedDataPointToDP(
    calculatedDataPoint.cumulativeIncomeTaxPayable,
    decimalPlaces
  );

  roundPredictedDataPointToDP(
    calculatedDataPoint.cumulativeEmployeeNationalInsurancePayable,
    decimalPlaces
  );

  roundPredictedDataPointToDP(
    calculatedDataPoint.cumulativeCapitalGainsTaxPayable,
    decimalPlaces
  );

  roundPredictedDataPointToDP(
    calculatedDataPoint.cumulativeStudentLoanRepaymentsPayable,
    decimalPlaces
  );

  SHARE_SCHEMES.forEach((k) => {
    roundPredictedDataPointToDP(
      calculatedDataPoint.annualGrossGainByShareScheme[k],
      decimalPlaces
    );
  });

  roundPredictedDataPointToDP(
    calculatedDataPoint.annualGrossGain,
    decimalPlaces
  );

  roundPredictedDataPointToDP(calculatedDataPoint.annualNetGain, decimalPlaces);

  return calculatedDataPoint;
};

export const roundCalculatorOutputToDP = (
  calculatorOutput: CalculatorOutput,
  decimalPlaces: number
): CalculatorOutput => {
  calculatorOutput.timeSeries.forEach((_, i) => {
    roundCalculatedDataPointToDP(
      calculatorOutput.timeSeries[i][1],
      decimalPlaces
    );
  });

  roundPredictedDataPointToDP(calculatorOutput.totals.grossGain, decimalPlaces);
  roundPredictedDataPointToDP(calculatorOutput.totals.netGain, decimalPlaces);
  roundPredictedDataPointToDP(
    calculatorOutput.totals.incomeTaxPayable,
    decimalPlaces
  );
  roundPredictedDataPointToDP(
    calculatorOutput.totals.employeeNationalInsurancePayable,
    decimalPlaces
  );
  roundPredictedDataPointToDP(
    calculatorOutput.totals.capitalGainsTaxPayable,
    decimalPlaces
  );
  roundPredictedDataPointToDP(
    calculatorOutput.totals.studentLoanRepaymentsPayable,
    decimalPlaces
  );

  return calculatorOutput;
};

export const addToPredictedDataPoint = (
  base: PredictedDataPoint,
  toAdd: PredictedDataPoint
): PredictedDataPoint => {
  PREDICTION_LEVELS.forEach((level) => {
    base[level] += toAdd[level];
  });
  return base;
};
