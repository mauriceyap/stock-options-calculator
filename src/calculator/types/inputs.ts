import { StudentLoanRepaymentType, TaxYear } from "../../config/tax";

import { ShareScheme } from "../shareSchemes";

// An allocation of employee stock options from a company
export interface AllocationInput {
  // The date on which vesting of these stock options began
  vestingCommencement: Date;
  // The total number of share options in this allocation
  totalOptions: number;
  // The final date on which this allocation of stock options can be exercised
  expiry: Date;
  // The number of share options which vest immediately on allocation
  optionsImmediateVesting: number;
  // The number of share options which vest at an exit event for the company
  optionsVestingAtExit: number;
  // The number of months over which other share options (i.e. those not vesting
  // immediately or at an exit event) regularly vest
  vestingPeriodMonths: number;
  // The number of months before which must pass after the vesting commencement
  // date before shares begin to vest
  vestingCliffMonths: number;
  // The price at which the option allows the holder to buy (i.e. exercise) a
  // share
  strikePrice: number;
  // The employee share scheme for this allocation
  shareScheme: ShareScheme;
}

// A company in which the user has been allocated stock options
export interface CompanyInput {
  // The name, or nickname, of the company (used for display purposes only)
  name: string;
  // The stock option allocations for this company
  allocations: AllocationInput[];
  // The date on which the user left this company, and so stock options stopped
  // vesting
  leavingDate: Date | null;
  // The date on which the user predicts the exit event for the company will
  // occur
  predictedExitEventDate: Date;
  // A low estimate for the share price of the company at the exit event
  predictedExitEventSharePriceLow: number;
  // A medium estimate for the share price of the company at the exit event
  predictedExitEventSharePriceMedium: number;
  // A high estimate for the share price of the company at the exit event
  predictedExitEventSharePriceHigh: number;
}

// Configuration for the user's tax status at the time of exercising their stock
// options
export interface TaxationConfigInput {
  // Taxable income the user expects to have at the time of exercising stock
  // options
  otherIncome: number;
  // The types of student loan which the user expects to be repaying at the
  // time of exercising stock options
  studentRepaymentLoanTypes: StudentLoanRepaymentType[];
  // The tax year for the rates to use for calculating deduction amounts and net
  // gains
  taxYear: TaxYear;
}

export interface CalculatorInput {
  // A list of companies from which the user has allocations of stock options
  companyAllocationGrossGains: CompanyInput[];
  // Configuration for the user's tax status at the time of exercising their
  // stock options
  taxationConfig: TaxationConfigInput;
}
