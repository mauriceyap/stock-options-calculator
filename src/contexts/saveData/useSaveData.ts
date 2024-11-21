import { useContext } from "react";

import { SaveDataContext } from "./saveData";

export const useSaveData = () => {
  const context = useContext(SaveDataContext);
  if (context === undefined) {
    throw new Error("useSaveData must only be used within a SaveDataProvider");
  }
  return context;
};
