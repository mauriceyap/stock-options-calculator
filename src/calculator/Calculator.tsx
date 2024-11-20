import { AddCircle } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useMemo, useReducer, useState } from "react";

import { TAX_YEAR_CONFIGS } from "../config/tax";

import { AllocationCard } from "./allocation";
import { calculatorInputReducer } from "./calculatorInputReducer";
import { TimeSeriesChart } from "./charts/TimeSeriesChart";
import { TotalsChart } from "./charts/TotalsChart";
import { CompanySection } from "./company";
import {
  defaultCustomTaxYearConfig,
  defaultTaxYear,
  defaultValues,
} from "./defaultValues";
import { OtherIncome, OtherIncomeProps } from "./otherIncome/OtherIncome";
import {
  StudentLoanRepayments,
  StudentLoanRepaymentsProps,
} from "./studentLoanRepayments/StudentLoanRepayments";
import { TaxRates, TaxRatesProps } from "./taxRates/TaxRates";
import {
  TaxRatesInput,
  customTaxYearConfigInputToTaxYearConfig,
  taxYearConfigInputToCustomTaxYearConfig,
} from "./taxRates/taxRatesInput";
import { taxRatesInputReducer } from "./taxRatesInputReducer";
import { CompanyInput } from "./types/inputs";
import { useCalculateWebWorker } from "./useCalculateWebWorker";

const defaultTaxRatesInputValue: TaxRatesInput = {
  taxYearInput: defaultTaxYear,
  customTaxYearConfig: taxYearConfigInputToCustomTaxYearConfig(
    defaultCustomTaxYearConfig
  ),
};

export const Calculator = () => {
  const [calculatorInput, dispatchCalculatorInput] = useReducer(
    calculatorInputReducer,
    defaultValues
  );

  const [executeCalculate, { result, loading }] = useCalculateWebWorker();

  useEffect(() => {
    executeCalculate(calculatorInput);
  }, [executeCalculate, calculatorInput]);

  const [taxRatesInput, dispatchTaxRatesInput] = useReducer(
    taxRatesInputReducer,
    defaultTaxRatesInputValue
  );

  useEffect(() => {
    dispatchCalculatorInput(
      taxRatesInput.taxYearInput === "custom"
        ? {
            type: "setTaxYearConfig",
            payload: customTaxYearConfigInputToTaxYearConfig(
              taxRatesInput.customTaxYearConfig
            ),
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

  const setOtherIncome = useCallback<OtherIncomeProps["setOtherIncome"]>(
    (otherIncome) => {
      dispatchCalculatorInput({
        type: "setOtherIncome",
        payload: otherIncome,
      });
    },
    [dispatchCalculatorInput]
  );

  const setStudentRepaymentLoanTypes = useCallback<
    StudentLoanRepaymentsProps["setStudentRepaymentLoanTypes"]
  >(
    (studentRepaymentLoanTypes) => {
      dispatchCalculatorInput({
        type: "setStudentRepaymentLoanTypes",
        payload: studentRepaymentLoanTypes,
      });
    },
    [dispatchCalculatorInput]
  );

  const setTaxYearInput = useCallback<TaxRatesProps["setTaxYearInput"]>(
    (taxYearInput) => {
      dispatchTaxRatesInput({
        type: "setTaxYearInput",
        payload: taxYearInput,
      });
    },
    [dispatchTaxRatesInput]
  );

  const setCustomTaxYearConfig = useCallback<
    TaxRatesProps["setCustomTaxYearConfig"]
  >(
    (customTaxYearConfig) => {
      dispatchTaxRatesInput({
        type: "setCustomTaxYearConfig",
        payload: customTaxYearConfig,
      });
    },
    [dispatchTaxRatesInput]
  );

  const companyNamesWithNoShareAllocations = useMemo(
    () =>
      calculatorInput.companies
        .filter(({ allocations }) => allocations.length === 0)
        .map(({ name }) => name),
    [calculatorInput.companies]
  );

  const [isOtherIncomeSet, setIsOtherIncomeSet] = useState(false);

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={6}>
          <Typography variant="h4" gutterBottom>
            Your share options
          </Typography>
          <Typography paragraph>
            Enter details of your share option allocations and predictions about
            the companies they are for.
          </Typography>
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
              variant={
                calculatorInput.companies.length === 0
                  ? "contained"
                  : "outlined"
              }
              color="success"
              onClick={() => {
                dispatchCalculatorInput({ type: "appendNewCompany" });
              }}
            >
              Add a company
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h4" gutterBottom>
            Your taxes and deductions
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
                setTaxYearInput={setTaxYearInput}
                setCustomTaxYearConfig={setCustomTaxYearConfig}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={12}>
              <OtherIncome
                otherIncome={calculatorInput.taxationConfig.otherIncome}
                setOtherIncome={setOtherIncome}
                isOtherIncomeSet={isOtherIncomeSet}
                setIsOtherIncomeSet={setIsOtherIncomeSet}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={12}>
              <StudentLoanRepayments
                studentRepaymentLoanTypes={
                  calculatorInput.taxationConfig.studentRepaymentLoanTypes
                }
                setStudentRepaymentLoanTypes={setStudentRepaymentLoanTypes}
              />
            </Grid>
          </Grid>
        </Grid>
        {calculatorInput.companies.length === 0 || !isOtherIncomeSet ? (
          <Grid item xs={12}>
            <Alert severity="info" variant="filled">
              <AlertTitle>
                Please add the following information to see your calculation:
              </AlertTitle>
              <ul>
                {calculatorInput.companies.length === 0 && (
                  <li>
                    Add a company from which you have received share options
                  </li>
                )}
                {companyNamesWithNoShareAllocations.map((companyName) => (
                  <li key={companyName}>
                    Add a share allocation for {companyName}.
                  </li>
                ))}
                {!isOtherIncomeSet && (
                  <li>Set your expected taxable annual income.</li>
                )}
              </ul>
            </Alert>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              Your prediction
            </Typography>
            <Grid container spacing={6}>
              <Grid item xs={12} lg={4}>
                <Typography variant="h4" gutterBottom>
                  Totals
                </Typography>
                {loading ? (
                  <TotalsChart loading />
                ) : (
                  <TotalsChart loading={false} totals={result.totals} />
                )}
              </Grid>
              <Grid item xs={12} lg={8}>
                <Typography variant="h4" gutterBottom>
                  Gains over time
                </Typography>
                {loading ? (
                  <TimeSeriesChart loading />
                ) : (
                  <TimeSeriesChart
                    loading={false}
                    timeSeries={result.timeSeries}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
