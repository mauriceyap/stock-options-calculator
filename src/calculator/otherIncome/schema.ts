import * as yup from "yup";

import { TaxationConfigInput } from "../types/inputs";
import {
  MESSAGE_AT_LEAST_ZERO,
  MESSAGE_MUST_BE_NUMBER,
} from "../validationMessages";

export const otherIncomeInputSchema = yup
  .object<Pick<TaxationConfigInput, "otherIncome">>()
  .shape({
    otherIncome: yup
      .number()
      .typeError(MESSAGE_MUST_BE_NUMBER)
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must enter your other expected income."),
  });
