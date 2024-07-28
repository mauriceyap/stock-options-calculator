import { createContext } from "react";

const COLOUR_MODES = ["dark", "light"] as const;
export type ColourMode = (typeof COLOUR_MODES)[number];

export interface ColourModeState {
  colourMode: ColourMode;
}

export interface ColourModeContextValue extends ColourModeState {
  setColourMode: (colourMode: ColourMode) => void;
}

export const ColourModeContext = createContext<
  ColourModeContextValue | undefined
>(undefined);
