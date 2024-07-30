import { TAX_YEAR_CONFIGS, TaxYear } from "../../../config/tax";

import { calculateTaxableIncome } from "./incomeTax";

const nonBADRCapitalGainsTaxPayableOnTaxableGain = (
  taxableGain: number,
  grossIncome: number,
  taxYear: TaxYear
) => {
  const { incomeTax: incomeTaxConfig, capitalGainsTax: capitalGainsTaxConfig } =
    TAX_YEAR_CONFIGS[taxYear];

  // Higher rate taxpayer
  if (grossIncome > incomeTaxConfig.basicRateLimit) {
    return taxableGain * capitalGainsTaxConfig.higherRate;
  }

  // Basic rate taxpayer
  const otherIncome = calculateTaxableIncome(grossIncome, taxYear);
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
  taxYear: TaxYear
) => {
  const { capitalGainsTax: capitalGainsTaxConfig } = TAX_YEAR_CONFIGS[taxYear];

  const taxableGain = Math.max(
    0,
    grossGain - capitalGainsTaxConfig.exemptAmountLimit
  );

  return nonBADRCapitalGainsTaxPayableOnTaxableGain(
    taxableGain,
    grossIncome,
    taxYear
  );
};

export const badrCapitalGainsTaxPayable = (
  grossGain: number,
  grossIncome: number,
  taxYear: TaxYear
) => {
  const { capitalGainsTax: capitalGainsTaxConfig } = TAX_YEAR_CONFIGS[taxYear];

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
      taxYear
    );

  return (
    nonBADRCapitalGainsTaxPayable +
    gainTaxableUnderBADR * capitalGainsTaxConfig.businessAssetDisposalReliefRate
  );
};
