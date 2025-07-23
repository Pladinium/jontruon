"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "./components/LanguageContext";
import Image from "next/image";
import { useTheme } from "./components/ThemeContext";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {setLoaded(true);}, []);

  const { language } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <main 
      className={`flex flex-col items-center justify-center min-h-screen
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors duration-500 ease-out will-change-[background-color,color]
        ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >

      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen pt-48 text-center px-4 gap-6">

          <Image
            src="/8or9.png"
            alt="AADC Background"
            width={600}
            height={600}
            className="absolute top-[2.5%] left-1/2 -translate-x-1/2 opacity-20 z-[-1] pointer-events-none"
          />
        <div className="w-40 h-40 rounded-full bg-gray-300 dark:bg-gray-700" />
        {/* Example when photo available:
        <Image
          src="/profile.jpg"
          width={160}
          height={160} 
          alt="Jonathan Truong portrait"
          className="rounded-full"
         priority
        />
        */}

        <h1 className="text-4xl font-bold text-[var(--foreground)]">
           Jonathan&nbsp;Truong 
        </h1>

          {language === "EN" ? (
            <p className="mt-2 text-sm font-semibold text-[var(--foreground)] text-center">
              Based in Montréal, QC · Canada
            </p>
          ) : (
            <p className="mt-2 text-sm font-semibold text-[var(--foreground)] text-center">
              Basé à Montréal, QC · Canada
            </p>
          )}


        <p className="text-lg font-bold text-[var(--foreground)] max-w-prose">
          {language === "EN"
            ? "Pharmacology Student at McGill & Aspiring Entrepreneur in the Pharmaceutical and Biopharmaceutical Industries"
            : "Étudiant en pharmacologie à McGill et entrepreneur en devenir dans les industries pharmaceutique et biopharmaceutique"}
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href="/resume"
            className="px-4 py-2 rounded-2xl border border-[var(--foreground)] bg-[var(--color-primary)] font-semibold text-white hover:bg-[var(--color-primary-hover)] transition"
          >
            {language === "EN"
              ? "Resume"
              : "CV"
            }
          </a>
          <a
            href="/projects"
            className="px-4 py-2 rounded-2xl border border-[var(--foreground)] text-[var(--foreground)] font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition"
          >
            {language === "EN"
              ? "Projects"
              : "Projets"
            }
          </a>
          <a
            href="/resources"
            className="px-4 py-2 rounded-2xl border border-[var(--foreground)] text-[var(--foreground)] font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition"
          >
            {language === "EN"
              ? "Resources"
              : "Ressources"
            }
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
            className="mt-2 flex items-center gap-1 text-xs font-semibold px-2 py-1 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition"
          >
            <Copy size={12} />
            {language === "EN" 
              ? (copied ? "Copied!" : "Copy Email") 
              : (copied ? "Copié !" : "Copier l'adresse") }
          </button>
        </div>

        <div className="mt-2">
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
        </div>


        <div className="mt-6 text-3xl text-[var(--foreground)] opacity-90 animate-smooth-bounce">
          ↓
        </div>

      </section>

      <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-1" />

      <section id="about" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === "EN" ? "About Me" : "À propos"}
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/about-picture.jpg"
              alt="Lab"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
            <p className="text-sm italic text-[var(--muted)] text-center mt-2">
              {language === "EN"
                ? "This image was generated using AI and is used solely for illustrative purposes."
                : "Cette image a été générée par une IA et est utilisée uniquement à des fins illustratives."}
            </p>
          </div>

          <div className="text-[var(--foreground)] max-w-2xl space-y-4 font-semibold text-lg text-center lg:text-justify mx-auto">
            <p>
              {language === "EN"
                ? "I'm interested in anything drug-related, especially pharmaceutical and biopharmaceutical manufacturing. Research suggests that biologics are the future of therapeutics due to better clinical outcomes."
                : "Je m'intéresse à tout ce qui touche aux médicaments, en particulier à la fabrication pharmaceutique et biopharmaceutique. Les recherches suggèrent que les biomédicaments représentent l'avenir des traitements en raison de meilleurs résultats cliniques."}
            </p>
            <p>
              {language === "EN"
                ? "I'm also highly interested in business and entrepreneurship. My greatest ambition is to build a company that innovates on biopharmaceutical manufacturing for better drug accessibility for the public."
                : "Je suis également intéressé par les affaires et l'entrepreneuriat. Ma plus grande ambition est de fonder une entreprise qui innove dans la fabrication biopharmaceutique afin de rendre les médicaments plus accessibles au public."}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <Image
              src={darkMode ? "/law-scale-light.svg" : "/law-scale-dark.svg"}
              alt="Regulatory Compliance Icon"
              width={160}
              height={160}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{language === "EN" ? "Regulatory Compliance" : "Conformité réglementaire"} </h3>
            <p className="text-[var(--muted)] text-center font-semibold">
              {language === "EN"
              ? "GMP, GLP, GDocP, GAMP 5, ICH, Health Canada, FDA"
              : "BPF, BPL, BPDoc, GAMP 5, ICH, conformité FDA et Santé Canada"
              }
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={darkMode ? "/qc-icon-dark.svg" : "/qc-icon-light.svg"}
              alt="Lab Operations Icon"
              width={160}
              height={160}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{language === "EN" ? "Quality Control Operations" : "Opérations de contrôle qualité"}</h3>
            <p className="text-[var(--muted)] text-center font-semibold">
              {language === "EN"
              ? "SOP drafting, audit readiness, equipment qualification, QC laboratories, QA responsabilities, ..."
              : "Rédaction de SOP, préparation aux audits, qualification des équipements, laboratoires de CQ, responsabilités d'AQ, ..."
              }
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={darkMode ? "/server-icon-light.svg" : "/server-icon-dark.svg"}
              alt="Quality & IT Systems Icon"
              width={160}
              height={160}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{language === "EN" ? "Quality & IT Systems" : "Qualité & Systèmes informatiques"}</h3>
            <p className="text-[var(--muted)] text-center font-semibold">
              {language === "EN"
              ? "21 CFR Part 11, Computer System Validation, LIMS (SENAITE), ERPNext integration, QMS, deviation tracking"
              : "21 CFR Part 11, validation des systèmes, LIMS (SENAITE), intégration ERPNext, QMS, suivi des déviations"
              }
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={darkMode ? "/ef-icon-light.svg" : "/ef-icon-dark.svg"}
              alt="Entrepreneurship Icon"
              width={160}
              height={160}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{language === "EN" ? "Entrepreneurship & Finance" : "Entrepreneuriat & Finance"}</h3>
            <p className="text-[var(--muted)] text-center font-semibold">
              {language === "EN"
              ? "Incoterms, startup structuring, vendor qualification, financial modeling"
              : "Incoterms, structure de startup, qualification des fournisseurs, modélisation financière"
              }
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={darkMode ? "/pm-icon-light.svg" : "/pm-icon-dark.svg"}
              alt="Biopharmaceutical Engineering Icon"
              width={160}
              height={160}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2"> {language === "EN" ? "Pharmaceutical Manufacturing" : "Fabrication pharmaceutique"}</h3>
            <p className="text-[var(--muted)] text-center font-semibold">
              {language === "EN"
              ? "Scale-up processes, batch documentation, facility layout, tech transfer"
              : "Mise à l'échelle, documentation des lots, aménagement des installations, transfert technologique"
              }
              
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={darkMode ? "/bio-icon-light.svg" : "/bio-icon-dark.svg"}
              alt="Biopharmaceutical Engineering Icon"
              width={160}
              height={160}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{language === "EN" ? "Biopharmaceutical Engineering & Manufacturing" : "Génie & Fabrication biopharmaceutiques"}</h3>
            <p className="text-[var(--muted)] text-center font-semibold">
              {language === "EN"
              ? "Process development, formulation, bioreactors, upstream/downstream optimization"
              : "Développement des procédés, formulation, bioréacteurs, optimisation amont/aval"
              }
            </p>
          </div>
        </div>
        </motion.section>
      </section>

      <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-1" />

      <section id="contact" className="text-center px-8 max-w-2xl mx-auto">
        <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">{language === "EN" ? "Any Question?" :"Avez-vous des questions ?"}</h2>
        <p className="text-[var(--foreground)] mb-4 text-lg font-semibold">
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
              className="mt-2 flex items-center gap-1 text-xs px-2 py-1 hover:bg-[var(--foreground)] font-semibold hover:text-[var(--background)] transition"
            >
              <Copy size={12} />
              {language === "EN" 
                ? (copied ? "Copied!" : "Copy Email") 
                : (copied ? "Copié !" : "Copier l'adresse") }
            </button>
          </div>
        </motion.section>
      </section>

      <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-1" />

    </main>
  );
}
