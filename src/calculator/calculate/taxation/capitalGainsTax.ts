import { TaxYearConfig } from "../../../config/tax";

import { calculateTaxableIncome } from "./incomeTax";

const nonBADRCapitalGainsTaxPayableOnTaxableGain = (
  taxableGain: number,
  grossIncome: number,
  taxYearConfig: TaxYearConfig
) => {
  const { incomeTax: incomeTaxConfig, capitalGainsTax: capitalGainsTaxConfig } =
    taxYearConfig;

  // Higher rate taxpayer
  if (grossIncome > incomeTaxConfig.basicRateLimit) {
    return taxableGain * capitalGainsTaxConfig.higherRate;
  }

  // Basic rate taxpayer
  const otherIncome = calculateTaxableIncome(grossIncome, taxYearConfig);
  const taxableIncomeAndGains = otherIncome + taxableGain;
  const gainsTaxableAtLowerRate =
    taxableGain -
    Math.max(
      0,
      Math.max(taxableIncomeAndGains, incomeTaxConfig.basicRateLimit) -
        incomeTaxConfig.basicRateLimit
    );
  const gainsTaxableAtHigherRate = taxableGain - gainsTaxableAtLowerRate;

  return (
    capitalGainsTaxConfig.lowerRate * gainsTaxableAtLowerRate +
    capitalGainsTaxConfig.higherRate * gainsTaxableAtHigherRate
  );
};

export const nonBADRCapitalGainsTaxPayable = (
  grossGain: number,
  grossIncome: number,
  taxYearConfig: TaxYearConfig
) => {
  const { capitalGainsTax: capitalGainsTaxConfig } = taxYearConfig;

  const taxableGain = Math.max(
    0,
    grossGain - capitalGainsTaxConfig.exemptAmountLimit
  );

  return nonBADRCapitalGainsTaxPayableOnTaxableGain(
    taxableGain,
    grossIncome,
    taxYearConfig
  );
};

export const badrCapitalGainsTaxPayable = (
  grossGain: number,
  grossIncome: number,
  taxYearConfig: TaxYearConfig
) => {
  const { capitalGainsTax: capitalGainsTaxConfig } = taxYearConfig;

  const taxableGain = Math.max(
    0,
    grossGain - capitalGainsTaxConfig.exemptAmountLimit
  );

  const gainTaxableUnderBADR = Math.min(
    capitalGainsTaxConfig.businessAssetDisposalReliefLimit,
    taxableGain
  );

  const nonBADRCapitalGainsTaxPayable =
    nonBADRCapitalGainsTaxPayableOnTaxableGain(
      Math.max(0, taxableGain - gainTaxableUnderBADR),
      grossIncome,
      taxYearConfig
    );

  return (
    nonBADRCapitalGainsTaxPayable +
    gainTaxableUnderBADR * capitalGainsTaxConfig.businessAssetDisposalReliefRate
  );
};
