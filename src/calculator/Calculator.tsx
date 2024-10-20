import { AddCircle } from "@mui/icons-material";
import { Alert, Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useReducer } from "react";

import { TAX_YEAR_CONFIGS } from "../config/tax";

import { AllocationCard } from "./allocation";
import { calculatorInputReducer } from "./calculatorInputReducer";
import { CompanySection } from "./company";
import {
  defaultCustomTaxYearConfig,
  defaultTaxYear,
  defaultValues,
} from "./defaultValues";
import { OtherIncome } from "./otherIncome/OtherIncome";
import { StudentLoanRepayments } from "./studentLoanRepayments/StudentLoanRepayments";
import { TaxRates } from "./taxRates/TaxRates";
import { TaxRatesInput } from "./taxRates/taxRatesInput";
import { taxRatesInputReducer } from "./taxRatesInputReducer";
import { CompanyInput } from "./types/inputs";

const defaultTaxRatesInputValue: TaxRatesInput = {
  taxYearInput: defaultTaxYear,
  customTaxYearConfig: defaultCustomTaxYearConfig,
};

export const Calculator = () => {
  const [calculatorInput, dispatchCalculatorInput] = useReducer(
    calculatorInputReducer,
    defaultValues
  );

  const [taxRatesInput, dispatchTaxRatesInput] = useReducer(
    taxRatesInputReducer,
    defaultTaxRatesInputValue
  );

  useEffect(() => {
    dispatchCalculatorInput(
      taxRatesInput.taxYearInput === "custom"
        ? {
            type: "setTaxYearConfig",
            payload: taxRatesInput.customTaxYearConfig,
          }
        : {
            type: "setTaxYearConfig",
            payload: TAX_YEAR_CONFIGS[taxRatesInput.taxYearInput],
          }
    );
  }, [taxRatesInput]);

  const allCompanyNames = useMemo(
    () => calculatorInput.companies.map(({ name }) => name),
    [calculatorInput.companies]
  );
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Stack spacing={1}>
            {calculatorInput.companies.map(
              (company, companyIndex, companies) => (
                <CompanySection
                  key={company.name}
                  deleteCompany={
                    companies.length > 1
                      ? () => {
                          dispatchCalculatorInput({
                            type: "removeCompany",
                            payload: { companyIndex },
                          });
                        }
                      : undefined
                  }
                  setCompanyDetails={(
                    companyDetails: Omit<CompanyInput, "allocations">
                  ) => {
                    dispatchCalculatorInput({
                      type: "setCompanyDetails",
                      payload: { companyIndex, companyDetails },
                    });
                  }}
                  company={company}
                  allCompanyNames={allCompanyNames}
                  appendNewShareAllocation={() => {
                    dispatchCalculatorInput({
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
                          dispatchCalculatorInput({
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
                                dispatchCalculatorInput({
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
              )
            )}
            <Button
              startIcon={<AddCircle />}
              fullWidth
              size="small"
              variant="outlined"
              color="success"
              onClick={() => {
                dispatchCalculatorInput({ type: "appendNewCompany" });
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
                taxYearInput={taxRatesInput.taxYearInput}
                customTaxYearConfig={taxRatesInput.customTaxYearConfig}
                setTaxYearInput={(taxYearInput) => {
                  dispatchTaxRatesInput({
                    type: "setTaxYearInput",
                    payload: taxYearInput,
                  });
                }}
                setCustomTaxYearConfig={(customTaxYearConfig) => {
                  dispatchTaxRatesInput({
                    type: "setCustomTaxYearConfig",
                    payload: customTaxYearConfig,
                  });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={7} xl={6}>
              <OtherIncome
                otherIncome={calculatorInput.taxationConfig.otherIncome}
                setOtherIncome={(otherIncome) => {
                  dispatchCalculatorInput({
                    type: "setOtherIncome",
                    payload: otherIncome,
                  });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={5} xl={6}>
              <StudentLoanRepayments
                studentRepaymentLoanTypes={
                  calculatorInput.taxationConfig.studentRepaymentLoanTypes
                }
                setStudentRepaymentLoanTypes={(studentRepaymentLoanTypes) => {
                  dispatchCalculatorInput({
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
