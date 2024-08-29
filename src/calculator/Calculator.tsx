import { yupResolver } from "@hookform/resolvers/yup";
import { Add } from "@mui/icons-material";
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  debounce,
  styled,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";

import { TimeSeriesChart } from "./charts/./TimeSeriesChart";
import { TotalsChart } from "./charts/./TotalsChart";

import { calculate } from "./calculate/calculate";
import { CalculatorErrorsAlert } from "./CalculatorErrorsAlert";
import { CompanyInputAccordion } from "./CompanyInputAccordion";
import { defaultCompanyInputValues, defaultValues } from "./defaultValues";
import { schema } from "./schema";
import { StudentLoanRepaymentTypesSelector } from "./StudentLoanRepaymentTypesSelector";
import { TaxYearSelector } from "./TaxYearSelector";
import { CalculatorInput } from "./types/inputs";
import { useCalculateWebWorker } from "./useCalculateWebWorker";

const DEBOUNCE_MS = 300;

const TaxationConfigInputsContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    columnGap: 4,
    rowGap: 2,
    flexWrap: "wrap",
  })
);

const OtherTaxableIncomeTextField = styled(TextField)({
  minWidth: 180,
});

const initialResult = calculate(defaultValues);

// TODO: ability to store result in browser
// TODO: add tooltips to all inputs
export const Calculator = () => {
  const [executeCalculate, { result, running }] = useCalculateWebWorker();
  const [latestResult, setLatestResult] = useState(initialResult);

  useEffect(() => {
    if (!running) {
      setLatestResult(result);
    }
  }, [running, result]);

  const [expandedCompanyIndex, setExpandedCompanyIndex] = useState<
    number | null
  >(0);

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<CalculatorInput>({
    defaultValues,
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const values = useWatch({ control });

  const companyNames = useMemo(
    (): string[] =>
      (values.companies ?? []).map(({ name }, i) => name ?? `Company ${i + 1}`),
    [values.companies]
  );

  const debouncedSubmit = useMemo(
    () => debounce(handleSubmit(executeCalculate), DEBOUNCE_MS),
    [handleSubmit, executeCalculate]
  );

  useEffect(() => {
    void (async () => {
      await debouncedSubmit();
    })();
  }, [debouncedSubmit, values]);

  const {
    fields: companiesFields,
    append: appendCompany,
    remove: removeCompany,
  } = useFieldArray({
    control,
    name: "companies",
  });

  return (
    <form>
      <Stack spacing={2}>
        <section>
          <Typography variant="h2" gutterBottom>
            Your allocations
          </Typography>
          <Stack spacing={1}>
            <Typography paragraph>
              For each company where you employee stock options, enter details
              of your stock allocations, along with your predicted exit event
              date and predicted range of share prices at exit.
            </Typography>
            <Stack spacing={1}>
              {companiesFields.map((field, i) => (
                <CompanyInputAccordion
                  key={field.id}
                  control={control}
                  companyIndex={i}
                  hideRemoveButton={companiesFields.length <= 1}
                  expanded={i === expandedCompanyIndex}
                  onChange={() => {
                    setExpandedCompanyIndex(
                      i === expandedCompanyIndex ? null : i
                    );
                  }}
                  removeCompany={() => {
                    setExpandedCompanyIndex(null);
                    removeCompany(i);
                  }}
                />
              ))}
            </Stack>
            <Controller
              name="companies"
              control={control}
              render={({ fieldState: { error } }) => (
                <>
                  {!error && isDirty && (
                    <Button
                      onClick={() => {
                        setExpandedCompanyIndex(companiesFields.length);
                        appendCompany(defaultCompanyInputValues, {
                          shouldFocus: false,
                        });
                      }}
                      startIcon={<Add />}
                      fullWidth
                      variant="outlined"
                      size="small"
                      color="success"
                    >
                      Add stock options from another company
                    </Button>
                  )}
                </>
              )}
            />
          </Stack>
        </section>
        <section>
          <Typography variant="h2" gutterBottom>
            Your tax situation
          </Typography>
          <Typography paragraph>
            Give details of your expected tax situation when you will exercise
            your shares. These are used to calculate deductions from your gross
            gains.
          </Typography>
          <TaxationConfigInputsContainer>
            <Controller
              name="taxationConfig.otherIncome"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <OtherTaxableIncomeTextField
                  {...field}
                  label="Other taxable income"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">£</InputAdornment>
                    ),
                  }}
                  margin="normal"
                  type="number"
                  error={Boolean(error)}
                  helperText={error?.message ?? null}
                />
              )}
            />
            <StudentLoanRepaymentTypesSelector control={control} />
            <TaxYearSelector control={control} />
          </TaxationConfigInputsContainer>
        </section>
        {isDirty && (
          <section>
            <Typography variant="h2" gutterBottom>
              Your calculation
            </Typography>
            {isValid ? (
              <>
                <Controller
                  name="taxationConfig.taxYear"
                  control={control}
                  render={({ field: { value } }) => (
                    <Typography paragraph variant="body2">
                      Deductions are calculated using the tax rates from the{" "}
                      <strong>{value}</strong> tax year.
                    </Typography>
                  )}
                />
                <Typography variant="h3" gutterBottom>
                  Your totals
                </Typography>
                <TotalsChart loading={running} totals={latestResult.totals} />
                <Typography variant="h3" gutterBottom>
                  Your gains over time
                </Typography>
                <TimeSeriesChart
                  loading={running}
                  timeSeries={latestResult.timeSeries}
                />
              </>
            ) : (
              <CalculatorErrorsAlert
                errors={errors}
                companyNames={companyNames}
              />
            )}
          </section>
        )}
      </Stack>
    </form>
  );
};
