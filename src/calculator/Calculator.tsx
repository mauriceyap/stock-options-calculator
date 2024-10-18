import { AddCircle } from "@mui/icons-material";
import { Alert, Button, Grid, Stack, Typography } from "@mui/material";
import { useMemo, useReducer } from "react";

import { AllocationCard } from "./allocation";
import { calculatorInputReducer } from "./calculatorInputReducer";
import { CompanySection } from "./company";
import { defaultValues } from "./defaultValues";
import { OtherIncome } from "./otherIncome/OtherIncome";
import { StudentLoanRepayments } from "./studentLoanRepayments/StudentLoanRepayments";
import { TaxRates } from "./taxRates/TaxRates";
import { CompanyInput } from "./types/inputs";

export const Calculator = () => {
  const [input, dispatch] = useReducer(calculatorInputReducer, defaultValues);
  const allCompanyNames = useMemo(
    () => input.companies.map(({ name }) => name),
    [input.companies]
  );
  return (
    <div>
      <Grid container spacing={4}>
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
          <Typography variant="h4" gutterBottom>
            Taxation configuration
          </Typography>
          <Typography paragraph>
            Enter details of your expected financial situation at the point at
            which you will exercise your vested share options.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Alert severity="info">
                These values will be used to used to calculate taxes and other
                deductions from your gains.
              </Alert>
            </Grid>
            <Grid item xs={12} md={4} lg={12}>
              <TaxRates
                taxYear={input.taxationConfig.taxYear}
                setTaxYear={(taxYear) => {
                  dispatch({
                    type: "setTaxYear",
                    payload: taxYear,
                  });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={7} xl={6}>
              <OtherIncome
                otherIncome={input.taxationConfig.otherIncome}
                setOtherIncome={(otherIncome) => {
                  dispatch({ type: "setOtherIncome", payload: otherIncome });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={5} xl={6}>
              <StudentLoanRepayments
                studentRepaymentLoanTypes={
                  input.taxationConfig.studentRepaymentLoanTypes
                }
                setStudentRepaymentLoanTypes={(studentRepaymentLoanTypes) => {
                  dispatch({
                    type: "setStudentRepaymentLoanTypes",
                    payload: studentRepaymentLoanTypes,
                  });
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
