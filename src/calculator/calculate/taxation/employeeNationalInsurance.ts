import { TAX_YEAR_CONFIGS, TaxYear } from "../../../config/tax";

export const employeeNationalInsurancePayable = (
  grossIncome: number,
  taxYear: TaxYear
) => {
  const { employeeNationalInsurance: employeeNationalInsuranceConfig } =
    TAX_YEAR_CONFIGS[taxYear];

  const payableAtPrimaryRate = Math.max(
    0,
    Math.min(grossIncome, employeeNationalInsuranceConfig.upperEarningsLimit) -
      employeeNationalInsuranceConfig.primaryThreshold
  );
  const payableAtReducedRate = Math.max(
    0,
    grossIncome - employeeNationalInsuranceConfig.upperEarningsLimit
  );

  return (
    employeeNationalInsuranceConfig.primaryRate * payableAtPrimaryRate +
    employeeNationalInsuranceConfig.reducedRate * payableAtReducedRate
  );
};
