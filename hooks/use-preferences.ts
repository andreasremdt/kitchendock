import { PreferenceContext } from "@/contexts/preference-context";
import { useContext } from "react";

export default function usePreferences() {
  const context = useContext(PreferenceContext);

  if (!context) {
    throw new Error("`usePreferences` can only be used inside the `PreferenceContext`.");
  }

  return context;
}
