"use client";

import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="w-full py-4 text-center text-sm text-gray-500">
      {language === "EN" ? (
        <>
          © {new Date().getFullYear()} Jonathan Truong. Website source code licensed under MIT. Whitepapers licensed under CC BY-SA 4.0.
        </>
      ) : (
        <>
          © {new Date().getFullYear()} Jonathan Truong. Code source du site sous licence MIT. Livres blancs sous licence CC BY-SA 4.0.
        </>
      )}
    </footer>
  );
}
