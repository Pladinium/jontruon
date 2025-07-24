"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../components/LanguageContext";

export default function ResourcesPage() {
  const { language } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="pt-68 min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200 ease-out overflow-y-auto w-full">
      <section
        className={`flex flex-col items-center text-center transition-[opacity,translate] duration-700 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
      >
        <h1 className="text-center font-bold mb-6 text-4xl sm:text-4xl md:text-5xl">
          <span className="sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-b sm:from-[var(--foreground)] sm:to-[var(--muted)] text-[var(--foreground)]">
            {language === "EN" ? "Resources" : "Ressources"}
          </span>
        </h1>

        <p className="mb-12 text-center text-lg font-[450] max-w-2xl">
          {language === "EN"
            ? "This section will grow as I gain more experience. Once I’ve developed stronger field insight through internships or applied projects, I’ll begin posting curated resources and original commentary here."
            : "Cette section s’enrichira avec le temps. Une fois que j’aurai acquis davantage d’expérience grâce à des stages ou des projets appliqués, je commencerai à y publier des ressources triées et des analyses personnelles."}
        </p>

        <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-1" />
      </section>
    </main>
  );
}
