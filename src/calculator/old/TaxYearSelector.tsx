import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";

import { TAX_YEARS } from "../config/tax";

import { CalculatorInput } from "./types/inputs";

const LABEL = "Tax year for rates and thresholds";
const LABEL_ID = "taxationConfig.taxYear-label";

const TaxYearSelect = styled(Select)({ minWidth: 240 });

export interface TaxYearSelectorProps {
  control: Control<CalculatorInput>;
}

// TODO: add support for custom tax rates and thresholds
export const TaxYearSelector = ({ control }: TaxYearSelectorProps) => (
  <Controller
    name="taxationConfig.taxYear"
    control={control}
    render={({ field, fieldState: { error } }) => (
      <FormControl error={Boolean(error)}>
        <InputLabel id={LABEL_ID}>{LABEL}</InputLabel>
        <TaxYearSelect {...field} labelId={LABEL_ID} label={LABEL}>
          {TAX_YEARS.map((taxYear) => (
            <MenuItem key={taxYear} value={taxYear}>
              {taxYear}
            </MenuItem>
          ))}
        </TaxYearSelect>
        {error?.message && <FormHelperText>{error.message}</FormHelperText>}
      </FormControl>
    )}
  />
);
