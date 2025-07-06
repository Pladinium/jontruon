"use client";
import { useState } from "react";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { LanguageContext } from "./components/LanguageContext";
import { ThemeProvider } from "./components/ThemeContext";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [language, setLanguage] = useState("EN");

  return (
    <html lang={language === "EN" ? "en" : "fr"}>
      <body
        className={`${roboto.variable} antialiased`}
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
          fontFamily: "var(--font-roboto), sans-serif",
        }}
      >
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <ThemeProvider> {/* ✅ wrap whole app in ThemeProvider */}
            <Navbar language={language} setLanguage={setLanguage} />
            {children}
            <Footer />
          </ThemeProvider>
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
