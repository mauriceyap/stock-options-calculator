import { TaxYearConfig } from "../../../config/tax";

export const employeeNationalInsurancePayable = (
  grossIncome: number,
  taxYearConfig: TaxYearConfig
) => {
  const { employeeNationalInsurance: employeeNationalInsuranceConfig } =
    taxYearConfig;

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
