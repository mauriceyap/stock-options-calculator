import { ReactNode, useMemo } from "react";

import { ColourModeProvider } from "../contexts/colourMode/ColourModeProvider";

const providers = [ColourModeProvider];

interface AppContextProviderProps {
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
        ({ children }: AppContextProviderProps) => <>{children}</>
      ),
    []
  );
  return <Provider>{children}</Provider>;
};
