"use client";
import { createContext, useContext, useState, useEffect } from "react";

type Theme = { darkMode: boolean; setDarkMode: (v: boolean) => void };
export const ThemeContext = createContext<Theme | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;                     // during SSR
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return <ThemeContext.Provider value={{ darkMode, setDarkMode }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}