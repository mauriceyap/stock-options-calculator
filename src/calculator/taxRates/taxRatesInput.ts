import { TaxYear, TaxYearConfig } from "../../config/tax";

export type TaxYearInput = TaxYear | "custom";

export interface TaxRatesInput {
  taxYearInput: TaxYearInput;
  customTaxYearConfig: TaxYearConfig;
}
