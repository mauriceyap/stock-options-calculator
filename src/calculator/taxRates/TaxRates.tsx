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

import { TAX_YEARS, TaxYear } from "../../config/tax";

import { TAX_YEAR_DISPLAY_NAMES } from "../displayNames";
import { TaxationConfigInput } from "../types/inputs";

import { taxRatesInputSchema } from "./schema";

export interface TaxRatesProps {
  taxYear: TaxYear;
  setTaxYear: (taxYear: TaxYear) => void;
}

export const TaxRates = ({ taxYear, setTaxYear }: TaxRatesProps) => {
  const {
    control,
    watch,
    formState: { isValid, isValidating },
  } = useForm<Pick<TaxationConfigInput, "taxYear">>({
    values: { taxYear },
    mode: "onChange",
    resolver: yupResolver(taxRatesInputSchema),
  });

  const data = watch();

  useEffect(() => {
    if (isValid && !isValidating) {
      setTaxYear(data.taxYear);
    }
  }, [data, isValid, isValidating, setTaxYear]);

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
        name="taxYear"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div>
            <FormControl error={Boolean(error)} fullWidth margin="normal">
              <InputLabel id="taxYear-label">Tax year</InputLabel>
              <Select<TaxYear>
                {...field}
                labelId="taxYear-label"
                label="Tax year"
              >
                {TAX_YEARS.map((taxYear) => (
                  <MenuItem key={taxYear} value={taxYear}>
                    {TAX_YEAR_DISPLAY_NAMES[taxYear]}
                  </MenuItem>
                ))}
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
