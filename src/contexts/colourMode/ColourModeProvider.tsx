import { ThemeProvider } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { ReactNode, Reducer, useCallback, useMemo, useReducer } from "react";

import { darkTheme, lightTheme } from "../../themes";

import {
  ColourMode,
  ColourModeContext,
  ColourModeContextValue,
  ColourModeState,
} from "./colourMode";

interface SetColourModeAction {
  type: "setColourMode";
  payload: ColourMode;
}

const colourModeReducer: Reducer<ColourModeState, SetColourModeAction> = (
  prevState,
  action
) => ({
  ...prevState,
  colourMode: action.payload,
});

interface ColourModeProviderProps {
  children: ReactNode;
}

export const ColourModeProvider = ({ children }: ColourModeProviderProps) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [state, dispatch] = useReducer(colourModeReducer, {
    colourMode: prefersDarkMode ? "dark" : "light",
  });

  const setColourMode = useCallback(
    (colourMode: ColourMode) => {
      dispatch({ type: "setColourMode", payload: colourMode });
    },
    [dispatch]
  );

  const contextValue: ColourModeContextValue = { ...state, setColourMode };

  const theme = useMemo(
    () => (state.colourMode === "dark" ? darkTheme : lightTheme),
    [state.colourMode]
  );

  return (
    <ColourModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColourModeContext.Provider>
  );
};
