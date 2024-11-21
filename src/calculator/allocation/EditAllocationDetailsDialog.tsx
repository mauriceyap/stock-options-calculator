import { yupResolver } from "@hookform/resolvers/yup";
import { OpenInNew } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { defaultAllocationVestingCliffMonths } from "../defaultValues";
import { SHARE_SCHEME_DISPLAY_NAMES } from "../displayNames";
import { SHARE_SCHEMES } from "../shareSchemes";
import { AllocationInput } from "../types/inputs";

import { allocationInputSchema } from "./schema";
import { SPACING } from "../../common/spacing";

const StyledDatePicker = styled(DatePicker)({ minWidth: 160 });

export interface EditAllocationDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  onChange: (values: AllocationInput) => void;
  existingValues: AllocationInput;
  addAllocation?: boolean;
}

export const EditAllocationDetailsDialog = ({
  open,
  onClose,
  onChange,
  existingValues,
  addAllocation,
}: EditAllocationDetailsDialogProps) => {
  const { handleSubmit, control, reset } = useForm<AllocationInput>({
    values: existingValues,
    mode: "onSubmit",
    resolver: yupResolver(allocationInputSchema),
  });

  useEffect(() => {
    reset();
  }, [reset, open]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        {addAllocation ? "Add share allocation" : "Edit share allocation"}
      </DialogTitle>
      <DialogContent>
        <Grid container columnSpacing={1} rowSpacing={2}>
          <Grid item xs={7}>
            <Controller
              name="totalOptions"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Total options"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">shares</InputAdornment>
                    ),
                  }}
                  type="number"
                  margin="normal"
                  error={Boolean(error)}
                  helperText={error?.message ?? null}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={5}>
            <Controller
              name="strikePrice"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Strike price"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">£</InputAdornment>
                    ),
                  }}
                  type="number"
                  margin="normal"
                  error={Boolean(error)}
                  helperText={error?.message ?? null}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="vestingCommencement"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FormGroup>
                  <StyledDatePicker
                    label="Vesting commencement"
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
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="expiry"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FormGroup>
                  <StyledDatePicker
                    label="Expiry"
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
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="vestingPeriodMonths"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Vesting period"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">months</InputAdornment>
                    ),
                  }}
                  type="number"
                  margin="normal"
                  error={Boolean(error)}
                  helperText={error?.message ?? null}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={6} md={0} />
          <Grid item xs={12}>
            <Controller
              name="vestingCliffMonths"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Stack spacing={SPACING.sm}>
                  <section>
                    <FormLabel>Vesting cliff</FormLabel>
                    <FormHelperText>
                      In a vesting schedule, a cliff is where some time needs to
                      pass before <em>any</em> of the shares begin to vest.
                    </FormHelperText>
                    <FormHelperText>
                      For example, if you were allocated 480 shares in April
                      2024, vesting over four years with a 12-month cliff:
                    </FormHelperText>
                    <ul>
                      <li>
                        <FormHelperText component="span">
                          From April 2024 to March 2025, no shares would vest.
                        </FormHelperText>
                      </li>
                      <li>
                        <FormHelperText component="span">
                          In April 2025, 120 shares would vest.
                        </FormHelperText>
                      </li>
                      <li>
                        <FormHelperText component="span">
                          From May 2025 to April 2028, 10 shares would vest each
                          month.
                        </FormHelperText>
                      </li>
                    </ul>
                  </section>
                  <Stack
                    spacing={SPACING.sm}
                    direction={{ xs: "column", sm: "row" }}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={field.value !== 0}
                            onChange={(event) => {
                              field.onChange(
                                event.target.checked
                                  ? existingValues.vestingCliffMonths ||
                                      defaultAllocationVestingCliffMonths
                                  : 0
                              );
                            }}
                          />
                        }
                        label="This allocation has a vesting cliff"
                      />
                    </FormGroup>
                    {field.value !== 0 && (
                      <FormGroup>
                        <TextField
                          {...field}
                          label="Vesting cliff"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                months
                              </InputAdornment>
                            ),
                          }}
                          type="number"
                          margin="normal"
                          error={Boolean(error)}
                          helperText={error?.message ?? null}
                        />
                      </FormGroup>
                    )}
                  </Stack>
                </Stack>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Other vesting events</FormLabel>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="optionsImmediateVesting"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Options vesting immediately"
                  type="number"
                  margin="normal"
                  error={Boolean(error)}
                  helperText={error?.message ?? null}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="optionsVestingAtExit"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Options vesting at exit event"
                  type="number"
                  margin="normal"
                  error={Boolean(error)}
                  helperText={error?.message ?? null}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={SPACING.sm}>
              <section>
                <FormLabel>Share scheme</FormLabel>
                <FormHelperText>
                  Companies in the UK can offer share options under an employee
                  share scheme. You can find out more about these on the HMRC
                  website:{" "}
                  <Link
                    href="https://www.gov.uk/tax-employee-share-schemes"
                    target="_blank"
                  >
                    gov.uk/tax-employee-share-schemes
                    <OpenInNew fontSize="inherit" />
                  </Link>
                  .
                </FormHelperText>
              </section>
              <div>
                <Controller
                  name="shareScheme"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <FormControl
                      error={Boolean(error)}
                      fullWidth
                      margin="normal"
                    >
                      <InputLabel id="shareScheme-label">
                        Share scheme
                      </InputLabel>
                      <Select
                        {...field}
                        labelId="shareScheme-label"
                        label="Share scheme"
                      >
                        {SHARE_SCHEMES.map((shareScheme) => (
                          <MenuItem key={shareScheme} value={shareScheme}>
                            {SHARE_SCHEME_DISPLAY_NAMES[shareScheme]}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText>
                        {error?.message ? (
                          <>{error.message}</>
                        ) : (
                          <>
                            Select <em>{SHARE_SCHEME_DISPLAY_NAMES.none}</em> if
                            these shares were not issued under a share scheme.
                          </>
                        )}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
              </div>
            </Stack>
          </Grid>
        </Grid>
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
          {addAllocation ? "Add this allocation" : "Make these changes"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
