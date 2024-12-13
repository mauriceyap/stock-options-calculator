import { createContext } from "react";

export type ColourMode = "dark" | "light";

export interface ColourModeState {
  colourMode: ColourMode;
}

export interface ColourModeContextValue extends ColourModeState {
  setColourMode: (colourMode: ColourMode) => void;
}

export const ColourModeContext = createContext<
  ColourModeContextValue | undefined
>(undefined);
