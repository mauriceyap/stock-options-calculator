import { describe, expect, test } from "vitest";

import { formatGBP } from "../../../common/formatGBP";
import { StudentLoanRepaymentType } from "../../../config/tax";

import { roundToDP } from "../utils";

import { studentLoanRepaymentsPayable } from "./studentLoanRepayments";


const COMPARISON_DECIMAL_PLACES = 4;

interface TestCase {
  inputGrossIncome: number;
  inputType: StudentLoanRepaymentType;
  expected: number;
}

const testCases: TestCase[] = [
  { inputGrossIncome: -1, inputType: "Plan 1", expected: 0 },
  { inputGrossIncome: 0, inputType: "Plan 1", expected: 0 },
  { inputGrossIncome: 22015, inputType: "Plan 1", expected: 0 },
  { inputGrossIncome: 22016, inputType: "Plan 1", expected: 0.09 },
  { inputGrossIncome: 122015, inputType: "Plan 1", expected: 9000 },

  { inputGrossIncome: -1, inputType: "Plan 2", expected: 0 },
  { inputGrossIncome: 0, inputType: "Plan 2", expected: 0 },
  { inputGrossIncome: 27295, inputType: "Plan 2", expected: 0 },
  { inputGrossIncome: 27296, inputType: "Plan 2", expected: 0.09 },
  { inputGrossIncome: 127295, inputType: "Plan 2", expected: 9000 },

  { inputGrossIncome: 0, inputType: "Plan 4", expected: 0 },
  { inputGrossIncome: -1, inputType: "Plan 4", expected: 0 },
  { inputGrossIncome: 27660, inputType: "Plan 4", expected: 0 },
  { inputGrossIncome: 27661, inputType: "Plan 4", expected: 0.09 },
  { inputGrossIncome: 127660, inputType: "Plan 4", expected: 9000 },

  { inputGrossIncome: 0, inputType: "Postgraduate", expected: 0 },
  { inputGrossIncome: -1, inputType: "Postgraduate", expected: 0 },
  { inputGrossIncome: 21000, inputType: "Postgraduate", expected: 0 },
  { inputGrossIncome: 21001, inputType: "Postgraduate", expected: 0.06 },
  { inputGrossIncome: 121000, inputType: "Postgraduate", expected: 6000 },
];

describe("studentLoanRepaymentsPayable", () => {
  testCases.forEach(({ inputGrossIncome, inputType, expected }) => {
    test(`gross income of ${formatGBP(
      inputGrossIncome
    )} for loan type ${inputType} in tax year 2023/24`, () => {
      expect(
        roundToDP(
          studentLoanRepaymentsPayable(inputGrossIncome, inputType, "2023/24"),
          COMPARISON_DECIMAL_PLACES
        )
      ).toEqual(expected);
    });
  });
});
