import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { Control, Controller, FieldError } from "react-hook-form";

import {
  STUDENT_LOAN_REPAYMENT_TYPES,
  StudentLoanRepaymentType,
} from "../config/tax";

import { CalculatorInput } from "./types/inputs";

export interface StudentLoanRepaymentTypesSelectorProps {
  control: Control<CalculatorInput>;
}

export const StudentLoanRepaymentTypesSelector = ({
  control,
}: StudentLoanRepaymentTypesSelectorProps) => (
  <Controller
    name="taxationConfig.studentRepaymentLoanTypes"
    control={control}
    render={({ field, fieldState: { error: _error } }) => {
      const error = _error as
        | Record<StudentLoanRepaymentType, FieldError>
        | undefined;
      return (
        <FormControl
          component="fieldset"
          variant="standard"
          error={Boolean(error)}
        >
          <FormLabel component="legend">
            Outstanding student loan repayment types
          </FormLabel>
          <FormGroup row>
            {STUDENT_LOAN_REPAYMENT_TYPES.map((repaymentType) => (
              <FormControlLabel
                key={repaymentType}
                control={
                  <Checkbox
                    {...field}
                    checked={field.value[repaymentType]}
                    onChange={(e) => {
                      field.onChange({
                        ...field.value,
                        [repaymentType]: e.target.checked,
                      });
                    }}
                    size="small"
                  />
                }
                label={repaymentType}
              />
            ))}
            {STUDENT_LOAN_REPAYMENT_TYPES.map((repaymentType) => (
              <Fragment key={repaymentType}>
                {error?.[repaymentType].message ? (
                  <FormHelperText>
                    {error[repaymentType].message}
                  </FormHelperText>
                ) : null}
              </Fragment>
            ))}
          </FormGroup>
        </FormControl>
      );
    }}
  />
);
