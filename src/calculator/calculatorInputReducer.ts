import { Reducer } from "react";

import {
  defaultAllocationInputValues,
  defaultCompanyInputValues,
} from "./defaultValues";
import {
  AllocationInput,
  CalculatorInput,
  CompanyInput,
  TaxationConfigInput,
} from "./types/inputs";

interface SetCompanyDetailsPayload {
  companyIndex: number;
  companyDetails: Omit<CompanyInput, "allocations">;
}

interface SetCompanyAllocationPayload {
  companyIndex: number;
  allocationIndex: number;
  allocation: AllocationInput;
}

interface RemoveCompanyPayload {
  companyIndex: number;
}

interface AppendNewCompanyAllocationPayload {
  companyIndex: number;
}

interface RemoveCompanyAllocationPayload {
  companyIndex: number;
  allocationIndex: number;
}

type CalculatorInputAction =
  | { type: "setCompanyDetails"; payload: SetCompanyDetailsPayload }
  | { type: "setCompanyAllocation"; payload: SetCompanyAllocationPayload }
  | { type: "appendNewCompany" }
  | {
      type: "appendNewCompanyAllocation";
      payload: AppendNewCompanyAllocationPayload;
    }
  | { type: "removeCompany"; payload: RemoveCompanyPayload }
  | {
      type: "removeCompanyAllocation";
      payload: RemoveCompanyAllocationPayload;
    }
  | {
      type: "setOtherIncome";
      payload: TaxationConfigInput["otherIncome"];
    }
  | {
      type: "setStudentRepaymentLoanTypes";
      payload: TaxationConfigInput["studentRepaymentLoanTypes"];
    }
  | {
      type: "setTaxYearConfig";
      payload: TaxationConfigInput["taxYearConfig"];
    };

const setCompanyDetails = (
  prevState: CalculatorInput,
  payload: SetCompanyDetailsPayload
): CalculatorInput => {
  const { companyIndex, companyDetails } = payload;
  // This guard prevents empty values in the companies list. We allow editing existing companies, and appending to
  // this list
  if (companyIndex > prevState.companies.length) {
    throw new Error(
      "Attempted to set the details of a company with an index which is outside the valid range."
    );
  }

  const prevCompanies = prevState.companies;

  if (companyIndex === prevCompanies.length) {
    const companies = [
      ...prevCompanies,
      {
        allocations: defaultCompanyInputValues.allocations,
        ...companyDetails,
      },
    ];
    return { ...prevState, companies };
  }

  const companies = [
    ...prevCompanies.slice(0, companyIndex),
    { ...prevCompanies[companyIndex], ...companyDetails },
    ...prevCompanies.slice(companyIndex + 1),
  ];
  return { ...prevState, companies };
};

const setCompanyAllocation = (
  prevState: CalculatorInput,
  payload: SetCompanyAllocationPayload
): CalculatorInput => {
  const { companyIndex, allocationIndex, allocation } = payload;

  if (companyIndex >= prevState.companies.length) {
    throw new Error(
      "Attempted to set the allocation for a company with an index which is outside the valid range."
    );
  }

  // This guard prevents empty values in the allocations list. We allow editing existing allocations, and appending
  // to this list
  if (allocationIndex > prevState.companies[companyIndex].allocations.length) {
    throw new Error(
      "Attempted to set the details of an allocation with an index which is outside the valid range."
    );
  }

  const prevCompanies = prevState.companies;
  const prevAllocations = prevState.companies[companyIndex].allocations;

  const allocations =
    allocationIndex === prevAllocations.length
      ? [...prevAllocations, allocation]
      : [
          ...prevAllocations.slice(0, allocationIndex),
          allocation,
          ...prevAllocations.slice(allocationIndex + 1),
        ];

  const companies = [
    ...prevCompanies.slice(0, companyIndex),
    { ...prevCompanies[companyIndex], allocations },
    ...prevCompanies.slice(companyIndex + 1),
  ];

  return { ...prevState, companies };
};

export const calculatorInputReducer: Reducer<
  CalculatorInput,
  CalculatorInputAction
> = (prevState, action) => {
  switch (action.type) {
    case "setCompanyDetails":
      return setCompanyDetails(prevState, action.payload);
    case "setCompanyAllocation": {
      return setCompanyAllocation(prevState, action.payload);
    }
    case "appendNewCompany": {
      const newCompanyName = (() => {
        const allCompanyNamesSet = new Set(
          prevState.companies.map(({ name }) => name)
        );
        let index = 1;
        for (;;) {
          const indexedName =
            index === 1 ? "Your company" : `Your company ${index}`;
          if (!allCompanyNamesSet.has(indexedName)) {
            return indexedName;
          }
          index++;
        }
      })();
      return {
        ...prevState,
        companies: [
          ...prevState.companies,
          { ...defaultCompanyInputValues, name: newCompanyName },
        ],
      };
    }
    case "removeCompany": {
      const { companyIndex } = action.payload;
      return {
        ...prevState,
        companies: [
          ...prevState.companies.slice(0, companyIndex),
          ...prevState.companies.slice(companyIndex + 1),
        ],
      };
    }
    case "appendNewCompanyAllocation": {
      const { companyIndex } = action.payload;
      const { companies: prevCompanies } = prevState;
      if (!prevCompanies[companyIndex]) {
        throw new Error(
          "Attempted to append a new share allocation to a company with an index which is outside the valid range."
        );
      }

      return {
        ...prevState,
        companies: [
          ...prevCompanies.slice(0, companyIndex),
          {
            ...prevCompanies[companyIndex],
            allocations: [
              ...prevCompanies[companyIndex].allocations,
              defaultAllocationInputValues,
            ],
          },
          ...prevCompanies.slice(companyIndex + 1),
        ],
      };
    }
    case "removeCompanyAllocation": {
      const { companyIndex, allocationIndex } = action.payload;
      return {
        ...prevState,
        companies: [
          ...prevState.companies.slice(0, companyIndex),
          {
            ...prevState.companies[companyIndex],
            allocations: [
              ...prevState.companies[companyIndex].allocations.slice(
                0,
                allocationIndex
              ),
              ...prevState.companies[companyIndex].allocations.slice(
                allocationIndex + 1
              ),
            ],
          },
          ...prevState.companies.slice(companyIndex + 1),
        ],
      };
    }
    case "setOtherIncome": {
      return {
        ...prevState,
        taxationConfig: {
          ...prevState.taxationConfig,
          otherIncome: action.payload,
        },
      };
    }
    case "setStudentRepaymentLoanTypes": {
      return {
        ...prevState,
        taxationConfig: {
          ...prevState.taxationConfig,
          studentRepaymentLoanTypes: action.payload,
        },
      };
    }
    case "setTaxYearConfig": {
      return {
        ...prevState,
        taxationConfig: {
          ...prevState.taxationConfig,
          taxYearConfig: action.payload,
        },
      };
    }
    default: {
      const unexpectedAction: never = action;
      throw new Error(
        `Unexpected action in calculatorInputReducer: ${JSON.stringify(
          unexpectedAction
        )}`
      );
    }
  }
};
