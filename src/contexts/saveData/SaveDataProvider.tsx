import { ReactNode, useCallback, useState } from "react";

import { SaveDataContext, SaveDataContextValue } from "./saveData";

const LOCAL_STORAGE_KEYS = {
  CALCULATOR_INPUT_JSON: "CALCULATOR_INPUT_JSON",
} as const;

interface SaveDataProviderProps {
  children: ReactNode;
}

export const SaveDataProvider = ({ children }: SaveDataProviderProps) => {
  const [calculatorInputJSONState, setCalculatorInputJSONState] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEYS.CALCULATOR_INPUT_JSON) ?? ""
  );

  const [changesPresent, setChangesPresent] = useState(false);

  const saveDataToLocalStorage = useCallback(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.CALCULATOR_INPUT_JSON,
      calculatorInputJSONState
    );
    setChangesPresent(false);
  }, [calculatorInputJSONState]);

  const setCalculatorInputJSON = useCallback(
    (calculatorInputJSON: string) => {
      setCalculatorInputJSONState(calculatorInputJSON);
      setChangesPresent(
        localStorage.getItem(LOCAL_STORAGE_KEYS.CALCULATOR_INPUT_JSON) !==
          calculatorInputJSONState
      );
    },
    [calculatorInputJSONState]
  );

  const contextValue: SaveDataContextValue = {
    calculatorInputJSON: calculatorInputJSONState,
    setCalculatorInputJSON,
    changesPresent,
    saveDataToLocalStorage,
  };

  return (
    <SaveDataContext.Provider value={contextValue}>
      {children}
    </SaveDataContext.Provider>
  );
};
