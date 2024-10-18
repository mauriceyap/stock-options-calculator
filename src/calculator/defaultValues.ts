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
    taxYear: "2023/24",
  },
};
