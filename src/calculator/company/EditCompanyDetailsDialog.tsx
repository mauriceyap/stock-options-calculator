import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid2,
  InputAdornment,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";

import { SPACING } from "../../common/spacing";

import { defaultCompanyLeavingDate } from "../defaultValues";
import { CompanyInput } from "../types/inputs";

import { getCompanyDetailsSchema } from "./schema";

const StyledDatePicker = styled(DatePicker)({ minWidth: 160 });

export interface EditCompanyDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  onChange: (values: Omit<CompanyInput, "allocations">) => void;
  existingValues: Omit<CompanyInput, "allocations">;
  allCompanyNames: string[];
  addCompany?: boolean;
}

export const EditCompanyDetailsDialog = ({
  open,
  onClose,
  onChange,
  existingValues,
  allCompanyNames,
  addCompany,
}: EditCompanyDetailsDialogProps) => {
  const schema = useMemo(
    () =>
      getCompanyDetailsSchema(
        allCompanyNames.filter((name) => name !== existingValues.name)
      ),
    [allCompanyNames, existingValues.name]
  );

  const { handleSubmit, control, reset } = useForm<
    Omit<CompanyInput, "allocations">
  >({
    values: existingValues,
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset();
  }, [reset, open]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{addCompany ? "Add company" : "Edit company"}</DialogTitle>
      <DialogContent>
        <Grid2 container spacing={SPACING.sm}>
          <Grid2 size={12}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  margin="normal"
                  label="Company name"
                  error={Boolean(error)}
                  helperText={
                    error?.message ??
                    "This can be a nickname - it is used for display purposes only"
                  }
                />
              )}
            />
          </Grid2>
          <Grid2 size={12}>
            <Controller
              name="leavingDate"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Stack spacing={SPACING.sm}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={field.value === null}
                          onChange={(event) => {
                            field.onChange(
                              event.target.checked
                                ? null
                                : existingValues.leavingDate ??
                                    defaultCompanyLeavingDate
                            );
                          }}
                        />
                      }
                      label="I currently work here, and will for the foreseeable future"
                    />
                  </FormGroup>
                  {field.value !== null && (
                    <FormGroup>
                      <StyledDatePicker
                        label="Leaving date"
                        value={dayjs(field.value)}
                        inputRef={field.ref}
                        onChange={(date) => {
                          field.onChange(date);
                        }}
                        slotProps={{
                          textField: {
                            margin: "normal",
                            size: "small",
                            error: Boolean(error),
                            helperText: error?.message ?? null,
                          },
                        }}
                      />
                    </FormGroup>
                  )}
                </Stack>
              )}
            />
          </Grid2>
          <Grid2 size={12}>
            <FormLabel>Exit event predictions</FormLabel>
            <FormHelperText>
              Provide estimates for the share price of this company when an exit
              event (e.g. IPO or buyout) occurs, and the date of this event.
            </FormHelperText>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4, lg: 3 }}>
            <Controller
              name="predictedExitEventSharePriceLow"
              control={control}
              render={({ field, fieldState: { error } }) => {
                return (
                  <TextField
                    {...field}
                    label="Low share price"
                    type="number"
                    margin="normal"
                    error={Boolean(error)}
                    helperText={error?.message ?? null}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">£</InputAdornment>
                        ),
                      },
                    }}
                  />
                );
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4, lg: 3 }}>
            <Controller
              name="predictedExitEventSharePriceMedium"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Medium share price"
                  type="number"
                  margin="normal"
                  error={Boolean(error)}
                  helperText={error?.message ?? null}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">£</InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4, lg: 3 }}>
            <Controller
              name="predictedExitEventSharePriceHigh"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="High share price"
                  type="number"
                  margin="normal"
                  error={Boolean(error)}
                  helperText={error?.message ?? null}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">£</InputAdornment>
                      ),
                    },
                  }}
                />
              )}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 3 }}>
            <Controller
              name="predictedExitEventDate"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FormGroup>
                  <StyledDatePicker
                    label="Predicted exit event date"
                    value={dayjs(field.value)}
                    inputRef={field.ref}
                    onChange={(date) => {
                      field.onChange(date);
                    }}
                    slotProps={{
                      textField: {
                        margin: "normal",
                        size: "small",
                        error: Boolean(error),
                        helperText: error?.message ?? null,
                      },
                    }}
                  />
                </FormGroup>
              )}
            />
          </Grid2>
        </Grid2>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit((values) => {
            onChange(values);
            onClose();
          })}
        >
          {addCompany ? "Add this company" : "Make these changes"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
