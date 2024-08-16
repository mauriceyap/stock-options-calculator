import { PredictedDataPoint } from "./types/outputs";

export const GAIN_TYPES = ["net", "gross"] as const;
export type GainType = (typeof GAIN_TYPES)[number];

export type PredictionLevel = keyof PredictedDataPoint;
const predictionLevelsNullMap: Record<PredictionLevel, null> = {
  low: null,
  medium: null,
  high: null,
};
export const PREDICTION_LEVELS = Object.keys(
  predictionLevelsNullMap
) as PredictionLevel[];
