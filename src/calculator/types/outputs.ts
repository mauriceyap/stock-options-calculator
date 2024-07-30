import { ShareScheme } from "../shareSchemes";

// A data point for the user's low, medium and high estimates
export interface PredictedDataPoint {
  low: number;
  medium: number;
  high: number;
}

// The calculated gross gains of an allocation of stock options for a particular
// calendar month
export interface CalculatedAllocationGrossGains {
  // The number of vested share options from which the gross gains are
  // calculated
  vestingShareOptions: number;
  // The amount of gain for this allocation, before deductions, in GBP
  grossGain: PredictedDataPoint;
  // The employee share scheme of this allocation
  shareScheme: ShareScheme;
}

// The calculated gross gains of all allocations of stock options from a company
// for a particular calendar month
export interface CalculatedCompanyGrossGains {
  allocations: CalculatedAllocationGrossGains[];
}

// A data point for a particular calendar month in which some stock options may
// vest
export interface CalculatedDataPoint {
  // The gross gains for each allocation of stock options in each company
  companyAllocationGrossGains: CalculatedCompanyGrossGains[];
  // The total gross gain for this calendar month per share scheme; this is
  // useful for calculating deductions as they are different for different
  // schemes
  totalGrossGainByShareScheme: Record<ShareScheme, PredictedDataPoint>;
  // The total gross gain of all vesting stock options in this calendar month
  totalGrossGain: PredictedDataPoint;
  // The cumulative gross gain of all vested stock options up to and including
  // this calendar month per share scheme
  cumulativeGrossGainByShareScheme: Record<ShareScheme, PredictedDataPoint>;
  // The cumulative gross gain of all vested stock options up to and including
  // this calendar month
  cumulativeGrossGain: PredictedDataPoint;
  // The cumulative net gain of all vested stock options up to and including
  // this calendar month
  cumulativeNetGain: PredictedDataPoint;
  // The cumulative amount of income tax payable for all vested stock options up
  // to and including this calendar month
  cumulativeIncomeTaxPayable: PredictedDataPoint;
  // The cumulative amount of employee National Insurance contributions payable
  // for all vested stock options up to and including this calendar month
  cumulativeEmployeeNationalInsurancePayable: PredictedDataPoint;
  // The cumulative amount of capital gains tax payable for all vested stock
  // options up to and including this calendar month
  cumulativeCapitalGainsTaxPayable: PredictedDataPoint;
  // The cumulative amount of student loan contributions for all vested stock
  // options up to and including this calendar month
  cumulativeStudentLoanRepaymentsPayable: PredictedDataPoint;
  // The gross gain of all stock options vesting in the 12 months immediately
  // proceeding this calendar month per share scheme
  annualGrossGainByShareScheme: Record<ShareScheme, PredictedDataPoint>;
  // The gross gain of all stock options vesting in the 12 months immediately
  // proceeding this calendar month
  annualGrossGain: PredictedDataPoint;
  // The net gain of all stock options vesting in the 12 months immediately
  // proceeding this calendar month
  annualNetGain: PredictedDataPoint;
}

// A time series of data point calculations for the stock options vesting in
// each calendar month; the first element is the start of the month and the
// second is the data point
export type CalculatedTimeSeries = [Date, CalculatedDataPoint][];

export interface CalculatedTotals {
  // The total gross gain of all stock options which will vest, or have vested
  grossGain: PredictedDataPoint;
  // The net gross gain of all stock options which will vest, or have vested
  netGain: PredictedDataPoint;
  // The total income tax payable on all stock options which will vest, or have
  // vested
  incomeTaxPayable: PredictedDataPoint;
  // The total employee National Insurance contributions payable on all stock
  // options which will vest, or have vested
  employeeNationalInsurancePayable: PredictedDataPoint;
  // The total capital gains tax payable on all stock options which will vest,
  // or have vested
  capitalGainsTaxPayable: PredictedDataPoint;
  // The total student loan repayments payable on all stock options which will
  // vest, or have vested
  studentLoanRepaymentsPayable: PredictedDataPoint;
}

export interface CalculatorOutput {
  // A monthly time series of data points
  timeSeries: CalculatedTimeSeries;
  // Total amounts for all stock options which will vest, or have vested
  totals: CalculatedTotals;
}
