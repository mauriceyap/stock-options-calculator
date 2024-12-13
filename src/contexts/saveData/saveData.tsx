import { createContext } from "react";

import { CalculatorInput } from "../../calculator/types/inputs";

export interface SaveDataContextValue {
  initialSavedCalculatorInput: CalculatorInput | null;
  saveCalculatorInput: (calculatorInput: CalculatorInput) => void;

  autosaveEnabled: boolean;
  setAutosaveEnabled: (enabled: boolean) => void;
}

export const SaveDataContext = createContext<SaveDataContextValue | undefined>(
  undefined
);
