import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { TAX_YEARS } from "../../config/tax";

import { TAX_YEAR_DISPLAY_NAMES } from "../displayNames";

import { EditCustomTaxYearConfigDialog } from "./EditCustomTaxYearConfigDialog";
import { taxRatesInputSchema } from "./schema";
import {
  CustomTaxYearConfigInput,
  TaxRatesInput,
  TaxYearInput,
} from "./taxRatesInput";
import { SPACING } from "../../common/spacing";

export interface TaxRatesProps {
  taxYearInput: TaxYearInput;
  customTaxYearConfig: CustomTaxYearConfigInput;
  setTaxYearInput: (taxYearInput: TaxYearInput) => void;
  setCustomTaxYearConfig: (
    customTaxYearConfig: TaxRatesInput["customTaxYearConfig"]
  ) => void;
}

export const TaxRates = ({
  taxYearInput,
  customTaxYearConfig,
  setTaxYearInput,
  setCustomTaxYearConfig,
}: TaxRatesProps) => {
  const [
    editCustomTaxYearConfigDialogOpen,
    setEditCustomTaxYearConfigDialogOpen,
  ] = useState(false);

  const { control, watch, handleSubmit } = useForm<TaxRatesInput>({
    values: { taxYearInput, customTaxYearConfig },
    mode: "onChange",
    resolver: yupResolver(taxRatesInputSchema),
  });

  useEffect(() => {
    const subscription = watch(() => {
      void handleSubmit((data) => {
        setTaxYearInput(data.taxYearInput);
        setCustomTaxYearConfig(data.customTaxYearConfig);
      })();
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [handleSubmit, watch, setTaxYearInput, setCustomTaxYearConfig]);

  return (
    <>
      <EditCustomTaxYearConfigDialog
        open={editCustomTaxYearConfigDialogOpen}
        onClose={() => {
          setEditCustomTaxYearConfigDialogOpen(false);
        }}
        onChange={setCustomTaxYearConfig}
        existingValue={customTaxYearConfig}
      />
      <Stack spacing={SPACING.sm}>
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
            <section>
              <FormControl error={Boolean(error)} fullWidth margin="normal">
                <Stack spacing={SPACING.sm} direction="row">
                  <div>
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
                  </div>
                  {field.value === "custom" && (
                    <div>
                      <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => {
                          setEditCustomTaxYearConfigDialogOpen(true);
                        }}
                      >
                        Set custom rates and thresholds
                      </Button>
                    </div>
                  )}
                </Stack>
              </FormControl>
            </section>
          )}
        />
      </Stack>
    </>
  );
};
