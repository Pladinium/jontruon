"use client";
import { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

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
        root.style.setProperty("--background", "#141414"); // dark background
        root.style.setProperty("--foreground", "#ebebeb"); // light text
    } else {
        root.style.setProperty("--background", "#ebebeb"); // light background
        root.style.setProperty("--foreground", "#1F1F1F"); // dark text
    }
    }, [darkMode]);


  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
