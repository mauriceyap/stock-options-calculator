import { AllocationInput, CalculatorInput, CompanyInput } from "./types/inputs";

const now = new Date();

export const defaultCompanyLeavingDate = now;

const defaultDateInPast = new Date(
  now.getFullYear() - 1,
  now.getMonth(),
  now.getDate()
);
const defaultDateInFuture = new Date(
  now.getFullYear() + 2,
  now.getMonth(),
  now.getDate()
);

export const defaultAllocationInputValues: AllocationInput = {
  vestingCommencement: defaultDateInPast,
  totalOptions: 100,
  expiry: defaultDateInFuture,
  optionsImmediateVesting: 0,
  optionsVestingAtExit: 0,
  vestingPeriodMonths: 24,
  vestingCliffMonths: 12,
  strikePrice: 0.02,
  shareScheme: "none",
};

export const defaultCompanyInputValues: CompanyInput = {
  name: "",
  allocations: [defaultAllocationInputValues],
  leavingDate: null,
  predictedExitEventDate: defaultDateInFuture,
  predictedExitEventSharePriceLow: 0,
  predictedExitEventSharePriceMedium: 0,
  predictedExitEventSharePriceHigh: 0,
};

export const defaultValues: CalculatorInput = {
  companies: [defaultCompanyInputValues],
  taxationConfig: {
    otherIncome: 0,
    studentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    taxYear: "2023/24",
  },
};
