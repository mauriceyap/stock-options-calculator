import * as yup from "yup";

import { SHARE_SCHEMES, ShareScheme } from "../shareSchemes";
import { AllocationInput } from "../types/inputs";
import {
  MESSAGE_AT_LEAST_ZERO,
  MESSAGE_MUST_BE_NUMBER,
} from "../validationMessages";

export const allocationInputSchema = yup.object<AllocationInput>().shape({
  vestingCommencement: yup.date().required(),
  totalOptions: yup
    .number()
    .typeError(MESSAGE_MUST_BE_NUMBER)
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .required("You must enter the number of share options.")
    .test(
      "atLeastThanNumberVestingImmediatelyAndExit",
      "This must be no less than the number of share options vesting immediately and at exit.",
      (value, context) =>
        value >=
        (context.parent as AllocationInput).optionsImmediateVesting +
          (context.parent as AllocationInput).optionsVestingAtExit
    ),
  expiry: yup.date().required(),
  optionsImmediateVesting: yup
    .number()
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .required("You must enter the number of immediately vesting options."),
  optionsVestingAtExit: yup
    .number()
    .typeError(MESSAGE_MUST_BE_NUMBER)
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .required(
      "You must enter the number of options vesting at the exit event."
    ),
  vestingPeriodMonths: yup
    .number()
    .typeError(MESSAGE_MUST_BE_NUMBER)
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .required("You must enter the vesting period."),
  vestingCliffMonths: yup
    .number()
    .typeError(MESSAGE_MUST_BE_NUMBER)
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .required("You must enter the vesting cliff.")
    .test(
      "lessThanVestingPeriodMonths",
      "This must be shorter than the vesting period.",
      (value, context) =>
        value < (context.parent as AllocationInput).vestingPeriodMonths
    ),
  strikePrice: yup
    .number()
    .typeError(MESSAGE_MUST_BE_NUMBER)
    .min(0, MESSAGE_AT_LEAST_ZERO)
    .required("You must enter the strike price."),
  shareScheme: yup.string<ShareScheme>().oneOf(SHARE_SCHEMES).required(),
});
