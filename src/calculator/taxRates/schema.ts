import * as yup from "yup";

import { TAX_YEARS, TaxYear } from "../../config/tax";

import { TaxationConfigInput } from "../types/inputs";

export const taxRatesInputSchema = yup
  .object<Pick<TaxationConfigInput, "taxYear">>()
  .shape({
    taxYear: yup.string<TaxYear>().oneOf(TAX_YEARS).required(),
  });
