import { ShareScheme } from "../shareSchemes";
import {
  CalculatedCompanyGrossGains,
  CalculatedTimeSeries,
} from "../types/outputs";

import { monthStart } from "./utils";

export const initialiseTimeSeries = (
  earliestDate: Date,
  latestDate: Date,
  companiesAllocationsShareSchemes: ShareScheme[][]
): CalculatedTimeSeries => {
  const emptyCalculatedTimeSeries: CalculatedTimeSeries = [];
  for (
    let date = monthStart(earliestDate);
    date <= monthStart(latestDate);
    date = new Date(date.getFullYear(), date.getMonth() + 1)
  ) {
    const companyAllocationGrossGains: CalculatedCompanyGrossGains[] =
      companiesAllocationsShareSchemes.map((allocationsShareSchemes) => ({
        allocations: allocationsShareSchemes.map((shareScheme) => ({
          vestingShareOptions: 0,
          grossGain: { low: 0, medium: 0, high: 0 },
          shareScheme,
        })),
      }));
    emptyCalculatedTimeSeries.push([
      date,
      {
        companyAllocationGrossGains,
        totalGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        totalGrossGain: { low: 0, medium: 0, high: 0 },
        cumulativeGrossGainByShareScheme: {
          emi: { low: 0, medium: 0, high: 0 },
          none: { low: 0, medium: 0, high: 0 },
        },
        cumulativeGrossGain: { low: 0, medium: 0, high: 0 },
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
        cumulativeStudentLoanRepaymentsPayable: { low: 0, medium: 0, high: 0 },

        cumulativeNetGain: { low: 0, medium: 0, high: 0 },

        annualNetGain: { low: 0, medium: 0, high: 0 },
      },
    ]);
  }
  return emptyCalculatedTimeSeries;
};
