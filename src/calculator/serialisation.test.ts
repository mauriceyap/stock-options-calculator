import { describe, expect, it } from "vitest";

import { defaultValues } from "./defaultValues";
import {
  calculatorInputFromJSON,
  calculatorInputToJSON,
} from "./serialisation";

describe("calculatorInputFromJSON", () => {
  it("converts empty JSON to null", () => {
    expect(calculatorInputFromJSON("")).toEqual(null);
  });

  it("converts invalid JSON to null", () => {
    expect(calculatorInputFromJSON("x6/'sgh")).toEqual(null);
  });

  it("converts JSON empty object to null", () => {
    expect(calculatorInputFromJSON("{}")).toEqual(null);
  });

  it("converts JSON valid populated CalculatorInput", () => {
    expect(
      calculatorInputFromJSON(`
{
    "companies": [
        {
            "predictedExitEventSharePriceHigh": 120,
            "predictedExitEventSharePriceMedium": 50,
            "predictedExitEventSharePriceLow": 25,
            "predictedExitEventDate": "2029-11-01T00:00:00.000Z",
            "leavingDate": "2029-11-22T00:00:00.000Z",
            "name": "Somewhere",
            "allocations": [
                {
                    "vestingCommencement": "2023-11-01T00:00:00.000Z",
                    "totalOptions": 100,
                    "expiry": "2033-11-01T00:00:00.000Z",
                    "optionsImmediateVesting": 400,
                    "optionsVestingAtExit": 400,
                    "vestingPeriodMonths": 48,
                    "vestingCliffMonths": 12,
                    "strikePrice": 0.02,
                    "shareScheme": "none"
                },
                {
                    "vestingCommencement": "2023-11-01T00:00:00.000Z",
                    "totalOptions": 100,
                    "expiry": "2033-11-01T00:00:00.000Z",
                    "optionsImmediateVesting": 0,
                    "optionsVestingAtExit": 0,
                    "vestingPeriodMonths": 48,
                    "vestingCliffMonths": 0,
                    "strikePrice": 0.02,
                    "shareScheme": "none"
                }
            ]
        },
        {
            "name": "Somewhere else",
            "allocations": [],
            "leavingDate": null,
            "predictedExitEventDate": "2029-11-01T00:00:00.000Z",
            "predictedExitEventSharePriceLow": 2,
            "predictedExitEventSharePriceMedium": 3.5,
            "predictedExitEventSharePriceHigh": 5
        }
    ],
    "taxationConfig": {
        "otherIncome": 300000,
        "studentRepaymentLoanTypes": {
            "plan1": false,
            "plan2": false,
            "plan4": true,
            "plan5": false,
            "postgraduate": false
        },
        "taxYearConfig": {
            "incomeTax": {
                "personalAllowance": 15000,
                "personalAllowanceReductionThreshold": 150000,
                "personalAllowanceReductionRate": 100,
                "basicRate": 0.21,
                "basicRateLimit": 42500,
                "higherRate": 0.4,
                "higherRateLimit": 160000,
                "additionalRate": 0.42
            },
            "employeeNationalInsurance": {
                "primaryThreshold": 15000,
                "primaryRate": 0.08,
                "upperEarningsLimit": 57500,
                "reducedRate": 0.025
            },
            "capitalGainsTax": {
                "exemptAmountLimit": 1000,
                "lowerRate": 0.15,
                "higherRate": 0.42,
                "businessAssetDisposalReliefRate": 0.2,
                "businessAssetDisposalReliefLimit": 1500000
            },
            "studentLoanRepayments": {
                "plan1": {
                    "threshold": 25000,
                    "rate": 0.1
                },
                "plan2": {
                    "threshold": 25000,
                    "rate": 0.08
                },
                "plan4": {
                    "threshold": 25000,
                    "rate": 0.08
                },
                "plan5": {
                    "threshold": 28000,
                    "rate": 0.08
                },
                "postgraduate": {
                    "threshold": 31000,
                    "rate": 0.1
                }
            }
        }
    }
}    
    `)
    ).toEqual({
      companies: [
        {
          predictedExitEventSharePriceHigh: 120,
          predictedExitEventSharePriceMedium: 50,
          predictedExitEventSharePriceLow: 25,
          predictedExitEventDate: new Date("2029-11-01T00:00:00.000Z"),
          leavingDate: new Date("2029-11-22T00:00:00.000Z"),
          name: "Somewhere",
          allocations: [
            {
              vestingCommencement: new Date("2023-11-01T00:00:00.000Z"),
              totalOptions: 100,
              expiry: new Date("2033-11-01T00:00:00.000Z"),
              optionsImmediateVesting: 400,
              optionsVestingAtExit: 400,
              vestingPeriodMonths: 48,
              vestingCliffMonths: 12,
              strikePrice: 0.02,
              shareScheme: "none",
            },
            {
              vestingCommencement: new Date("2023-11-01T00:00:00.000Z"),
              totalOptions: 100,
              expiry: new Date("2033-11-01T00:00:00.000Z"),
              optionsImmediateVesting: 0,
              optionsVestingAtExit: 0,
              vestingPeriodMonths: 48,
              vestingCliffMonths: 0,
              strikePrice: 0.02,
              shareScheme: "none",
            },
          ],
        },
        {
          name: "Somewhere else",
          allocations: [],
          leavingDate: null,
          predictedExitEventDate: new Date("2029-11-01T00:00:00.000Z"),
          predictedExitEventSharePriceLow: 2,
          predictedExitEventSharePriceMedium: 3.5,
          predictedExitEventSharePriceHigh: 5,
        },
      ],
      taxationConfig: {
        otherIncome: 300000,
        studentRepaymentLoanTypes: {
          plan1: false,
          plan2: false,
          plan4: true,
          plan5: false,
          postgraduate: false,
        },
        taxYearConfig: {
          incomeTax: {
            personalAllowance: 15000,
            personalAllowanceReductionThreshold: 150000,
            personalAllowanceReductionRate: 100,
            basicRate: 0.21,
            basicRateLimit: 42500,
            higherRate: 0.4,
            higherRateLimit: 160000,
            additionalRate: 0.42,
          },
          employeeNationalInsurance: {
            primaryThreshold: 15000,
            primaryRate: 0.08,
            upperEarningsLimit: 57500,
            reducedRate: 0.025,
          },
          capitalGainsTax: {
            exemptAmountLimit: 1000,
            lowerRate: 0.15,
            higherRate: 0.42,
            businessAssetDisposalReliefRate: 0.2,
            businessAssetDisposalReliefLimit: 1500000,
          },
          studentLoanRepayments: {
            plan1: {
              threshold: 25000,
              rate: 0.1,
            },
            plan2: {
              threshold: 25000,
              rate: 0.08,
            },
            plan4: {
              threshold: 25000,
              rate: 0.08,
            },
            plan5: {
              threshold: 28000,
              rate: 0.08,
            },
            postgraduate: {
              threshold: 31000,
              rate: 0.1,
            },
          },
        },
      },
    });
  });
});

describe("calculatorInputToJSON", () => {
  it("converts default values", () => {
    expect(calculatorInputToJSON(defaultValues)).toEqual(
      '{"companies":[],"taxationConfig":{"otherIncome":0,"studentRepaymentLoanTypes":{"plan1":false,"plan2":false,"plan4":false,"plan5":false,"postgraduate":false},"taxYearConfig":{"incomeTax":{"personalAllowance":12570,"personalAllowanceReductionThreshold":100000,"personalAllowanceReductionRate":2,"basicRate":0.2,"basicRateLimit":37700,"higherRate":0.4,"higherRateLimit":125140,"additionalRate":0.45},"employeeNationalInsurance":{"primaryThreshold":12576,"primaryRate":0.08,"upperEarningsLimit":50268,"reducedRate":0.02},"capitalGainsTax":{"exemptAmountLimit":3000,"lowerRate":0.18,"higherRate":0.24,"businessAssetDisposalReliefRate":0.1,"businessAssetDisposalReliefLimit":1000000},"studentLoanRepayments":{"plan1":{"threshold":24990,"rate":0.09},"plan2":{"threshold":27295,"rate":0.09},"plan4":{"threshold":31395,"rate":0.09},"plan5":{"threshold":25000,"rate":0.09},"postgraduate":{"threshold":21000,"rate":0.06}}}}}'
    );
  });

  it("converts populated CalculatorInput", () => {
    expect(
      calculatorInputToJSON({
        companies: [
          {
            predictedExitEventSharePriceHigh: 120,
            predictedExitEventSharePriceMedium: 50,
            predictedExitEventSharePriceLow: 25,
            predictedExitEventDate: new Date("2029-11-01T00:00:00.000Z"),
            leavingDate: new Date("2029-11-22T00:00:00.000Z"),
            name: "Somewhere",
            allocations: [
              {
                vestingCommencement: new Date("2023-11-01T00:00:00.000Z"),
                totalOptions: 100,
                expiry: new Date("2033-11-01T00:00:00.000Z"),
                optionsImmediateVesting: 400,
                optionsVestingAtExit: 400,
                vestingPeriodMonths: 48,
                vestingCliffMonths: 12,
                strikePrice: 0.02,
                shareScheme: "none",
              },
              {
                vestingCommencement: new Date("2023-11-01T00:00:00.000Z"),
                totalOptions: 100,
                expiry: new Date("2033-11-01T00:00:00.000Z"),
                optionsImmediateVesting: 0,
                optionsVestingAtExit: 0,
                vestingPeriodMonths: 48,
                vestingCliffMonths: 0,
                strikePrice: 0.02,
                shareScheme: "none",
              },
            ],
          },
          {
            name: "Somewhere else",
            allocations: [],
            leavingDate: null,
            predictedExitEventDate: new Date("2029-11-01T00:00:00.000Z"),
            predictedExitEventSharePriceLow: 2,
            predictedExitEventSharePriceMedium: 3.5,
            predictedExitEventSharePriceHigh: 5,
          },
        ],
        taxationConfig: {
          otherIncome: 300000,
          studentRepaymentLoanTypes: {
            plan1: false,
            plan2: false,
            plan4: true,
            plan5: false,
            postgraduate: false,
          },
          taxYearConfig: {
            incomeTax: {
              personalAllowance: 15000,
              personalAllowanceReductionThreshold: 150000,
              personalAllowanceReductionRate: 100,
              basicRate: 0.21,
              basicRateLimit: 42500,
              higherRate: 0.4,
              higherRateLimit: 160000,
              additionalRate: 0.42,
            },
            employeeNationalInsurance: {
              primaryThreshold: 15000,
              primaryRate: 0.08,
              upperEarningsLimit: 57500,
              reducedRate: 0.025,
            },
            capitalGainsTax: {
              exemptAmountLimit: 1000,
              lowerRate: 0.15,
              higherRate: 0.42,
              businessAssetDisposalReliefRate: 0.2,
              businessAssetDisposalReliefLimit: 1500000,
            },
            studentLoanRepayments: {
              plan1: {
                threshold: 25000,
                rate: 0.1,
              },
              plan2: {
                threshold: 25000,
                rate: 0.08,
              },
              plan4: {
                threshold: 25000,
                rate: 0.08,
              },
              plan5: {
                threshold: 28000,
                rate: 0.08,
              },
              postgraduate: {
                threshold: 31000,
                rate: 0.1,
              },
            },
          },
        },
      })
    ).toEqual(
      '{"companies":[{"predictedExitEventSharePriceHigh":120,"predictedExitEventSharePriceMedium":50,"predictedExitEventSharePriceLow":25,"predictedExitEventDate":"2029-11-01T00:00:00.000Z","leavingDate":"2029-11-22T00:00:00.000Z","name":"Somewhere","allocations":[{"vestingCommencement":"2023-11-01T00:00:00.000Z","totalOptions":100,"expiry":"2033-11-01T00:00:00.000Z","optionsImmediateVesting":400,"optionsVestingAtExit":400,"vestingPeriodMonths":48,"vestingCliffMonths":12,"strikePrice":0.02,"shareScheme":"none"},{"vestingCommencement":"2023-11-01T00:00:00.000Z","totalOptions":100,"expiry":"2033-11-01T00:00:00.000Z","optionsImmediateVesting":0,"optionsVestingAtExit":0,"vestingPeriodMonths":48,"vestingCliffMonths":0,"strikePrice":0.02,"shareScheme":"none"}]},{"name":"Somewhere else","allocations":[],"leavingDate":null,"predictedExitEventDate":"2029-11-01T00:00:00.000Z","predictedExitEventSharePriceLow":2,"predictedExitEventSharePriceMedium":3.5,"predictedExitEventSharePriceHigh":5}],"taxationConfig":{"otherIncome":300000,"studentRepaymentLoanTypes":{"plan1":false,"plan2":false,"plan4":true,"plan5":false,"postgraduate":false},"taxYearConfig":{"incomeTax":{"personalAllowance":15000,"personalAllowanceReductionThreshold":150000,"personalAllowanceReductionRate":100,"basicRate":0.21,"basicRateLimit":42500,"higherRate":0.4,"higherRateLimit":160000,"additionalRate":0.42},"employeeNationalInsurance":{"primaryThreshold":15000,"primaryRate":0.08,"upperEarningsLimit":57500,"reducedRate":0.025},"capitalGainsTax":{"exemptAmountLimit":1000,"lowerRate":0.15,"higherRate":0.42,"businessAssetDisposalReliefRate":0.2,"businessAssetDisposalReliefLimit":1500000},"studentLoanRepayments":{"plan1":{"threshold":25000,"rate":0.1},"plan2":{"threshold":25000,"rate":0.08},"plan4":{"threshold":25000,"rate":0.08},"plan5":{"threshold":28000,"rate":0.08},"postgraduate":{"threshold":31000,"rate":0.1}}}}}'
    );
  });
});
