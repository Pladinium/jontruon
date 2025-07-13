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
    <main
        className={`flex flex-col items-center justify-center min-h-screen pt-50
        bg-[var(--background)] text-[var(--foreground)]
        transition-all duration-700 ease-out will-change-transform
        ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <h1 className="text-4xl font-bold mb-4">
        {language === "EN" ? "Resume" : "CV"}
      </h1>

      <p className="mb-8 text-center max-w-2xl">
        {language === "EN"
          ? "Here’s a quick look at my current resume. Download the full PDF below for the best quality."
          : "Voici un aperçu de mon CV actuel. Téléchargez le PDF complet ci-dessous pour une meilleure qualité."}
      </p>

      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-[var(--foreground)] text-[var(--background)]
        font-semibold rounded hover:opacity-80 transition"
      >
        {language === "EN" ? "Download PDF" : "Télécharger PDF"}
      </a>

      <div className="w-200 h-0.25 bg-[var(--foreground)] mx-auto my-12" />

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

      <div className="w-200 h-0.25 bg-[var(--foreground)] mx-auto my-12" />

      <section className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl text-center font-semibold mb-2">
          {language === "EN" ? "Additional Skills" : "Compétences supplémentaires"}
        </h2>
        <ul className="list-disc list-inside text-[var(--foreground)]">
          <li>Python Programming Language</li>
          <li>C Programming Language</li>
          <li>SQL Programming Language</li>
          <li>Lua/Luau Programming Language</li>
          <li>Next.js, React, Tailwind CSS</li>
          <li>Javascript/Typescript</li>
          <li>Figma Design</li>
          {/* Add more as you like */}
        </ul>

        <h2 className="text-2xl text-center font-semibold mt-6 mb-2">
        {language === "EN" ? "Certifications" : "Certifications"}
        </h2>
        <ul className="list-disc list-inside text-[var(--foreground)]">
          <li>National Lifeguard (Pool) — Lifesaving Society (Expires in July 2026)</li>
          <li>Standard First Aid & CPR-C/AED — Lifesaving Society (Expires in July 2027)</li>
        {/* Add expiry dates if helpful */}
        </ul>
      </section>

    </main>
  );
}
