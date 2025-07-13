"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "./components/LanguageContext";
import Image from "next/image";
import { useTheme } from "./components/ThemeContext";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  
  const { language } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <main 
      className={`flex flex-col items-center justify-center min-h-screen
        bg-[var(--background)] text-[var(--foreground)]
        transition-all duration-700 ease-out will-change-transform
        ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen text-center px-4 gap-6">
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

        {/* 2️⃣  Name */}
        <h1 className="text-4xl font-bold text-[var(--foreground)]">
           Jonathan&nbsp;Truong 
        </h1>

        {/* 3️⃣  Tagline */}
        <p className="text-lg text-[var(--foreground)] max-w-prose">
          {language === "EN"
            ? "Pharmacology Graduate & Aspiring Entrepreneur in the Pharmaceutical and Biopharmaceutical Industries"
            : "Je suis diplômé de l’Université McGill avec un baccalauréat en pharmacologie."}
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href="/resume"
            className="px-4 py-2 rounded-2xl border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white transition"
          >
            View Resume
          </a>
          <a
            href="/projects"
            className="px-4 py-2 rounded-2xl border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="/fieldnotes"
            className="px-4 py-2 rounded-2xl border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white transition"
          >
            Fieldnotes
          </a>
        </div>
      </section>

      <div className="w-200 h-0.25 bg-[var(--foreground)] mx-auto my-12" />

      <section id="about" className="text-center px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-[var(--foreground)] text-lg">
          I’m passionate about bridging quality systems, regulatory compliance,
          and scalable manufacturing. I thrive at the intersection of science,
          operations, and business — helping turn complex requirements into
          practical solutions.
        </p>
      </section>

      <div className="w-200 h-0.25 bg-[var(--foreground)] mx-auto my-12" />

      <section id="skills" className="text-center px-48">
        <div className="w-full max-w-6xl mx-auto px-6 text-center"></div>
        <h2 className="text-3xl font-bold mb-12">My Professional Interests</h2>

        {/* Top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <Image
              src={darkMode ? "/law-scale-light.svg" : "/law-scale-dark.svg"}
              alt="Regulatory Compliance Icon"
              width={160}
              height={160}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
            <p className="text-[var(--muted)] text-center">
              GMP, GLP, GDP, GAMP 5, ICH, Health Canada, FDA
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
            <h3 className="text-xl font-semibold mb-2">Quality Control Operations</h3>
            <p className="text-[var(--muted)] text-center">
              SOPs, training, audits, equipment tracking
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
            <h3 className="text-xl font-semibold mb-2">Quality & IT Systems</h3>
            <p className="text-[var(--muted)] text-center">
              21 CFR Part 11, CSV, LIMS, ERPNext
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
            <h3 className="text-xl font-semibold mb-2">Entrepreneurship & Finance</h3>
            <p className="text-[var(--muted)] text-center">
              Incoterms, vendor qualification, serialization
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
            <h3 className="text-xl font-semibold mb-2">Pharmaceutical Manufacturing</h3>
            <p className="text-[var(--muted)] text-center">
              Startup ops, budgeting, investor readiness
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
            <h3 className="text-xl font-semibold mb-2">Biopharmaceutical Engineering & Manufacturing</h3>
            <p className="text-[var(--muted)] text-center">
              Startup ops, budgeting, investor readiness
            </p>
          </div>
        </div>
      </section>

      <div className="w-200 h-0.25 bg-[var(--foreground)] mx-auto my-12" />

      <section
        id="contact"
        className="text-center px-8 max-w-2xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-4">Any Question?</h2>
        <p className="text-[var(--foreground)] mb-4">
          Feel free to reach out for any question, feedback, inconsistency, and typo! Every e-mail is welcome, and I will do my best to reply.
        </p>
        <a
          href="mailto:jonathan.truong@example.com"
          className="px-4 py-2 rounded-2xl border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white transition"
        >
          Email Me
        </a>
      </section>

    </main>
  );
}
