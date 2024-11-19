import {
  CapitalGainsTaxConfig,
  EmployeeNationalInsuranceConfig,
  IncomeTaxConfig,
  STUDENT_LOAN_REPAYMENT_TYPES,
  StudentLoanRepaymentType,
  StudentLoanRepaymentTypeConfig,
  TaxYear,
  TaxYearConfig,
} from "../../config/tax";

export type TaxYearInput = TaxYear | "custom";

export interface CustomStudentLoanRepaymentTypeConfigInput
  extends Omit<StudentLoanRepaymentTypeConfig, "rate"> {
  ratePercentage: number;
}

export interface CustomCapitalGainsTaxConfigInput
  extends Omit<
    CapitalGainsTaxConfig,
    "lowerRate" | "higherRate" | "businessAssetDisposalReliefRate"
  > {
  lowerRatePercentage: number;
  higherRatePercentage: number;
  businessAssetDisposalReliefRatePercentage: number;
}

export interface CustomEmployeeNationalInsuranceConfigInput
  extends Omit<EmployeeNationalInsuranceConfig, "primaryRate" | "reducedRate"> {
  primaryRatePercentage: number;
  reducedRatePercentage: number;
}

export interface CustomIncomeTaxConfigInput
  extends Omit<IncomeTaxConfig, "basicRate" | "higherRate" | "additionalRate"> {
  basicRatePercentage: number;
  higherRatePercentage: number;
  additionalRatePercentage: number;
}

export interface CustomTaxYearConfigInput {
  incomeTax: CustomIncomeTaxConfigInput;
  employeeNationalInsurance: CustomEmployeeNationalInsuranceConfigInput;
  capitalGainsTax: CustomCapitalGainsTaxConfigInput;
  studentLoanRepayments: Record<
    StudentLoanRepaymentType,
    CustomStudentLoanRepaymentTypeConfigInput
  >;
}

export const customTaxYearConfigInputToTaxYearConfig = (
  customConfigInput: CustomTaxYearConfigInput
): TaxYearConfig => ({
  incomeTax: {
    personalAllowance: customConfigInput.incomeTax.personalAllowance,
    personalAllowanceReductionThreshold:
      customConfigInput.incomeTax.personalAllowanceReductionThreshold,
    personalAllowanceReductionRate:
      customConfigInput.incomeTax.personalAllowanceReductionRate,
    basicRate: customConfigInput.incomeTax.basicRatePercentage / 100,
    basicRateLimit: customConfigInput.incomeTax.basicRateLimit,
    higherRate: customConfigInput.incomeTax.higherRatePercentage / 100,
    higherRateLimit: customConfigInput.incomeTax.higherRateLimit,
    additionalRate: customConfigInput.incomeTax.additionalRatePercentage / 100,
  },
  employeeNationalInsurance: {
    primaryThreshold:
      customConfigInput.employeeNationalInsurance.primaryThreshold,
    primaryRate:
      customConfigInput.employeeNationalInsurance.primaryRatePercentage / 100,
    upperEarningsLimit:
      customConfigInput.employeeNationalInsurance.upperEarningsLimit,
    reducedRate:
      customConfigInput.employeeNationalInsurance.reducedRatePercentage / 100,
  },
  capitalGainsTax: {
    exemptAmountLimit: customConfigInput.capitalGainsTax.exemptAmountLimit,
    lowerRate: customConfigInput.capitalGainsTax.lowerRatePercentage / 100,
    higherRate: customConfigInput.capitalGainsTax.higherRatePercentage / 100,
    businessAssetDisposalReliefRate:
      customConfigInput.capitalGainsTax
        .businessAssetDisposalReliefRatePercentage / 100,
    businessAssetDisposalReliefLimit:
      customConfigInput.capitalGainsTax.businessAssetDisposalReliefLimit,
  },
  studentLoanRepayments: STUDENT_LOAN_REPAYMENT_TYPES.reduce(
    (acc, repaymentType) => ({
      ...acc,
      [repaymentType]: {
        threshold:
          customConfigInput.studentLoanRepayments[repaymentType].threshold,
        rate:
          customConfigInput.studentLoanRepayments[repaymentType]
            .ratePercentage / 100,
      },
    }),
    // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
    {} as Record<StudentLoanRepaymentType, StudentLoanRepaymentTypeConfig>
  ),
});

export const taxYearConfigInputToCustomTaxYearConfig = (
  taxYearConfig: TaxYearConfig
): CustomTaxYearConfigInput => ({
  incomeTax: {
    personalAllowance: taxYearConfig.incomeTax.personalAllowance,
    personalAllowanceReductionThreshold:
      taxYearConfig.incomeTax.personalAllowanceReductionThreshold,
    personalAllowanceReductionRate:
      taxYearConfig.incomeTax.personalAllowanceReductionRate * 100,
    basicRatePercentage: taxYearConfig.incomeTax.basicRate * 100,
    basicRateLimit: taxYearConfig.incomeTax.basicRateLimit,
    higherRatePercentage: taxYearConfig.incomeTax.higherRate * 100,
    higherRateLimit: taxYearConfig.incomeTax.higherRateLimit,
    additionalRatePercentage: taxYearConfig.incomeTax.additionalRate * 100,
  },
  employeeNationalInsurance: {
    primaryThreshold: taxYearConfig.employeeNationalInsurance.primaryThreshold,
    primaryRatePercentage:
      taxYearConfig.employeeNationalInsurance.primaryRate * 100,
    upperEarningsLimit:
      taxYearConfig.employeeNationalInsurance.upperEarningsLimit,
    reducedRatePercentage:
      taxYearConfig.employeeNationalInsurance.reducedRate * 100,
  },
  capitalGainsTax: {
    exemptAmountLimit: taxYearConfig.capitalGainsTax.exemptAmountLimit,
    lowerRatePercentage: taxYearConfig.capitalGainsTax.lowerRate * 100,
    higherRatePercentage: taxYearConfig.capitalGainsTax.higherRate * 100,
    businessAssetDisposalReliefRatePercentage:
      taxYearConfig.capitalGainsTax.businessAssetDisposalReliefRate * 100,
    businessAssetDisposalReliefLimit:
      taxYearConfig.capitalGainsTax.businessAssetDisposalReliefLimit,
  },
  studentLoanRepayments: STUDENT_LOAN_REPAYMENT_TYPES.reduce(
    (acc, repaymentType) => ({
      ...acc,
      [repaymentType]: {
        threshold: taxYearConfig.studentLoanRepayments[repaymentType].threshold,
        ratePercentage:
          taxYearConfig.studentLoanRepayments[repaymentType].rate * 100,
      },
    }),
    // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
    {} as Record<
      StudentLoanRepaymentType,
      CustomStudentLoanRepaymentTypeConfigInput
    >
  ),
});

export interface TaxRatesInput {
  taxYearInput: TaxYearInput;
  customTaxYearConfig: CustomTaxYearConfigInput;
}
