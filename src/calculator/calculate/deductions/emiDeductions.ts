/**
 * https://www.gov.uk/tax-employee-share-schemes/enterprise-management-incentives-emis
 *
 * Gains from share options issued under the Enterprise Management Incentives (EMIs) scheme are
 * not treated as income, but rather capital gains eligible for Business Asset Disposal Relief
 * (https://www.gov.uk/business-asset-disposal-relief), so long as the share options are exercised
 * at least two years after they were issued.
 */
import { TaxationConfigInput } from "../../types/inputs";

import { badrCapitalGainsTaxPayable } from "../taxation/capitalGainsTax";

import { Deductions } from "./deductions";

export const calculateEMIDeductions = (
  grossGain: number,
  taxationConfig: TaxationConfigInput
): Deductions => {
  const { otherIncome, taxYear } = taxationConfig;
  return {
    incomeTaxPayable: 0,
    employeeNationalInsurancePayable: 0,
    capitalGainsTaxPayable: badrCapitalGainsTaxPayable(
      grossGain,
      otherIncome,
      taxYear
    ),
    studentLoanRepaymentsPayable: 0,
  };
};
