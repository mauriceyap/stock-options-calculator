import "dayjs/locale/en-gb";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ReactNode, useMemo } from "react";

import { ColourModeProvider } from "../contexts/colourMode/ColourModeProvider";

const DAY_JS_LOCALE = "en-gb";

dayjs.locale(DAY_JS_LOCALE);
interface ProviderProps {
  children: ReactNode;
}

const providers = [
  ColourModeProvider,
  ({ children }: ProviderProps) => (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={DAY_JS_LOCALE}
    >
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
