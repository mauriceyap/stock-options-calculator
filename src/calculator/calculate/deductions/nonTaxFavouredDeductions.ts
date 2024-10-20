import { STUDENT_LOAN_REPAYMENT_TYPES } from "../../../config/tax";

import { TaxationConfigInput } from "../../types/inputs";

import { employeeNationalInsurancePayable } from "../taxation/employeeNationalInsurance";
import { incomeTaxPayable } from "../taxation/incomeTax";
import { studentLoanRepaymentsPayable } from "../taxation/studentLoanRepayments";

import { Deductions } from "./deductions";

export const calculateNonTaxFavouredDeductions = (
  grossGain: number,
  taxationConfig: TaxationConfigInput
): Deductions => {
  const { otherIncome, taxYearConfig, studentRepaymentLoanTypes } =
    taxationConfig;

  const totalStudentLoanRepaymentsPayable = (grossIncome: number) =>
    STUDENT_LOAN_REPAYMENT_TYPES.reduce(
      (acc, repaymentType) =>
        studentRepaymentLoanTypes[repaymentType]
          ? acc +
            studentLoanRepaymentsPayable(
              grossIncome,
              repaymentType,
              taxYearConfig
            )
          : acc,
      0
    );

  return {
    // Gross gains from non-tax favoured stock options are treated as taxable income and not capital gains
    capitalGainsTaxPayable: 0,

    incomeTaxPayable:
      incomeTaxPayable(otherIncome + grossGain, taxYearConfig) -
      incomeTaxPayable(otherIncome, taxYearConfig),
    employeeNationalInsurancePayable:
      employeeNationalInsurancePayable(otherIncome + grossGain, taxYearConfig) -
      employeeNationalInsurancePayable(otherIncome, taxYearConfig),
    studentLoanRepaymentsPayable:
      totalStudentLoanRepaymentsPayable(otherIncome + grossGain) -
      totalStudentLoanRepaymentsPayable(otherIncome),
  };
};
