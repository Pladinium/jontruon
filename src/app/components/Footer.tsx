"use client";

import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="w-full py-4 text-center text-sm transition-colors duration-200 ease-out bg-[var(--background)] text-[var(--muted)]">
      {language === "EN" ? (
        <>
          © {new Date().getFullYear()} Jonathan Truong. All rights reserved.
        </>
      ) : (
        <>
          © {new Date().getFullYear()} Jonathan Truong. Tous droits réservés
        </>
      )}
    </footer>
  );
}
