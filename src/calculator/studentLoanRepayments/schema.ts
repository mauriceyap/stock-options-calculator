import * as yup from "yup";

import { StudentLoanRepaymentType } from "../../config/tax";

import { TaxationConfigInput } from "../types/inputs";

export const studentRepaymentLoanTypesInputSchema = yup
  .object<Pick<TaxationConfigInput, "studentRepaymentLoanTypes">>()
  .shape({
    studentRepaymentLoanTypes: yup
      .object<Record<StudentLoanRepaymentType, boolean>>()
      .shape({
        plan1: yup.boolean().required(),
        plan2: yup.boolean().required(),
        plan4: yup.boolean().required(),
        plan5: yup.boolean().required(),
        postgraduate: yup.boolean().required(),
      })
      .required(),
  });
