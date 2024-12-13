import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { TaxationConfigInput } from "../types/inputs";

import { otherIncomeInputSchema } from "./schema";

export interface EditOtherIncomeDialogProps {
  open: boolean;
  onClose: () => void;
  onChange: (otherIncome: number) => void;
  existingValue: number;
}

export const EditOtherIncomeDialog = ({
  open,
  onClose,
  onChange,
  existingValue,
}: EditOtherIncomeDialogProps) => {
  const { handleSubmit, control, reset } = useForm<
    Pick<TaxationConfigInput, "otherIncome">
  >({
    values: { otherIncome: existingValue },
    mode: "onSubmit",
    resolver: yupResolver(otherIncomeInputSchema),
  });

  useEffect(() => {
    reset();
  }, [reset, open]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Edit other income</DialogTitle>
      <DialogContent>
        <Typography>
          Enter your expected taxable income in the tax year during which you
          will exercise your vested share options.
        </Typography>
        <Controller
          name="otherIncome"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Expected other income"
              type="number"
              margin="normal"
              error={Boolean(error)}
              helperText={error?.message ?? null}
              fullWidth
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit((values) => {
            onChange(values.otherIncome);
            onClose();
          })}
        >
          Set other income
        </Button>
      </DialogActions>
    </Dialog>
  );
};
