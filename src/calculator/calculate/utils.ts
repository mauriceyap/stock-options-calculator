import { ShareScheme } from "../shareSchemes";
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
  Object.keys(predictedDataPoint).forEach((_level) => {
    const level = _level as keyof PredictedDataPoint;
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

  Object.keys(calculatedDataPoint.totalGrossGainByShareScheme).forEach((k) => {
    roundPredictedDataPointToDP(
      calculatedDataPoint.totalGrossGainByShareScheme[k as ShareScheme],
      decimalPlaces
    );
  });

  roundPredictedDataPointToDP(
    calculatedDataPoint.totalGrossGain,
    decimalPlaces
  );

  Object.keys(calculatedDataPoint.cumulativeGrossGainByShareScheme).forEach(
    (k) => {
      roundPredictedDataPointToDP(
        calculatedDataPoint.cumulativeGrossGainByShareScheme[k as ShareScheme],
        decimalPlaces
      );
    }
  );

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

  Object.keys(calculatedDataPoint.annualGrossGainByShareScheme).forEach((k) => {
    roundPredictedDataPointToDP(
      calculatedDataPoint.annualGrossGainByShareScheme[k as ShareScheme],
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
  Object.keys(base).forEach((_level) => {
    const level = _level as keyof PredictedDataPoint;
    base[level] += toAdd[level];
  });
  return base;
};
