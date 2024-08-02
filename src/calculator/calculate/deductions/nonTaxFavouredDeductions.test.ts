import { describe, expect, test } from "vitest";

import { formatGBP } from "../../../common/formatGBP";
import { StudentLoanRepaymentType } from "../../../config/tax";

import { roundToDP } from "../utils";

import { Deductions } from "./deductions";
import { calculateNonTaxFavouredDeductions } from "./nonTaxFavouredDeductions";

const COMPARISON_DECIMAL_PLACES = 4;

interface TestCase {
  inputGrossGain: number;
  inputOtherIncome: number;
  inputStudentRepaymentLoanTypes: Record<StudentLoanRepaymentType, boolean>;
  expectedDeductions: Deductions;
}

const testCases: TestCase[] = [
  // Invalid input (negative values) returns zero
  {
    inputGrossGain: -1,
    inputOtherIncome: -1,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 0,
      employeeNationalInsurancePayable: 0,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // Zero gain and income - base case
  {
    inputGrossGain: 0,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 0,
      employeeNationalInsurancePayable: 0,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // A large other income with no gross gain results in no deductions
  {
    inputGrossGain: 0,
    inputOtherIncome: 1000000,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": true,
      "Plan 2": true,
      "Plan 4": true,
      Postgraduate: true,
    },
    expectedDeductions: {
      incomeTaxPayable: 0,
      employeeNationalInsurancePayable: 0,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income with gross gains of the personal allowance
  {
    inputGrossGain: 12570,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 0,
      employeeNationalInsurancePayable: 0,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income, gross gains just above the basic rate threshold for income tax
  {
    inputGrossGain: 12571,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 0.2,
      employeeNationalInsurancePayable: 0,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income, gross gains at the primary threshold for employee NICs
  {
    inputGrossGain: 12576,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 1.2,
      employeeNationalInsurancePayable: 0,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income, gross gains at just above the primary threshold for employee NICs
  {
    inputGrossGain: 12577,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 1.4,
      employeeNationalInsurancePayable: 0.1,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income, gross gains at the threshold for Plan 1 student loan repayments
  {
    inputGrossGain: 22015,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": true,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 1889,
      employeeNationalInsurancePayable: 943.9,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income, gross gains at just above the threshold for Plan 1 student loan repayments
  {
    inputGrossGain: 22016,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": true,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 1889.2,
      employeeNationalInsurancePayable: 944,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0.09,
    },
  },

  // No other income, gross gains at the upper earnings limit for employee NICs
  {
    inputGrossGain: 50268,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 7539.6,
      employeeNationalInsurancePayable: 3769.2,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income, gross gains at just above upper earnings limit for employee NICs
  {
    inputGrossGain: 50269,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 7539.8,
      employeeNationalInsurancePayable: 3769.22,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income, gross gains at the higher rate threshold for income tax
  {
    inputGrossGain: 50270,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 7540,
      employeeNationalInsurancePayable: 3769.24,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income, gross gains at just above the higher rate threshold for income tax
  {
    inputGrossGain: 50271,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 7540.4,
      employeeNationalInsurancePayable: 3769.26,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income, gross gains at the threshold for personal allowance reduction
  {
    inputGrossGain: 100000,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 27432,
      employeeNationalInsurancePayable: 4763.84,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income, gross gains at the threshold for personal allowance reduction
  {
    inputGrossGain: 100001,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 27432.6,
      employeeNationalInsurancePayable: 4763.86,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income, gross gains at the additional rate threshold for income tax
  {
    inputGrossGain: 125240,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 42561,
      employeeNationalInsurancePayable: 5268.64,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // No other income, gross gains at just above the additional rate threshold for income tax
  {
    inputGrossGain: 125241,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 42561.45,
      employeeNationalInsurancePayable: 5268.66,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0,
    },
  },

  // Income at basic rate income tax level, primary rate employee NICs, above Plan 2
  // student loan repayment thresholds, gross gains incur correct deductions
  {
    inputGrossGain: 1,
    inputOtherIncome: 40000,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": true,
      "Plan 4": false,
      Postgraduate: false,
    },
    expectedDeductions: {
      incomeTaxPayable: 0.2,
      employeeNationalInsurancePayable: 0.1,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0.09,
    },
  },

  // Income at "60% trap" income tax level (i.e. higher rate and in the personal allowance deduction
  // band), reduced rate employee NICs, above Plan 4 and Postgraduate student loan repayment
  // thresholds, gross gains incur correct deductions
  {
    inputGrossGain: 1,
    inputOtherIncome: 100000,
    inputStudentRepaymentLoanTypes: {
      "Plan 1": false,
      "Plan 2": false,
      "Plan 4": true,
      Postgraduate: true,
    },
    expectedDeductions: {
      incomeTaxPayable: 0.6,
      employeeNationalInsurancePayable: 0.02,
      capitalGainsTaxPayable: 0,
      studentLoanRepaymentsPayable: 0.15,
    },
  },
];

describe("calculateNonTaxFavouredDeductions", () => {
  testCases.forEach(
    ({
      inputGrossGain,
      inputOtherIncome,
      inputStudentRepaymentLoanTypes,
      expectedDeductions,
    }) => {
      test(`gross gain of ${formatGBP(
        inputGrossGain
      )} with existing income of ${formatGBP(
        inputOtherIncome
      )} in tax year 2023/24`, () => {
        const result = calculateNonTaxFavouredDeductions(inputGrossGain, {
          taxYear: "2023/24",
          otherIncome: inputOtherIncome,
          studentRepaymentLoanTypes: inputStudentRepaymentLoanTypes,
        });
        result.capitalGainsTaxPayable = roundToDP(
          result.capitalGainsTaxPayable,
          COMPARISON_DECIMAL_PLACES
        );
        result.incomeTaxPayable = roundToDP(
          result.incomeTaxPayable,
          COMPARISON_DECIMAL_PLACES
        );
        result.employeeNationalInsurancePayable = roundToDP(
          result.employeeNationalInsurancePayable,
          COMPARISON_DECIMAL_PLACES
        );
        result.studentLoanRepaymentsPayable = roundToDP(
          result.studentLoanRepaymentsPayable,
          COMPARISON_DECIMAL_PLACES
        );
        expect(result).toEqual(expectedDeductions);
      });
    }
  );
});
