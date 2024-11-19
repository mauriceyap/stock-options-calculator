import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
  Grid,
  InputAdornment,
  RegularBreakpoints,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { StudentLoanRepaymentType, TAX_YEAR_CONFIGS } from "../../config/tax";

import { STUDENT_LOAN_REPAYMENT_TYPE_DISPLAY_NAMES } from "../displayNames";

import { ResetCustomTaxYearValuesButtonGroup } from "./ResetCustomTaxYearValuesButtonGroup";
import { customTaxYearConfigSchema } from "./schema";
import { CustomTaxYearConfigInput } from "./taxRatesInput";
import { taxYearConfigInputToCustomTaxYearConfig } from "./taxRatesInput";

const deductionTypeGridItemSizes: RegularBreakpoints = {
  xs: 12,
  md: 6,
};

const StudentLoanRepaymentsThresholdTable = styled(TableCell)({
  width: "unset",
});

const StudentLoanRepaymentsThresholdTableCell = styled(TableCell)({
  width: "17ch",
});

const StudentLoanRepaymentsRateTableCell = styled(TableCell)({ width: "14ch" });

const DialogActionButtonsSpacer = styled("div")({ flexGrow: 1 });

export interface EditCustomTaxYearConfigDialogProps {
  open: boolean;
  onClose: () => void;
  onChange: (config: CustomTaxYearConfigInput) => void;
  existingValue: CustomTaxYearConfigInput;
}

export const EditCustomTaxYearConfigDialog = ({
  open,
  onClose,
  onChange,
  existingValue,
}: EditCustomTaxYearConfigDialogProps) => {
  const { handleSubmit, control, reset } = useForm<CustomTaxYearConfigInput>({
    values: existingValue,
    mode: "onSubmit",
    resolver: yupResolver(customTaxYearConfigSchema),
  });

  useEffect(() => {
    reset();
  }, [reset, open]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl">
      <DialogTitle>Set custom tax year configuration</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography paragraph>
              Enter your expected taxable income in the tax year during which
              you will exercise your vested share options.
            </Typography>
          </Grid>
          <Grid item {...deductionTypeGridItemSizes}>
            <FormLabel>Income tax: personal allowance (PA)</FormLabel>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
                md: "column",
                lg: "row",
              }}
              spacing={1}
            >
              <div>
                <Controller
                  name="incomeTax.personalAllowance"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      label="Personal allowance"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">£</InputAdornment>
                        ),
                      }}
                      type="number"
                      margin="normal"
                      error={Boolean(error)}
                      helperText={error?.message ?? null}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="incomeTax.personalAllowanceReductionThreshold"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      label="PA reduction threshold"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">£</InputAdornment>
                        ),
                      }}
                      type="number"
                      margin="normal"
                      error={Boolean(error)}
                      helperText={error?.message ?? null}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="incomeTax.personalAllowanceReductionRate"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      label="PA reduction rate"
                      type="number"
                      margin="normal"
                      error={Boolean(error)}
                      helperText={error?.message ?? null}
                    />
                  )}
                />
              </div>
            </Stack>
          </Grid>
          <Grid item {...deductionTypeGridItemSizes}>
            <FormLabel>Income tax: rates and limits</FormLabel>
            <Stack spacing={1} direction={{ xs: "column", xl: "row" }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                <div>
                  <Controller
                    name="incomeTax.basicRatePercentage"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="Basic rate"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">%</InputAdornment>
                          ),
                        }}
                        type="number"
                        margin="normal"
                        error={Boolean(error)}
                        helperText={error?.message ?? null}
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="incomeTax.basicRateLimit"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="Basic rate limit"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">£</InputAdornment>
                          ),
                        }}
                        type="number"
                        margin="normal"
                        error={Boolean(error)}
                        helperText={error?.message ?? null}
                      />
                    )}
                  />
                </div>
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                <div>
                  <Controller
                    name="incomeTax.higherRatePercentage"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="Higher rate"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">%</InputAdornment>
                          ),
                        }}
                        type="number"
                        margin="normal"
                        error={Boolean(error)}
                        helperText={error?.message ?? null}
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="incomeTax.higherRateLimit"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="Higher rate limit"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">£</InputAdornment>
                          ),
                        }}
                        type="number"
                        margin="normal"
                        error={Boolean(error)}
                        helperText={error?.message ?? null}
                      />
                    )}
                  />
                </div>
              </Stack>
              <div>
                <Controller
                  name="incomeTax.additionalRatePercentage"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      label="Additional rate"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">%</InputAdornment>
                        ),
                      }}
                      type="number"
                      margin="normal"
                      error={Boolean(error)}
                      helperText={error?.message ?? null}
                    />
                  )}
                />
              </div>
            </Stack>
          </Grid>
          <Grid item {...deductionTypeGridItemSizes}>
            <FormLabel>Employee National Insurance contributions</FormLabel>
            <Stack spacing={1} direction={{ xs: "column", lg: "row" }}>
              <Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
                <div>
                  <Controller
                    name="employeeNationalInsurance.primaryThreshold"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="Primary threshold"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">£</InputAdornment>
                          ),
                        }}
                        type="number"
                        margin="normal"
                        error={Boolean(error)}
                        helperText={error?.message ?? null}
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="employeeNationalInsurance.primaryRatePercentage"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="Primary rate"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">%</InputAdornment>
                          ),
                        }}
                        type="number"
                        margin="normal"
                        error={Boolean(error)}
                        helperText={error?.message ?? null}
                      />
                    )}
                  />
                </div>
              </Stack>
              <Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
                <div>
                  <Controller
                    name="employeeNationalInsurance.upperEarningsLimit"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="Upper earnings limit"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">£</InputAdornment>
                          ),
                        }}
                        type="number"
                        margin="normal"
                        error={Boolean(error)}
                        helperText={error?.message ?? null}
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="employeeNationalInsurance.reducedRatePercentage"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="Reduced rate"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">%</InputAdornment>
                          ),
                        }}
                        type="number"
                        margin="normal"
                        error={Boolean(error)}
                        helperText={error?.message ?? null}
                      />
                    )}
                  />
                </div>
              </Stack>
            </Stack>
          </Grid>
          <Grid item {...deductionTypeGridItemSizes}>
            <FormLabel>
              Capital Gains Tax and Business Asset Disposal Relief (BADR) rates
              and thresholds
            </FormLabel>
            <Stack spacing={1} direction={{ xs: "column", xl: "row" }}>
              <Stack
                spacing={1}
                direction={{ xs: "column", sm: "row", md: "column", lg: "row" }}
              >
                <div>
                  <Controller
                    name="capitalGainsTax.exemptAmountLimit"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="Tax-free allowance"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">£</InputAdornment>
                          ),
                        }}
                        type="number"
                        margin="normal"
                        error={Boolean(error)}
                        helperText={error?.message ?? null}
                      />
                    )}
                  />
                </div>
                <Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
                  <div>
                    <Controller
                      name="capitalGainsTax.lowerRatePercentage"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          label="Lower rate"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">%</InputAdornment>
                            ),
                          }}
                          type="number"
                          margin="normal"
                          error={Boolean(error)}
                          helperText={error?.message ?? null}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <Controller
                      name="capitalGainsTax.higherRatePercentage"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          label="Higher rate"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">%</InputAdornment>
                            ),
                          }}
                          type="number"
                          margin="normal"
                          error={Boolean(error)}
                          helperText={error?.message ?? null}
                        />
                      )}
                    />
                  </div>
                </Stack>
              </Stack>
              <Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
                <div>
                  <Controller
                    name="capitalGainsTax.businessAssetDisposalReliefRatePercentage"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="BADR rate"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">%</InputAdornment>
                          ),
                        }}
                        type="number"
                        margin="normal"
                        error={Boolean(error)}
                        helperText={error?.message ?? null}
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="capitalGainsTax.businessAssetDisposalReliefLimit"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        label="BADR limit"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">£</InputAdornment>
                          ),
                        }}
                        type="number"
                        margin="normal"
                        error={Boolean(error)}
                        helperText={error?.message ?? null}
                      />
                    )}
                  />
                </div>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Student loan repayment rates and thresholds</FormLabel>
            <TableContainer>
              <StudentLoanRepaymentsThresholdTable size="small" padding="none">
                <TableBody>
                  {Object.entries(
                    STUDENT_LOAN_REPAYMENT_TYPE_DISPLAY_NAMES
                  ).map(([repaymentType, displayName]) => (
                    <TableRow key={repaymentType}>
                      <TableCell component="th" scope="row">
                        {displayName}
                      </TableCell>
                      <StudentLoanRepaymentsThresholdTableCell>
                        <div>
                          <Controller
                            name={`studentLoanRepayments.${
                              repaymentType as StudentLoanRepaymentType
                            }.threshold`}
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                              <TextField
                                {...field}
                                label="Threshold"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      £
                                    </InputAdornment>
                                  ),
                                }}
                                type="number"
                                margin="dense"
                                error={Boolean(error)}
                                helperText={error?.message ?? null}
                              />
                            )}
                          />
                        </div>
                      </StudentLoanRepaymentsThresholdTableCell>
                      <StudentLoanRepaymentsRateTableCell>
                        <div>
                          <Controller
                            name={`studentLoanRepayments.${
                              repaymentType as StudentLoanRepaymentType
                            }.ratePercentage`}
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                              <TextField
                                {...field}
                                label="Rate"
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      %
                                    </InputAdornment>
                                  ),
                                }}
                                type="number"
                                margin="dense"
                                error={Boolean(error)}
                                helperText={error?.message ?? null}
                              />
                            )}
                          />
                        </div>
                      </StudentLoanRepaymentsRateTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </StudentLoanRepaymentsThresholdTable>
            </TableContainer>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <ResetCustomTaxYearValuesButtonGroup
          onReset={(taxYear) =>
            { reset(
              taxYearConfigInputToCustomTaxYearConfig(TAX_YEAR_CONFIGS[taxYear])
            ); }
          }
        />
        <DialogActionButtonsSpacer />
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
          Use this configuration
        </Button>
      </DialogActions>
    </Dialog>
  );
};
