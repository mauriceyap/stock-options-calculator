import { describe, expect, test } from "vitest";

import { formatGBP } from "../../../common/formatGBP";
import { TAX_YEAR_CONFIGS } from "../../../config/tax";

import { roundToDP } from "../utils";

import { employeeNationalInsurancePayable } from "./employeeNationalInsurance";

const COMPARISON_DECIMAL_PLACES = 4;

interface TestCase {
  input: number;
  expected: number;
}

const testCases: TestCase[] = [
  { input: -1, expected: 0 },
  { input: 0, expected: 0 },
  { input: 12576, expected: 0 },
  { input: 12577, expected: 0.1 },
  { input: 50268, expected: 3769.2 },
  { input: 50269, expected: 3769.22 },
  { input: 200000, expected: 6763.84 },
];

describe("employeeNationalInsurancePayable", () => {
  testCases.forEach(({ input, expected }) => {
    test(`gross income of ${formatGBP(input)} in tax year 2023/24`, () => {
      expect(
        roundToDP(
          employeeNationalInsurancePayable(input, TAX_YEAR_CONFIGS["2023/24"]),
          COMPARISON_DECIMAL_PLACES
        )
      ).toEqual(expected);
    });
  });
});
