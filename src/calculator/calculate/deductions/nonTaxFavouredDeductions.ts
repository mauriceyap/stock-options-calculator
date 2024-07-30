import { TaxationConfigInput } from "../../types/inputs";

import { employeeNationalInsurancePayable } from "../taxation/employeeNationalInsurance";
import { incomeTaxPayable } from "../taxation/incomeTax";
import { studentLoanRepaymentsPayable } from "../taxation/studentLoanRepayments";

import { Deductions } from "./deductions";

export const calculateNonTaxFavouredDeductions = (
  grossGain: number,
  taxationConfig: TaxationConfigInput
): Deductions => {
  const { otherIncome, taxYear, studentRepaymentLoanTypes } = taxationConfig;

  const totalStudentLoanRepaymentsPayable = (grossIncome: number) =>
    studentRepaymentLoanTypes.reduce(
      (acc, type) =>
        acc + studentLoanRepaymentsPayable(grossIncome, type, taxYear),
      0
    );

  return {
    // Gross gains from non-tax favoured stock options are treated as taxable income and not capital gains
    capitalGainsTaxPayable: 0,

    incomeTaxPayable:
      incomeTaxPayable(otherIncome + grossGain, taxYear) -
      incomeTaxPayable(otherIncome, taxYear),
    employeeNationalInsurancePayable:
      employeeNationalInsurancePayable(otherIncome + grossGain, taxYear) -
      employeeNationalInsurancePayable(otherIncome, taxYear),
    studentLoanRepaymentsPayable:
      totalStudentLoanRepaymentsPayable(otherIncome + grossGain) -
      totalStudentLoanRepaymentsPayable(otherIncome),
  };
};
