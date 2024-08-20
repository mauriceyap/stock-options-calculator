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
