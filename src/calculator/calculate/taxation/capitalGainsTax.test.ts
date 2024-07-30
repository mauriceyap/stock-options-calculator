import { describe, expect, test } from "vitest";

import { formatGBP } from "../../../common/formatGBP";

import { roundToDP } from "../utils";

import {
  badrCapitalGainsTaxPayable,
  nonBADRCapitalGainsTaxPayable,
} from "./capitalGainsTax";

const COMPARISON_DECIMAL_PLACES = 4;

interface NonBADRTestCase {
  inputGrossGain: number;
  inputGrossIncome: number;
  expected: number;
}

const nonBADRTestCases: NonBADRTestCase[] = [
  { inputGrossGain: -1, inputGrossIncome: -1, expected: 0 },
  { inputGrossGain: 0, inputGrossIncome: 0, expected: 0 },
  { inputGrossGain: 6000, inputGrossIncome: 0, expected: 0 },
  { inputGrossGain: 6000, inputGrossIncome: 100000, expected: 0 },
  { inputGrossGain: 6001, inputGrossIncome: 0, expected: 0.1 },
  { inputGrossGain: 43700, inputGrossIncome: 0, expected: 3770 },
  { inputGrossGain: 43701, inputGrossIncome: 0, expected: 3770.2 },
  { inputGrossGain: 12600, inputGrossIncome: 20000, expected: 660 }, // HMRC website example
  { inputGrossGain: 6001, inputGrossIncome: 37700, expected: 0.1 },
  { inputGrossGain: 6001, inputGrossIncome: 37701, expected: 0.2 },
];

describe("nonBADRCapitalGainsTaxPayable", () => {
  nonBADRTestCases.forEach(({ inputGrossGain, inputGrossIncome, expected }) => {
    test(`gain of ${formatGBP(inputGrossGain)} with income of ${formatGBP(
      inputGrossIncome
    )} in tax year 2023/24`, () => {
      expect(
        roundToDP(
          nonBADRCapitalGainsTaxPayable(
            inputGrossGain,
            inputGrossIncome,
            "2023/24"
          ),
          COMPARISON_DECIMAL_PLACES
        )
      ).toEqual(expected);
    });
  });
});

interface badrTestCase {
  inputGrossGain: number;
  inputGrossIncome: number;
  expected: number;
}

const badrTestCases: badrTestCase[] = [
  { inputGrossGain: -1, inputGrossIncome: -1, expected: 0 },
  { inputGrossGain: 0, inputGrossIncome: 0, expected: 0 },
  { inputGrossGain: 6000, inputGrossIncome: 0, expected: 0 },
  { inputGrossGain: 6000, inputGrossIncome: 100000, expected: 0 },
  { inputGrossGain: 6001, inputGrossIncome: 0, expected: 0.1 },
  { inputGrossGain: 6001, inputGrossIncome: 1000000, expected: 0.1 },
  { inputGrossGain: 106000, inputGrossIncome: 1000000, expected: 10000 },
  { inputGrossGain: 1006000, inputGrossIncome: 1000000, expected: 100000 },
  { inputGrossGain: 1006000, inputGrossIncome: 37700, expected: 100000 },
  { inputGrossGain: 1006001, inputGrossIncome: 37700, expected: 100000.1 },
  { inputGrossGain: 1006001, inputGrossIncome: 37701, expected: 100000.2 },
];

describe("badrCapitalGainsTaxPayable", () => {
  badrTestCases.forEach(({ inputGrossGain, inputGrossIncome, expected }) => {
    test(`gain of ${formatGBP(inputGrossGain)} with income of ${formatGBP(
      inputGrossIncome
    )} in tax year 2023/24`, () => {
      expect(
        roundToDP(
          badrCapitalGainsTaxPayable(
            inputGrossGain,
            inputGrossIncome,
            "2023/24"
          ),
          COMPARISON_DECIMAL_PLACES
        )
      ).toEqual(expected);
    });
  });
});
