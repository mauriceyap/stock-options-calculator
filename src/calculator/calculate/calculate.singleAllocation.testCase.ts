import { CalculatorInput } from "../types/inputs";
import { CalculatorOutput } from "../types/outputs";

export const singleAllocationInput: CalculatorInput = {
  taxationConfig: {
    otherIncome: 0,
    taxYear: "2023/24",
    studentRepaymentLoanTypes: [],
  },
  companyAllocationGrossGains: [
    {
      name: "Foodie McFoodFace Restaurant",
      allocations: [
        {
          vestingCommencement: new Date(2022, 0, 2),
          totalOptions: 260,
          expiry: new Date(2032, 0, 2),

          optionsImmediateVesting: 100,
          optionsVestingAtExit: 100,
          vestingPeriodMonths: 6,
          vestingCliffMonths: 3,

          strikePrice: 0.01,
          shareScheme: "none",
        },
      ],
      leavingDate: null,
      predictedExitEventDate: new Date(2022, 11, 25),
      predictedExitEventSharePriceLow: 100.01,
      predictedExitEventSharePriceMedium: 150.01,
      predictedExitEventSharePriceHigh: 200.01,
    },
  ],
};

export const singleAllocationExpected: CalculatorOutput = {
  timeSeries: [
    [
      new Date(2022, 0, 1),
      {
        companyAllocationGrossGains: [
          {
            allocations: [
              {
                vestingShareOptions: 100,
                grossGain: {
                  low: 10000,
                  medium: 15000,
                  high: 20000,
                },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 10000,
            medium: 15000,
            high: 20000,
          },
        },
        totalGrossGain: {
          low: 10000,
          medium: 15000,
          high: 20000,
        },
        cumulativeGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 10000,
            medium: 15000,
            high: 20000,
          },
        },
        cumulativeGrossGain: {
          low: 10000,
          medium: 15000,
          high: 20000,
        },
        annualGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 16000,
            medium: 24000,
            high: 32000,
          },
        },
        annualGrossGain: {
          low: 16000,
          medium: 24000,
          high: 32000,
        },
        cumulativeIncomeTaxPayable: {
          low: 0,
          medium: 486,
          high: 1486,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 242.4,
          high: 742.4,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 10000,
          medium: 14271.6,
          high: 17771.6,
        },
        annualNetGain: {
          low: 0,
          medium: 0,
          high: 0,
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
                grossGain: {
                  low: 0,
                  medium: 0,
                  high: 0,
                },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 0,
            medium: 0,
            high: 0,
          },
        },
        totalGrossGain: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 10000,
            medium: 15000,
            high: 20000,
          },
        },
        cumulativeGrossGain: {
          low: 10000,
          medium: 15000,
          high: 20000,
        },
        annualGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 16000,
            medium: 24000,
            high: 32000,
          },
        },
        annualGrossGain: {
          low: 16000,
          medium: 24000,
          high: 32000,
        },
        cumulativeIncomeTaxPayable: {
          low: 0,
          medium: 486,
          high: 1486,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 242.4,
          high: 742.4,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 10000,
          medium: 14271.6,
          high: 17771.6,
        },
        annualNetGain: {
          low: 0,
          medium: 0,
          high: 0,
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
                grossGain: {
                  low: 0,
                  medium: 0,
                  high: 0,
                },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 0,
            medium: 0,
            high: 0,
          },
        },
        totalGrossGain: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 10000,
            medium: 15000,
            high: 20000,
          },
        },
        cumulativeGrossGain: {
          low: 10000,
          medium: 15000,
          high: 20000,
        },
        annualGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 16000,
            medium: 24000,
            high: 32000,
          },
        },
        annualGrossGain: {
          low: 16000,
          medium: 24000,
          high: 32000,
        },
        cumulativeIncomeTaxPayable: {
          low: 0,
          medium: 486,
          high: 1486,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 0,
          medium: 242.4,
          high: 742.4,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 10000,
          medium: 14271.6,
          high: 17771.6,
        },
        annualNetGain: {
          low: 0,
          medium: 0,
          high: 0,
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
                vestingShareOptions: 30,
                grossGain: {
                  low: 3000,
                  medium: 4500,
                  high: 6000,
                },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 3000,
            medium: 4500,
            high: 6000,
          },
        },
        totalGrossGain: {
          low: 3000,
          medium: 4500,
          high: 6000,
        },
        cumulativeGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 13000,
            medium: 19500,
            high: 26000,
          },
        },
        cumulativeGrossGain: {
          low: 13000,
          medium: 19500,
          high: 26000,
        },
        annualGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 13000,
            medium: 19500,
            high: 26000,
          },
        },
        annualGrossGain: {
          low: 13000,
          medium: 19500,
          high: 26000,
        },
        cumulativeIncomeTaxPayable: {
          low: 86,
          medium: 1386,
          high: 2686,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 42.4,
          medium: 692.4,
          high: 1342.4,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 12871.6,
          medium: 17421.6,
          high: 21971.6,
        },
        annualNetGain: {
          low: 0,
          medium: 0,
          high: 0,
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
                vestingShareOptions: 10,
                grossGain: {
                  low: 1000,
                  medium: 1500,
                  high: 2000,
                },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 1000,
            medium: 1500,
            high: 2000,
          },
        },
        totalGrossGain: {
          low: 1000,
          medium: 1500,
          high: 2000,
        },
        cumulativeGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 14000,
            medium: 21000,
            high: 28000,
          },
        },
        cumulativeGrossGain: {
          low: 14000,
          medium: 21000,
          high: 28000,
        },
        annualGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 12000,
            medium: 18000,
            high: 24000,
          },
        },
        annualGrossGain: {
          low: 12000,
          medium: 18000,
          high: 24000,
        },
        cumulativeIncomeTaxPayable: {
          low: 286,
          medium: 1686,
          high: 3086,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 142.4,
          medium: 842.4,
          high: 1542.4,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 13571.6,
          medium: 18471.6,
          high: 23371.6,
        },
        annualNetGain: {
          low: 0,
          medium: 0,
          high: 0,
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
                vestingShareOptions: 10,
                grossGain: {
                  low: 1000,
                  medium: 1500,
                  high: 2000,
                },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 1000,
            medium: 1500,
            high: 2000,
          },
        },
        totalGrossGain: {
          low: 1000,
          medium: 1500,
          high: 2000,
        },
        cumulativeGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 15000,
            medium: 22500,
            high: 30000,
          },
        },
        cumulativeGrossGain: {
          low: 15000,
          medium: 22500,
          high: 30000,
        },
        annualGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 11000,
            medium: 16500,
            high: 22000,
          },
        },
        annualGrossGain: {
          low: 11000,
          medium: 16500,
          high: 22000,
        },
        cumulativeIncomeTaxPayable: {
          low: 486,
          medium: 1986,
          high: 3486,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 242.4,
          medium: 992.4,
          high: 1742.4,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 14271.6,
          medium: 19521.6,
          high: 24771.6,
        },
        annualNetGain: {
          low: 0,
          medium: 0,
          high: 0,
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
                vestingShareOptions: 10,
                grossGain: {
                  low: 1000,
                  medium: 1500,
                  high: 2000,
                },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 1000,
            medium: 1500,
            high: 2000,
          },
        },
        totalGrossGain: {
          low: 1000,
          medium: 1500,
          high: 2000,
        },
        cumulativeGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 16000,
            medium: 24000,
            high: 32000,
          },
        },
        cumulativeGrossGain: {
          low: 16000,
          medium: 24000,
          high: 32000,
        },
        annualGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 10000,
            medium: 15000,
            high: 20000,
          },
        },
        annualGrossGain: {
          low: 10000,
          medium: 15000,
          high: 20000,
        },
        cumulativeIncomeTaxPayable: {
          low: 686,
          medium: 2286,
          high: 3886,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 342.4,
          medium: 1142.4,
          high: 1942.4,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 14971.6,
          medium: 20571.6,
          high: 26171.6,
        },
        annualNetGain: {
          low: 0,
          medium: 0,
          high: 0,
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
                grossGain: {
                  low: 0,
                  medium: 0,
                  high: 0,
                },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 0,
            medium: 0,
            high: 0,
          },
        },
        totalGrossGain: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 16000,
            medium: 24000,
            high: 32000,
          },
        },
        cumulativeGrossGain: {
          low: 16000,
          medium: 24000,
          high: 32000,
        },
        annualGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 10000,
            medium: 15000,
            high: 20000,
          },
        },
        annualGrossGain: {
          low: 10000,
          medium: 15000,
          high: 20000,
        },
        cumulativeIncomeTaxPayable: {
          low: 686,
          medium: 2286,
          high: 3886,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 342.4,
          medium: 1142.4,
          high: 1942.4,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 14971.6,
          medium: 20571.6,
          high: 26171.6,
        },
        annualNetGain: {
          low: 0,
          medium: 0,
          high: 0,
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
                grossGain: {
                  low: 0,
                  medium: 0,
                  high: 0,
                },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 0,
            medium: 0,
            high: 0,
          },
        },
        totalGrossGain: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 16000,
            medium: 24000,
            high: 32000,
          },
        },
        cumulativeGrossGain: {
          low: 16000,
          medium: 24000,
          high: 32000,
        },
        annualGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 10000,
            medium: 15000,
            high: 20000,
          },
        },
        annualGrossGain: {
          low: 10000,
          medium: 15000,
          high: 20000,
        },
        cumulativeIncomeTaxPayable: {
          low: 686,
          medium: 2286,
          high: 3886,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 342.4,
          medium: 1142.4,
          high: 1942.4,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 14971.6,
          medium: 20571.6,
          high: 26171.6,
        },
        annualNetGain: {
          low: 0,
          medium: 0,
          high: 0,
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
                grossGain: {
                  low: 0,
                  medium: 0,
                  high: 0,
                },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 0,
            medium: 0,
            high: 0,
          },
        },
        totalGrossGain: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 16000,
            medium: 24000,
            high: 32000,
          },
        },
        cumulativeGrossGain: {
          low: 16000,
          medium: 24000,
          high: 32000,
        },
        annualGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 10000,
            medium: 15000,
            high: 20000,
          },
        },
        annualGrossGain: {
          low: 10000,
          medium: 15000,
          high: 20000,
        },
        cumulativeIncomeTaxPayable: {
          low: 686,
          medium: 2286,
          high: 3886,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 342.4,
          medium: 1142.4,
          high: 1942.4,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 14971.6,
          medium: 20571.6,
          high: 26171.6,
        },
        annualNetGain: {
          low: 0,
          medium: 0,
          high: 0,
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
                grossGain: {
                  low: 0,
                  medium: 0,
                  high: 0,
                },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 0,
            medium: 0,
            high: 0,
          },
        },
        totalGrossGain: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 16000,
            medium: 24000,
            high: 32000,
          },
        },
        cumulativeGrossGain: {
          low: 16000,
          medium: 24000,
          high: 32000,
        },
        annualGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 10000,
            medium: 15000,
            high: 20000,
          },
        },
        annualGrossGain: {
          low: 10000,
          medium: 15000,
          high: 20000,
        },
        cumulativeIncomeTaxPayable: {
          low: 686,
          medium: 2286,
          high: 3886,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 342.4,
          medium: 1142.4,
          high: 1942.4,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 14971.6,
          medium: 20571.6,
          high: 26171.6,
        },
        annualNetGain: {
          low: 0,
          medium: 0,
          high: 0,
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
                vestingShareOptions: 100,
                grossGain: {
                  low: 10000,
                  medium: 15000,
                  high: 20000,
                },
                shareScheme: "none",
              },
            ],
          },
        ],
        totalGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 10000,
            medium: 15000,
            high: 20000,
          },
        },
        totalGrossGain: {
          low: 10000,
          medium: 15000,
          high: 20000,
        },
        cumulativeGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 26000,
            medium: 39000,
            high: 52000,
          },
        },
        cumulativeGrossGain: {
          low: 26000,
          medium: 39000,
          high: 52000,
        },
        annualGrossGainByShareScheme: {
          emi: {
            low: 0,
            medium: 0,
            high: 0,
          },
          none: {
            low: 0,
            medium: 0,
            high: 0,
          },
        },
        annualGrossGain: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeIncomeTaxPayable: {
          low: 2686,
          medium: 5286,
          high: 8232,
        },
        cumulativeEmployeeNationalInsurancePayable: {
          low: 1342.4,
          medium: 2642.4,
          high: 3803.84,
        },
        cumulativeCapitalGainsTaxPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeStudentLoanRepaymentsPayable: {
          low: 0,
          medium: 0,
          high: 0,
        },
        cumulativeNetGain: {
          low: 21971.6,
          medium: 31071.6,
          high: 39964.16,
        },
        annualNetGain: {
          low: 0,
          medium: 0,
          high: 0,
        },
      },
    ],
  ],
  totals: {
    grossGain: {
      low: 26000,
      medium: 39000,
      high: 52000,
    },
    netGain: {
      low: 21971.6,
      medium: 31071.6,
      high: 39964.16,
    },
    incomeTaxPayable: {
      low: 2686,
      medium: 5286,
      high: 8232,
    },
    employeeNationalInsurancePayable: {
      low: 1342.4,
      medium: 2642.4,
      high: 3803.84,
    },
    capitalGainsTaxPayable: {
      low: 0,
      medium: 0,
      high: 0,
    },
    studentLoanRepaymentsPayable: {
      low: 0,
      medium: 0,
      high: 0,
    },
  },
};
