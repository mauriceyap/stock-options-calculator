import * as yup from "yup";

import {
  EmployeeNationalInsuranceConfig,
  IncomeTaxConfig,
  StudentLoanRepaymentTypeConfig,
  TAX_YEARS,
} from "../../config/tax";

import {
  MESSAGE_AT_LEAST_ZERO,
  MESSAGE_NO_MORE_THAN_ONE_HUNDRED_PERCENT,
} from "../validationMessages";

import {
  CustomCapitalGainsTaxConfigInput,
  CustomEmployeeNationalInsuranceConfigInput,
  CustomIncomeTaxConfigInput,
  CustomStudentLoanRepaymentTypeConfigInput,
  CustomTaxYearConfigInput,
  TaxRatesInput,
  TaxYearInput,
} from "./taxRatesInput";

const customIncomeTaxConfigSchema = yup
  .object<CustomIncomeTaxConfigInput>()
  .shape({
    personalAllowance: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the basic personal allowance."),
    personalAllowanceReductionThreshold: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the personal allowance reduction threshold."),
    personalAllowanceReductionRate: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the personal allowance reduction rate."),
    basicRatePercentage: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(100, MESSAGE_NO_MORE_THAN_ONE_HUNDRED_PERCENT)
      .required("You must enter the basic rate."),
    basicRateLimit: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the basic rate limit."),
    higherRatePercentage: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(100, MESSAGE_NO_MORE_THAN_ONE_HUNDRED_PERCENT)
      .required("You must enter the higher rate."),
    higherRateLimit: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the higher rate limit.")
      .test(
        "atLeastBasicRateLimit",
        "This must be at least the basic rate limit.",
        (value, context) =>
          value >= (context.parent as IncomeTaxConfig).basicRateLimit
      ),
    additionalRatePercentage: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(100, MESSAGE_NO_MORE_THAN_ONE_HUNDRED_PERCENT)
      .required("You must enter the additional rate."),
  });

const customEmployeeNationalInsuranceConfigSchema = yup
  .object<CustomEmployeeNationalInsuranceConfigInput>()
  .shape({
    primaryThreshold: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the primary threshold."),
    primaryRatePercentage: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(100, MESSAGE_NO_MORE_THAN_ONE_HUNDRED_PERCENT)
      .required("You must enter the primary rate."),
    upperEarningsLimit: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the upper earnings limit.")
      .test(
        "atLeastPrimaryThreshold",
        "This must be at least the primary threshold.",
        (value, context) =>
          value >=
          (context.parent as EmployeeNationalInsuranceConfig).primaryThreshold
      ),
    reducedRatePercentage: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(100, MESSAGE_NO_MORE_THAN_ONE_HUNDRED_PERCENT)
      .required("You must enter the reduced rate."),
  });

const customCapitalGainsTaxConfigSchema = yup
  .object<CustomCapitalGainsTaxConfigInput>()
  .shape({
    exemptAmountLimit: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the exempt amount limit."),
    lowerRatePercentage: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(100, MESSAGE_NO_MORE_THAN_ONE_HUNDRED_PERCENT)
      .required("You must enter the lower rate."),
    higherRatePercentage: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(100, MESSAGE_NO_MORE_THAN_ONE_HUNDRED_PERCENT)
      .required("You must enter the higher rate."),
    businessAssetDisposalReliefRatePercentage: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(100, MESSAGE_NO_MORE_THAN_ONE_HUNDRED_PERCENT)
      .required("You must enter the Business Asset Disposal Relief rate."),
    businessAssetDisposalReliefLimit: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the Business Asset Disposal Relief limit."),
  });

const customStudentLoanRepaymentPlanConfigSchema = yup
  .object<CustomStudentLoanRepaymentTypeConfigInput>()
  .shape({
    threshold: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the threshold."),
    ratePercentage: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(100, MESSAGE_NO_MORE_THAN_ONE_HUNDRED_PERCENT)
      .required("You must enter the rate."),
  });

const customStudentLoanRepaymentTypeConfigSchema = yup
  .object<StudentLoanRepaymentTypeConfig>()
  .shape({
    plan1: customStudentLoanRepaymentPlanConfigSchema.required(),
    plan2: customStudentLoanRepaymentPlanConfigSchema.required(),
    plan4: customStudentLoanRepaymentPlanConfigSchema.required(),
    plan5: customStudentLoanRepaymentPlanConfigSchema.required(),
    postgraduate: customStudentLoanRepaymentPlanConfigSchema.required(),
  });

export const customTaxYearConfigSchema = yup
  .object<CustomTaxYearConfigInput>()
  .shape({
    incomeTax: customIncomeTaxConfigSchema.required(),
    employeeNationalInsurance:
      customEmployeeNationalInsuranceConfigSchema.required(),
    capitalGainsTax: customCapitalGainsTaxConfigSchema.required(),
    studentLoanRepayments:
      customStudentLoanRepaymentTypeConfigSchema.required(),
  });

export const taxRatesInputSchema = yup.object<TaxRatesInput>().shape({
  taxYearInput: yup
    .string<TaxYearInput>()
    .oneOf([...TAX_YEARS, "custom"])
    .required(),
  customTaxYearConfig: customTaxYearConfigSchema.required(),
});
