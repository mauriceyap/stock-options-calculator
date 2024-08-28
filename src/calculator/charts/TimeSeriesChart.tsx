import {
  Checkbox,
  debounce,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import {
  AreaPlot,
  ChartsAxisHighlight,
  ChartsReferenceLine,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  LinePlot,
  LineSeriesType,
  ResponsiveChartContainer,
  axisClasses,
} from "@mui/x-charts";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";

import { formatGBP } from "../../common/formatGBP";

import {
  GAIN_TYPE_DISPLAY_NAMES,
  PREDICTION_LEVEL_DISPLAY_NAMES,
} from "../displayNames";
import {
  GAIN_TYPES,
  GainType,
  PREDICTION_LEVELS,
  PredictionLevel,
} from "../types";
import { CalculatedTimeSeries } from "../types/outputs";

import {
  ANNUAL_GAIN_PREDICTION_LEVEL_COLOUR,
  CAPITAL_GAINS_TAX_COLOUR,
  EMPLOYEE_NATIONAL_INSURANCE_CONTRIBUTIONS_COLOUR,
  GAIN_PREDICTION_LEVEL_COLOUR,
  INCOME_TAX_COLOUR,
  STUDENT_LOAN_REPAYMENTS_COLOUR,
} from "./chartColours";
import { LOADING_DEBOUNCE_MS } from "./display";

const now = new Date();

const GAIN_TYPE_SELECT_LABEL = "Gain type";
const GAIN_TYPE_SELECT_LABEL_ID = "gainType-label";

// This ensures the areas of lower prediction levels are placed on top so that they are visible
const PREDICTION_LEVEL_ORDER: Record<PredictionLevel, number> = {
  low: 2,
  medium: 1,
  high: 0,
};

const ORDERED_PREDICTION_LEVELS = PREDICTION_LEVELS.sort(
  (a, b) => PREDICTION_LEVEL_ORDER[a] - PREDICTION_LEVEL_ORDER[b]
);

const dataPointCumulativeDeductionKeys = [
  "cumulativeCapitalGainsTaxPayable",
  "cumulativeEmployeeNationalInsurancePayable",
  "cumulativeIncomeTaxPayable",
  "cumulativeStudentLoanRepaymentsPayable",
] as const;

const dataPointCumulativeDeductionDisplayNames: Record<
  (typeof dataPointCumulativeDeductionKeys)[number],
  string
> = {
  cumulativeCapitalGainsTaxPayable: "Cumulative capital gains tax",
  cumulativeEmployeeNationalInsurancePayable:
    "Cumulative employee NI contributions",
  cumulativeIncomeTaxPayable: "Cumulative income tax",
  cumulativeStudentLoanRepaymentsPayable: "Cumulative student loan repayments",
};

const dataPointCumulativeDeductionColours: Record<
  (typeof dataPointCumulativeDeductionKeys)[number],
  string
> = {
  cumulativeCapitalGainsTaxPayable: CAPITAL_GAINS_TAX_COLOUR,
  cumulativeEmployeeNationalInsurancePayable:
    EMPLOYEE_NATIONAL_INSURANCE_CONTRIBUTIONS_COLOUR,
  cumulativeIncomeTaxPayable: INCOME_TAX_COLOUR,
  cumulativeStudentLoanRepaymentsPayable: STUDENT_LOAN_REPAYMENTS_COLOUR,
};

const ChartOuterContainer = styled("div")({
  width: "100%",
  minWidth: "600px",
  height: "80vh",
});

const InputsContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    width: "100%",
  })
);
const GainTypeSelect = styled(Select)({ minWidth: 130 });

const StyledResponsiveChartContainer = styled(ResponsiveChartContainer)({
  [`& .${axisClasses.left} .${axisClasses.label}`]: {
    transform: "translateX(-30px)",
  },
});

const currencyValueFormatter = (v: number | null) => formatGBP(v ?? 0, true);

export interface TimeSeriesChartProps {
  loading: boolean;
  timeSeries: CalculatedTimeSeries;
}

export const TimeSeriesChart = ({
  timeSeries,
  loading,
}: TimeSeriesChartProps) => {
  const [gainType, setGainType] = useState<GainType>("net");
  const [predictionLevelsToDisplay, setPredictionLevelsToDisplay] = useState<
    Record<PredictionLevel, boolean>
  >({
    low: true,
    medium: true,
    high: true,
  });
  const [showDeductionBreakdown, setShowDeductionBreakdown] = useState(false);
  const deductionBreakdownEnabled =
    gainType === "gross" &&
    Object.values(predictionLevelsToDisplay).filter(Boolean).length === 1;

  const series = useMemo<LineSeriesType[]>(() => {
    const results = [] as LineSeriesType[];

    results.push(
      ...ORDERED_PREDICTION_LEVELS.filter(
        (level) => predictionLevelsToDisplay[level]
      ).map<LineSeriesType>((level) => ({
        color: GAIN_PREDICTION_LEVEL_COLOUR[level],
        type: "line",
        yAxisId: "gains",
        data: timeSeries.map(
          ([, dataPoint]) =>
            dataPoint[
              gainType === "net" ? "cumulativeNetGain" : "cumulativeGrossGain"
            ][level]
        ),
        label: `Cumulative ${gainType === "net" ? "net" : "gross"} gain (${
          PREDICTION_LEVEL_DISPLAY_NAMES[level]
        })`,
        area: true,
        valueFormatter: currencyValueFormatter,
      }))
    );

    results.push(
      ...ORDERED_PREDICTION_LEVELS.filter(
        (level) => predictionLevelsToDisplay[level]
      ).map<LineSeriesType>((level) => ({
        type: "line",
        yAxisId: "gains",
        data: timeSeries.map(
          ([, dataPoint]) =>
            dataPoint[gainType === "net" ? "annualNetGain" : "annualGrossGain"][
              level
            ]
        ),
        color: ANNUAL_GAIN_PREDICTION_LEVEL_COLOUR[level],
        label: `Annual ${gainType === "net" ? "net" : "gross"} gain (${
          PREDICTION_LEVEL_DISPLAY_NAMES[level]
        })`,
        area: false,
        valueFormatter: currencyValueFormatter,
      }))
    );

    if (deductionBreakdownEnabled && showDeductionBreakdown) {
      const predictionLevel = (Object.entries(predictionLevelsToDisplay).find(
        ([, v]) => v
      ) ?? ["low", true])[0] as PredictionLevel;

      results.push(
        ...dataPointCumulativeDeductionKeys.map<LineSeriesType>((k) => ({
          type: "line",
          yAxisId: "gains",
          data: timeSeries.map(
            ([, dataPoint]) => dataPoint[k][predictionLevel]
          ),
          area: false,
          label: dataPointCumulativeDeductionDisplayNames[k],
          color: dataPointCumulativeDeductionColours[k],
          valueFormatter: currencyValueFormatter,
        }))
      );
    }

    return results;
  }, [
    timeSeries,
    gainType,
    predictionLevelsToDisplay,
    deductionBreakdownEnabled,
    showDeductionBreakdown,
  ]);

  const [debouncedLoading, _setDebouncedLoading] = useState(loading);
  const setDebouncedLoading = useMemo(
    () => debounce(_setDebouncedLoading, LOADING_DEBOUNCE_MS),
    []
  );
  useEffect(() => {
    setDebouncedLoading(loading);
  }, [setDebouncedLoading, loading]);

  return (
    <div>
      <InputsContainer>
        <FormControl>
          <InputLabel id={GAIN_TYPE_SELECT_LABEL_ID}>
            {GAIN_TYPE_SELECT_LABEL}
          </InputLabel>
          <GainTypeSelect
            label={GAIN_TYPE_SELECT_LABEL}
            labelId={GAIN_TYPE_SELECT_LABEL_ID}
            value={gainType}
            onChange={({ target: { value } }) => {
              setGainType(value as GainType);
            }}
          >
            {GAIN_TYPES.map((t) => (
              <MenuItem key={t} value={t}>
                {GAIN_TYPE_DISPLAY_NAMES[t]}
              </MenuItem>
            ))}
          </GainTypeSelect>
        </FormControl>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Prediction levels to display</FormLabel>
          <FormGroup row>
            {ORDERED_PREDICTION_LEVELS.map((predictionLevel) => {
              const isOnlyCheckedOption =
                predictionLevelsToDisplay[predictionLevel] &&
                ORDERED_PREDICTION_LEVELS.filter(
                  (level) => level !== predictionLevel
                ).every((level) => !predictionLevelsToDisplay[level]);
              return (
                <FormControlLabel
                  key={predictionLevel}
                  control={
                    <Checkbox
                      checked={predictionLevelsToDisplay[predictionLevel]}
                      onChange={({ target: { checked } }) => {
                        setPredictionLevelsToDisplay((prev) => ({
                          ...prev,
                          [predictionLevel]: checked,
                        }));
                      }}
                      disabled={isOnlyCheckedOption}
                      size="small"
                    />
                  }
                  label={PREDICTION_LEVEL_DISPLAY_NAMES[predictionLevel]}
                />
              );
            })}
          </FormGroup>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={showDeductionBreakdown}
                onChange={({ target: { checked } }) => {
                  setShowDeductionBreakdown(checked);
                }}
                disabled={!deductionBreakdownEnabled}
                size="small"
              />
            }
            label="Show deductions"
          />
          {!deductionBreakdownEnabled && (
            <FormHelperText>
              Select &quot;Gross&quot; as the gain type and exactly one
              prediction level
            </FormHelperText>
          )}
        </FormGroup>
      </InputsContainer>
      <ChartOuterContainer>
        {debouncedLoading && <LinearProgress variant="indeterminate" />}
        <StyledResponsiveChartContainer
          xAxis={[
            {
              id: "time",
              data: timeSeries.map(([date]) => date),
              scaleType: "time",
              valueFormatter: (t: Date) => dayjs(t).format("MMMM YYYY"),
            },
          ]}
          yAxis={[
            {
              id: "gains",
              scaleType: "linear",
              valueFormatter: (v: number) => formatGBP(v, true),
            },
          ]}
          series={series}
          margin={{ left: 80 }}
        >
          <AreaPlot />
          <LinePlot />
          <ChartsAxisHighlight x="line" />
          <ChartsReferenceLine axisId="time" label="Today" x={now} />
          <ChartsXAxis position="bottom" axisId="time" tickPlacement="middle" />
          <ChartsYAxis position="left" label="Gain" axisId="gains" />
          <ChartsTooltip trigger="axis" />
        </StyledResponsiveChartContainer>
        {debouncedLoading && <LinearProgress variant="indeterminate" />}
      </ChartOuterContainer>
    </div>
  );
};
