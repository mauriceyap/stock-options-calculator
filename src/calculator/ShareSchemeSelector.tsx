import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import { Control, Controller } from "react-hook-form";

import { SHARE_SCHEME_DISPLAY_NAMES } from "./displayNames";
import { SHARE_SCHEMES } from "./shareSchemes";
import { CalculatorInput } from "./types/inputs";

export interface ShareSchemeSelectorProps {
  control: Control<CalculatorInput>;
  companyIndex: number;
  allocationIndex: number;
}

export const ShareSchemeSelector = ({
  control,
  companyIndex,
  allocationIndex,
}: ShareSchemeSelectorProps) => (
  <Controller
    name={`companies.${companyIndex}.allocations.${allocationIndex}.shareScheme`}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <FormControl error={Boolean(error)}>
        <Select
          {...field}
          labelId={`companies.${companyIndex}.allocations.${allocationIndex}.shareScheme-label`}
        >
          {SHARE_SCHEMES.map((shareScheme) => (
            <MenuItem key={shareScheme} value={shareScheme}>
              {SHARE_SCHEME_DISPLAY_NAMES[shareScheme]}
            </MenuItem>
          ))}
        </Select>
        {error?.message && <FormHelperText>{error.message}</FormHelperText>}
      </FormControl>
    )}
  />
);
