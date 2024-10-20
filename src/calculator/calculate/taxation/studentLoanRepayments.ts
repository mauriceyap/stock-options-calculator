import { StudentLoanRepaymentType, TaxYearConfig } from "../../../config/tax";

export const studentLoanRepaymentsPayable = (
  grossIncome: number,
  type: StudentLoanRepaymentType,
  taxYearConfig: TaxYearConfig
) => {
  const { studentLoanRepayments: studentLoanRepaymentsConfig } = taxYearConfig;
  const { threshold, rate } = studentLoanRepaymentsConfig[type];

  return Math.max(0, grossIncome - threshold) * rate;
};
