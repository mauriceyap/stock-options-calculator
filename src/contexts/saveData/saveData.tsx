import { createContext } from "react";

export interface SaveDataContextValue {
  calculatorInputJSON: string;
  setCalculatorInputJSON: (calculatorInputJSON: string) => void;

  changesPresent: boolean;
  saveDataToLocalStorage: () => void;
}

export const SaveDataContext = createContext<SaveDataContextValue | undefined>(
  undefined
);
