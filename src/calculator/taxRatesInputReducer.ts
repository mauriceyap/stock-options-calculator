import { Reducer } from "react";

import {
  CustomTaxYearConfigInput,
  TaxRatesInput,
  TaxYearInput,
} from "./taxRates/taxRatesInput";

type TaxRatesInputAction =
  | {
      type: "setTaxYearInput";
      payload: TaxYearInput;
    }
  | {
      type: "setCustomTaxYearConfig";
      payload: CustomTaxYearConfigInput;
    };

export const taxRatesInputReducer: Reducer<
  TaxRatesInput,
  TaxRatesInputAction
> = (prevState, action) => {
  switch (action.type) {
    case "setTaxYearInput": {
      return { ...prevState, taxYearInput: action.payload };
    }
    case "setCustomTaxYearConfig": {
      return {
        ...prevState,
        customTaxYearConfig: action.payload,
      };
    }
    default: {
      const unexpectedAction: never = action;
      throw new Error(
        `Unexpected action in taxRatesInputReducer: ${JSON.stringify(
          unexpectedAction
        )}`
      );
    }
  }
};
