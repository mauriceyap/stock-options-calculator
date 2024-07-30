import { describe, expect, test } from "vitest";

import { formatGBP } from "../../../common/formatGBP";

import { roundToDP } from "../utils";

import { incomeTaxPayable } from "./incomeTax";

const COMPARISON_DECIMAL_PLACES = 4;

interface TestCase {
  input: number;
  expected: number;
}

const testCases: TestCase[] = [
  { input: -1, expected: 0 },
  { input: 0, expected: 0 },
  { input: 10000, expected: 0 },
  { input: 12570, expected: 0 },
  { input: 12571, expected: 0.2 },
  { input: 50270, expected: 7540 },
  { input: 50271, expected: 7540.4 },
  { input: 100000, expected: 27432 },
  { input: 100001, expected: 27432.6 },
  { input: 125140, expected: 42516 },
  { input: 125141, expected: 42516.45 },
  { input: 200000, expected: 76203 },
];

describe("incomeTaxPayable", () => {
  testCases.forEach(({ input, expected }) => {
    test(`gross income of ${formatGBP(input)} in tax year 2023/24`, () => {
      expect(
        roundToDP(incomeTaxPayable(input, "2023/24"), COMPARISON_DECIMAL_PLACES)
      ).toEqual(expected);
    });
  });
});
