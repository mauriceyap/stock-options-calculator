import * as yup from "yup";

import { StudentLoanRepaymentType, TAX_YEARS, TaxYear } from "../config/tax";

import { SHARE_SCHEMES, ShareScheme } from "./shareSchemes";
import {
  AllocationInput,
  CalculatorInput,
  CompanyInput,
  TaxationConfigInput,
} from "./types/inputs";

const MESSAGE_AT_LEAST_ZERO = "This must be at least zero.";

// TODO: error messages
// TODO: validate things like leaving is after joining, high > medium > low etc.

export const taxationConfigSchema = yup.object<TaxationConfigInput>().shape({
  otherIncome: yup
    .number()
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .required("Other taxable income is required."),
  studentRepaymentLoanTypes: yup
    .object<Record<StudentLoanRepaymentType, boolean>>()
    .shape({
      "Plan 1": yup.boolean().required(),
      "Plan 2": yup.boolean().required(),
      "Plan 4": yup.boolean().required(),
      Postgraduate: yup.boolean().required(),
    })
    .required(),
  taxYear: yup.string<TaxYear>().oneOf(TAX_YEARS).required(),
});

export const allocationInputSchema = yup.object<AllocationInput>().shape({
  vestingCommencement: yup.date().required(),
  totalOptions: yup.number().min(0, MESSAGE_AT_LEAST_ZERO).required(),
  expiry: yup.date().required(),
  optionsImmediateVesting: yup
    .number()
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .required(),
  optionsVestingAtExit: yup.number().min(0, MESSAGE_AT_LEAST_ZERO).required(),
  vestingPeriodMonths: yup.number().min(0, MESSAGE_AT_LEAST_ZERO).required(),
  vestingCliffMonths: yup.number().min(0, MESSAGE_AT_LEAST_ZERO).required(),
  strikePrice: yup.number().min(0, MESSAGE_AT_LEAST_ZERO).required(),
  shareScheme: yup.string<ShareScheme>().oneOf(SHARE_SCHEMES).required(),
});

export const companyInputSchema = yup.object<CompanyInput>().shape({
  name: yup.string().required(),
  allocations: yup.array(allocationInputSchema).required(),
  leavingDate: yup.date().required().nullable(),
  predictedExitEventDate: yup.date().required(),
  predictedExitEventSharePriceLow: yup
    .number()
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .required(),
  predictedExitEventSharePriceMedium: yup
    .number()
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .required(),
  predictedExitEventSharePriceHigh: yup
    .number()
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .required(),
});

export const schema = yup
  .object<CalculatorInput>()
  .shape({
    taxationConfig: taxationConfigSchema.required(),
    companies: yup.array(companyInputSchema.required()).required(),
  })
  .required();
