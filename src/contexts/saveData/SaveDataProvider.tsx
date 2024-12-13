import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";

import {
  calculatorInputFromJSON,
  calculatorInputToJSON,
} from "../../calculator/serialisation";
import { CalculatorInput } from "../../calculator/types/inputs";
import { LOCAL_STORAGE_KEYS } from "../../common/localStorageKeys";

import { SaveDataContext, SaveDataContextValue } from "./saveData";

interface SaveDataProviderProps {
  children: ReactNode;
}

export const SaveDataProvider = ({ children }: SaveDataProviderProps) => {
  const initialSavedCalculatorInput = useMemo(() => {
    const savedCalculatorInputJSON =
      localStorage.getItem(LOCAL_STORAGE_KEYS.CALCULATOR_INPUT_JSON) ?? "";
    return calculatorInputFromJSON(savedCalculatorInputJSON);
  }, []);

  const [autosaveEnabled, setAutosaveEnabledState] = useState(true);
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const autosaveEnabledJSON = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEYS.AUTOSAVE_ENABLED_JSON) ?? ""
      );
      if (typeof autosaveEnabledJSON === "boolean") {
        setAutosaveEnabledState(autosaveEnabledJSON);
      }
    } catch {
      /* empty */
    }
  }, []);

  const setAutosaveEnabled = useCallback((enabled: boolean) => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.AUTOSAVE_ENABLED_JSON,
      JSON.stringify(enabled)
    );
    setAutosaveEnabledState(enabled);
  }, []);

  const saveCalculatorInput = useCallback(
    (calculatorInput: CalculatorInput) => {
      if (autosaveEnabled) {
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.CALCULATOR_INPUT_JSON,
          calculatorInputToJSON(calculatorInput)
        );
      }
    },
    [autosaveEnabled]
  );

  const contextValue: SaveDataContextValue = {
    initialSavedCalculatorInput,
    saveCalculatorInput,
    autosaveEnabled,
    setAutosaveEnabled,
  };

  return (
    <SaveDataContext.Provider value={contextValue}>
      {children}
    </SaveDataContext.Provider>
  );
};
