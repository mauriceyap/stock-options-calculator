import { yupResolver } from "@hookform/resolvers/yup";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import {
  STUDENT_LOAN_REPAYMENT_TYPES,
  StudentLoanRepaymentType,
} from "../../config/tax";

import { STUDENT_LOAN_REPAYMENT_TYPE_DISPLAY_NAMES } from "../displayNames";
import { TaxationConfigInput } from "../types/inputs";

import { studentRepaymentLoanTypesInputSchema } from "./schema";


export interface StudentLoanRepaymentsProps {
  studentRepaymentLoanTypes: Record<StudentLoanRepaymentType, boolean>;
  setStudentRepaymentLoanTypes: (
    studentRepaymentLoanTypes: Record<StudentLoanRepaymentType, boolean>
  ) => void;
}

export const StudentLoanRepayments = ({
  studentRepaymentLoanTypes,
  setStudentRepaymentLoanTypes,
}: StudentLoanRepaymentsProps) => {
  const { control } = useForm<
    Pick<TaxationConfigInput, "studentRepaymentLoanTypes">
  >({
    values: { studentRepaymentLoanTypes: studentRepaymentLoanTypes },
    mode: "onSubmit",
    resolver: yupResolver(studentRepaymentLoanTypesInputSchema),
  });

  return (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Student loan repayments
      </Typography>
      <Typography>
        If you expect to be repaying your student loan, select the ones which
        will apply to you.
      </Typography>
      <Controller
        name="studentRepaymentLoanTypes"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormControl error={Boolean(error)}>
            <FormGroup>
              {STUDENT_LOAN_REPAYMENT_TYPES.map((repaymentType) => (
                <FormControlLabel
                  key={repaymentType}
                  control={<Checkbox checked={field.value[repaymentType]} />}
                  onChange={(_, checked) =>
                    { setStudentRepaymentLoanTypes({
                      ...field.value,
                      [repaymentType]: checked,
                    }); }
                  }
                  label={
                    STUDENT_LOAN_REPAYMENT_TYPE_DISPLAY_NAMES[repaymentType]
                  }
                />
              ))}
            </FormGroup>
            {error?.message && <FormHelperText>{error.message}</FormHelperText>}
          </FormControl>
        )}
      />
    </Stack>
  );
};