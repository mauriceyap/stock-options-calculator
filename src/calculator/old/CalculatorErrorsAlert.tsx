import { Alert, AlertTitle } from "@mui/material";
import { ReactNode } from "react";
import { FieldErrors } from "react-hook-form";

import { STUDENT_LOAN_REPAYMENT_TYPES } from "../../config/tax";

import {
  AllocationInput,
  CalculatorInput,
  CompanyInput,
} from "../types/inputs";

export interface CalculatorErrorsAlertProps {
  companyNames: string[];
  errors: FieldErrors<CalculatorInput>;
}

export const CalculatorErrorsAlert = ({
  errors,
  companyNames,
}: CalculatorErrorsAlertProps) => {
  const messages: Record<string, ReactNode> = {};

  const { companies, taxationConfig } = errors;

  if (taxationConfig) {
    if (taxationConfig.otherIncome?.message) {
      messages[
        "taxationConfig.otherIncome"
      ] = `Other taxable income: ${taxationConfig.otherIncome.message}`;
    }
    if (taxationConfig.studentRepaymentLoanTypes) {
      STUDENT_LOAN_REPAYMENT_TYPES.forEach((t) => {
        if (taxationConfig.studentRepaymentLoanTypes?.[t]?.message) {
          messages[
            `taxationConfig.studentRepaymentLoanTypes.${t}`
          ] = `Student loan repayment type ${t}: ${taxationConfig.studentRepaymentLoanTypes[t].message}`;
        }
      });
    }
    if (taxationConfig.taxYear?.message) {
      messages[
        "taxationConfig.taxYear"
      ] = `Tax year for rates and thresholds: ${taxationConfig.taxYear.message}`;
    }
  }

  if (companies) {
    if (companies.message) {
      messages.companies = `Stock option allocations: ${companies.message}`;
    }

    if (Array.isArray(companies)) {
      companies.forEach((_company, companyIndex) => {
        const company = _company as FieldErrors<CompanyInput>;

        const companyName =
          companyNames[companyIndex] ??
          "Company " + (companyIndex + 1).toString();

        (
          [
            ["name", "Name"],
            ["leavingDate", "Leaving date"],
            ["predictedExitEventDate", "Predicted exit event date"],
            [
              "predictedExitEventSharePriceLow",
              "Low exit share price prediction",
            ],
            [
              "predictedExitEventSharePriceMedium",
              "Medium exit share price prediction",
            ],
            [
              "predictedExitEventSharePriceHigh",
              "High exit share price prediction",
            ],
          ] as const
        ).forEach(([key, fieldDisplayName]) => {
          if (company[key]?.message) {
            messages[
              `companies.${companyIndex}.${key}`
            ] = `${fieldDisplayName} for ${companyName}: ${company[key].message}`;
          }
        });

        if (company.allocations) {
          if (company.allocations.message) {
            messages[
              `companies.${companyIndex}.allocations`
            ] = `Stock option allocations from ${companyName}: ${company.allocations.message}`;
          }

          if (Array.isArray(company.allocations)) {
            company.allocations.forEach((_allocation, allocationIndex) => {
              const allocation = _allocation as FieldErrors<AllocationInput>;

              (
                [
                  ["vestingCommencement", "Vesting commencement date"],
                  ["totalOptions", "Number of options"],
                  ["expiry", "Expiry date"],
                  ["optionsImmediateVesting", "Options immediately vesting"],
                  ["optionsVestingAtExit", "Options vesting at exit"],
                  ["vestingPeriodMonths", "Vesting period"],
                  ["vestingCliffMonths", "Vesting cliff"],
                  ["strikePrice", "Strike price"],
                  ["shareScheme", "Share scheme"],
                ] as const
              ).forEach(([key, fieldDisplayName]) => {
                if (allocation[key]?.message) {
                  messages[
                    `companies.${companyIndex}.allocations.${allocationIndex}.${key}`
                  ] = `${fieldDisplayName} for allocation ${
                    allocationIndex + 1
                  } for ${companyName}: ${allocation[key].message}`;
                }
              });
            });
          }
        }
      });
    }
  }

  return (
    <Alert severity="error">
      <AlertTitle>Please fix the following errors to continue</AlertTitle>
      <ul>
        {Object.entries(messages).map(([key, node]) => (
          <li key={key}>{node}</li>
        ))}
      </ul>
    </Alert>
  );
};
