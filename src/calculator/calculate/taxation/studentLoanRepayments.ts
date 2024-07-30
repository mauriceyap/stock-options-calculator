import {
  StudentLoanRepaymentType,
  TAX_YEAR_CONFIGS,
  TaxYear,
} from "../../../config/tax";


export const studentLoanRepaymentsPayable = (
  grossIncome: number,
  type: StudentLoanRepaymentType,
  taxYear: TaxYear
) => {
  const { studentLoanRepayments: studentLoanRepaymentsConfig } =
    TAX_YEAR_CONFIGS[taxYear];
  const { threshold, rate } = studentLoanRepaymentsConfig[type];

  return Math.max(0, grossIncome - threshold) * rate;
};
