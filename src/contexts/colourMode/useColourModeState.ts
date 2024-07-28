import { useContext } from "react";

import { ColourModeContext, ColourModeContextValue } from "./colourMode";

export const useColourModeState = (): [
  ColourModeContextValue["colourMode"],
  ColourModeContextValue["setColourMode"]
] => {
  const context = useContext(ColourModeContext);
  if (context === undefined) {
    throw new Error(
      "useColourModeState must only be used within a ColourModeProvider"
    );
  }
  return [context.colourMode, context.setColourMode];
};
