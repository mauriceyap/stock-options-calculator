/**
 * This configures parameters relating to tax for the different tax years this
 * app supports. These values are for the UK except Scotland.
 *
 * TODO: support Scottish income tax parameters.
 */

export const TAX_YEARS = ["2023/24", "2022/23"] as const;
export type TaxYear = (typeof TAX_YEARS)[number];

export const STUDENT_LOAN_REPAYMENT_TYPES = [
  "plan1",
  "plan2",
  "plan4",
  "plan5",
  "postgraduate",
] as const;
export type StudentLoanRepaymentType =
  (typeof STUDENT_LOAN_REPAYMENT_TYPES)[number];

export interface IncomeTaxConfig {
  personalAllowance: number;
  personalAllowanceReductionThreshold: number;
  personalAllowanceReductionRate: number;

  basicRate: number;
  basicRateLimit: number;

  higherRate: number;
  higherRateLimit: number;

  additionalRate: number;
}

// These values are annualised - we assume the user's income has been earned at
// the same monthly rate through the year
export interface EmployeeNationalInsuranceConfig {
  primaryThreshold: number;
  primaryRate: number;

  upperEarningsLimit: number;
  reducedRate: number;
}

export interface CapitalGainsTaxConfig {
  exemptAmountLimit: number;
  lowerRate: number;
  higherRate: number;
  businessAssetDisposalReliefRate: number;
  businessAssetDisposalReliefLimit: number;
}

export interface StudentLoanRepaymentTypeConfig {
  threshold: number;
  rate: number;
}

export interface TaxYearConfig {
  incomeTax: IncomeTaxConfig;
  employeeNationalInsurance: EmployeeNationalInsuranceConfig;
  capitalGainsTax: CapitalGainsTaxConfig;
  studentLoanRepayments: Record<
    StudentLoanRepaymentType,
    StudentLoanRepaymentTypeConfig
  >;
}

// Sources:
// https://www.gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past
// https://www.gov.uk/government/publications/rates-and-allowances-national-insurance-contributions/rates-and-allowances-national-insurance-contributions
// https://www.gov.uk/guidance/capital-gains-tax-rates-and-allowances
// https://www.gov.uk/guidance/previous-annual-repayment-thresholds
// https://www.gov.uk/government/publications/entrepreneurs-relief-hs275-self-assessment-helpsheet/hs275-business-asset-disposal-relief-2021
// https://www.gov.uk/repaying-your-student-loan/what-you-pay
export const TAX_YEAR_CONFIGS: Record<TaxYear, TaxYearConfig> = {
  "2023/24": {
    incomeTax: {
      personalAllowance: 12570,
      personalAllowanceReductionThreshold: 100000,
      personalAllowanceReductionRate: 2,

      basicRate: 0.2,
      basicRateLimit: 37700,

      higherRate: 0.4,
      higherRateLimit: 125140,

      additionalRate: 0.45,
    },
    employeeNationalInsurance: {
      primaryThreshold: 1048 * 12,
      primaryRate: 0.1,

      upperEarningsLimit: 4189 * 12,
      reducedRate: 0.02,
    },
    capitalGainsTax: {
      exemptAmountLimit: 6000,
      lowerRate: 0.1,
      higherRate: 0.2,
      businessAssetDisposalReliefRate: 0.1,
      businessAssetDisposalReliefLimit: 1000000,
    },
    studentLoanRepayments: {
      plan1: {
        threshold: 22015,
        rate: 0.09,
      },
      plan2: {
        threshold: 27295,
        rate: 0.09,
      },
      plan4: {
        threshold: 27660,
        rate: 0.09,
      },
      plan5: {
        threshold: 25000,
        rate: 0.09,
      },
      postgraduate: {
        threshold: 21000,
        rate: 0.06,
      },
    },
  },

  "2022/23": {
    incomeTax: {
      personalAllowance: 12570,
      personalAllowanceReductionThreshold: 100000,
      personalAllowanceReductionRate: 2,

      basicRate: 0.2,
      basicRateLimit: 37700,

      higherRate: 0.4,
      higherRateLimit: 150000,

      additionalRate: 0.45,
    },
    employeeNationalInsurance: {
      primaryThreshold: 242 * 52,
      primaryRate: 0.12,

      upperEarningsLimit: 967 * 52,
      reducedRate: 0.02,
    },
    capitalGainsTax: {
      exemptAmountLimit: 12300,
      lowerRate: 0.1,
      higherRate: 0.2,
      businessAssetDisposalReliefRate: 0.1,
      businessAssetDisposalReliefLimit: 1000000,
    },
    studentLoanRepayments: {
      plan1: {
        threshold: 20195,
        rate: 0.09,
      },
      plan2: {
        threshold: 27295,
        rate: 0.09,
      },
      plan4: {
        threshold: 27660,
        rate: 0.09,
      },
      plan5: {
        threshold: 25000,
        rate: 0.09,
      },
      postgraduate: {
        threshold: 21000,
        rate: 0.06,
      },
    },
  },
};
