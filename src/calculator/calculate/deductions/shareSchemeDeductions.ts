import { ShareScheme } from "../../shareSchemes";
import { TaxationConfigInput } from "../../types/inputs";

import { Deductions } from "./deductions";
import { calculateEMIDeductions } from "./emiDeductions";
import { calculateNonTaxFavouredDeductions } from "./nonTaxFavouredDeductions";

export const calculateDeductionsForShareScheme: Record<
  ShareScheme,
  (grossGain: number, taxationConfig: TaxationConfigInput) => Deductions
> = {
  emi: calculateEMIDeductions,
  none: calculateNonTaxFavouredDeductions,
};
