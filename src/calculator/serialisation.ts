/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { StudentLoanRepaymentTypeConfig } from "../config/tax";

import { SHARE_SCHEMES, ShareScheme } from "./shareSchemes";
import { AllocationInput, CalculatorInput, CompanyInput } from "./types/inputs";

export const calculatorInputToJSON = (
  calculatorInput: CalculatorInput
): string => JSON.stringify(calculatorInput);

const toFiniteNumber = (value: any): number => {
  if (!isFinite(Number(value))) {
    return 0;
  }
  return Number(value);
};

const isObject = (value: any) => value !== null && typeof value === "object";

const studentLoanRepaymentTypeConfigFromObject = (
  value: any
): StudentLoanRepaymentTypeConfig => {
  if (!isObject(value)) {
    return { rate: 0, threshold: 0 };
  }

  return {
    rate: toFiniteNumber(value.rate),
    threshold: toFiniteNumber(value.threshold),
  };
};

const allocationInputFromObject = (value: any): AllocationInput | null => {
  if (!isObject(value)) {
    return null;
  }

  return {
    vestingCommencement: new Date(String(value.vestingCommencement)),
    totalOptions: toFiniteNumber(value.totalOptions),
    expiry: new Date(String(value.expiry)),
    optionsImmediateVesting: toFiniteNumber(value.optionsImmediateVesting),
    optionsVestingAtExit: toFiniteNumber(value.optionsVestingAtExit),
    vestingPeriodMonths: toFiniteNumber(value.vestingPeriodMonths),
    vestingCliffMonths: toFiniteNumber(value.vestingCliffMonths),
    strikePrice: toFiniteNumber(value.strikePrice),
    shareScheme: SHARE_SCHEMES.includes(
      String(value.shareScheme) as ShareScheme
    )
      ? (String(value.shareScheme) as ShareScheme)
      : "none",
  };
};

const companyInputFromObject = (value: any): CompanyInput | null => {
  if (!isObject(value)) {
    return null;
  }

  if (!value.allocations || !Array.isArray(value.allocations)) {
    return null;
  }

  return {
    name: value.name ? String(value.name) : "",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    allocations: value.allocations
      .map(allocationInputFromObject)
      .filter(Boolean),
    leavingDate: value.leavingDate ? new Date(String(value.leavingDate)) : null,
    predictedExitEventDate: new Date(String(value.predictedExitEventDate)),
    predictedExitEventSharePriceLow: toFiniteNumber(
      value.predictedExitEventSharePriceLow
    ),
    predictedExitEventSharePriceMedium: toFiniteNumber(
      value.predictedExitEventSharePriceMedium
    ),
    predictedExitEventSharePriceHigh: toFiniteNumber(
      value.predictedExitEventSharePriceHigh
    ),
  };
};

export const calculatorInputFromJSON = (
  calculatorInputJSON: string
): CalculatorInput | null => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const object = JSON.parse(calculatorInputJSON);

    if (!isObject(object)) {
      return null;
    }

    if (!object.companies || !Array.isArray(object.companies)) {
      return null;
    }

    if (!isObject(object.taxationConfig)) {
      return null;
    }

    if (!isObject(object.taxationConfig.studentRepaymentLoanTypes)) {
      return null;
    }

    if (!isObject(object.taxationConfig.taxYearConfig)) {
      return null;
    }

    if (!isObject(object.taxationConfig.taxYearConfig.incomeTax)) {
      return null;
    }

    if (
      !isObject(object.taxationConfig.taxYearConfig.employeeNationalInsurance)
    ) {
      return null;
    }

    if (!isObject(object.taxationConfig.taxYearConfig.capitalGainsTax)) {
      return null;
    }

    if (!isObject(object.taxationConfig.taxYearConfig.studentLoanRepayments)) {
      return null;
    }

    if (
      !isObject(object.taxationConfig.taxYearConfig.studentLoanRepayments.plan1)
    ) {
      return null;
    }

    if (
      !isObject(object.taxationConfig.taxYearConfig.studentLoanRepayments.plan2)
    ) {
      return null;
    }

    if (
      !isObject(object.taxationConfig.taxYearConfig.studentLoanRepayments.plan4)
    ) {
      return null;
    }

    if (
      !isObject(object.taxationConfig.taxYearConfig.studentLoanRepayments.plan5)
    ) {
      return null;
    }

    if (
      !isObject(
        object.taxationConfig.taxYearConfig.studentLoanRepayments.postgraduate
      )
    ) {
      return null;
    }

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      companies: object.companies.map(companyInputFromObject).filter(Boolean),
      taxationConfig: {
        otherIncome: toFiniteNumber(object.taxationConfig.otherIncome),
        studentRepaymentLoanTypes: {
          plan1: Boolean(object.taxationConfig.studentRepaymentLoanTypes.plan1),
          plan2: Boolean(object.taxationConfig.studentRepaymentLoanTypes.plan2),
          plan4: Boolean(object.taxationConfig.studentRepaymentLoanTypes.plan4),
          plan5: Boolean(object.taxationConfig.studentRepaymentLoanTypes.plan5),
          postgraduate: Boolean(
            object.taxationConfig.studentRepaymentLoanTypes.postgraduate
          ),
        },
        taxYearConfig: {
          incomeTax: {
            personalAllowance: toFiniteNumber(
              object.taxationConfig.taxYearConfig.incomeTax.personalAllowance
            ),
            personalAllowanceReductionThreshold: toFiniteNumber(
              object.taxationConfig.taxYearConfig.incomeTax
                .personalAllowanceReductionThreshold
            ),
            personalAllowanceReductionRate: toFiniteNumber(
              object.taxationConfig.taxYearConfig.incomeTax
                .personalAllowanceReductionRate
            ),
            basicRate: toFiniteNumber(
              object.taxationConfig.taxYearConfig.incomeTax.basicRate
            ),
            basicRateLimit: toFiniteNumber(
              object.taxationConfig.taxYearConfig.incomeTax.basicRateLimit
            ),
            higherRate: toFiniteNumber(
              object.taxationConfig.taxYearConfig.incomeTax.higherRate
            ),
            higherRateLimit: toFiniteNumber(
              object.taxationConfig.taxYearConfig.incomeTax.higherRateLimit
            ),
            additionalRate: toFiniteNumber(
              object.taxationConfig.taxYearConfig.incomeTax.additionalRate
            ),
          },
          employeeNationalInsurance: {
            primaryThreshold: toFiniteNumber(
              object.taxationConfig.taxYearConfig.employeeNationalInsurance
                .primaryThreshold
            ),
            primaryRate: toFiniteNumber(
              object.taxationConfig.taxYearConfig.employeeNationalInsurance
                .primaryRate
            ),
            upperEarningsLimit: toFiniteNumber(
              object.taxationConfig.taxYearConfig.employeeNationalInsurance
                .upperEarningsLimit
            ),
            reducedRate: toFiniteNumber(
              object.taxationConfig.taxYearConfig.employeeNationalInsurance
                .reducedRate
            ),
          },
          capitalGainsTax: {
            exemptAmountLimit: toFiniteNumber(
              object.taxationConfig.taxYearConfig.capitalGainsTax
                .exemptAmountLimit
            ),
            lowerRate: toFiniteNumber(
              object.taxationConfig.taxYearConfig.capitalGainsTax.lowerRate
            ),
            higherRate: toFiniteNumber(
              object.taxationConfig.taxYearConfig.capitalGainsTax.higherRate
            ),
            businessAssetDisposalReliefRate: toFiniteNumber(
              object.taxationConfig.taxYearConfig.capitalGainsTax
                .businessAssetDisposalReliefRate
            ),
            businessAssetDisposalReliefLimit: toFiniteNumber(
              object.taxationConfig.taxYearConfig.capitalGainsTax
                .businessAssetDisposalReliefLimit
            ),
          },
          studentLoanRepayments: {
            plan1: studentLoanRepaymentTypeConfigFromObject(
              object.taxationConfig.taxYearConfig.studentLoanRepayments.plan1
            ),
            plan2: studentLoanRepaymentTypeConfigFromObject(
              object.taxationConfig.taxYearConfig.studentLoanRepayments.plan2
            ),
            plan4: studentLoanRepaymentTypeConfigFromObject(
              object.taxationConfig.taxYearConfig.studentLoanRepayments.plan4
            ),
            plan5: studentLoanRepaymentTypeConfigFromObject(
              object.taxationConfig.taxYearConfig.studentLoanRepayments.plan5
            ),
            postgraduate: studentLoanRepaymentTypeConfigFromObject(
              object.taxationConfig.taxYearConfig.studentLoanRepayments
                .postgraduate
            ),
          },
        },
      },
    };
  } catch {
    return null;
  }
};
