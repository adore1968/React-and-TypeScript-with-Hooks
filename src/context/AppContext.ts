import { AppContextType } from "@/ts/interfaces";
import { createContext, useContext } from "react";

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("useAppContext must be within <AppContext.Provider>");
  }
  return appContext;
};
