import * as yup from "yup";

import {
  CapitalGainsTaxConfig,
  EmployeeNationalInsuranceConfig,
  IncomeTaxConfig,
  StudentLoanRepaymentTypeConfig,
  TAX_YEARS,
  TaxYearConfig,
} from "../../config/tax";

import {
  MESSAGE_AT_LEAST_ZERO,
  MESSAGE_NO_MORE_THAN_ONE,
} from "../validationMessages";

import { TaxRatesInput, TaxYearInput } from "./taxRatesInput";

const customIncomeTaxConfigSchema = yup.object<IncomeTaxConfig>().shape({
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
    .max(1, MESSAGE_NO_MORE_THAN_ONE)
    .required("You must enter the personal allowance reduction rate."),
  basicRate: yup
    .number()
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .max(1, MESSAGE_NO_MORE_THAN_ONE)
    .required("You must enter the basic rate."),
  basicRateLimit: yup
    .number()
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .required("You must enter the basic rate limit."),
  higherRate: yup
    .number()
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .max(1, MESSAGE_NO_MORE_THAN_ONE)
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
  additionalRate: yup
    .number()
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .max(1, MESSAGE_NO_MORE_THAN_ONE)
    .required("You must enter the additional rate."),
});

const customEmployeeNationalInsuranceConfigSchema = yup
  .object<EmployeeNationalInsuranceConfig>()
  .shape({
    primaryThreshold: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the primary threshold."),
    primaryRate: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(1, MESSAGE_NO_MORE_THAN_ONE)
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
    reducedRate: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(1, MESSAGE_NO_MORE_THAN_ONE)
      .required("You must enter the reduced rate."),
  });

const customCapitalGainsTaxConfigSchema = yup
  .object<CapitalGainsTaxConfig>()
  .shape({
    exemptAmountLimit: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the exempt amount limit."),
    lowerRate: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(1, MESSAGE_NO_MORE_THAN_ONE)
      .required("You must enter the lower rate."),
    higherRate: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(1, MESSAGE_NO_MORE_THAN_ONE)
      .required("You must enter the higher rate."),
    businessAssetDisposalReliefRate: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(1, MESSAGE_NO_MORE_THAN_ONE)
      .required("You must enter the Business Asset Disposal Relief rate."),
    businessAssetDisposalReliefLimit: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the Business Asset Disposal Relief limit."),
  });

const customStudentLoanRepaymentPlanConfigSchema = yup
  .object<StudentLoanRepaymentTypeConfig>()
  .shape({
    threshold: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter the threshold."),
    rate: yup
      .number()
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .max(1, MESSAGE_NO_MORE_THAN_ONE)
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

export const customTaxYearConfigSchema = yup.object<TaxYearConfig>().shape({
  incomeTax: customIncomeTaxConfigSchema.required(),
  employeeNationalInsurance:
    customEmployeeNationalInsuranceConfigSchema.required(),
  capitalGainsTax: customCapitalGainsTaxConfigSchema.required(),
  studentLoanRepayments: customStudentLoanRepaymentTypeConfigSchema.required(),
});

export const taxRatesInputSchema = yup.object<TaxRatesInput>().shape({
  taxYearInput: yup
    .string<TaxYearInput>()
    .oneOf([...TAX_YEARS, "custom"])
    .required(),
  customTaxYearConfig: customTaxYearConfigSchema.required(),
});
