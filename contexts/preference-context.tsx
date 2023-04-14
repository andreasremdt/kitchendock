import { Preferences } from "@/types";
import { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

type ContextState = {
  preferences: Preferences;
  update: (changes: Partial<Preferences>) => void;
};

export const PreferenceContext = createContext<ContextState>({} as ContextState);

export default function PreferenceContextProvider({ children }: Props) {
  const [preferences, setPreferences] = useState<Preferences>({
    serves: 1,
    measurement: "metric",
    temperature: "celsius",
    volume: "weight",
  });

  function handlePreferenceChange(changes: Partial<Preferences>) {
    setPreferences((prev) => ({ ...prev, ...changes }));
  }

  return (
    <PreferenceContext.Provider value={{ preferences, update: handlePreferenceChange }}>
      {children}
    </PreferenceContext.Provider>
  );
}
