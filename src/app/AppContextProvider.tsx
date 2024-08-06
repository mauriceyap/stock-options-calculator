import "dayjs/locale/en-gb";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ReactNode, useMemo } from "react";

import { ColourModeProvider } from "../contexts/colourMode/ColourModeProvider";

interface ProviderProps {
  children: ReactNode;
}

const providers = [
  ColourModeProvider,
  ({ children }: ProviderProps) => (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      {children}
    </LocalizationProvider>
  ),
];

export interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const Provider = useMemo(
    () =>
      providers.reduce(
        (AccumulatedComponents, CurrentComponent) => {
          const C = ({ children }: AppContextProviderProps) => (
            <AccumulatedComponents>
              <CurrentComponent>{children}</CurrentComponent>
            </AccumulatedComponents>
          );
          return C;
        },
        ({ children }: AppContextProviderProps) => children
      ),
    []
  );
  return <Provider>{children}</Provider>;
};
