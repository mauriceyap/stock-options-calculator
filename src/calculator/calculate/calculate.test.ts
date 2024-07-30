import { describe, expect, test } from "vitest";

import { CalculatorInput } from "../types/inputs";
import { CalculatorOutput } from "../types/outputs";

import { calculate } from "./calculate";
import { emptyExpected, emptyInput } from "./calculate.empty.testCase";
import { fullExpected, fullInput } from "./calculate.full.testCase";
import {
  singleAllocationExpected,
  singleAllocationInput,
} from "./calculate.singleAllocation.testCase";

interface TestCase {
  title: string;
  input: CalculatorInput;
  expected: CalculatorOutput;
}

const testCases: TestCase[] = [
  {
    title: "empty",
    input: emptyInput,
    expected: emptyExpected,
  },
  {
    title: "single allocation",
    input: singleAllocationInput,
    expected: singleAllocationExpected,
  },
  {
    title: "full",
    input: fullInput,
    expected: fullExpected,
  },
];

describe("calculate", () => {
  testCases.forEach(({ title, input, expected }) => {
    test(title, () => {
      expect(calculate(input)).toEqual(expected);
    });
  });
});
