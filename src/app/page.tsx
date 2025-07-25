"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "./components/LanguageContext";
import Image from "next/image";
import { useTheme } from "./components/ThemeContext";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";

const topics = [
  {
    title: {
      EN: "Regulatory Compliance",
      FR: "Conformité réglementaire",
    },
    description: {
      EN: "GMP, GLP, GDocP, GAMP 5, ICH, Health Canada, FDA",
      FR: "BPF, BPL, BPDoc, GAMP 5, ICH, conformité FDA et Santé Canada",
    },
    icon: {
      dark: "/law-scale-dark.svg",
      light: "/law-scale-light.svg",
    },
  },
  {
    title: {
      EN: "Quality Control Operations",
      FR: "Opérations de contrôle qualité",
    },
    description: {
      EN: "SOP drafting, audit readiness, equipment qualification, QC laboratories, QA responsabilities",
      FR: "Rédaction de SOP, préparation aux audits, qualification des équipements, laboratoires de CQ, responsabilités d'AQ",
    },
    icon: {
      dark: "/qc-icon-dark.svg",
      light: "/qc-icon-light.svg",
    },
  },
  {
    title: {
      EN: "Quality & IT Systems",
      FR: "Qualité & Systèmes informatiques",
    },
    description: {
      EN: "21 CFR Part 11, Computer System Validation, LIMS (SENAITE), ERPNext integration, QMS, deviation tracking",
      FR: "21 CFR Part 11, validation des systèmes, LIMS (SENAITE), intégration ERPNext, QMS, suivi des déviations",
    },
    icon: {
      dark: "/server-icon-dark (2).svg",
      light: "/server-icon-light (2).svg",
    },
  },
  {
    title: {
      EN: "Entrepreneurship & Finance",
      FR: "Entrepreneuriat & Finance",
    },
    description: {
      EN: "Incoterms, startup structuring, vendor qualification, financial modeling",
      FR: "Incoterms, structure de startup, qualification des fournisseurs, modélisation financière",
    },
    icon: {
      dark: "/ef-icon-dark.svg",
      light: "/ef-icon-light.svg",
    },
  },
  {
    title: {
      EN: "Pharmaceutical Manufacturing",
      FR: "Fabrication pharmaceutique",
    },
    description: {
      EN: "Scale-up processes, batch documentation, facility layout, tech transfer",
      FR: "Mise à l'échelle, documentation des lots, aménagement des installations, transfert technologique",
    },
    icon: {
      dark: "/pm-icon-dark.svg",
      light: "/pm-icon-light.svg",
    },
  },
  {
    title: {
      EN: "Biopharmaceutical Engineering & Manufacturing",
      FR: "Génie & Fabrication biopharmaceutiques",
    },
    description: {
      EN: "Process development, formulation, bioreactors, upstream/downstream optimization",
      FR: "Développement des procédés, formulation, bioréacteurs, optimisation amont/aval",
    },
    icon: {
      dark: "/bio-icon-dark (2).svg",
      light: "/bio-icon-light (2).svg",
    },
  },
];

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {setLoaded(true);}, []);

  const { language } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <main className={`flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200 ease-out`}>
      <section className={`transition-[opacity,translate] duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <section id="home" className="flex flex-col items-center justify-center min-h-screen pt-48 text-center px-4 gap-6">
          <Image
            src="/8or9.png"
            alt="AADC Background"
            width={600}
            height={600}
            className="absolute top-[2.5%] left-1/2 -translate-x-1/2 opacity-20 z-[-1] pointer-events-none"
          />
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <Image
            src="/image-1.jpg"
            alt="Jonathan Truong portrait"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>


          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[var(--foreground)] to-[var(--muted)] leading-normal">
            Jonathan&nbsp;Truong 
          </h1>

          <p className="mt-2 text-sm font-semibold text-[var(--foreground)] text-center">
            {language === "EN" ? "Based in Montréal, QC · Canada" : "Basé à Montréal, QC · Canada"}
          </p>

          <p className="text-lg font-bold text-[var(--foreground)] max-w-prose">
            {language === "EN"
              ? "Pharmacology Student at McGill & Aspiring Entrepreneur in the Pharmaceutical and Biopharmaceutical Industries"
              : "Étudiant en pharmacologie à McGill et entrepreneur en devenir dans les industries pharmaceutique et biopharmaceutique"}
          </p>

          <div className="flex gap-4 mt-4">
            <a href="/resume" className="px-4 py-2 rounded-lg border border-[var(--foreground)] bg-[var(--background)] font-semibold text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition">
              {language === "EN" ? "Resume" : "CV"}
            </a>
            <a href="/projects" className="px-4 py-2 rounded-lg border border-[var(--foreground)] text-[var(--foreground)] font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition">
              {language === "EN" ? "Projects" : "Projets"}
            </a>
            <a href="/resources" className="px-4 py-2 rounded-lg border border-[var(--foreground)] text-[var(--foreground)] font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition">
              {language === "EN" ? "Resources" : "Ressources"}
            </a>
          </div>

          <div className="flex flex-col items-center mt-2">
            <a
              href="mailto:jon.truon@gmail.com"
              className="text-[var(--foreground)] text-base font-semibold underline hover:text-[var(--accent)]"
            >
              jon.truon@gmail.com
            </a>

            <button
              onClick={() => {
                navigator.clipboard.writeText("jon.truon@gmail.com");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="mt-2 flex items-center gap-1 text-xs font-semibold px-2 py-1 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-200 ease-out"
            >
              <Copy size={12} />
              {language === "EN" 
                ? (copied ? "Copied!" : "Copy Email") 
                : (copied ? "Copié !" : "Copier l'adresse") }
            </button>
          </div>

          <div className="mt-2 flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/jontruon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src={darkMode ? "/linkedin-logo-white.png" : "/linkedin-logo-black.png"}
                alt="LinkedIn icon"
                width={36}
                height={36}
                className="hover:opacity-60 transition-opacity"
              />
            </a>

            <a
              href="https://github.com/Pladinium"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src={darkMode ? "/github-white.png" : "/github-dark.png"}
                alt="Github Icon"
                width={36}
                height={36}
                className="hover:opacity-60 transition-opacity"
              />
            </a>
          </div>


              </section>
              
              <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-1" />

              <section id="about" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12"> {language === "EN" ? "A Bit About Me" : "Un peu à propos de moi"} </h2>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                  <div className="text-[var(--foreground)] max-w-2xl space-y-4 font-[450] text-lg text-center lg:text-left mx-auto">
                    <p>
                      {language === "EN"
                        ? "I'm interested in anything drug-related, especially pharmaceutical and biopharmaceutical manufacturing. Research suggests that biologics are the future of therapeutics due to better clinical outcomes."
                        : "Je m'intéresse à tout ce qui touche aux médicaments, en particulier à la fabrication pharmaceutique et biopharmaceutique. Les recherches suggèrent que les biomédicaments représentent l'avenir des traitements en raison de meilleurs résultats cliniques."}
                    </p>
                    <p>
                      {language === "EN"
                        ? "I'm also highly interested in business and entrepreneurship. My greatest ambition is to build a company that innovates on biopharmaceutical manufacturing for better drug accessibility for patients."
                        : "Je suis également intéressé par les affaires et l'entrepreneuriat. Ma plus grande ambition est de fonder une entreprise qui innove dans la fabrication biopharmaceutique afin de rendre les médicaments plus accessibles aux patients."}
                    </p>
                    <p>
                      {language === "EN"
                        ? "Before launching my own enterprise, I'm looking for internships or work opportunities at a pharmaceutical company to gain experience, learn from industry professionals, and build meaningful connections."
                        : "Avant de lancer ma propre entreprise, je cherche un stage ou un emploi dans une entreprise pharmaceutique afin d'acquérir une expérience pratique, d'apprendre des professionnels de l'industrie et de nouer des liens solides."}
                    </p>
                    <p>
                      {language === "EN"
                        ? "If you would like to know a bit more about me personally, feel free to visit the About page."
                        : "Si vous souhaitez en savoir un peu plus sur moi, n'hésitez pas à visiter la page À propos."}
                    </p>
                  </div>
                </div>
              </section>

              <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-1" />

              <section id="skills" className="text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
                <motion.section
                id="about"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="px-6 py-12">
                <div className="w-full max-w-6xl mx-auto px-6 text-center"></div>
                <h2 className="text-3xl font-bold mb-12">
                  {language === "EN"
                    ? "What I'm currently learning"
                    : "Ce que j'apprend actuellement"
                  }
                </h2>
                </motion.section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                  {topics.map((topic, idx) => (
                    <motion.div
                      key={topic.title.EN}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className={`rounded-lg overflow-hidden bg-[var(--background)] p-6 flex flex-col items-center text-center
                        transition-transform duration-300 hover:scale-110 hover:-translate-y-1
                        ${darkMode ? "shadow-[0_2px_10px_rgba(255,255,255,0.5)]" : "shadow-2xl"}`}
                    >
                      <Image
                        src={darkMode ? topic.icon.light : topic.icon.dark}
                        alt={
                          language === "EN"
                            ? `${topic.title.EN} Icon`
                            : `${topic.title.FR} Icône`
                        }
                        width={160}
                        height={160}
                        className="mb-4"
                      />

                      <h3 className="text-xl font-bold mb-2">
                        {language === "EN" ? topic.title.EN : topic.title.FR}
                      </h3>

                      <p className="text-[var(--muted)] font-semibold">
                        {language === "EN"
                          ? topic.description.EN
                          : topic.description.FR}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>

              <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto mt-20" />

              <section id="contact" className="text-center px-8 max-w-2xl mx-auto">
                <motion.section
                id="about"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="px-6 py-12">
                <h2 className="text-3xl font-bold mb-4">{language === "EN" ? "Any Question?" :"Avez-vous des questions ?"}</h2>
                <p className="text-[var(--foreground)] mb-4 text-lg font-[450]">
                  {language === "EN"
                  ? "Feel free to reach out for any question, feedback, or collaboration! Every e-mail is welcome, and I will do my best to reply."
                  : "N'hésitez pas à me contacter pour toute question, suggestion ou collaboration ! Chaque courriel est le bienvenu, et je ferai de mon mieux pour répondre."
                  }
                </p>
                  <div className="flex flex-col items-center mt-2">
                    <a
                      href="mailto:jon.truon@gmail.com"
                      className="text-[var(--foreground)] text-base font-semibold underline hover:text-[var(--accent)]"
                    >
                      jon.truon@gmail.com
                    </a>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("jon.truon@gmail.com");
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="mt-2 flex items-center gap-1 text-xs px-2 py-1 hover:bg-[var(--foreground)] font-semibold hover:text-[var(--background)] transition-colors duration-200 ease-out"
                    >
                      <Copy size={12} />
                      {language === "EN" ? (copied ? "Copied!" : "Copy Email") : (copied ? "Copié !" : "Copier l'adresse") }
                    </button>
                  </div>
                </motion.section>
              </section>

              <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-1" />
      </section>
    </main>
  );
}
