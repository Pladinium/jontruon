"use client";
import { createContext, useContext } from "react";

export type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "EN",
  setLanguage: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}
