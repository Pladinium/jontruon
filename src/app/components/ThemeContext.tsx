"use client";
import { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    } else {
      const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setDarkMode(darkQuery.matches);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty("--background", "#1f1f1f");
      root.style.setProperty("--foreground", "#ebebeb");
      root.style.setProperty("--color-primary", "#16007A");
      root.style.setProperty("--color-primary-hover", "#3a2ecc");
    } else {
      root.style.setProperty("--background", "#ebebeb");
      root.style.setProperty("--foreground", "#1f1f1f");
      root.style.setProperty("--color-primary", "#16007A");
      root.style.setProperty("--color-primary-hover", "#2f1eb2");
    }

    root.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
