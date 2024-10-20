import { TAX_YEAR_CONFIGS } from "../../config/tax";

import { CalculatorInput } from "../types/inputs";
import { CalculatorOutput } from "../types/outputs";

export const fullInput: CalculatorInput = {
  taxationConfig: {
    otherIncome: 0,
    taxYearConfig: TAX_YEAR_CONFIGS["2023/24"],
    studentRepaymentLoanTypes: {
      plan1: false,
      plan2: true,
      plan4: false,
      plan5: false,
      postgraduate: true,
    },
  },
  companies: [
    {
      name: "ChainBlock",
      allocations: [
        {
          vestingCommencement: new Date(2018, 2, 29),
          totalOptions: 300,
          expiry: new Date(2029, 2, 29),

          optionsImmediateVesting: 300,
          optionsVestingAtExit: 0,
          vestingPeriodMonths: 12,
          vestingCliffMonths: 0,

          strikePrice: 0.02,
          shareScheme: "emi",
        },
      ],
      leavingDate: new Date(2018, 8, 21),
      predictedExitEventDate: new Date(2026, 3, 12),
      predictedExitEventSharePriceLow: 10,
      predictedExitEventSharePriceMedium: 25,
      predictedExitEventSharePriceHigh: 40,
    },
    {
      name: "Green Green Energy Generation",
      allocations: [
        {
          vestingCommencement: new Date(2019, 7, 21),
          totalOptions: 2000,
          expiry: new Date(2029, 7, 21),

          optionsImmediateVesting: 0,
          optionsVestingAtExit: 500,
          vestingPeriodMonths: 48,
          vestingCliffMonths: 12,

          strikePrice: 1.6,
          shareScheme: "emi",
        },
        {
          vestingCommencement: new Date(2021, 11, 1),
          totalOptions: 2000,
          expiry: new Date(2041, 11, 1),

          optionsImmediateVesting: 0,
          optionsVestingAtExit: 0,
          vestingPeriodMonths: 48,
          vestingCliffMonths: 0,

          strikePrice: 8,
          shareScheme: "none",
        },
        {
          vestingCommencement: new Date(2022, 5, 2),
          totalOptions: 500,
          expiry: new Date(2042, 5, 2),

          optionsImmediateVesting: 100,
          optionsVestingAtExit: 100,
          vestingPeriodMonths: 12,
          vestingCliffMonths: 6,

          strikePrice: 20,
          shareScheme: "none",
        },
      ],
      leavingDate: new Date(2024, 9, 2),
      predictedExitEventDate: new Date(2027, 3, 12),
      predictedExitEventSharePriceLow: 80,
      predictedExitEventSharePriceMedium: 120,
      predictedExitEventSharePriceHigh: 400,
    },
  ],
};

export const fullExpected: CalculatorOutput = {
  timeSeries: [
    [
      new Date(2018, 2, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 300,
                grossGain: { low: 2994, medium: 7494, high: 11994 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2994, medium: 7494, high: 11994 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2018, 3, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2018, 4, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2018, 5, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2018, 6, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2018, 7, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2018, 8, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2018, 9, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2018, 10, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2018, 11, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2019, 0, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2019, 1, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2019, 2, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2019, 3, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2019, 4, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2019, 5, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2019, 6, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2019, 7, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2019, 8, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 2430.4, medium: 3303.36, high: 11115.36 },
      },
    ],
    [
      new Date(2019, 9, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 4860.8, medium: 7340.8, high: 24700.8 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 4860.8, medium: 7340.8, high: 24700.8 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 4675.32, medium: 6606.72, high: 22230.72 },
      },
    ],
    [
      new Date(2019, 10, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 7291.2, medium: 11011.2, high: 37051.2 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: {
          low: 7291.2,
          medium: 11011.2,
          high: 37051.2,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 6862.68, medium: 9910.08, high: 33346.08 },
      },
    ],
    [
      new Date(2019, 11, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 9721.6, medium: 14681.6, high: 49401.6 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: {
          low: 9721.6,
          medium: 14681.6,
          high: 49401.6,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: {
          low: 9050.04,
          medium: 13213.44,
          high: 44461.44,
        },
      },
    ],
    [
      new Date(2020, 0, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 12152, medium: 18352, high: 61752 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 12152, medium: 18352, high: 61752 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 11237.4, medium: 16516.8, high: 55576.8 },
      },
    ],
    [
      new Date(2020, 1, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 14582.4, medium: 22022.4, high: 74102.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: {
          low: 14582.4,
          medium: 22022.4,
          high: 74102.4,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: {
          low: 13424.76,
          medium: 19820.16,
          high: 66692.16,
        },
      },
    ],
    [
      new Date(2020, 2, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 17012.8, medium: 25692.8, high: 86452.8 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: {
          low: 17012.8,
          medium: 25692.8,
          high: 86452.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: {
          low: 15612.12,
          medium: 23123.52,
          high: 77807.52,
        },
      },
    ],
    [
      new Date(2020, 3, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 19443.2, medium: 29363.2, high: 98803.2 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: {
          low: 19443.2,
          medium: 29363.2,
          high: 98803.2,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: {
          low: 17799.48,
          medium: 26426.88,
          high: 88922.88,
        },
      },
    ],
    [
      new Date(2020, 4, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 21873.6, medium: 33033.6, high: 111153.6 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: {
          low: 21873.6,
          medium: 33033.6,
          high: 111153.6,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: {
          low: 19986.84,
          medium: 29730.24,
          high: 100038.24,
        },
      },
    ],
    [
      new Date(2020, 5, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 24304, medium: 36704, high: 123504 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 24304, medium: 36704, high: 123504 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: { low: 22174.2, medium: 33033.6, high: 111153.6 },
      },
    ],
    [
      new Date(2020, 6, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 26734.4, medium: 40374.4, high: 135854.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: {
          low: 26734.4,
          medium: 40374.4,
          high: 135854.4,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: {
          low: 24361.56,
          medium: 36336.96,
          high: 122268.96,
        },
      },
    ],
    [
      new Date(2020, 7, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 2994, medium: 7494, high: 11994 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 2994, medium: 7494, high: 11994 },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: {
          low: 29164.8,
          medium: 44044.8,
          high: 148204.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 149.4,
          high: 599.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7344.6, high: 11394.6 },
        annualNetGain: {
          low: 26548.92,
          medium: 39640.32,
          high: 133384.32,
        },
      },
    ],
    [
      new Date(2020, 8, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 5424.4, medium: 11164.4, high: 24344.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 5424.4,
          medium: 11164.4,
          high: 24344.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: {
          low: 29164.8,
          medium: 44044.8,
          high: 148204.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 516.44,
          high: 1834.44,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 5424.4,
          medium: 10647.96,
          high: 22509.96,
        },
        annualNetGain: {
          low: 26305.88,
          medium: 39640.32,
          high: 133384.32,
        },
      },
    ],
    [
      new Date(2020, 9, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 7854.8, medium: 14834.8, high: 36694.8 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 7854.8,
          medium: 14834.8,
          high: 36694.8,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: {
          low: 29164.8,
          medium: 44044.8,
          high: 148204.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 185.48,
          medium: 883.48,
          high: 3069.48,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 7669.32,
          medium: 13951.32,
          high: 33625.32,
        },
        annualNetGain: {
          low: 26248.32,
          medium: 39640.32,
          high: 133384.32,
        },
      },
    ],
    [
      new Date(2020, 10, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 10285.2, medium: 18505.2, high: 49045.2 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 10285.2,
          medium: 18505.2,
          high: 49045.2,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: {
          low: 29164.8,
          medium: 44044.8,
          high: 148204.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 428.52,
          medium: 1250.52,
          high: 4304.52,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 9856.68,
          medium: 17254.68,
          high: 44740.68,
        },
        annualNetGain: {
          low: 26248.32,
          medium: 39640.32,
          high: 133384.32,
        },
      },
    ],
    [
      new Date(2020, 11, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 12715.6, medium: 22175.6, high: 61395.6 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 12715.6,
          medium: 22175.6,
          high: 61395.6,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: {
          low: 29164.8,
          medium: 44044.8,
          high: 148204.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 671.56,
          medium: 1617.56,
          high: 5539.56,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 12044.04,
          medium: 20558.04,
          high: 55856.04,
        },
        annualNetGain: {
          low: 26248.32,
          medium: 39640.32,
          high: 133384.32,
        },
      },
    ],
    [
      new Date(2021, 0, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 15146, medium: 25846, high: 73746 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 15146, medium: 25846, high: 73746 },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        annualGrossGain: {
          low: 32188.8,
          medium: 48748.8,
          high: 164668.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 914.6,
          medium: 1984.6,
          high: 6774.6,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 14231.4,
          medium: 23861.4,
          high: 66971.4,
        },
        annualNetGain: {
          low: 29272.32,
          medium: 44344.32,
          high: 148680.72,
        },
      },
    ],
    [
      new Date(2021, 1, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 17576.4, medium: 29516.4, high: 86096.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 17576.4,
          medium: 29516.4,
          high: 86096.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 6048, medium: 9408, high: 32928 },
        },
        annualGrossGain: {
          low: 35212.8,
          medium: 53452.8,
          high: 181132.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 1157.64,
          medium: 2351.64,
          high: 8009.64,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 16418.76,
          medium: 27164.76,
          high: 78086.76,
        },
        annualNetGain: {
          low: 32296.32,
          medium: 49048.32,
          high: 158982.87,
        },
      },
    ],
    [
      new Date(2021, 2, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 20006.8, medium: 33186.8, high: 98446.8 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 20006.8,
          medium: 33186.8,
          high: 98446.8,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 9072, medium: 14112, high: 49392 },
        },
        annualGrossGain: {
          low: 38236.8,
          medium: 58156.8,
          high: 197596.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 1400.68,
          medium: 2718.68,
          high: 9244.68,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 18606.12,
          medium: 30468.12,
          high: 89202.12,
        },
        annualNetGain: {
          low: 35320.32,
          medium: 53290.32,
          high: 168038.07,
        },
      },
    ],
    [
      new Date(2021, 3, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 22437.2, medium: 36857.2, high: 110797.2 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 22437.2,
          medium: 36857.2,
          high: 110797.2,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 12096, medium: 18816, high: 65856 },
        },
        annualGrossGain: {
          low: 41260.8,
          medium: 62860.8,
          high: 214060.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 1643.72,
          medium: 3085.72,
          high: 10479.72,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 20793.48,
          medium: 33771.48,
          high: 100317.48,
        },
        annualNetGain: {
          low: 38344.32,
          medium: 56583.12,
          high: 175223.11,
        },
      },
    ],
    [
      new Date(2021, 4, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 24867.6, medium: 40527.6, high: 123147.6 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 24867.6,
          medium: 40527.6,
          high: 123147.6,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 15120, medium: 23520, high: 82320 },
        },
        annualGrossGain: {
          low: 44284.8,
          medium: 67564.8,
          high: 230524.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 1886.76,
          medium: 3452.76,
          high: 11714.76,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 22980.84,
          medium: 37074.84,
          high: 111432.84,
        },
        annualNetGain: {
          low: 40603.92,
          medium: 59724.72,
          high: 182302.63,
        },
      },
    ],
    [
      new Date(2021, 5, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 27298, medium: 44198, high: 135498 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 27298,
          medium: 44198,
          high: 135498,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 24144, medium: 38224, high: 136784 },
        },
        annualGrossGain: {
          low: 53308.8,
          medium: 82268.8,
          high: 284988.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 2129.8,
          medium: 3819.8,
          high: 12949.8,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 25168.2,
          medium: 40378.2,
          high: 122548.2,
        },
        annualNetGain: {
          low: 46732.08,
          medium: 68151.67,
          high: 200111.95,
        },
      },
    ],
    [
      new Date(2021, 6, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 29728.4, medium: 47868.4, high: 147848.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 29728.4,
          medium: 47868.4,
          high: 147848.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 27168, medium: 42928, high: 153248 },
        },
        annualGrossGain: {
          low: 56332.8,
          medium: 86972.8,
          high: 301452.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 2372.84,
          medium: 4186.84,
          high: 14184.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 27355.56,
          medium: 43681.56,
          high: 133663.56,
        },
        annualNetGain: {
          low: 48667.44,
          medium: 70738.87,
          high: 206368.27,
        },
      },
    ],
    [
      new Date(2021, 7, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 32158.8, medium: 51538.8, high: 160198.8 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 32158.8,
          medium: 51538.8,
          high: 160198.8,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 30192, medium: 47632, high: 169712 },
        },
        annualGrossGain: {
          low: 59356.8,
          medium: 91676.8,
          high: 317916.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 2615.88,
          medium: 4553.88,
          high: 15419.88,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 29542.92,
          medium: 46984.92,
          high: 144778.92,
        },
        annualNetGain: {
          low: 50342.07,
          medium: 73326.07,
          high: 212624.59,
        },
      },
    ],
    [
      new Date(2021, 8, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 34589.2, medium: 55209.2, high: 172549.2 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 34589.2,
          medium: 55209.2,
          high: 172549.2,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 33216, medium: 52336, high: 186176 },
        },
        annualGrossGain: {
          low: 62380.8,
          medium: 96380.8,
          high: 334380.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 2858.92,
          medium: 4920.92,
          high: 16654.92,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 31730.28,
          medium: 50288.28,
          high: 155894.28,
        },
        annualNetGain: {
          low: 52005.27,
          medium: 75665.51,
          high: 218880.91,
        },
      },
    ],
    [
      new Date(2021, 9, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 37019.6, medium: 58879.6, high: 184899.6 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 37019.6,
          medium: 58879.6,
          high: 184899.6,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 36240, medium: 57040, high: 202640 },
        },
        annualGrossGain: {
          low: 65404.8,
          medium: 101084.8,
          high: 350844.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 3101.96,
          medium: 5287.96,
          high: 17889.96,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 33917.64,
          medium: 53591.64,
          high: 167009.64,
        },
        annualNetGain: {
          low: 53668.47,
          medium: 77688.23,
          high: 225137.23,
        },
      },
    ],
    [
      new Date(2021, 10, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 39450, medium: 62550, high: 197250 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 39450,
          medium: 62550,
          high: 197250,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 39264, medium: 61744, high: 219104 },
        },
        annualGrossGain: {
          low: 68428.8,
          medium: 105788.8,
          high: 367308.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 3345,
          medium: 5655,
          high: 19125,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 36105, medium: 56895, high: 178125 },
        annualNetGain: {
          low: 55331.67,
          medium: 79710.95,
          high: 231393.55,
        },
      },
    ],
    [
      new Date(2021, 11, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 41880.4, medium: 66220.4, high: 209600.4 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: {
          low: 41880.4,
          medium: 66220.4,
          high: 209600.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 42288, medium: 66448, high: 235568 },
        },
        annualGrossGain: {
          low: 71452.8,
          medium: 110492.8,
          high: 383772.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 3588.04,
          medium: 6022.04,
          high: 20360.04,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 38292.36,
          medium: 60198.36,
          high: 189240.36,
        },
        annualNetGain: {
          low: 56994.87,
          medium: 81733.67,
          high: 237649.87,
        },
      },
    ],
    [
      new Date(2022, 0, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 44310.8, medium: 69890.8, high: 221950.8 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        cumulativeGrossGain: {
          low: 47334.8,
          medium: 74594.8,
          high: 238414.8,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 43788, medium: 68948, high: 245068 },
        },
        annualGrossGain: {
          low: 72952.8,
          medium: 112992.8,
          high: 393272.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 778.8 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 388.8,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 3831.08,
          medium: 6389.08,
          high: 21595.08,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 43503.72,
          medium: 68205.72,
          high: 215652.12,
        },
        annualNetGain: {
          low: 56459.07,
          medium: 80127.39,
          high: 232219.79,
        },
      },
    ],
    [
      new Date(2022, 1, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 46741.2, medium: 73561.2, high: 234301.2 },
          none: { low: 6048, medium: 9408, high: 32928 },
        },
        cumulativeGrossGain: {
          low: 52789.2,
          medium: 82969.2,
          high: 267229.2,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 45288, medium: 71448, high: 254568 },
        },
        annualGrossGain: {
          low: 74452.8,
          medium: 115492.8,
          high: 402772.8,
        },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 4071.6 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 2035.2,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 4074.12,
          medium: 6756.12,
          high: 22830.12,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 1222.65,
        },
        cumulativeNetGain: {
          low: 48715.08,
          medium: 76213.08,
          high: 237069.63,
        },
        annualNetGain: {
          low: 55795.51,
          medium: 78521.11,
          high: 231783.96,
        },
      },
    ],
    [
      new Date(2022, 2, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 49171.6, medium: 77231.6, high: 246651.6 },
          none: { low: 9072, medium: 14112, high: 49392 },
        },
        cumulativeGrossGain: {
          low: 58243.6,
          medium: 91343.6,
          high: 296043.6,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 46788, medium: 73948, high: 264068 },
        },
        annualGrossGain: {
          low: 75952.8,
          medium: 117992.8,
          high: 412272.8,
        },
        cumulativeIncomeTaxPayable: {
          low: 0,
          medium: 308.4,
          high: 7364.4,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 153.6,
          high: 3681.6,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 4317.16,
          medium: 7123.16,
          high: 24065.16,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 3692.25,
        },
        cumulativeNetGain: {
          low: 53926.44,
          medium: 83758.44,
          high: 257240.19,
        },
        annualNetGain: {
          low: 54716.83,
          medium: 77376.83,
          high: 232595.08,
        },
      },
    ],
    [
      new Date(2022, 3, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 51602, medium: 80902, high: 259002 },
          none: { low: 12096, medium: 18816, high: 65856 },
        },
        cumulativeGrossGain: {
          low: 63698,
          medium: 99718,
          high: 324858,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 48288, medium: 76448, high: 273568 },
        },
        annualGrossGain: {
          low: 77452.8,
          medium: 120492.8,
          high: 421772.8,
        },
        cumulativeIncomeTaxPayable: {
          low: 0,
          medium: 1249.2,
          high: 13774.4,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 624,
          high: 4080.96,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 4560.2,
          medium: 7490.2,
          high: 25300.2,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 6161.85,
        },
        cumulativeNetGain: {
          low: 59137.8,
          medium: 90354.6,
          high: 275540.59,
        },
        annualNetGain: {
          low: 53638.15,
          medium: 77181.75,
          high: 235276.36,
        },
      },
    ],
    [
      new Date(2022, 4, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 54032.4, medium: 84572.4, high: 271352.4 },
          none: { low: 15120, medium: 23520, high: 82320 },
        },
        cumulativeGrossGain: {
          low: 69152.4,
          medium: 108092.4,
          high: 353672.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 49788, medium: 78948, high: 283068 },
        },
        annualGrossGain: {
          low: 78952.8,
          medium: 122992.8,
          high: 431272.8,
        },
        cumulativeIncomeTaxPayable: {
          low: 510,
          medium: 2190,
          high: 20360,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 254.4,
          medium: 1094.4,
          high: 4410.24,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 4803.24,
          medium: 7857.24,
          high: 26535.24,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 151.2,
          high: 8631.45,
        },
        cumulativeNetGain: {
          low: 63584.76,
          medium: 96799.56,
          high: 293735.47,
        },
        annualNetGain: {
          low: 53323.87,
          medium: 76644.27,
          high: 238063.16,
        },
      },
    ],
    [
      new Date(2022, 5, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 100,
                grossGain: { low: 6000, medium: 10000, high: 38000 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 9024, medium: 14704, high: 54464 },
        },
        totalGrossGain: {
          low: 11454.4,
          medium: 18374.4,
          high: 66814.4,
        },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 56462.8, medium: 88242.8, high: 283702.8 },
          none: { low: 24144, medium: 38224, high: 136784 },
        },
        cumulativeGrossGain: {
          low: 80606.8,
          medium: 126466.8,
          high: 420486.8,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 45288, medium: 71448, high: 254568 },
        },
        annualGrossGain: {
          low: 74452.8,
          medium: 115492.8,
          high: 402772.8,
        },
        cumulativeIncomeTaxPayable: {
          low: 2314.8,
          medium: 5130.8,
          high: 47755.8,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 1156.8,
          medium: 2564.8,
          high: 5499.52,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 5046.28,
          medium: 8224.28,
          high: 27770.28,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 188.64,
          medium: 2017.05,
          high: 16801.05,
        },
        cumulativeNetGain: {
          low: 71900.28,
          medium: 108529.87,
          high: 322660.15,
        },
        annualNetGain: {
          low: 49141.03,
          medium: 69874.24,
          high: 230120.16,
        },
      },
    ],
    [
      new Date(2022, 6, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 58893.2, medium: 91913.2, high: 296053.2 },
          none: { low: 27168, medium: 42928, high: 153248 },
        },
        cumulativeGrossGain: {
          low: 86061.2,
          medium: 134841.2,
          high: 449301.2,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 45288, medium: 71448, high: 254568 },
        },
        annualGrossGain: {
          low: 74452.8,
          medium: 115492.8,
          high: 402772.8,
        },
        cumulativeIncomeTaxPayable: {
          low: 2919.6,
          medium: 6071.6,
          high: 55164.6,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 1459.2,
          medium: 3035.2,
          high: 5828.8,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 5289.32,
          medium: 8591.32,
          high: 29005.32,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 370.08,
          medium: 2722.65,
          high: 19270.65,
        },
        cumulativeNetGain: {
          low: 76023,
          medium: 114420.43,
          high: 340031.83,
        },
        annualNetGain: {
          low: 48505.99,
          medium: 68368.96,
          high: 230120.16,
        },
      },
    ],
    [
      new Date(2022, 7, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 61323.6, medium: 95583.6, high: 308403.6 },
          none: { low: 30192, medium: 47632, high: 169712 },
        },
        cumulativeGrossGain: {
          low: 91515.6,
          medium: 143215.6,
          high: 478115.6,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 45288, medium: 71448, high: 254568 },
        },
        annualGrossGain: {
          low: 74452.8,
          medium: 115492.8,
          high: 402772.8,
        },
        cumulativeIncomeTaxPayable: {
          low: 3524.4,
          medium: 7012.4,
          high: 62573.4,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 1761.6,
          medium: 3505.6,
          high: 6158.08,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 5532.36,
          medium: 8958.36,
          high: 30240.36,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 812.25,
          medium: 3428.25,
          high: 21740.25,
        },
        cumulativeNetGain: {
          low: 79884.99,
          medium: 120310.99,
          high: 357403.51,
        },
        annualNetGain: {
          low: 48131.68,
          medium: 66863.68,
          high: 230120.16,
        },
      },
    ],
    [
      new Date(2022, 8, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 63754, medium: 99254, high: 320754 },
          none: { low: 33216, medium: 52336, high: 186176 },
        },
        cumulativeGrossGain: {
          low: 96970,
          medium: 151590,
          high: 506930,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 26734.4, medium: 40374.4, high: 135854.4 },
          none: { low: 45288, medium: 71448, high: 254568 },
        },
        annualGrossGain: {
          low: 72022.4,
          medium: 111822.4,
          high: 390422.4,
        },
        cumulativeIncomeTaxPayable: {
          low: 4129.2,
          medium: 8366.4,
          high: 69982.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 2064,
          medium: 3810.56,
          high: 6487.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 5775.4,
          medium: 9325.4,
          high: 31475.4,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 1265.85,
          medium: 4133.85,
          high: 24209.85,
        },
        cumulativeNetGain: {
          low: 83735.55,
          medium: 125953.79,
          high: 374775.19,
        },
        annualNetGain: {
          low: 45581.44,
          medium: 62302.8,
          high: 219004.8,
        },
      },
    ],
    [
      new Date(2022, 9, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 66184.4, medium: 102924.4, high: 333104.4 },
          none: { low: 36240, medium: 57040, high: 202640 },
        },
        cumulativeGrossGain: {
          low: 102424.4,
          medium: 159964.4,
          high: 535744.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 24304, medium: 36704, high: 123504 },
          none: { low: 45288, medium: 71448, high: 254568 },
        },
        annualGrossGain: { low: 69592, medium: 108152, high: 378072 },
        cumulativeIncomeTaxPayable: {
          low: 4734,
          medium: 10248,
          high: 77391,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 2366.4,
          medium: 3904.64,
          high: 6816.64,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 6018.44,
          medium: 9692.44,
          high: 32710.44,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 1719.45,
          medium: 4839.45,
          high: 26679.45,
        },
        cumulativeNetGain: {
          low: 87586.11,
          medium: 131279.87,
          high: 392146.87,
        },
        annualNetGain: {
          low: 43031.2,
          medium: 58560.84,
          high: 207889.44,
        },
      },
    ],
    [
      new Date(2022, 10, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 68614.8, medium: 106594.8, high: 345454.8 },
          none: { low: 39264, medium: 61744, high: 219104 },
        },
        cumulativeGrossGain: {
          low: 107878.8,
          medium: 168338.8,
          high: 564558.8,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 21873.6, medium: 33033.6, high: 111153.6 },
          none: { low: 45288, medium: 71448, high: 254568 },
        },
        annualGrossGain: {
          low: 67161.6,
          medium: 104481.6,
          high: 365721.6,
        },
        cumulativeIncomeTaxPayable: {
          low: 5338.8,
          medium: 12129.6,
          high: 84799.8,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 2668.8,
          medium: 3998.72,
          high: 7145.92,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 6261.48,
          medium: 10059.48,
          high: 33945.48,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 2173.05,
          medium: 5545.05,
          high: 29149.05,
        },
        cumulativeNetGain: {
          low: 91436.67,
          medium: 136605.95,
          high: 409518.55,
        },
        annualNetGain: {
          low: 40480.96,
          medium: 55022.28,
          high: 196774.08,
        },
      },
    ],
    [
      new Date(2022, 11, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 71045.2, medium: 110265.2, high: 357805.2 },
          none: { low: 42288, medium: 66448, high: 235568 },
        },
        cumulativeGrossGain: {
          low: 113333.2,
          medium: 176713.2,
          high: 593373.2,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 19443.2, medium: 29363.2, high: 98803.2 },
          none: { low: 45288, medium: 71448, high: 254568 },
        },
        annualGrossGain: {
          low: 64731.2,
          medium: 100811.2,
          high: 353371.2,
        },
        cumulativeIncomeTaxPayable: {
          low: 5943.6,
          medium: 14011.2,
          high: 92208.6,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 2971.2,
          medium: 4092.8,
          high: 7475.2,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 6504.52,
          medium: 10426.52,
          high: 35180.52,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 2626.65,
          medium: 6250.65,
          high: 31618.65,
        },
        cumulativeNetGain: {
          low: 95287.23,
          medium: 141932.03,
          high: 426890.23,
        },
        annualNetGain: {
          low: 37930.72,
          medium: 51483.72,
          high: 185658.72,
        },
      },
    ],
    [
      new Date(2023, 0, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 25,
                grossGain: { low: 1500, medium: 2500, high: 9500 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 4524, medium: 7204, high: 25964 },
        },
        totalGrossGain: { low: 6954.4, medium: 10874.4, high: 38314.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 73475.6, medium: 113935.6, high: 370155.6 },
          none: { low: 46812, medium: 73652, high: 261532 },
        },
        cumulativeGrossGain: {
          low: 120287.6,
          medium: 187587.6,
          high: 631687.6,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 17012.8, medium: 25692.8, high: 86452.8 },
          none: { low: 43788, medium: 68948, high: 245068 },
        },
        annualGrossGain: {
          low: 60800.8,
          medium: 94640.8,
          high: 331520.8,
        },
        cumulativeIncomeTaxPayable: {
          low: 6848.4,
          medium: 16892.8,
          high: 103892.4,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 3423.6,
          medium: 4236.88,
          high: 7994.48,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 6747.56,
          medium: 10793.56,
          high: 36415.56,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 3305.25,
          medium: 7331.25,
          high: 35513.25,
        },
        cumulativeNetGain: {
          low: 99962.79,
          medium: 148333.11,
          high: 447871.91,
        },
        annualNetGain: {
          low: 34555.48,
          medium: 46870.16,
          high: 170933.36,
        },
      },
    ],
    [
      new Date(2023, 1, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 25,
                grossGain: { low: 1500, medium: 2500, high: 9500 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 4524, medium: 7204, high: 25964 },
        },
        totalGrossGain: { low: 6954.4, medium: 10874.4, high: 38314.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 75906, medium: 117606, high: 382506 },
          none: { low: 51336, medium: 80856, high: 287496 },
        },
        cumulativeGrossGain: {
          low: 127242,
          medium: 198462,
          high: 670002,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 14582.4, medium: 22022.4, high: 74102.4 },
          none: { low: 42288, medium: 66448, high: 235568 },
        },
        annualGrossGain: {
          low: 56870.4,
          medium: 88470.4,
          high: 309670.4,
        },
        cumulativeIncomeTaxPayable: {
          low: 7966.4,
          medium: 19774.4,
          high: 115576.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 3790.56,
          medium: 4380.96,
          high: 8513.76,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 6990.6,
          medium: 11160.6,
          high: 37650.6,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 3983.85,
          medium: 8411.85,
          high: 39407.85,
        },
        cumulativeNetGain: {
          low: 104510.59,
          medium: 154734.19,
          high: 468853.59,
        },
        annualNetGain: { low: 31308, medium: 42256.6, high: 156208 },
      },
    ],
    [
      new Date(2023, 2, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 25,
                grossGain: { low: 1500, medium: 2500, high: 9500 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 4524, medium: 7204, high: 25964 },
        },
        totalGrossGain: { low: 6954.4, medium: 10874.4, high: 38314.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 78336.4, medium: 121276.4, high: 394856.4 },
          none: { low: 55860, medium: 88060, high: 313460 },
        },
        cumulativeGrossGain: {
          low: 134196.4,
          medium: 209336.4,
          high: 708316.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 12152, medium: 18352, high: 61752 },
          none: { low: 40788, medium: 63948, high: 226068 },
        },
        annualGrossGain: { low: 52940, medium: 82300, high: 287820 },
        cumulativeIncomeTaxPayable: {
          low: 9776,
          medium: 22656,
          high: 127260,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 3881.04,
          medium: 4525.04,
          high: 9033.04,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 7233.64,
          medium: 11527.64,
          high: 38885.64,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 4662.45,
          medium: 9492.45,
          high: 43302.45,
        },
        cumulativeNetGain: {
          low: 108643.27,
          medium: 161135.27,
          high: 489835.27,
        },
        annualNetGain: {
          low: 28475.64,
          medium: 37643.04,
          high: 141482.64,
        },
      },
    ],
    [
      new Date(2023, 3, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 25,
                grossGain: { low: 1500, medium: 2500, high: 9500 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 4524, medium: 7204, high: 25964 },
        },
        totalGrossGain: { low: 6954.4, medium: 10874.4, high: 38314.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 80766.8, medium: 124946.8, high: 407206.8 },
          none: { low: 60384, medium: 95264, high: 339424 },
        },
        cumulativeGrossGain: {
          low: 141150.8,
          medium: 220210.8,
          high: 746630.8,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 9721.6, medium: 14681.6, high: 49401.6 },
          none: { low: 39288, medium: 61448, high: 216568 },
        },
        annualGrossGain: {
          low: 49009.6,
          medium: 76129.6,
          high: 265969.6,
        },
        cumulativeIncomeTaxPayable: {
          low: 11585.6,
          medium: 25537.6,
          high: 138943.8,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 3971.52,
          medium: 4669.12,
          high: 9552.32,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 7476.68,
          medium: 11894.68,
          high: 40120.68,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 5341.05,
          medium: 10573.05,
          high: 47197.05,
        },
        cumulativeNetGain: {
          low: 112775.95,
          medium: 167536.35,
          high: 510816.95,
        },
        annualNetGain: {
          low: 25643.28,
          medium: 33029.48,
          high: 126757.28,
        },
      },
    ],
    [
      new Date(2023, 4, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 25,
                grossGain: { low: 1500, medium: 2500, high: 9500 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 4524, medium: 7204, high: 25964 },
        },
        totalGrossGain: { low: 6954.4, medium: 10874.4, high: 38314.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 83197.2, medium: 128617.2, high: 419557.2 },
          none: { low: 64908, medium: 102468, high: 365388 },
        },
        cumulativeGrossGain: {
          low: 148105.2,
          medium: 231085.2,
          high: 784945.2,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 7291.2, medium: 11011.2, high: 37051.2 },
          none: { low: 37788, medium: 58948, high: 207068 },
        },
        annualGrossGain: {
          low: 45079.2,
          medium: 69959.2,
          high: 244119.2,
        },
        cumulativeIncomeTaxPayable: {
          low: 13395.2,
          medium: 28912.8,
          high: 150627.6,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4062,
          medium: 4813.2,
          high: 10071.6,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 7719.72,
          medium: 12261.72,
          high: 41355.72,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 6019.65,
          medium: 11653.65,
          high: 51091.65,
        },
        cumulativeNetGain: {
          low: 116908.63,
          medium: 173443.83,
          high: 531798.63,
        },
        annualNetGain: {
          low: 22271.72,
          medium: 28909.52,
          high: 112031.92,
        },
      },
    ],
    [
      new Date(2023, 5, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 25,
                grossGain: { low: 1500, medium: 2500, high: 9500 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 4524, medium: 7204, high: 25964 },
        },
        totalGrossGain: { low: 6954.4, medium: 10874.4, high: 38314.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 85627.6, medium: 132287.6, high: 431907.6 },
          none: { low: 69432, medium: 109672, high: 391352 },
        },
        cumulativeGrossGain: {
          low: 155059.6,
          medium: 241959.6,
          high: 823259.6,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 4860.8, medium: 7340.8, high: 24700.8 },
          none: { low: 36288, medium: 56448, high: 197568 },
        },
        annualGrossGain: {
          low: 41148.8,
          medium: 63788.8,
          high: 222268.8,
        },
        cumulativeIncomeTaxPayable: {
          low: 15204.8,
          medium: 33235.2,
          high: 162311.4,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4152.48,
          medium: 4957.28,
          high: 10590.88,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 7962.76,
          medium: 12628.76,
          high: 42590.76,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 6698.25,
          medium: 12734.25,
          high: 54986.25,
        },
        cumulativeNetGain: {
          low: 121041.31,
          medium: 178404.11,
          high: 552780.31,
        },
        annualNetGain: {
          low: 18834.56,
          medium: 25736.76,
          high: 97306.56,
        },
      },
    ],
    [
      new Date(2023, 6, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 88058, medium: 135958, high: 444258 },
          none: { low: 72456, medium: 114376, high: 407816 },
        },
        cumulativeGrossGain: {
          low: 160514,
          medium: 250334,
          high: 852074,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 36288, medium: 56448, high: 197568 },
        },
        annualGrossGain: {
          low: 38718.4,
          medium: 60118.4,
          high: 209918.4,
        },
        cumulativeIncomeTaxPayable: {
          low: 16414.4,
          medium: 36057.6,
          high: 169720.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4212.96,
          medium: 5051.36,
          high: 10920.16,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8205.8,
          medium: 12995.8,
          high: 43825.8,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 7151.85,
          medium: 13439.85,
          high: 57455.85,
        },
        cumulativeNetGain: {
          low: 124528.99,
          medium: 182789.39,
          high: 570151.99,
        },
        annualNetGain: { low: 16042.4, medium: 23139, high: 86191.2 },
      },
    ],
    [
      new Date(2023, 7, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 31,
                grossGain: {
                  low: 2430.4,
                  medium: 3670.4,
                  high: 12350.4,
                },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 5454.4, medium: 8374.4, high: 28814.4 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 75480, medium: 119080, high: 424280 },
        },
        cumulativeGrossGain: {
          low: 165968.4,
          medium: 258708.4,
          high: 880888.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 36288, medium: 56448, high: 197568 },
        },
        annualGrossGain: { low: 36288, medium: 56448, high: 197568 },
        cumulativeIncomeTaxPayable: {
          low: 17624,
          medium: 38880,
          high: 177129,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4273.44,
          medium: 5145.44,
          high: 11249.44,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 7605.45,
          medium: 14145.45,
          high: 59925.45,
        },
        cumulativeNetGain: {
          low: 128016.67,
          medium: 187174.67,
          high: 587523.67,
        },
        annualNetGain: {
          low: 13250.24,
          medium: 20541.24,
          high: 75075.84,
        },
      },
    ],
    [
      new Date(2023, 8, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 78504, medium: 123784, high: 440744 },
        },
        cumulativeGrossGain: {
          low: 168992.4,
          medium: 263412.4,
          high: 897352.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 36288, medium: 56448, high: 197568 },
        },
        annualGrossGain: { low: 36288, medium: 56448, high: 197568 },
        cumulativeIncomeTaxPayable: {
          low: 18833.6,
          medium: 41702.4,
          high: 184537.8,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4333.92,
          medium: 5239.52,
          high: 11578.72,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 8059.05,
          medium: 14851.05,
          high: 62395.05,
        },
        cumulativeNetGain: {
          low: 129316.99,
          medium: 188256.59,
          high: 593779.99,
        },
        annualNetGain: {
          low: 12645.44,
          medium: 21246.84,
          high: 75075.84,
        },
      },
    ],
    [
      new Date(2023, 9, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 81528, medium: 128488, high: 457208 },
        },
        cumulativeGrossGain: {
          low: 172016.4,
          medium: 268116.4,
          high: 913816.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 36288, medium: 56448, high: 197568 },
        },
        annualGrossGain: { low: 36288, medium: 56448, high: 197568 },
        cumulativeIncomeTaxPayable: {
          low: 20043.2,
          medium: 44022.6,
          high: 191946.6,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4394.4,
          medium: 5333.6,
          high: 11908,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 8512.65,
          medium: 15556.65,
          high: 64864.65,
        },
        cumulativeNetGain: {
          low: 130617.31,
          medium: 189840.71,
          high: 600036.31,
        },
        annualNetGain: {
          low: 12040.64,
          medium: 21450.24,
          high: 75075.84,
        },
      },
    ],
    [
      new Date(2023, 10, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 84552, medium: 133192, high: 473672 },
        },
        cumulativeGrossGain: {
          low: 175040.4,
          medium: 272820.4,
          high: 930280.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 33264, medium: 51744, high: 181104 },
        },
        annualGrossGain: { low: 33264, medium: 51744, high: 181104 },
        cumulativeIncomeTaxPayable: {
          low: 21252.8,
          medium: 46139.4,
          high: 199355.4,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4454.88,
          medium: 5427.68,
          high: 12237.28,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 8966.25,
          medium: 16262.25,
          high: 67334.25,
        },
        cumulativeNetGain: {
          low: 131917.63,
          medium: 191628.23,
          high: 606292.63,
        },
        annualNetGain: {
          low: 10740.32,
          medium: 19662.72,
          high: 68819.52,
        },
      },
    ],
    [
      new Date(2023, 11, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 87576, medium: 137896, high: 490136 },
        },
        cumulativeGrossGain: {
          low: 178064.4,
          medium: 277524.4,
          high: 946744.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 30240, medium: 47040, high: 164640 },
        },
        annualGrossGain: { low: 30240, medium: 47040, high: 164640 },
        cumulativeIncomeTaxPayable: {
          low: 22462.4,
          medium: 48256.2,
          high: 206764.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4515.36,
          medium: 5521.76,
          high: 12566.56,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 9419.85,
          medium: 16967.85,
          high: 69803.85,
        },
        cumulativeNetGain: {
          low: 133217.95,
          medium: 193415.75,
          high: 612548.95,
        },
        annualNetGain: { low: 9440, medium: 17875.2, high: 62563.2 },
      },
    ],
    [
      new Date(2024, 0, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 90600, medium: 142600, high: 506600 },
        },
        cumulativeGrossGain: {
          low: 181088.4,
          medium: 282228.4,
          high: 963208.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 27216, medium: 42336, high: 148176 },
        },
        annualGrossGain: { low: 27216, medium: 42336, high: 148176 },
        cumulativeIncomeTaxPayable: {
          low: 23672,
          medium: 50373,
          high: 214173,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4575.84,
          medium: 5615.84,
          high: 12895.84,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 9873.45,
          medium: 17673.45,
          high: 72273.45,
        },
        cumulativeNetGain: {
          low: 134518.27,
          medium: 195203.27,
          high: 618805.27,
        },
        annualNetGain: {
          low: 8139.68,
          medium: 16087.68,
          high: 56306.88,
        },
      },
    ],
    [
      new Date(2024, 1, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 93624, medium: 147304, high: 523064 },
        },
        cumulativeGrossGain: {
          low: 184112.4,
          medium: 286932.4,
          high: 979672.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 24192, medium: 37632, high: 131712 },
        },
        annualGrossGain: { low: 24192, medium: 37632, high: 131712 },
        cumulativeIncomeTaxPayable: {
          low: 24881.6,
          medium: 52489.8,
          high: 221581.8,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4636.32,
          medium: 5709.92,
          high: 13225.12,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 10327.05,
          medium: 18379.05,
          high: 74743.05,
        },
        cumulativeNetGain: {
          low: 135818.59,
          medium: 196990.79,
          high: 625061.59,
        },
        annualNetGain: {
          low: 6839.36,
          medium: 14300.16,
          high: 50050.56,
        },
      },
    ],
    [
      new Date(2024, 2, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 96648, medium: 152008, high: 539528 },
        },
        cumulativeGrossGain: {
          low: 187136.4,
          medium: 291636.4,
          high: 996136.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 21168, medium: 32928, high: 115248 },
        },
        annualGrossGain: { low: 21168, medium: 32928, high: 115248 },
        cumulativeIncomeTaxPayable: {
          low: 26091.2,
          medium: 54606.6,
          high: 228990.6,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4696.8,
          medium: 5804,
          high: 13554.4,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 10780.65,
          medium: 19084.65,
          high: 77212.65,
        },
        cumulativeNetGain: {
          low: 137118.91,
          medium: 198778.31,
          high: 631317.91,
        },
        annualNetGain: {
          low: 5539.04,
          medium: 12512.64,
          high: 43794.24,
        },
      },
    ],
    [
      new Date(2024, 3, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 99672, medium: 156712, high: 555992 },
        },
        cumulativeGrossGain: {
          low: 190160.4,
          medium: 296340.4,
          high: 1012600.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 18144, medium: 28224, high: 98784 },
        },
        annualGrossGain: { low: 18144, medium: 28224, high: 98784 },
        cumulativeIncomeTaxPayable: {
          low: 27300.8,
          medium: 56723.4,
          high: 236399.4,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4757.28,
          medium: 5898.08,
          high: 13883.68,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 11234.25,
          medium: 19790.25,
          high: 79682.25,
        },
        cumulativeNetGain: {
          low: 138419.23,
          medium: 200565.83,
          high: 637574.23,
        },
        annualNetGain: {
          low: 4238.72,
          medium: 10725.12,
          high: 37537.92,
        },
      },
    ],
    [
      new Date(2024, 4, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 102696, medium: 161416, high: 572456 },
        },
        cumulativeGrossGain: {
          low: 193184.4,
          medium: 301044.4,
          high: 1029064.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 15120, medium: 23520, high: 82320 },
        },
        annualGrossGain: { low: 15120, medium: 23520, high: 82320 },
        cumulativeIncomeTaxPayable: {
          low: 29049.6,
          medium: 58840.2,
          high: 243808.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4817.76,
          medium: 5992.16,
          high: 14212.96,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 11687.85,
          medium: 20495.85,
          high: 82151.85,
        },
        cumulativeNetGain: {
          low: 139180.35,
          medium: 202353.35,
          high: 643830.55,
        },
        annualNetGain: { low: 3477.6, medium: 8937.6, high: 31281.6 },
      },
    ],
    [
      new Date(2024, 5, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 105720, medium: 166120, high: 588920 },
        },
        cumulativeGrossGain: {
          low: 196208.4,
          medium: 305748.4,
          high: 1045528.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 12096, medium: 18816, high: 65856 },
        },
        annualGrossGain: { low: 12096, medium: 18816, high: 65856 },
        cumulativeIncomeTaxPayable: {
          low: 30864,
          medium: 60957,
          high: 251217,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4878.24,
          medium: 6086.24,
          high: 14542.24,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 12141.45,
          medium: 21201.45,
          high: 84621.45,
        },
        cumulativeNetGain: {
          low: 139875.87,
          medium: 204140.87,
          high: 650086.87,
        },
        annualNetGain: { low: 2782.08, medium: 7150.08, high: 25025.28 },
      },
    ],
    [
      new Date(2024, 6, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 108744, medium: 170824, high: 605384 },
        },
        cumulativeGrossGain: {
          low: 199232.4,
          medium: 310452.4,
          high: 1061992.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 9072, medium: 14112, high: 49392 },
        },
        annualGrossGain: { low: 9072, medium: 14112, high: 49392 },
        cumulativeIncomeTaxPayable: {
          low: 32678.4,
          medium: 63073.8,
          high: 258625.8,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4938.72,
          medium: 6180.32,
          high: 14871.52,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 12595.05,
          medium: 21907.05,
          high: 87091.05,
        },
        cumulativeNetGain: {
          low: 140571.39,
          medium: 205928.39,
          high: 656343.19,
        },
        annualNetGain: { low: 2086.56, medium: 5362.56, high: 18768.96 },
      },
    ],
    [
      new Date(2024, 7, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 111768, medium: 175528, high: 621848 },
        },
        cumulativeGrossGain: {
          low: 202256.4,
          medium: 315156.4,
          high: 1078456.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 6048, medium: 9408, high: 32928 },
        },
        annualGrossGain: { low: 6048, medium: 9408, high: 32928 },
        cumulativeIncomeTaxPayable: {
          low: 34492.8,
          medium: 65190.6,
          high: 266034.6,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4999.2,
          medium: 6274.4,
          high: 15200.8,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13048.65,
          medium: 22612.65,
          high: 89560.65,
        },
        cumulativeNetGain: {
          low: 141266.91,
          medium: 207715.91,
          high: 662599.51,
        },
        annualNetGain: { low: 1391.04, medium: 3575.04, high: 12512.64 },
      },
    ],
    [
      new Date(2024, 8, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 114792, medium: 180232, high: 638312 },
        },
        cumulativeGrossGain: {
          low: 205280.4,
          medium: 319860.4,
          high: 1094920.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        annualGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeIncomeTaxPayable: {
          low: 36307.2,
          medium: 67307.4,
          high: 273443.4,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5059.68,
          medium: 6368.48,
          high: 15530.08,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13502.25,
          medium: 23318.25,
          high: 92030.25,
        },
        cumulativeNetGain: {
          low: 141962.43,
          medium: 209503.43,
          high: 668855.83,
        },
        annualNetGain: { low: 695.52, medium: 1787.52, high: 6256.32 },
      },
    ],
    [
      new Date(2024, 9, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 42,
                grossGain: { low: 3024, medium: 4704, high: 16464 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 3024, medium: 4704, high: 16464 },
        },
        totalGrossGain: { low: 3024, medium: 4704, high: 16464 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2024, 10, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2024, 11, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 0, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 1, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 2, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 3, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 4, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 5, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 6, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 7, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 8, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 9, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 10, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 11, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 0, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 1, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 2, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 3, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 4, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 5, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 6, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 7, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 8, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 9, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 10, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 11, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2027, 0, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2027, 1, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2027, 2, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2027, 3, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
            ],
          },
          {
            allocations: [
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 90488.4, medium: 139628.4, high: 456608.4 },
          none: { low: 117816, medium: 184936, high: 654776 },
        },
        cumulativeGrossGain: {
          low: 208304.4,
          medium: 324564.4,
          high: 1111384.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 38121.6,
          medium: 69424.2,
          high: 280852.2,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5120.16,
          medium: 6462.56,
          high: 15859.36,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 8448.84,
          medium: 13362.84,
          high: 45060.84,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13955.85,
          medium: 24023.85,
          high: 94499.85,
        },
        cumulativeNetGain: {
          low: 142657.95,
          medium: 211290.95,
          high: 675112.15,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
  ],
  totals: {
    grossGain: { low: 208304.4, medium: 324564.4, high: 1111384.4 },
    netGain: { low: 142657.95, medium: 211290.95, high: 675112.15 },
    incomeTaxPayable: { low: 38121.6, medium: 69424.2, high: 280852.2 },
    employeeNationalInsurancePayable: {
      low: 5120.16,
      medium: 6462.56,
      high: 15859.36,
    },
    capitalGainsTaxPayable: {
      low: 8448.84,
      medium: 13362.84,
      high: 45060.84,
    },
    studentLoanRepaymentsPayable: {
      low: 13955.85,
      medium: 24023.85,
      high: 94499.85,
    },
  },
};
