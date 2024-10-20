import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { TAX_YEARS, TaxYearConfig } from "../../config/tax";

import { TAX_YEAR_DISPLAY_NAMES } from "../displayNames";

import { taxRatesInputSchema } from "./schema";
import { TaxRatesInput, TaxYearInput } from "./taxRatesInput";

export interface TaxRatesProps {
  taxYearInput: TaxYearInput;
  customTaxYearConfig: TaxYearConfig;
  setTaxYearInput: (taxYearInput: TaxYearInput) => void;
  setCustomTaxYearConfig: (
    customTaxYearConfig: TaxRatesInput["customTaxYearConfig"]
  ) => void;
}

export const TaxRates = ({
  taxYearInput,
  customTaxYearConfig,
  setTaxYearInput,
}: // TODO: custom tax year config input
// setCustomTaxYearConfig,
TaxRatesProps) => {
  const {
    control,
    watch,
    formState: { isValid, isValidating },
  } = useForm<TaxRatesInput>({
    values: { taxYearInput, customTaxYearConfig },
    mode: "onChange",
    resolver: yupResolver(taxRatesInputSchema),
  });

  const data = watch();

  useEffect(() => {
    if (isValid && !isValidating) {
      setTaxYearInput(data.taxYearInput);
    }
  }, [data, isValid, isValidating, setTaxYearInput]);

  return (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Tax and deduction rates
      </Typography>
      <Typography>
        Choose the rates and thresholds to be used for calculating deductions
        from your gains. You can either use the values from a particular tax
        year, or enter your own custom rates and thresholds.
      </Typography>
      <Controller
        name="taxYearInput"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div>
            <FormControl error={Boolean(error)} fullWidth margin="normal">
              <InputLabel id="taxYearInput-label">Tax year</InputLabel>
              <Select<TaxYearInput>
                {...field}
                labelId="taxYearInput-label"
                label="Tax year"
              >
                {TAX_YEARS.map((taxYear) => (
                  <MenuItem key={taxYear} value={taxYear}>
                    {TAX_YEAR_DISPLAY_NAMES[taxYear]}
                  </MenuItem>
                ))}
                <MenuItem value="custom">Custom</MenuItem>
              </Select>
              {error?.message && (
                <FormHelperText>{error.message}</FormHelperText>
              )}
            </FormControl>
          </div>
        )}
      />
    </Stack>
  );
};
