"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../components/LanguageContext";
import { useTheme } from "../components/ThemeContext";


type Project = {
  title: { EN: string; FR: string };
  description: { EN: string; FR: string };
  logo?: string;
  logoClassName?: string;
};

type Timeline = {
  id: string;
  label: { EN: string; FR: string };
  projects: Project[];
};

export default function ProjectsPage() {
  const { language } = useLanguage();

  const [loaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [height, setHeight] = useState<string>("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleMonth = (month: string) => {
    if (expanded === month) {
      setExpanded(null);
    } else {
      setExpanded(month);
    }
  };

  const { darkMode } = useTheme();


  useEffect(() => {
    setLoaded(true);
  }, []);

const timeline: Timeline[] = [
  {
    id: "July-2025",
    label: {EN: "July 2025", FR: "Juillet 2025",},
    projects: [
      {
        title: {EN: "JonTruon.com Website", FR: "Site Web JonTruon.com",
        },
        description: {
          EN: "Built a personal knowledge repository to curate whitepapers and compliance resources.", 
          FR: "Création d’un dépôt personnel de connaissances pour organiser des livres blancs et des ressources réglementaires.",
        },
      },
    ],
  },
  {
    id: "June-2025",
    label: {EN: "June 2025", FR: "Juin 2025",},
    projects: [
      {
        title: {EN: "Pharmaceutical LIMS Deployment", FR: "Déploiement d’un LIMS Pharmaceutique",
        },
        description: {
          EN: "Installed and configured SENAITE 2.6 on Ubuntu for controlled QC workflows. I'm learning to automate functionalities between ERPNext and Senaite while following GAMP5's guidance.",
          FR: "Installation et configuration de SENAITE 2.6 sur Ubuntu pour des flux de contrôle qualité maîtrisés. J’apprends à automatiser les fonctions entre ERPNext et Senaite en suivant les directives de GAMP5.",
        },
        logo: "/senaite-logo.svg",
        logoClassName: "w-72",
      },
    ],
  },
  {
    id: "May-2025",
    label: {
      EN: "May 2025",
      FR: "Mai 2025",
    },
    projects: [
      {
        title: {
          EN: "Open-Source ERP Setup",
          FR: "Mise en Place d’un ERP Open-Source",
        },
        description: {
          EN: "Deployed ERPNext to simulate QC lab operations, with GMP-aligned chart of accounts and role-based access.",
          FR: "Déploiement d’ERPNext pour simuler les opérations de laboratoire QC, avec un plan comptable conforme aux BPF et un accès basé sur les rôles.",
        },
        logo: "/erpnext-logo.svg",
        logoClassName: "w-40",
      },
    ],
  },
  {
    id: "Nov-2024",
    label: {
      EN: "November 2024",
      FR: "Novembre 2024",
    },
    projects: [
      {
        title: {
          EN: "To Be Added",
          FR: "À Venir",
        },
        description: {
          EN: "Stay Tuned!",
          FR: "Restez à l’écoute !",
        },
      },
    ],
  },
  {
    id: "Sep-2024",
    label: {
      EN: "September 2024",
      FR: "Septembre 2024",
    },
    projects: [
      {
        title: {
          EN: "Custom Desktop Workstation Build",
          FR: "Assemblage d’une Station de Travail Personnalisée",
        },
        description: {
          EN: "Designed and assembled a Windows workstation for academic modeling, system testing, and gaming, along with a Linux (Ubuntu 24.04) virtual machine for hosting open-source tools.",
          FR: "Conception et assemblage d’une station de travail Windows pour la modélisation académique, les tests système et le jeu, accompagnée d’une machine virtuelle Linux (Ubuntu 24.04) pour héberger des outils open-source.",
        },
      },
    ],
  },
];


  useEffect(() => {
    if (contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [expanded]);

  return (
<main
  className="pt-64 min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200 ease-out overflow-y-auto w-full"
>


      <section className={`transition-[opacity,translate] duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Intro */}
      <section className="flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[var(--foreground)] to-[var(--muted)] mb-4 leading-normal">

          {language === "EN" ? "Projects Repository" : "Dépôt de Projets"}
        </h1>
        <p className="text-lg font-[450] max-w-prose text-[var(--foreground)]">
          {language === "EN"
            ? "This page is where I share projects I work on, whether professional or personal. Any project that I believe bolsters my personal growth will be added here. This is page is subject to frequent updates."
            : "Cette page présente tous les projets auxquels je participe, qu'ils soient professionnels ou personnels. Tout projet qui contribue à mon développement personnel y sera ajouté."}
        </p>
      </section>

      <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-12" />

      {/* Timeline */}
        <section className="flex flex-col items-center pb-12 w-full transition-colors duration-200 ease-out">
          {timeline.map((group) => (
            <div key={group.id} className="w-full flex justify-center">
              <div className="w-full max-w-2xl">
                <button
                  onClick={() => toggleMonth(group.id)}
                  className="w-full max-w-3xl flex items-center justify-between text-left text-2xl font-semibold py-2 px-4 border-b border-[var(--muted)] hover:bg-[var(--muted)]/10 transition"
                >
              {language === "EN" ? group.label.EN : group.label.FR}
                  <span className="ml-4">
                    {expanded === group.id ? "▲" : "▼"}
                  </span>
                </button>

                <div ref={expanded === group.id ? contentRef : null}
                  style={{height: expanded === group.id ? height : "0px",}}
                  className="w-full max-w-2xl overflow-hidden transition-all duration-500 ease-in-out"
                >
                  <div className="p-4 border-l-4 border-[var(--foreground)]">
                    {group.projects.map((project, index) => (
                      <div key={index} className="mb-4">

                        <h2 className="text-xl font-bold mb-1">
                          {language === "EN" ? project.title.EN : project.title.FR}
                        </h2>
                        <p className="text-[var(--foreground)/2 font-[425] mb-2]">
                          {language === "EN" ? project.description.EN : project.description.FR}
                        </p>

                        {project.logo && (
                          <Image
                            src={project.logo}
                            alt={`${project.title} logo`}
                            width={0}
                            height={0}
                            className={`${project.logoClassName ?? "w-64"} h-auto mt-4 transition duration-200 ease-in-out ${darkMode ? "invert" : ""}`}
                          />
                        )}

                        {group.id === "Sep-2024" && (
                          <ul className="list-disc list-inside mt-2 font-[425] text-[var(--foreground)/2]">
                            {language === "EN" ? (
                              <>
                                <li>CPU: AMD Ryzen 5 5600X 6-core, 12-Thread</li>
                                <li>GPU: AMD RX 6750 XT 12GB GDDR6</li>
                                <li>RAM: Corsair Vengeance LPX 2x16GB DDR4 3200MHz</li>
                                <li>CORSAIR RM850x - 80 PLUS Gold</li>
                                <li>Motherboard: ASUS Prime B550M-A WiFi II</li>
                                <li>SSD: Kingston NV2 1TB M.2 2280 NVMe</li>
                                <li>Heatsink: Thermalright Peerless Assassin 120 SE</li>
                                <li>Case: Thermaltake Versa H17 Black SPCC Micro-ATX</li>
                              </>
                            ) : (
                              <>
                                <li>Processeur : AMD Ryzen 5 5600X, 6 cœurs, 12 threads</li>
                                <li>Carte graphique : AMD RX 6750 XT, 12 Go GDDR6</li>
                                <li>Mémoire vive : Corsair Vengeance LPX 2x16 Go DDR4 3200MHz</li>
                                <li>Alimentation : CORSAIR RM850x – 80 PLUS Gold</li>
                                <li>Carte mère : ASUS Prime B550M-A WiFi II</li>
                                <li>SSD : Kingston NV2 1 To M.2 2280 NVMe</li>
                                <li>Ventirad : Thermalright Peerless Assassin 120 SE</li>
                                <li>Boîtier : Thermaltake Versa H17, Micro-ATX en acier SPCC noir</li>
                              </>
                            )}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
       <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-1" />
      </section>
    </main>
  );
}
