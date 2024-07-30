import { CalculatorInput } from "../types/inputs";
import { CalculatorOutput } from "../types/outputs";

export const fullInput: CalculatorInput = {
  taxationConfig: {
    otherIncome: 0,
    taxYear: "2023/24",
    studentRepaymentLoanTypes: ["Plan 2", "Postgraduate"],
  },
  companyAllocationGrossGains: [
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2018, 12, 1),
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 2430.4, medium: 3670.4, high: 8618.02 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 4860.8, medium: 6661.96, high: 15676.29 },
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
        annualGrossGain: { low: 7291.2, medium: 11011.2, high: 37051.2 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 7291.2, medium: 9231.24, high: 22469.01 },
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
        annualGrossGain: { low: 9721.6, medium: 14681.6, high: 49401.6 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 9678.52, medium: 11729.98, high: 27926.82 },
      },
    ],
    [
      new Date(2019, 12, 1),
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 11379.8, medium: 14079.04, high: 33237.49 },
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
        annualGrossGain: { low: 14582.4, medium: 22022.4, high: 74102.4 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 13081.08, medium: 16228.17, high: 38548.16 },
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
        annualGrossGain: { low: 17012.8, medium: 25692.8, high: 86452.8 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 14782.36, medium: 18246.89, high: 43858.83 },
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
        annualGrossGain: { low: 19443.2, medium: 29363.2, high: 98803.2 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 16397.41, medium: 20265.61, high: 47010.07 },
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
        annualGrossGain: { low: 21873.6, medium: 33033.6, high: 111153.6 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 17952.86, medium: 22284.33, high: 49850.66 },
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
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 19508.05, medium: 24303.05, high: 54244.95 },
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
        annualGrossGain: { low: 26734.4, medium: 40374.4, high: 135854.4 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 20844.77, medium: 26321.77, high: 58938.1 },
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
        annualGrossGain: { low: 29164.8, medium: 44044.8, high: 148204.8 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: { low: 2994, medium: 7494, high: 11994 },
        annualNetGain: { low: 22181.49, medium: 28188.39, high: 63631.25 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 29164.8, medium: 44044.8, high: 148204.8 },
        cumulativeIncomeTaxPayable: { low: 0, medium: 0, high: 2354.88 },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 0,
          high: 1176.84,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 200.66,
        },
        cumulativeNetGain: { low: 5424.4, medium: 11164.4, high: 20612.02 },
        annualNetGain: { low: 21087.81, medium: 26096.27, high: 59706.39 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 29164.8, medium: 44044.8, high: 148204.8 },
        cumulativeIncomeTaxPayable: {
          low: 0,
          medium: 452.96,
          high: 4824.96,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 225.88,
          high: 2411.88,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 1787.67,
        },
        cumulativeNetGain: {
          low: 7854.8,
          medium: 14155.96,
          high: 27670.29,
        },
        annualNetGain: { low: 19994.13, medium: 24682.98, high: 57341.27 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 29164.8, medium: 44044.8, high: 148204.8 },
        cumulativeIncomeTaxPayable: {
          low: 0,
          medium: 1187.04,
          high: 7295.04,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 592.92,
          high: 3646.92,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 3640.23,
        },
        cumulativeNetGain: {
          low: 10285.2,
          medium: 16725.24,
          high: 34463.01,
        },
        annualNetGain: { low: 18900.45, medium: 23691.97, high: 55241.7 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 29164.8, medium: 44044.8, high: 148204.8 },
        cumulativeIncomeTaxPayable: {
          low: 29.12,
          medium: 1921.12,
          high: 11990.24,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 13.96,
          medium: 959.96,
          high: 3991.75,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 70.54,
          high: 5492.79,
        },
        cumulativeNetGain: {
          low: 12672.52,
          medium: 19223.98,
          high: 39920.82,
        },
        annualNetGain: { low: 17849.85, medium: 22771.5, high: 54477.04 },
      },
    ],
    [
      new Date(2020, 12, 1),
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 32188.8, medium: 48748.8, high: 164668.8 },
        cumulativeIncomeTaxPayable: {
          low: 515.2,
          medium: 2655.2,
          high: 16930.4,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 257,
          medium: 1327,
          high: 4238.76,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 290.76,
          high: 7345.35,
        },
        cumulativeNetGain: {
          low: 14373.8,
          medium: 21573.04,
          high: 45231.49,
        },
        annualNetGain: { low: 19148.49, medium: 24023.43, high: 60115.84 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 35212.8, medium: 53452.8, high: 181132.8 },
        cumulativeIncomeTaxPayable: {
          low: 1001.28,
          medium: 3389.28,
          high: 21870.56,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 500.04,
          medium: 1694.04,
          high: 4485.77,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 710.91,
          high: 9197.91,
        },
        cumulativeNetGain: {
          low: 16075.08,
          medium: 23722.17,
          high: 50542.16,
        },
        annualNetGain: { low: 20144.99, medium: 25475.3, high: 65754.64 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 38236.8, medium: 58156.8, high: 197596.8 },
        cumulativeIncomeTaxPayable: {
          low: 1487.36,
          medium: 4123.36,
          high: 26810.72,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 743.08,
          medium: 2061.08,
          high: 4732.78,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 1261.47,
          high: 11050.47,
        },
        cumulativeNetGain: {
          low: 17776.36,
          medium: 25740.89,
          high: 55852.83,
        },
        annualNetGain: { low: 20789.1, medium: 27057.57, high: 71393.44 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 41260.8, medium: 62860.8, high: 214060.8 },
        cumulativeIncomeTaxPayable: {
          low: 1973.44,
          medium: 4857.44,
          high: 33910.32,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 986.12,
          medium: 2428.12,
          high: 4979.78,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 86.23,
          medium: 1812.03,
          high: 12903.03,
        },
        cumulativeNetGain: {
          low: 19391.41,
          medium: 27759.61,
          high: 59004.07,
        },
        annualNetGain: { low: 21519.44, medium: 28639.84, high: 79191.68 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 44284.8, medium: 67564.8, high: 230524.8 },
        cumulativeIncomeTaxPayable: {
          low: 2459.52,
          medium: 5591.52,
          high: 41320.56,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 1229.16,
          medium: 2795.16,
          high: 5226.79,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 232.06,
          medium: 2362.59,
          high: 14755.59,
        },
        cumulativeNetGain: {
          low: 20946.86,
          medium: 29778.33,
          high: 61844.66,
        },
        annualNetGain: { low: 22309.38, medium: 28603.63, high: 87300.56 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        cumulativeGrossGain: { low: 27298, medium: 44198, high: 135498 },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 24144, medium: 38224, high: 136784 },
        },
        annualGrossGain: { low: 53308.8, medium: 82268.8, high: 284988.8 },
        cumulativeIncomeTaxPayable: {
          low: 2945.6,
          medium: 6325.6,
          high: 47177.1,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 1472.2,
          medium: 3162.2,
          high: 5473.8,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 378.15,
          medium: 2913.15,
          high: 16608.15,
        },
        cumulativeNetGain: {
          low: 22502.05,
          medium: 31797.05,
          high: 66238.95,
        },
        annualNetGain: { low: 25679.58, medium: 31010.04, high: 108295.74 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 56332.8, medium: 86972.8, high: 301452.8 },
        cumulativeIncomeTaxPayable: {
          low: 3431.68,
          medium: 7059.68,
          high: 52734.78,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 1715.24,
          medium: 3529.24,
          high: 5720.81,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 742.71,
          medium: 3463.71,
          high: 18460.71,
        },
        cumulativeNetGain: {
          low: 23838.77,
          medium: 33815.77,
          high: 70932.1,
        },
        annualNetGain: { low: 26688.26, medium: 32173.6, high: 114552.06 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 59356.8, medium: 91676.8, high: 317916.8 },
        cumulativeIncomeTaxPayable: {
          low: 3917.76,
          medium: 8047.52,
          high: 58292.46,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 1958.28,
          medium: 3794.62,
          high: 5967.82,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 1107.27,
          medium: 4014.27,
          high: 20313.27,
        },
        cumulativeNetGain: {
          low: 25175.49,
          medium: 35682.39,
          high: 75625.25,
        },
        annualNetGain: { low: 27696.93, medium: 33489.24, high: 120808.38 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 62380.8, medium: 96380.8, high: 334380.8 },
        cumulativeIncomeTaxPayable: {
          low: 4403.84,
          medium: 9515.68,
          high: 63850.14,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 2201.32,
          medium: 3868.02,
          high: 6214.82,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 1471.83,
          medium: 4564.83,
          high: 22165.83,
        },
        cumulativeNetGain: {
          low: 26512.21,
          medium: 37260.67,
          high: 80318.41,
        },
        annualNetGain: { low: 28705.6, medium: 35093.24, high: 127064.7 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 65404.8, medium: 101084.8, high: 350844.8 },
        cumulativeIncomeTaxPayable: {
          low: 4889.92,
          medium: 10983.84,
          high: 69407.82,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 2444.36,
          medium: 3941.43,
          high: 6461.83,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 1836.39,
          medium: 5115.39,
          high: 24018.39,
        },
        cumulativeNetGain: {
          low: 27848.93,
          medium: 38838.94,
          high: 85011.56,
        },
        annualNetGain: { low: 29229.39, medium: 36697.24, high: 133321.02 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        cumulativeGrossGain: { low: 39450, medium: 62550, high: 197250 },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 39264, medium: 61744, high: 219104 },
        },
        annualGrossGain: { low: 68428.8, medium: 105788.8, high: 367308.8 },
        cumulativeIncomeTaxPayable: {
          low: 5376,
          medium: 12452,
          high: 74965.5,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 2687.4,
          medium: 4014.84,
          high: 6708.84,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 2200.95,
          medium: 5665.95,
          high: 25870.95,
        },
        cumulativeNetGain: {
          low: 29185.65,
          medium: 40417.21,
          high: 89704.71,
        },
        annualNetGain: { low: 29147.18, medium: 38301.24, high: 139577.34 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 71452.8, medium: 110492.8, high: 383772.8 },
        cumulativeIncomeTaxPayable: {
          low: 5862.08,
          medium: 13920.16,
          high: 80523.18,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 2930.44,
          medium: 4088.25,
          high: 6955.85,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 2565.51,
          medium: 6216.51,
          high: 27723.51,
        },
        cumulativeNetGain: {
          low: 30522.37,
          medium: 41995.48,
          high: 94397.86,
        },
        annualNetGain: { low: 29064.98, medium: 39905.24, high: 145833.66 },
      },
    ],
    [
      new Date(2021, 12, 1),
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 72952.8, medium: 112992.8, high: 393272.8 },
        cumulativeIncomeTaxPayable: {
          low: 6952.96,
          medium: 17269.92,
          high: 93489.66,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 3475.88,
          medium: 4255.74,
          high: 7532.14,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 3383.67,
          medium: 7472.67,
          high: 32045.67,
        },
        cumulativeNetGain: {
          low: 33522.29,
          medium: 45596.47,
          high: 105347.33,
        },
        annualNetGain: { low: 27664.57, medium: 40436.52, high: 149443.66 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 74452.8, medium: 115492.8, high: 402772.8 },
        cumulativeIncomeTaxPayable: {
          low: 8547.68,
          medium: 20619.68,
          high: 106456.14,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 3819.62,
          medium: 4423.22,
          high: 8108.42,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 4201.83,
          medium: 8728.83,
          high: 36367.83,
        },
        cumulativeNetGain: {
          low: 36220.07,
          medium: 49197.47,
          high: 116296.81,
        },
        annualNetGain: { low: 26881.6, medium: 40967.8, high: 153053.66 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 75952.8, medium: 117992.8, high: 412272.8 },
        cumulativeIncomeTaxPayable: {
          low: 10729.44,
          medium: 23969.44,
          high: 119422.62,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 3928.71,
          medium: 4590.71,
          high: 8684.71,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 5019.99,
          medium: 9984.99,
          high: 40689.99,
        },
        cumulativeNetGain: {
          low: 38565.46,
          medium: 52798.46,
          high: 127246.28,
        },
        annualNetGain: { low: 27178.88, medium: 41499.08, high: 156663.66 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        cumulativeGrossGain: { low: 63698, medium: 99718, high: 324858 },
        annualGrossGainByShareScheme: {
          emi: { low: 29164.8, medium: 44044.8, high: 148204.8 },
          none: { low: 48288, medium: 76448, high: 273568 },
        },
        annualGrossGain: { low: 77452.8, medium: 120492.8, high: 421772.8 },
        cumulativeIncomeTaxPayable: {
          low: 12911.2,
          medium: 27319.2,
          high: 132389.1,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4037.8,
          medium: 4758.2,
          high: 9261,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 5838.15,
          medium: 11241.15,
          high: 45012.15,
        },
        cumulativeNetGain: {
          low: 40910.85,
          medium: 56399.45,
          high: 138195.75,
        },
        annualNetGain: { low: 27476.16, medium: 42030.36, high: 160273.66 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 78952.8, medium: 122992.8, high: 431272.8 },
        cumulativeIncomeTaxPayable: {
          low: 15092.96,
          medium: 32287.44,
          high: 145355.58,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4146.89,
          medium: 4925.69,
          high: 9837.29,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 6656.31,
          medium: 12497.31,
          high: 49334.31,
        },
        cumulativeNetGain: {
          low: 43256.24,
          medium: 58381.96,
          high: 149145.22,
        },
        annualNetGain: { low: 27773.44, medium: 44180.12, high: 163883.66 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        totalGrossGain: { low: 11454.4, medium: 18374.4, high: 66814.4 },
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
        annualGrossGain: { low: 74452.8, medium: 115492.8, high: 402772.8 },
        cumulativeIncomeTaxPayable: {
          low: 19674.72,
          medium: 43113.06,
          high: 175422.06,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4375.98,
          medium: 5293.18,
          high: 11173.58,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 8374.47,
          medium: 15253.47,
          high: 59356.47,
        },
        cumulativeNetGain: {
          low: 48181.63,
          medium: 62807.09,
          high: 174534.69,
        },
        annualNetGain: { low: 25490.72, medium: 43887.26, high: 153053.66 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 74452.8, medium: 115492.8, high: 402772.8 },
        cumulativeIncomeTaxPayable: {
          low: 21856.48,
          medium: 46881.54,
          high: 188388.54,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4485.06,
          medium: 5460.66,
          high: 11749.86,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 9192.63,
          medium: 16509.63,
          high: 63678.63,
        },
        cumulativeNetGain: {
          low: 50527.03,
          medium: 65989.37,
          high: 185484.17,
        },
        annualNetGain: { low: 25218, medium: 43887.26, high: 153053.66 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 74452.8, medium: 115492.8, high: 402772.8 },
        cumulativeIncomeTaxPayable: {
          low: 24038.24,
          medium: 50650.02,
          high: 201355.02,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4594.15,
          medium: 5628.15,
          high: 12326.15,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 10010.79,
          medium: 17765.79,
          high: 68000.79,
        },
        cumulativeNetGain: {
          low: 52872.42,
          medium: 69171.64,
          high: 196433.64,
        },
        annualNetGain: { low: 24945.28, medium: 43887.26, high: 153053.66 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        cumulativeGrossGain: { low: 96970, medium: 151590, high: 506930 },
        annualGrossGainByShareScheme: {
          emi: { low: 26734.4, medium: 40374.4, high: 135854.4 },
          none: { low: 45288, medium: 71448, high: 254568 },
        },
        annualGrossGain: { low: 72022.4, medium: 111822.4, high: 390422.4 },
        cumulativeIncomeTaxPayable: {
          low: 26220,
          medium: 54418.5,
          high: 214321.5,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4703.24,
          medium: 5795.64,
          high: 12902.44,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 10828.95,
          medium: 19021.95,
          high: 72322.95,
        },
        cumulativeNetGain: {
          low: 55217.81,
          medium: 72353.91,
          high: 207383.11,
        },
        annualNetGain: { low: 23749.01, medium: 42492.51, high: 148360.51 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
          low: 28886.64,
          medium: 58186.98,
          high: 227287.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4812.33,
          medium: 5963.13,
          high: 13478.73,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 11647.11,
          medium: 20278.11,
          high: 76645.11,
        },
        cumulativeNetGain: {
          low: 57078.32,
          medium: 75536.18,
          high: 218332.58,
        },
        annualNetGain: { low: 23037.62, medium: 41097.76, high: 143667.36 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 67161.6, medium: 104481.6, high: 365721.6 },
        cumulativeIncomeTaxPayable: {
          low: 32159.28,
          medium: 61955.46,
          high: 240254.46,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 4921.42,
          medium: 6130.62,
          high: 14055.02,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 12465.27,
          medium: 21534.27,
          high: 80967.27,
        },
        cumulativeNetGain: {
          low: 58332.83,
          medium: 78718.45,
          high: 229282.05,
        },
        annualNetGain: { low: 22932.23, medium: 39703.01, high: 138974.21 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 64731.2, medium: 100811.2, high: 353371.2 },
        cumulativeIncomeTaxPayable: {
          low: 35431.92,
          medium: 65723.94,
          high: 253220.94,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5030.5,
          medium: 6298.1,
          high: 14631.3,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 13283.43,
          medium: 22790.43,
          high: 85289.43,
        },
        cumulativeNetGain: {
          low: 59587.35,
          medium: 81900.73,
          high: 240231.53,
        },
        annualNetGain: { low: 22826.84, medium: 38308.26, high: 134281.06 },
      },
    ],
    [
      new Date(2022, 12, 1),
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 60800.8, medium: 94640.8, high: 331520.8 },
        cumulativeIncomeTaxPayable: {
          low: 39604.56,
          medium: 70617.42,
          high: 270462.42,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5169.59,
          medium: 6515.59,
          high: 15397.59,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 14326.59,
          medium: 24421.59,
          high: 91036.59,
        },
        cumulativeNetGain: { low: 61186.86, medium: 86033, high: 254791 },
        annualNetGain: { low: 22376.44, medium: 35963.5, high: 125977.9 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        cumulativeGrossGain: { low: 127242, medium: 198462, high: 670002 },
        annualGrossGainByShareScheme: {
          emi: { low: 14582.4, medium: 22022.4, high: 74102.4 },
          none: { low: 42288, medium: 66448, high: 235568 },
        },
        annualGrossGain: { low: 56870.4, medium: 88470.4, high: 309670.4 },
        cumulativeIncomeTaxPayable: {
          low: 43461.9,
          medium: 75510.9,
          high: 287703.9,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5308.68,
          medium: 6733.08,
          high: 16163.88,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 15369.75,
          medium: 26052.75,
          high: 96783.75,
        },
        cumulativeNetGain: {
          low: 63101.67,
          medium: 90165.27,
          high: 269350.47,
        },
        annualNetGain: { low: 21610.75, medium: 33618.75, high: 117674.75 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
          low: 46591.38,
          medium: 80404.38,
          high: 304945.38,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5447.77,
          medium: 6950.57,
          high: 16930.17,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 16412.91,
          medium: 27683.91,
          high: 102530.91,
        },
        cumulativeNetGain: {
          low: 65744.34,
          medium: 94297.54,
          high: 283909.94,
        },
        annualNetGain: { low: 20117.2, medium: 31274, high: 109371.6 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 49009.6, medium: 76129.6, high: 265969.6 },
        cumulativeIncomeTaxPayable: {
          low: 49720.86,
          medium: 85297.86,
          high: 322186.86,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5586.86,
          medium: 7168.06,
          high: 17696.46,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 17456.07,
          medium: 29315.07,
          high: 108278.07,
        },
        cumulativeNetGain: {
          low: 68387.01,
          medium: 98429.81,
          high: 298469.41,
        },
        annualNetGain: { low: 18623.65, medium: 28929.25, high: 101068.45 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 45079.2, medium: 69959.2, high: 244119.2 },
        cumulativeIncomeTaxPayable: {
          low: 52850.34,
          medium: 90191.34,
          high: 339428.34,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5725.94,
          medium: 7385.54,
          high: 18462.74,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 18499.23,
          medium: 30946.23,
          high: 114025.23,
        },
        cumulativeNetGain: {
          low: 71029.69,
          medium: 102562.09,
          high: 313028.89,
        },
        annualNetGain: { low: 17130.1, medium: 26584.5, high: 92765.3 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        annualGrossGain: { low: 41148.8, medium: 63788.8, high: 222268.8 },
        cumulativeIncomeTaxPayable: {
          low: 55979.82,
          medium: 95084.82,
          high: 356669.82,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5865.03,
          medium: 7603.03,
          high: 19229.03,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 19542.39,
          medium: 32577.39,
          high: 119772.39,
        },
        cumulativeNetGain: {
          low: 73672.36,
          medium: 106694.36,
          high: 327588.36,
        },
        annualNetGain: { low: 15636.54, medium: 24239.74, high: 84462.14 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
        cumulativeGrossGain: { low: 160514, medium: 250334, high: 852074 },
        annualGrossGainByShareScheme: {
          emi: { low: 2430.4, medium: 3670.4, high: 12350.4 },
          none: { low: 36288, medium: 56448, high: 197568 },
        },
        annualGrossGain: { low: 38718.4, medium: 60118.4, high: 209918.4 },
        cumulativeIncomeTaxPayable: {
          low: 58434.3,
          medium: 98853.3,
          high: 369636.3,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 5974.12,
          medium: 7770.52,
          high: 19805.32,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 20360.55,
          medium: 33833.55,
          high: 124094.55,
        },
        cumulativeNetGain: {
          low: 75745.03,
          medium: 109876.63,
          high: 338537.83,
        },
        annualNetGain: { low: 14712.99, medium: 22844.99, high: 79768.99 },
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
                grossGain: { low: 2430.4, medium: 3670.4, high: 12350.4 },
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
          low: 60888.78,
          medium: 102621.78,
          high: 382602.78,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6083.21,
          medium: 7938.01,
          high: 20381.61,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 21178.71,
          medium: 35089.71,
          high: 128416.71,
        },
        cumulativeNetGain: {
          low: 77817.7,
          medium: 113058.9,
          high: 349487.3,
        },
        annualNetGain: { low: 13789.44, medium: 21450.24, high: 75075.84 },
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
          low: 62249.58,
          medium: 104738.58,
          high: 390011.58,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6143.69,
          medium: 8032.09,
          high: 20710.89,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 21632.31,
          medium: 35795.31,
          high: 130886.31,
        },
        cumulativeNetGain: {
          low: 78966.82,
          medium: 114846.42,
          high: 355743.62,
        },
        annualNetGain: { low: 13789.44, medium: 21450.24, high: 75075.84 },
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
          low: 63610.38,
          medium: 106855.38,
          high: 397420.38,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6204.17,
          medium: 8126.17,
          high: 21040.17,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 22085.91,
          medium: 36500.91,
          high: 133355.91,
        },
        cumulativeNetGain: {
          low: 80115.94,
          medium: 116633.94,
          high: 361999.94,
        },
        annualNetGain: { low: 13789.44, medium: 21450.24, high: 75075.84 },
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
          low: 64971.18,
          medium: 108972.18,
          high: 404829.18,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6264.65,
          medium: 8220.25,
          high: 21369.45,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 22539.51,
          medium: 37206.51,
          high: 135825.51,
        },
        cumulativeNetGain: {
          low: 81265.06,
          medium: 118421.46,
          high: 368256.26,
        },
        annualNetGain: { low: 12640.32, medium: 19662.72, high: 68819.52 },
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
          low: 66331.98,
          medium: 111088.98,
          high: 412237.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6325.13,
          medium: 8314.33,
          high: 21698.73,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 22993.11,
          medium: 37912.11,
          high: 138295.11,
        },
        cumulativeNetGain: {
          low: 82414.18,
          medium: 120208.98,
          high: 374512.58,
        },
        annualNetGain: { low: 11491.2, medium: 17875.2, high: 62563.2 },
      },
    ],
    [
      new Date(2023, 12, 1),
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
          low: 67692.78,
          medium: 113205.78,
          high: 419646.78,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6385.61,
          medium: 8408.41,
          high: 22028.01,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 23446.71,
          medium: 38617.71,
          high: 140764.71,
        },
        cumulativeNetGain: {
          low: 83563.3,
          medium: 121996.5,
          high: 380768.9,
        },
        annualNetGain: { low: 10342.08, medium: 16087.68, high: 56306.88 },
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
          low: 69053.58,
          medium: 115322.58,
          high: 427055.58,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6446.09,
          medium: 8502.49,
          high: 22357.29,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 23900.31,
          medium: 39323.31,
          high: 143234.31,
        },
        cumulativeNetGain: {
          low: 84712.42,
          medium: 123784.02,
          high: 387025.22,
        },
        annualNetGain: { low: 9192.96, medium: 14300.16, high: 50050.56 },
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
          low: 70414.38,
          medium: 117439.38,
          high: 434464.38,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6506.57,
          medium: 8596.57,
          high: 22686.57,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 24353.91,
          medium: 40028.91,
          high: 145703.91,
        },
        cumulativeNetGain: {
          low: 85861.54,
          medium: 125571.54,
          high: 393281.54,
        },
        annualNetGain: { low: 8043.84, medium: 12512.64, high: 43794.24 },
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
          low: 71775.18,
          medium: 119556.18,
          high: 441873.18,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6567.05,
          medium: 8690.65,
          high: 23015.85,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 24807.51,
          medium: 40734.51,
          high: 148173.51,
        },
        cumulativeNetGain: {
          low: 87010.66,
          medium: 127359.06,
          high: 399537.86,
        },
        annualNetGain: { low: 6894.72, medium: 10725.12, high: 37537.92 },
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
          low: 73135.98,
          medium: 121672.98,
          high: 449281.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6627.53,
          medium: 8784.73,
          high: 23345.13,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 25261.11,
          medium: 41440.11,
          high: 150643.11,
        },
        cumulativeNetGain: {
          low: 88159.78,
          medium: 129146.58,
          high: 405794.18,
        },
        annualNetGain: { low: 5745.6, medium: 8937.6, high: 31281.6 },
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
          low: 74496.78,
          medium: 123789.78,
          high: 456690.78,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6688.01,
          medium: 8878.81,
          high: 23674.41,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 25714.71,
          medium: 42145.71,
          high: 153112.71,
        },
        cumulativeNetGain: {
          low: 89308.9,
          medium: 130934.1,
          high: 412050.5,
        },
        annualNetGain: { low: 4596.48, medium: 7150.08, high: 25025.28 },
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
          low: 75857.58,
          medium: 125906.58,
          high: 464099.58,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6748.49,
          medium: 8972.89,
          high: 24003.69,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 26168.31,
          medium: 42851.31,
          high: 155582.31,
        },
        cumulativeNetGain: {
          low: 90458.02,
          medium: 132721.62,
          high: 418306.82,
        },
        annualNetGain: { low: 3447.36, medium: 5362.56, high: 18768.96 },
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
          low: 77218.38,
          medium: 128023.38,
          high: 471508.38,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6808.97,
          medium: 9066.97,
          high: 24332.97,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 26621.91,
          medium: 43556.91,
          high: 158051.91,
        },
        cumulativeNetGain: {
          low: 91607.14,
          medium: 134509.14,
          high: 424563.14,
        },
        annualNetGain: { low: 2298.24, medium: 3575.04, high: 12512.64 },
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
          low: 78579.18,
          medium: 130140.18,
          high: 478917.18,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6869.45,
          medium: 9161.05,
          high: 24662.25,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27075.51,
          medium: 44262.51,
          high: 160521.51,
        },
        cumulativeNetGain: {
          low: 92756.26,
          medium: 136296.66,
          high: 430819.46,
        },
        annualNetGain: { low: 1149.12, medium: 1787.52, high: 6256.32 },
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2024, 12, 1),
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2025, 12, 1),
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        annualGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeIncomeTaxPayable: {
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
        },
        annualNetGain: { low: 17176, medium: 26296, high: 90136 },
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        annualGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeIncomeTaxPayable: {
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        annualGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeIncomeTaxPayable: {
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        annualGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeIncomeTaxPayable: {
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        annualGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeIncomeTaxPayable: {
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        annualGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeIncomeTaxPayable: {
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        annualGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeIncomeTaxPayable: {
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        annualGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeIncomeTaxPayable: {
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        annualGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeIncomeTaxPayable: {
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
    [
      new Date(2026, 12, 1),
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        annualGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeIncomeTaxPayable: {
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        annualGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeIncomeTaxPayable: {
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        annualGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeIncomeTaxPayable: {
          low: 79939.98,
          medium: 132256.98,
          high: 486325.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 6929.93,
          medium: 9255.13,
          high: 24991.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 27529.11,
          medium: 44968.11,
          high: 162991.11,
        },
        cumulativeNetGain: {
          low: 93905.38,
          medium: 138084.18,
          high: 437075.78,
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
                vestingShareOptions: 500,
                grossGain: { low: 39200, medium: 59200, high: 199200 },
                shareScheme: "emi",
              },
              {
                vestingShareOptions: 0,
                grossGain: { low: 0, medium: 0, high: 0 },
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
          emi: { low: 39200, medium: 59200, high: 199200 },
          none: { low: 6000, medium: 10000, high: 38000 },
        },
        totalGrossGain: { low: 45200, medium: 69200, high: 237200 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 129688.4, medium: 198828.4, high: 655808.4 },
          none: { low: 123816, medium: 194936, high: 692776 },
        },
        cumulativeGrossGain: {
          low: 253504.4,
          medium: 393764.4,
          high: 1348584.4,
        },
        annualGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        annualGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeIncomeTaxPayable: {
          low: 100279.98,
          medium: 163396.98,
          high: 593065.98,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 7833.93,
          medium: 10639.13,
          high: 29735.53,
        },
        cumulativeCapitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 34309.11,
          medium: 55348.11,
          high: 198571.11,
        },
        cumulativeNetGain: {
          low: 111081.38,
          medium: 164380.18,
          high: 527211.78,
        },
        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ],
  ],
  totals: {
    grossGain: { low: 253504.4, medium: 393764.4, high: 1348584.4 },
    netGain: { low: 111081.38, medium: 164380.18, high: 527211.78 },
    incomeTaxPayable: {
      low: 100279.98,
      medium: 163396.98,
      high: 593065.98,
    },
    employeeNationalInsurancePayable: {
      low: 7833.93,
      medium: 10639.13,
      high: 29735.53,
    },
    capitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
    studentLoanRepaymentsPayable: {
      low: 34309.11,
      medium: 55348.11,
      high: 198571.11,
    },
  },
};
