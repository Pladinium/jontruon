"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useMemo } from "react";
import { useLanguage } from "../components/LanguageContext";
import { useTheme } from "../components/ThemeContext"; // not used, cut the noise

type TLItem = {
  year: string;
  month: { EN: string; FR: string };
  title: { EN: string; FR: string };
  description: { EN: string; FR: string };
  image?: string;
  imageAlt?: string;
};

const MONTH_INDEX: Record<string, number> = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
};

const timelineData: TLItem[] = [
  {
    year: "2025",
    month: {EN: "July", FR: "Juillet"},
    title: { EN: "JonTruon.com Website", FR: "Site Web JonTruon.com" },
    description: {
      EN: "Built a personal knowledge repository to curate whitepapers and compliance resources.",
      FR: "Création d'un dépôt personnel de connaissances pour organiser des livres blancs et des ressources réglementaires.",
    },
  },
  {
    year: "2025",
    month: { EN: "June", FR: "Juin" },
    title: { 
      EN: "Pharmaceutical LIMS Exploration", 
      FR: "Exploration d'un LIMS Pharmaceutique" 
    },
    description: {
      EN: "Deployed SENAITE 2.6 on Ubuntu to explore its interface, capabilities, and QC workflow features.",
      FR: "Déploiement de SENAITE 2.6 sur Ubuntu afin d'explorer son interface, ses fonctionnalités et ses flux de travail de contrôle qualité.",
    },
    image: "/assets/logos/senaite-logo.svg",
    imageAlt: "SENAITE 2.6",
  },
  {
    year: "2025",
    month: { EN: "May", FR: "Mai" },
    title: { 
      EN: "Open-Source ERP Evaluation", 
      FR: "Évaluation d'un ERP Open-Source" 
    },
    description: {
      EN: "Installed ERPNext to evaluate its modules and user interface for potential use in pharmaceutical QC operations.",
      FR: "Installation d'ERPNext pour évaluer ses modules et son interface utilisateur en vue d'une utilisation potentielle dans des opérations QC pharmaceutiques.",
    },
    image: "/assets/logos/erpnext-logo.svg",
    imageAlt: "ERPNext dashboard",
  },
  {
    year: "2025",
    month: {EN: "March", FR: "Mars"},
    title: {EN: "SOP Drafting Practice", FR: "Pratique de rédaction de PON"},
    description: {
      EN: "Created a SOP draft outlining best practices for SOP authorship in a GMP-compliant environment. The document includes metadata fields aligned with regulatory expectations and adopts standardized formatting for traceability and document control. Please refer to my GitHub repository for a sample draft SOP.",
      FR: "Rédaction d'un PON décrivant les meilleures pratiques pour la rédaction de PON dans un environnement conforme aux BPF. Le document comprend des champs de métadonnées alignés sur les exigences réglementaires et adopte un format standardisé pour assurer la traçabilité et le contrôle documentaire. Veuillez consulter mon dépôt GitHub pour un exemple de PON rédigée.",
    },
  },
  {
    year: "2024",
    month: {EN: "November", FR: "Novembre"},
    title: {EN: "University Project", FR: "Projet d'université"},
    description: {
      EN: "Made a 5-minute education video using Blender and a poster presentation on current therapies for Parkinson's Disease.",
      FR: "Réalisation d'une vidéo éducative de 5 minutes à l'aide de Blender et d'une présentation par affiche sur les thérapies actuelles de la maladie de Parkinson.",
    },
  },
  {
    year: "2024",
    month: {EN: "September", FR: "Septembre"},
    title: { EN: "Custom Desktop Workstation Build", FR: "Montage d'une Station de Travail Personnalisée" },
    description: {
      EN: "Built a Windows workstation for modeling, testing, and gaming; plus an Ubuntu VM (24.04) to host open-source tools.",
      FR: "Assemblage d'un poste Windows pour la modélisation, les tests et le gaming; plus une VM Ubuntu 24.04 pour héberger des outils open source.",
    },
  },
];

export default function TimelinePage() {
  const {language} = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const lang = language === "FR" ? "FR" : "EN";
  const {darkMode} = useTheme();
  const [hasMounted, setHasMounted] = useState(false);


  const sortedTimelineData = useMemo(() => {
    return [...timelineData].sort((a, b) => {
      if (a.year !== b.year) return Number(b.year) - Number(a.year);
      return MONTH_INDEX[b.month[lang]] - MONTH_INDEX[a.month[lang]];
    });
  }, [lang]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => setLoaded(true), []);
  useEffect(() => {setHasMounted(true);}, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.setPointerCapture(e.pointerId);
    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - dx * 1.5;
  };

  const endDrag = (e?: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
    if (e && scrollRef.current) scrollRef.current.releasePointerCapture(e.pointerId);
  };

  return (
    <main className="pt-64 min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200 ease-out overflow-y-hidden">
      <section
        className={`transition-[opacity,translate] duration-700 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[var(--foreground)] to-[var(--muted)] leading-normal text-center">
          {language === "EN" ? "Projects Timeline" : "Chronologie des Projets"}
        </h1>

        <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-12" />

        {/* Desktop */}
        <div
          ref={scrollRef}
          className="relative hidden md:block w-full overflow-x-auto cursor-grab select-none scrollbar-hide"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
        >
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-[var(--muted)] z-0"
            style={{ width: `${sortedTimelineData.length * 26}rem` }}
          />

          <div className="flex gap-10 justify-start min-w-max px-12 py-[30rem] relative z-5 min-h-[50rem]">
            {sortedTimelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
              <div key={index} className="relative flex flex-col items-center w-80">

                  <p 
                    className={`absolute left-1/2 -translate-x-1/2 text-sm text-[var(--foreground)] ${
                      isEven ? "bottom-[calc(50%-2rem)]" : "top-[calc(50%-2rem)] "
                    }`}
                  >
                    {language === "EN" ? item.month.EN : item.month.FR} {item.year}
                  </p>

                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--foreground)] border-4 border-[var(--background)] z-10" />

                <div
                  className={`absolute w-px bg-[var(--muted)] ${
                    isEven
                      ? "bottom-[calc(50%+0.5rem)] h-[3rem]"
                      : "top-[calc(50%+0.5rem)] h-[3rem]"
                  }`}
                ></div>

                {hasMounted && (
                <div
                  className={`absolute ${
                    isEven ? "bottom-[calc(50%+3rem)]" : "top-[calc(50%+3rem)]"
                  } left-1/2 -translate-x-1/2 bg-[var(--background)] text-[var(--foreground)] rounded-lg p-6 text-center w-80
                   ${darkMode ? "shadow-[0_2px_10px_rgba(255,255,255,0.5)]" : "shadow-2xl"}`}
                >

                  {item.image && (
                    <Image
                      src={item.image}
                      width={0}
                      height={0}
                      alt={item.imageAlt || `${item.title.EN} logo`}
                      className={`w-36 h-auto mb-4 mx-auto ${darkMode ? "invert" : ""}`}
                    />
                  )}
                  <h3 className="text-xl font-bold">
                    {language === "EN" ? item.title.EN : item.title.FR}
                  </h3>
                  <p className="mt-2">
                    {language === "EN" ? item.description.EN : item.description.FR}
                  </p>
                </div>
                )}
              </div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden relative px-6 py-10">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[var(--muted)]" />
          <div className="flex flex-col gap-12 pl-10">
            {sortedTimelineData.map((item) => (
              <div key={`${item.year}-${item.month}-${item.title.EN}`} className="relative">
                <span className="absolute -translate-x-13 top-2 w-4 h-4 rounded-full bg-[var(--foreground)] border-4 border-[var(--background)]" />
                <div className={`bg-[var(--background)] text-[var(--foreground)] rounded-lg p-6 ${hasMounted && darkMode ? "shadow-[0_2px_10px_rgba(255,255,255,0.5)]" : "shadow-2xl"}`}>
                  {item.image && (
                    <div className="mb-4 overflow-hidden rounded-md">
                      <Image src={item.image} alt={item.imageAlt || item.title.EN} width={640} height={360} className="w-full h-auto object-cover" priority />
                    </div>
                  )}
                  <h3 className="text-xl font-bold">{language === "EN" ? item.title.EN : item.title.FR}</h3>
                  <p className="mt-2">{language === "EN" ? item.description.EN : item.description.FR}</p>
                  <p className="mt-3 text-sm italic opacity-80">{language === "EN" ? item.month.EN : item.month.FR} {item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-1" />
      </section>
    </main>
  );
}
