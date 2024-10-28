import {
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  grey,
  pink,
  red,
  teal,
  yellow,
} from "@mui/material/colors";

import { PredictionLevel } from "../types";

// TODO: improve colours used along with a strong app-wide colour scheme
export const EMPLOYEE_NATIONAL_INSURANCE_CONTRIBUTIONS_COLOUR = cyan[200];
export const INCOME_TAX_COLOUR = teal[600];
export const STUDENT_LOAN_REPAYMENTS_COLOUR = brown[900];
export const CAPITAL_GAINS_TAX_COLOUR = blue[500];
export const GAIN_PREDICTION_LEVEL_COLOUR: Record<PredictionLevel, string> = {
  low: yellow[600],
  medium: amber[700],
  high: red[900],
};
export const NET_GAIN_DEFAULT_COLOUR = pink[400];
export const ANNUAL_GAIN_PREDICTION_LEVEL_COLOUR: Record<
  PredictionLevel,
  string
> = {
  low: blueGrey[200],
  medium: blueGrey[500],
  high: blueGrey[900],
};

export const LOADING_COLOUR = grey[100];
