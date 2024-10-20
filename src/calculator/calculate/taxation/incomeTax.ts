import { TaxYearConfig } from "../../../config/tax";

export const calculateTaxableIncome = (
  grossIncome: number,
  taxYearConfig: TaxYearConfig
) => {
  const { incomeTax: incomeTaxConfig } = taxYearConfig;

  const personalAllowance =
    grossIncome <= incomeTaxConfig.personalAllowanceReductionThreshold
      ? incomeTaxConfig.personalAllowance
      : incomeTaxConfig.personalAllowance -
        Math.min(
          incomeTaxConfig.personalAllowance,
          (grossIncome - incomeTaxConfig.personalAllowanceReductionThreshold) /
            incomeTaxConfig.personalAllowanceReductionRate
        );

  return Math.max(0, grossIncome - personalAllowance);
};

export const incomeTaxPayable = (
  grossIncome: number,
  taxYearConfig: TaxYearConfig
) => {
  const { incomeTax: incomeTaxConfig } = taxYearConfig;

  const taxableIncome = calculateTaxableIncome(grossIncome, taxYearConfig);

  const taxableAtBasicRate = Math.min(
    taxableIncome,
    incomeTaxConfig.basicRateLimit
  );
  const taxableAtHigherRate = Math.max(
    0,
    Math.min(taxableIncome, incomeTaxConfig.higherRateLimit) -
      incomeTaxConfig.basicRateLimit
  );
  const taxableAtAdditionalRate = Math.max(
    0,
    taxableIncome - incomeTaxConfig.higherRateLimit
  );

  return (
    incomeTaxConfig.basicRate * taxableAtBasicRate +
    incomeTaxConfig.higherRate * taxableAtHigherRate +
    incomeTaxConfig.additionalRate * taxableAtAdditionalRate
  );
};
