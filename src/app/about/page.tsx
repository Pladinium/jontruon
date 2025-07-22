"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../components/LanguageContext";

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen
        bg-[var(--background)] text-[var(--foreground)]
        transition-all duration-700 ease-out will-change-transform
        ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === "EN" ? "About Me" : "À propos de moi"}
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src="/benji.jpg"
              alt="My dog Benji"
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover"
            />
          </div>

          <div className="text-[var(--foreground)] max-w-2xl space-y-8 font-semibold text-lg text-center lg:text-justify mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                {language === "EN" ? "Professional Background" : "Parcours professionnel"}
              </h3>
              <p>
                {language === "EN"
                  ? "My academic background is rooted in pharmacology, with a focus on pharmaceutical and biopharmaceutical manufacturing. I’m especially driven by the promise of biologics to transform healthcare through better outcomes and accessibility."
                  : "Ma formation est ancrée en pharmacologie, avec un intérêt particulier pour la fabrication pharmaceutique et biopharmaceutique. Je suis particulièrement motivé par le potentiel des biomédicaments à transformer les soins de santé."}
              </p>
              <p>
                {language === "EN"
                  ? "Alongside my scientific foundation, I’m deeply invested in business and entrepreneurship. My long-term goal is to build a biopharmaceutical company that delivers both innovation and access — particularly for underserved patient populations."
                  : "En parallèle de ma formation scientifique, je m’investis fortement dans les affaires et l’entrepreneuriat. Mon objectif à long terme est de bâtir une entreprise biopharmaceutique qui allie innovation et accessibilité — notamment pour les patients mal desservis."}
              </p>
              <p>
                {language === "EN"
                  ? "Until then, I’m actively seeking internships or work opportunities in the pharmaceutical industry to build hands-on experience, learn from established teams, and sharpen my understanding of real-world operations."
                  : "En attendant, je cherche activement des stages ou des opportunités d’emploi dans l’industrie pharmaceutique afin d’acquérir une expérience concrète, d’apprendre aux côtés d’équipes établies et de mieux comprendre les opérations sur le terrain."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-6" />

        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold">
            {language === "EN" ? "Personal Background" : "Parcours personnel"}
          </h3>
          <p>
            {language === "EN"
              ? "Outside of academics and business, I find inspiration in areas that challenge both logic and creativity. I’m especially interested in military aircraft and combat aviation — from systems engineering to aerial strategy."
              : "En dehors de mes études et projets professionnels, je puise mon inspiration dans des domaines qui combinent logique et créativité. Je m’intéresse particulièrement aux avions militaires et à l’aviation de combat — de l’ingénierie des systèmes aux stratégies aériennes."}
          </p>
          <p>
            {language === "EN"
              ? "I also explore fragrance chemistry as a form of storytelling. The precision, memory, and emotional resonance of scent fascinates me. It’s a reminder that science, like business, is often about perception and impact."
              : "J’explore également la chimie des parfums comme forme de narration. La précision, la mémoire et l’émotion portées par une fragrance me passionnent. C’est un rappel que la science, comme les affaires, repose souvent sur la perception et l’impact."}
          </p>
          <p>
            {language === "EN"
              ? "I spend my downtime gaming — mostly strategy and survival titles that reward planning, adaptability, and creative problem-solving. My dog keeps me grounded and adds daily structure to my life."
              : "Je passe mon temps libre à jouer — principalement à des jeux de stratégie ou de survie qui demandent planification, adaptation et résolution créative de problèmes. Mon chien me garde ancré dans le présent et ajoute une routine quotidienne précieuse."}
          </p>
        </section>

      <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-6" />

    </main>
  );
}
