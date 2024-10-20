import { TAX_YEAR_CONFIGS } from "../../config/tax";

import { CalculatorInput } from "../types/inputs";
import { CalculatorOutput } from "../types/outputs";

export const emptyInput: CalculatorInput = {
  taxationConfig: {
    otherIncome: 0,
    taxYearConfig: TAX_YEAR_CONFIGS["2023/24"],
    studentRepaymentLoanTypes: {
      plan1: false,
      plan2: false,
      plan4: false,
      plan5: false,
      postgraduate: false,
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
