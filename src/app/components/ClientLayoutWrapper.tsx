"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LanguageContext } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("EN");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeProvider>
        <Navbar language={language} setLanguage={setLanguage} />
        {children}
        <Footer />
      </ThemeProvider>
    </LanguageContext.Provider>
  );
}
