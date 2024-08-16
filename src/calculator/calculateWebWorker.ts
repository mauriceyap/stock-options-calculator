import { CalculateOptions, calculate } from "./calculate/calculate";
import { CalculatorInput } from "./types/inputs";

const CALCULATE_OPTIONS: CalculateOptions = {
  latestTimeseriesDateBufferMonths: 4,
  outputDecimalPlaces: 2,
};

self.addEventListener("message", (e: MessageEvent<CalculatorInput>) => {
  postMessage(calculate(e.data, CALCULATE_OPTIONS));
});
