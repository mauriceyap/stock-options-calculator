import { CalculatorInput } from "../types/inputs";
import { CalculatorOutput } from "../types/outputs";

export const emptyInput: CalculatorInput = {
  taxationConfig: {
    otherIncome: 0,
    taxYear: "2023/24",
    studentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
  },
  companies: [],
};

export const emptyExpected: CalculatorOutput = {
  timeSeries: [],
  totals: {
    grossGain: { low: 0, medium: 0, high: 0 },
    netGain: { low: 0, medium: 0, high: 0 },
    incomeTaxPayable: { low: 0, medium: 0, high: 0 },
    employeeNationalInsurancePayable: { low: 0, medium: 0, high: 0 },
    capitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
    studentLoanRepaymentsPayable: { low: 0, medium: 0, high: 0 },
  },
};
