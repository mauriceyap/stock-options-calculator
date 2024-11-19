import { StudentLoanRepaymentType, TaxYear } from "../config/tax";

import { ShareScheme } from "./shareSchemes";
import { GainType, PredictionLevel } from "./types";

export const GAIN_TYPE_DISPLAY_NAMES: Record<GainType, string> = {
  net: "Net",
  gross: "Gross",
};

export const PREDICTION_LEVEL_DISPLAY_NAMES: Record<PredictionLevel, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

export const SHARE_SCHEME_DISPLAY_NAMES: Record<ShareScheme, string> = {
  emi: "Enterprise Management Incentives (EMIs)",
  none: "Non-tax advantaged",
};

export const STUDENT_LOAN_REPAYMENT_TYPE_DISPLAY_NAMES: Record<
  StudentLoanRepaymentType,
  string
> = {
  plan1: "Plan 1",
  plan2: "Plan 2",
  plan4: "Plan 4 (Scotland only)",
  plan5: "Plan 5",
  postgraduate: "Postgraduate Loan",
};

export const TAX_YEAR_DISPLAY_NAMES: Record<TaxYear, string> = {
  "2022/23": "2022/23",
  "2023/24": "2023/24",
  "2024/25-until-2024-10-29": "2024/25 (until 29 October 2024)",
  "2024/25-from-2024-10-30": "2024/25 (from 30 October 2024)",
};
