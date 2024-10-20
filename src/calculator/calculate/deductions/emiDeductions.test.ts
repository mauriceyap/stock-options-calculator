import { describe, expect, test } from "vitest";

import { formatGBP } from "../../../common/formatGBP";
import {
  StudentLoanRepaymentType,
  TAX_YEAR_CONFIGS,
} from "../../../config/tax";

import { roundToDP } from "../utils";

import { calculateEMIDeductions } from "./emiDeductions";

const COMPARISON_DECIMAL_PLACES = 4;

interface TestCase {
  inputGrossGain: number;
  inputOtherIncome: number;
  inputStudentRepaymentLoanTypes: Record<StudentLoanRepaymentType, boolean>;
  expectedCapitalGainsTaxPayable: number;
}

const testCases: TestCase[] = [
  // Invalid input (negative values) returns zero
  {
    inputGrossGain: -1,
    inputOtherIncome: -1,
    inputStudentRepaymentLoanTypes: {
      plan1: false,
      plan2: false,
      plan4: false,
      plan5: false,
      postgraduate: false,
    },
    expectedCapitalGainsTaxPayable: 0,
  },

  // Zero gain and income - base case
  {
    inputGrossGain: 0,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      plan1: false,
      plan2: false,
      plan4: false,
      plan5: false,
      postgraduate: false,
    },
    expectedCapitalGainsTaxPayable: 0,
  },

  // Gross gain at CGT exempt amount limit
  {
    inputGrossGain: 6000,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      plan1: false,
      plan2: false,
      plan4: false,
      plan5: false,
      postgraduate: false,
    },
    expectedCapitalGainsTaxPayable: 0,
  },

  // Gross gain at just above CGT exempt amount limit
  {
    inputGrossGain: 6001,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      plan1: false,
      plan2: false,
      plan4: false,
      plan5: false,
      postgraduate: false,
    },
    expectedCapitalGainsTaxPayable: 0.1,
  },

  // Gross gain at BADR limit
  {
    inputGrossGain: 1006000,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      plan1: false,
      plan2: false,
      plan4: false,
      plan5: false,
      postgraduate: false,
    },
    expectedCapitalGainsTaxPayable: 100000,
  },

  // Gross gain at BADR limit - assert CGT not affected by other income
  {
    inputGrossGain: 1006000,
    inputOtherIncome: 1000000,
    inputStudentRepaymentLoanTypes: {
      plan1: true,
      plan2: true,
      plan4: true,
      plan5: false,
      postgraduate: true,
    },
    expectedCapitalGainsTaxPayable: 100000,
  },

  // Gross gain at just above BADR limit, no other income
  {
    inputGrossGain: 1006010,
    inputOtherIncome: 0,
    inputStudentRepaymentLoanTypes: {
      plan1: false,
      plan2: false,
      plan4: false,
      plan5: false,
      postgraduate: false,
    },
    expectedCapitalGainsTaxPayable: 100001,
  },

  // Gross gain at just above BADR limit, income at higher rate income tax threshold
  {
    inputGrossGain: 1006010,
    inputOtherIncome: 37700,
    inputStudentRepaymentLoanTypes: {
      plan1: false,
      plan2: false,
      plan4: false,
      plan5: false,
      postgraduate: false,
    },
    expectedCapitalGainsTaxPayable: 100001,
  },

  // Gross gain at just above BADR limit, income at just above higher rate income tax threshold
  {
    inputGrossGain: 1006010,
    inputOtherIncome: 37701,
    inputStudentRepaymentLoanTypes: {
      plan1: false,
      plan2: false,
      plan4: false,
      plan5: false,
      postgraduate: false,
    },
    expectedCapitalGainsTaxPayable: 100002,
  },

  // Gross gain at just above BADR limit, income at just above higher rate income tax threshold -
  // assert unaffected by student loan repayments
  {
    inputGrossGain: 1006010,
    inputOtherIncome: 37701,
    inputStudentRepaymentLoanTypes: {
      plan1: true,
      plan2: true,
      plan4: true,
      plan5: false,
      postgraduate: true,
    },
    expectedCapitalGainsTaxPayable: 100002,
  },
];

describe("calculateEMIDeductions", () => {
  testCases.forEach(
    ({
      inputGrossGain,
      inputOtherIncome,
      inputStudentRepaymentLoanTypes,
      expectedCapitalGainsTaxPayable,
    }) => {
      test(`gross gain of ${formatGBP(
        inputGrossGain
      )} with existing income of ${formatGBP(
        inputOtherIncome
      )} in tax year 2023/24`, () => {
        const result = calculateEMIDeductions(inputGrossGain, {
          taxYearConfig: TAX_YEAR_CONFIGS["2023/24"],
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
        expect(result).toEqual({
          incomeTaxPayable: 0,
          employeeNationalInsurancePayable: 0,
          capitalGainsTaxPayable: expectedCapitalGainsTaxPayable,
          studentLoanRepaymentsPayable: 0,
        });
      });
    }
  );
});
