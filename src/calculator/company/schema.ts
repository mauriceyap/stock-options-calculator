import * as yup from "yup";

import { CompanyInput } from "../types/inputs";
import {
  MESSAGE_AT_LEAST_ZERO,
  MESSAGE_MUST_BE_NUMBER,
} from "../validationMessages";

export const getCompanyDetailsSchema = (otherCompanyNames: string[]) =>
  yup.object<Omit<CompanyInput, "allocations">>().shape({
    name: yup
      .string()
      .notOneOf(
        otherCompanyNames,
        "This must be different to the all the names of other companies."
      )
      .required("You must enter a name or nickname for this company."),
    leavingDate: yup.date().required().nullable(),
    predictedExitEventDate: yup.date().required(),
    predictedExitEventSharePriceLow: yup
      .number()
      .typeError(MESSAGE_MUST_BE_NUMBER)
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must provide a low prediction for the exit share price."),
    predictedExitEventSharePriceMedium: yup
      .number()
      .typeError(MESSAGE_MUST_BE_NUMBER)
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required(
        "You must provide a medium prediction for the exit share price."
      )
      .test(
        "moreThenLow",
        "This must be more than the low exit share price prediction.",
        (value, context) =>
          value >
          (context.parent as Omit<CompanyInput, "allocations">)
            .predictedExitEventSharePriceLow
      ),
    predictedExitEventSharePriceHigh: yup
      .number()
      .typeError(MESSAGE_MUST_BE_NUMBER)
      .min(0, MESSAGE_AT_LEAST_ZERO)
      .required("You must provide a high prediction for the exit share price.")
      .test(
        "moreThenMedium",
        "This must be more than the medium exit share price prediction.",
        (value, context) =>
          value >
          (context.parent as Omit<CompanyInput, "allocations">)
            .predictedExitEventSharePriceMedium
      ),
  });
