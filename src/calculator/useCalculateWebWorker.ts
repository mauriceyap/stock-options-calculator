import { useCallback, useEffect, useMemo, useState } from "react";

// eslint-disable-next-line import/no-unresolved
import CalculateWebWorker from "./calculateWebWorker?worker";
import { CalculatorInput } from "./types/inputs";
import { CalculatorOutput } from "./types/outputs";

const INITIAL_RESULT: CalculatorOutput = {
  timeSeries: [],
  totals: {
    grossGain: { low: 0, medium: 0, high: 0 },
    netGain: { low: 0, medium: 0, high: 0 },
    incomeTaxPayable: { low: 0, medium: 0, high: 0 },
    employeeNationalInsurancePayable: { low: 0, medium: 0, high: 0 },
    capitalGainsTaxPayable: { low: 0, medium: 0, high: 0 },
    studentLoanRepaymentsPayable: { low: 0, medium: 0, high: 0 },
  },
};

export interface UseCalculateWebWorkerRunningResponse {
  running: true;
  result: undefined;
}

export interface UseCalculateWebWorkerCompleteResponse {
  running: false;
  result: CalculatorOutput;
}

export type UseCalculateWebWorkerResponse =
  | UseCalculateWebWorkerRunningResponse
  | UseCalculateWebWorkerCompleteResponse;

export const useCalculateWebWorker = (): [
  (input: CalculatorInput) => void,
  UseCalculateWebWorkerResponse
] => {
  const worker = useMemo(() => new CalculateWebWorker(), []);

  const [response, setResponse] = useState<UseCalculateWebWorkerResponse>({
    running: false,
    result: INITIAL_RESULT,
  });

  const executeCalculate = useCallback(
    (data: CalculatorInput) => {
      setResponse({
        running: true,
        result: undefined,
      });
      worker.postMessage(data);
    },
    [worker]
  );

  useEffect(() => {
    const onMessage = (event: MessageEvent<CalculatorOutput>) => {
      setResponse({
        running: false,
        result: event.data,
      });
    };
    worker.addEventListener("message", onMessage);
    return () => {
      worker.removeEventListener("message", onMessage);
    };
  }, [worker]);

  return [executeCalculate, response];
};
