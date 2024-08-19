import { styled } from "@mui/material";
import { BarChart, BarChartProps } from "@mui/x-charts";
import { SeriesValueFormatter } from "@mui/x-charts/internals";

import { formatGBP } from "../../common/formatGBP";
import { remToPx } from "../../common/remToPx";

import { PREDICTION_LEVEL_DISPLAY_NAMES } from "../displayNames";
import { PREDICTION_LEVELS } from "../types";
import { CalculatedTotals } from "../types/outputs";

import {
  CAPITAL_GAINS_TAX_COLOUR,
  EMPLOYEE_NATIONAL_INSURANCE_CONTRIBUTIONS_COLOUR,
  INCOME_TAX_COLOUR,
  NET_GAIN_DEFAULT_COLOUR,
  STUDENT_LOAN_REPAYMENTS_COLOUR,
} from "./chartColours";

const ChartOuterContainer = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "center",
});

const ChartContainer = styled("div")({
  height: "30rem",
  display: "inline-block",
  maxWidth: "50rem",
  width: "100%",
  alignSelf: "middle",
});

const stack = "";

export interface TotalsChartProps {
  loading: boolean;
  totals: CalculatedTotals;
}

// TODO: add a visual indication of the loading state
export const TotalsChart = ({ totals }: TotalsChartProps) => {
  const dataset: BarChartProps["dataset"] = PREDICTION_LEVELS.map(
    (predictionLevel) => ({
      netGain: totals.netGain[predictionLevel],
      capitalGainsTaxPayable: totals.capitalGainsTaxPayable[predictionLevel],
      employeeNationalInsurancePayable:
        totals.employeeNationalInsurancePayable[predictionLevel],
      incomeTaxPayable: totals.incomeTaxPayable[predictionLevel],
      studentLoanRepaymentsPayable:
        totals.studentLoanRepaymentsPayable[predictionLevel],
      displayNameTildeGrossGain: [
        PREDICTION_LEVEL_DISPLAY_NAMES[predictionLevel],
        formatGBP(totals.grossGain[predictionLevel], true),
      ].join("~"),
    })
  );

  const valueFormatter: SeriesValueFormatter<number | null> = (v) =>
    formatGBP(v ?? 0, true);

  const series: BarChartProps["series"] = [
    {
      dataKey: "netGain",
      label: "Net gain",
      color: NET_GAIN_DEFAULT_COLOUR,
      valueFormatter,
      stack,
    },
    {
      dataKey: "incomeTaxPayable",
      label: "Income tax",
      color: INCOME_TAX_COLOUR,
      valueFormatter,
      stack,
    },
    {
      dataKey: "employeeNationalInsurancePayable",
      label: "Employee National Insurance contributions",
      color: EMPLOYEE_NATIONAL_INSURANCE_CONTRIBUTIONS_COLOUR,
      valueFormatter,
      stack,
    },
    {
      dataKey: "studentLoanRepaymentsPayable",
      label: "Student loan repayments",
      color: STUDENT_LOAN_REPAYMENTS_COLOUR,
      valueFormatter,
      stack,
    },
    {
      dataKey: "capitalGainsTaxPayable",
      label: "Capital gains tax",
      valueFormatter,
      color: CAPITAL_GAINS_TAX_COLOUR,
      stack,
    },
  ];

  return (
    <ChartOuterContainer>
      <ChartContainer>
        <BarChart
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
