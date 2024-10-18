import { AddCircle } from "@mui/icons-material";
import { Button, Grid, Stack } from "@mui/material";
import { useMemo, useReducer } from "react";

import { AllocationCard } from "./allocation";
import { calculatorInputReducer } from "./calculatorInputReducer";
import { CompanySection } from "./company";
import { defaultValues } from "./defaultValues";
import { CompanyInput } from "./types/inputs";

export const Calculator = () => {
  const [input, dispatch] = useReducer(calculatorInputReducer, defaultValues);
  const allCompanyNames = useMemo(
    () => input.companies.map(({ name }) => name),
    [input.companies]
  );
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Stack spacing={1}>
            {input.companies.map((company, companyIndex, companies) => (
              <CompanySection
                key={company.name}
                deleteCompany={
                  companies.length > 1
                    ? () => {
                        dispatch({
                          type: "removeCompany",
                          payload: { companyIndex },
                        });
                      }
                    : undefined
                }
                setCompanyDetails={(
                  companyDetails: Omit<CompanyInput, "allocations">
                ) => {
                  dispatch({
                    type: "setCompanyDetails",
                    payload: { companyIndex, companyDetails },
                  });
                }}
                company={company}
                allCompanyNames={allCompanyNames}
                appendNewShareAllocation={() => {
                  dispatch({
                    type: "appendNewCompanyAllocation",
                    payload: { companyIndex },
                  });
                }}
              >
                {company.allocations.map(
                  (allocation, allocationIndex, allocations) => (
                    <AllocationCard
                      key={`${allocationIndex}${JSON.stringify(
                        allocation
                      )}${JSON.stringify(allocations)}`}
                      allocation={allocation}
                      setAllocation={(newAllocation) => {
                        dispatch({
                          type: "setCompanyAllocation",
                          payload: {
                            companyIndex,
                            allocation: newAllocation,
                            allocationIndex,
                          },
                        });
                      }}
                      deleteAllocation={
                        allocations.length > 1
                          ? () => {
                              dispatch({
                                type: "removeCompanyAllocation",
                                payload: { companyIndex, allocationIndex },
                              });
                            }
                          : undefined
                      }
                    />
                  )
                )}
              </CompanySection>
            ))}
            <Button
              startIcon={<AddCircle />}
              fullWidth
              size="small"
              variant="outlined"
              color="success"
              onClick={() => {
                dispatch({ type: "appendNewCompany" });
              }}
            >
              Add a company
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={4}>
          TODO: taxation config
        </Grid>
      </Grid>
    </div>
  );
};
