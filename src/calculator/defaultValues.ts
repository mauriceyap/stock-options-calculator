import {
  TAX_YEARS,
  TAX_YEAR_CONFIGS,
  TaxYear,
  TaxYearConfig,
} from "../config/tax";

import { AllocationInput, CalculatorInput, CompanyInput } from "./types/inputs";

export const now = new Date();

export const defaultCompanyLeavingDate = now;

export const defaultAllocationVestingCliffMonths = 12;

export const defaultAllocationInputValues: AllocationInput = {
  vestingCommencement: new Date(now.getFullYear() - 1, now.getMonth(), 1),
  totalOptions: 100,
  expiry: new Date(now.getFullYear() + 9, now.getMonth(), 1),
  optionsImmediateVesting: 0,
  optionsVestingAtExit: 0,
  vestingPeriodMonths: 48,
  vestingCliffMonths: defaultAllocationVestingCliffMonths,
  strikePrice: 0.02,
  shareScheme: "none",
};

export const defaultCompanyInputValues: CompanyInput = {
  name: "Your company",
  allocations: [defaultAllocationInputValues],
  leavingDate: null,
  predictedExitEventDate: new Date(now.getFullYear() + 5, now.getMonth(), 1),
  predictedExitEventSharePriceLow: 2,
  predictedExitEventSharePriceMedium: 3.5,
  predictedExitEventSharePriceHigh: 5,
};

export const defaultTaxYear: TaxYear = TAX_YEARS[0];

export const defaultValues: CalculatorInput = {
  companies: [defaultCompanyInputValues],
  taxationConfig: {
    otherIncome: 25000,
    studentRepaymentLoanTypes: {
      plan1: false,
      plan2: false,
      plan4: false,
      plan5: false,
      postgraduate: false,
    },
    taxYearConfig: TAX_YEAR_CONFIGS[defaultTaxYear],
  },
};

export const defaultCustomTaxYearConfig: TaxYearConfig = {
  incomeTax: {
    personalAllowance: 15000,
    personalAllowanceReductionThreshold: 150000,
    personalAllowanceReductionRate: 1,
    basicRate: 0.21,
    basicRateLimit: 42500,
    higherRate: 0.4,
    higherRateLimit: 160000,
    additionalRate: 0.42,
  },
  employeeNationalInsurance: {
    primaryThreshold: 15000,
    primaryRate: 0.08,
    upperEarningsLimit: 57500,
    reducedRate: 0.025,
  },
  capitalGainsTax: {
    exemptAmountLimit: 1000,
    lowerRate: 0.15,
    higherRate: 0.42,
    businessAssetDisposalReliefRate: 0.2,
    businessAssetDisposalReliefLimit: 1500000,
  },
  studentLoanRepayments: {
    plan1: {
      threshold: 25000,
      rate: 0.1,
    },
    plan2: {
      threshold: 25000,
      rate: 0.08,
    },
    plan4: {
      threshold: 25000,
      rate: 0.08,
    },
    plan5: {
      threshold: 28000,
      rate: 0.08,
    },
    postgraduate: {
      threshold: 31000,
      rate: 0.1,
    },
  },
};
