import { styled } from "@mui/material";
import { BarChart, BarChartProps } from "@mui/x-charts";
import { SeriesValueFormatter } from "@mui/x-charts/internals";
import { useMemo } from "react";

import { formatGBP } from "../../common/formatGBP";
import { remToPx } from "../../common/remToPx";
import { WithLoading } from "../../common/withLoading";

import { PREDICTION_LEVEL_DISPLAY_NAMES } from "../displayNames";
import { PREDICTION_LEVELS } from "../types";
import { CalculatedTotals } from "../types/outputs";

import {
  CAPITAL_GAINS_TAX_COLOUR,
  EMPLOYEE_NATIONAL_INSURANCE_CONTRIBUTIONS_COLOUR,
  INCOME_TAX_COLOUR,
  LOADING_COLOUR,
  NET_GAIN_DEFAULT_COLOUR,
  STUDENT_LOAN_REPAYMENTS_COLOUR,
} from "./chartColours";
import { useDisplayLoading } from "./useDisplayLoading";

const INITIAL_TOTALS: CalculatedTotals = {
  grossGain: {
    low: 0,
    medium: 0,
    high: 0,
  },
  netGain: {
    low: 0,
    medium: 0,
    high: 0,
  },
  incomeTaxPayable: {
    low: 0,
    medium: 0,
    high: 0,
  },
  employeeNationalInsurancePayable: {
    low: 0,
    medium: 0,
    high: 0,
  },
  capitalGainsTaxPayable: {
    low: 0,
    medium: 0,
    high: 0,
  },
  studentLoanRepaymentsPayable: {
    low: 0,
    medium: 0,
    high: 0,
  },
};

const ChartOuterContainer = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  height: "100%",
});

const ChartContainer = styled("div")({
  height: "30rem",
  display: "inline-block",
  maxWidth: "50rem",
  width: "100%",
  alignSelf: "center",
});

const stack = "";

const seriesValueFormatter: SeriesValueFormatter<number | null> = (v) =>
  formatGBP(v ?? 0, true);

const loadedSeries: BarChartProps["series"] = [
  {
    dataKey: "netGain",
    label: "Net gain",
    color: NET_GAIN_DEFAULT_COLOUR,
    valueFormatter: seriesValueFormatter,
    stack,
  },
  {
    dataKey: "incomeTaxPayable",
    label: "Income tax",
    color: INCOME_TAX_COLOUR,
    valueFormatter: seriesValueFormatter,
    stack,
  },
  {
    dataKey: "employeeNationalInsurancePayable",
    label: "Employee N.I. contributions",
    color: EMPLOYEE_NATIONAL_INSURANCE_CONTRIBUTIONS_COLOUR,
    valueFormatter: seriesValueFormatter,
    stack,
  },
  {
    dataKey: "studentLoanRepaymentsPayable",
    label: "Student loan repayments",
    color: STUDENT_LOAN_REPAYMENTS_COLOUR,
    valueFormatter: seriesValueFormatter,
    stack,
  },
  {
    dataKey: "capitalGainsTaxPayable",
    label: "Capital gains tax",
    valueFormatter: seriesValueFormatter,
    color: CAPITAL_GAINS_TAX_COLOUR,
    stack,
  },
];

const loadingSeries: BarChartProps["series"] = loadedSeries.map((e) => ({
  ...e,
  color: LOADING_COLOUR,
}));

export type TotalsChartProps = WithLoading<{
  totals: CalculatedTotals;
}>;

export const TotalsChart = ({ totals, loading }: TotalsChartProps) => {
  const displayLoading = useDisplayLoading(loading);

  const dataset: BarChartProps["dataset"] = useMemo(
    () =>
      PREDICTION_LEVELS.map((predictionLevel) => {
        const latestTotals =
          loading || displayLoading ? INITIAL_TOTALS : totals;
        return {
          netGain: latestTotals.netGain[predictionLevel],
          capitalGainsTaxPayable:
            latestTotals.capitalGainsTaxPayable[predictionLevel],
          employeeNationalInsurancePayable:
            latestTotals.employeeNationalInsurancePayable[predictionLevel],
          incomeTaxPayable: latestTotals.incomeTaxPayable[predictionLevel],
          studentLoanRepaymentsPayable:
            latestTotals.studentLoanRepaymentsPayable[predictionLevel],
          displayNameTildeGrossGain: [
            PREDICTION_LEVEL_DISPLAY_NAMES[predictionLevel],
            formatGBP(latestTotals.grossGain[predictionLevel], true),
          ].join("~"),
        };
      }),
    [loading, displayLoading, totals]
  );

  const series = useMemo<BarChartProps["series"]>(
    () => (displayLoading ? loadingSeries : loadedSeries),
    [displayLoading]
  );

  return (
    <ChartOuterContainer>
      <ChartContainer>
        <BarChart
          loading={displayLoading}
          dataset={dataset}
          margin={{ left: 80, top: remToPx(7) }}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "displayNameTildeGrossGain",
              valueFormatter: (displayNameTildeGrossGain, context) => {
                const [displayName, grossGain] = (
                  displayNameTildeGrossGain as string
                ).split("~");
                return context.location === "tooltip"
                  ? `${displayName} prediction - ${grossGain} gross gain`
                  : `${displayName} prediction`;
              },
            },
          ]}
          yAxis={[
            {
              scaleType: "linear",
              valueFormatter: (v: number) => formatGBP(v, true),
            },
          ]}
          series={series}
        />
      </ChartContainer>
    </ChartOuterContainer>
  );
};
