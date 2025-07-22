"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../components/LanguageContext";

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

  useEffect(() => {
    setLoaded(true);
  }, []);

  // 1️⃣ Create your data:
const timeline = [
  {
    id: "July-2025",
    label: "July 2025",
    projects: [
      {
        title: "JonTruon.com Website",
        description:
          "Built a personal knowledge repository to curate whitepapers and compliance resources.",
      },
    ],
  },
  {
    id: "June-2025",
    label: "June 2025",
    projects: [
      {
        title: "Pharmaceutical LIMS Deployment",
        description:
          "Installed and configured SENAITE 2.6 on Ubuntu for controlled QC workflows.",
      },
    ],
  },
  {
    id: "May-2025",
    label: "May 2025",
    projects: [
      {
        title: "Open-Source ERP Setup",
        description:
          "Deployed ERPNext to simulate QC lab operations, with GMP-aligned chart of accounts and role-based access.",
      },
    ],
  },
  {
    id: "Nov-2024",
    label: "November 2024",
    projects: [
      {
        title: "",
        description:
          "",
      },
    ],
  },
  {
    id: "Sep-2024",
    label: "September 2024",
    projects: [
      {
        title: "Custom Desktop Workstation Build",
        description:
          "Designed and assembled a Windows workstation for academic modeling, system testing, and gaming, along with a Linux (Unbuntu 24.04) virtual machine for hosting open-source tools.",
      },
    ],
  },
];


  useEffect(() => {
    if (expanded === "Sep-2024" && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [expanded]);

  return (
    <main
        className={`flex flex-col items-center justify-center pt-80
        bg-[var(--background)] text-[var(--foreground)]
        transition-all duration-700 ease-out will-change-transform
        ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      {/* Intro */}
      <section className="flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">
          {language === "EN" ? "Projects Repository" : "Dépôt de Projets"}
        </h1>
        <p className="text-lg max-w-prose text-[var(--muted)]">
          {language === "EN"
            ? "This page is where I share projects I work on, whether professional or personal. Any project that I believe bolsters my personal growth will be added here."
            : "Cette page présente tous les projets auxquels je participe, qu'ils soient professionnels ou personnels. Tout projet qui contribue à mon développement personnel y sera ajouté."}
        </p>
      </section>

      <div className="w-200 h-0.25 bg-[var(--foreground)] mx-auto my-12" />

      {/* Timeline */}
        <section className="flex flex-col items-center pb-12 w-full">
          {timeline.map((group) => (
            <div key={group.id} className="w-full flex justify-center">
              <div className="w-full max-w-2xl">
                <button
                  onClick={() => toggleMonth(group.id)}
                  className="w-full max-w-2xl flex items-center justify-between text-left text-2xl font-semibold py-2 px-4 border-b border-[var(--muted)] hover:bg-[var(--muted)]/10 transition"
                >
                  {group.label}
                  <span className="ml-4">
                    {expanded === group.id ? "▲" : "▼"}
                  </span>
                </button>

                <div
                  ref={expanded === group.id ? contentRef : null}
                  style={{
                    height: expanded === group.id ? height : "0px",
                  }}
                  className="w-full max-w-2xl overflow-hidden transition-all duration-500 ease-in-out"
                >
                  <div className="p-4 border-l-4 border-[var(--foreground)]">
                    {group.projects.map((project, index) => (
                      <div key={index} className="mb-4">
                        <h2 className="text-xl font-bold mb-1">{project.title}</h2>
                        <p className="text-[var(--muted)]">{project.description}</p>

                        {group.id === "Sep-2024" && (
                        <ul className="list-disc list-inside mt-2 text-[var(--muted)]">
                          <li>CPU: AMD Ryzen 5 5600X 6-core, 12-Thread</li>
                          <li>GPU: AMD RX 6750 XT 12GB GDDR6 </li>
                          <li>RAM: Corsair Vengeance LPX 2x16GB DDR4 3200MHz</li>
                          <li>CORSAIR RM850x - 80 PLUS Gold</li>
                          <li>Motherboard: ASUS Prime B550M-A WiFi II</li>
                          <li>SSD: Kingston NV2 1TB M.2 2280 NVMe</li>
                          <li>Heatsink: Thermalright Peerless Assassin 120 SE</li>
                          <li>Case: Thermaltake Versa H17 Black SPCC Micro-ATX</li>
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
    </main>
  );
}
