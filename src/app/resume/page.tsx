"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "../components/LanguageContext";

export default function ResumePage() {
  const { language } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  const pages = language === "EN"
    ? ["/cv-en_page-0001.jpg", "/cv-en_page-0002.jpg"]
    : ["/cv-fr_page-0001.jpg", "/cv-fr_page-0002.jpg"];

  const pdf = language === "EN" ? "/cv-en.pdf" : "/cv-fr.pdf";

  useEffect(() => {
    setLoaded(true);
  }, []);

return (
    <main className={`pt-66 flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200 ease-out`}>
      
      <section className={`flex flex-col items-center text-center transition-[opacity,translate] duration-700 ease-out ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>

      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[var(--foreground)] to-[var(--muted)] text-center mb-6 leading-normal">
        {language === "EN" ? "Resume" : "CV"}
      </h1>

      <p className="mb-8 text-center text-lg font-[450] max-w-2xl">
        {language === "EN"
          ? "Here's a quick look at my current resume. Download the full PDF below for the best quality."
          : "Voici un aperçu de mon CV actuel. Téléchargez le PDF complet ci-dessous pour une meilleure qualité."}
      </p>

      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-[var(--foreground)] text-[var(--background)]
        font-semibold rounded hover:opacity-80 transition items-center"
      >
        {language === "EN" ? "Download PDF" : "Télécharger PDF"}
      </a>

      <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-12" />

      {pages.map((src, idx) => (
        <div
          key={idx}
          className="w-full max-w-4xl mb-8 border rounded-lg shadow overflow-hidden"
        >
          <Image
            src={src}
            alt={`Jonathan Truong Resume Page ${idx + 1}`}
            width={1200}
            height={1600}
            className="w-full h-auto"
          />
        </div>
      ))}

      <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-6" />

      <section className="w-full max-w-3xl mb-8">
        <h2 className="text-2xl text-center font-semibold mb-2">
          {language === "EN" ? "Additional Skills" : "Compétences supplémentaires"}
        </h2>
          <ul className="list-disc list-inside text-left font-[450] text-[var(--foreground)]">
            <li>{language === "EN" ? "Python Programming Language" : "Langage de programmation Python"}</li>
            <li>{language === "EN" ? "C Programming Language" : "Langage de programmation C"}</li>
            <li>{language === "EN" ? "SQL Programming Language" : "Langage de programmation SQL"}</li>
            <li>{language === "EN" ? "Lua/Luau Programming Language" : "Langage de programmation Lua/Luau"}</li>
            <li>{language === "EN" ? "Next.js, React, Tailwind CSS" : "Next.js, React, Tailwind CSS"}</li>
            <li>{language === "EN" ? "Javascript/Typescript" : "Javascript/Typescript"}</li>
            <li>{language === "EN" ? "Figma Design" : "Conception avec Figma"}</li>
          </ul>

          <h2 className="text-2xl text-center font-semibold mt-6 mb-2">
            {language === "EN" ? "Certifications" : "Certifications"}
          </h2>

          <ul className="list-disc list-inside text-left font-[450] text-[var(--foreground)]">
            <li>
              {language === "EN"
                ? "National Lifeguard (Pool) — Lifesaving Society (Expires in July 2026)"
                : "Sauveteur national (piscine) — Société de sauvetage (Expire en juillet 2026)"}
            </li>
            <li>
              {language === "EN"
                ? "Standard First Aid & CPR-C/AED — Lifesaving Society (Expires in July 2027)"
                : "Premiers soins – RCR-C/DÉA — Société de sauvetage (Expire en juillet 2027)"}
            </li>
          </ul>
      </section>

      <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-1" />
      </section>
    </main>
  );
}
