import {
  Edit,
  ErrorOutline,
  ExpandMoreRounded,
  RemoveCircle,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import { Control, Controller, useWatch } from "react-hook-form";

import { defaultCompanyLeavingDate } from "../defaultValues";
import { CalculatorInput } from "../types/inputs";

import { AllocationsInputTable } from "./AllocationsInputTable";

const StyledDatePicker = styled(DatePicker)({ minWidth: 160 });

const SharePricePredictionTextField = styled(TextField)({ minWidth: 180 });

const CompanyLabelContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    gap: 1,
  })
);

const InputsContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
  })
);

export interface CompanyInputAccordionProps {
  control: Control<CalculatorInput>;
  companyIndex: number;
  hideRemoveButton: boolean;
  expanded: boolean;
  onChange: () => void;
  removeCompany: () => void;
}

export const CompanyInputAccordion = ({
  control,
  companyIndex,
  hideRemoveButton,
  expanded,
  onChange,
  removeCompany,
}: CompanyInputAccordionProps) => {
  const { companies } = useWatch({ control });

  const [editingName, setEditingName] = useState(
    !companies?.[companyIndex].name
  );

  return (
    <Accordion expanded={expanded} onChange={onChange} variant="outlined">
      <AccordionSummary expandIcon={<ExpandMoreRounded />}>
        <Controller
          name={`companies.${companyIndex}`}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <CompanyLabelContainer>
              <Typography component="div">
                {field.value.name
                  ? `Stock options from ${field.value.name}`
                  : "Stock options"}
              </Typography>
              {error && (
                <div>
                  <Tooltip title="There are errors for the values for this company - please fix them to continue">
                    <ErrorOutline color="error" />
                  </Tooltip>
                </div>
              )}
            </CompanyLabelContainer>
          )}
        />
      </AccordionSummary>
      <AccordionDetails>
        {editingName ? (
          <Controller
            name={`companies.${companyIndex}.name`}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Stack direction="row" spacing={1} alignItems="center">
                <div>
                  <TextField
                    {...field}
                    label="Company name"
                    onKeyDown={({ key }) => {
                      if (key === "Enter" && field.value) {
                        setEditingName(false);
                      }
                    }}
                    error={Boolean(error)}
                    helperText={
                      error?.message ??
                      "This can be a nickname - it is used for display purposes only"
                    }
                  />
                </div>
                <div>
                  <Button
                    disabled={!field.value}
                    onClick={() => {
                      setEditingName(false);
                    }}
                    variant="contained"
                  >
                    Set name
                  </Button>
                </div>
              </Stack>
            )}
          />
        ) : (
          <Stack spacing={2}>
            <InputsContainer>
              <Controller
                name={`companies.${companyIndex}.predictedExitEventDate`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <StyledDatePicker
                    label="Predicted exit event date"
                    value={dayjs(field.value)}
                    inputRef={field.ref}
                    onChange={(date) => {
                      field.onChange(date);
                    }}
                    slotProps={{
                      textField: {
                        margin: "normal",
                        size: "small",
                        error: Boolean(error),
                        helperText: error?.message ?? null,
                      },
                    }}
                  />
                )}
              />
              <Controller
                name={`companies.${companyIndex}.predictedExitEventSharePriceLow`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <SharePricePredictionTextField
                    {...field}
                    label="Low exit share price prediction"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">£</InputAdornment>
                      ),
                    }}
                    type="number"
                    margin="normal"
                    error={Boolean(error)}
                    helperText={error?.message ?? null}
                  />
                )}
              />
              <Controller
                name={`companies.${companyIndex}.predictedExitEventSharePriceMedium`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <SharePricePredictionTextField
                    {...field}
                    label="Medium exit share price prediction"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">£</InputAdornment>
                      ),
                    }}
                    type="number"
                    margin="normal"
                    error={Boolean(error)}
                    helperText={error?.message ?? null}
                  />
                )}
              />
              <Controller
                name={`companies.${companyIndex}.predictedExitEventSharePriceHigh`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <SharePricePredictionTextField
                    {...field}
                    label="High exit share price prediction"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">£</InputAdornment>
                      ),
                    }}
                    type="number"
                    margin="normal"
                    error={Boolean(error)}
                    helperText={error?.message ?? null}
                  />
                )}
              />
              <Controller
                name={`companies.${companyIndex}.leavingDate`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Stack spacing={2} direction="row">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={field.value === null}
                            onChange={(event) => {
                              field.onChange(
                                event.target.checked
                                  ? null
                                  : defaultCompanyLeavingDate
                              );
                            }}
                          />
                        }
                        label="I currently work here"
                      />
                    </FormGroup>
                    {field.value !== null && (
                      <FormGroup>
                        <StyledDatePicker
                          label="Leaving date"
                          value={dayjs(field.value)}
                          inputRef={field.ref}
                          onChange={(date) => {
                            field.onChange(date);
                          }}
                          slotProps={{
                            textField: {
                              margin: "normal",
                              size: "small",
                              error: Boolean(error),
                              helperText: error?.message ?? null,
                            },
                          }}
                        />
                      </FormGroup>
                    )}
                  </Stack>
                )}
              />
            </InputsContainer>
            <AllocationsInputTable
              control={control}
              companyIndex={companyIndex}
            />
          </Stack>
        )}
      </AccordionDetails>
      {!editingName && (
        <AccordionActions>
          {!hideRemoveButton && (
            <Button
              startIcon={<RemoveCircle />}
              color="error"
              variant="outlined"
              onClick={removeCompany}
            >
              Remove company
            </Button>
          )}
          <Button
            startIcon={<Edit />}
            onClick={() => {
              setEditingName(true);
            }}
          >
            Edit company name
          </Button>
        </AccordionActions>
      )}
    </Accordion>
  );
};
