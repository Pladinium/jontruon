"use client";
import { useLanguage } from "./components/LanguageContext";
import Image from "next/image";
import { useTheme } from "./components/ThemeContext"; 

export default function HomePage() {
  const { language } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <main className="flex flex-col">
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
          — Jonathan&nbsp;Truong —
        </h1>

        {/* 3️⃣  Tagline */}
        <p className="text-lg text-[var(--foreground)] max-w-prose">
          {language === "EN"
            ? "Pharmacology Graduate & Aspiring Entrepreneur in Pharmaceutical and Biopharmaceutical Industries"
            : "Je suis diplômé de l’Université McGill avec un baccalauréat en pharmacologie."}
        </p>
      </section>
        

        <section id="skills" className="text-center px-36">
          <div className="w-full max-w-6xl mx-auto px-6 text-center"></div>
          <h2 className="text-3xl font-bold mb-12">What I am Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <Image
                src={darkMode ? "/law-scale-light.svg" : "/law-scale-dark.svg"}
                alt="Regulatory Compliance Icon"
                width={128}
                height={128}
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
                width={128}
                height={128}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Quality Control Operations</h3>
              <p className="text-[var(--muted)] text-center">
                SOPs, training, audits, equipment tracking
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={darkMode ? "/data-integrity-light.svg" : "/data-integrity-dark.svg"}
                alt="Data Integrity Icon"
                width={128}
                height={128}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Quality Systems</h3>
              <p className="text-[var(--muted)] text-center">
                21 CFR Part 11, CSV, LIMS, ERPNext
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={darkMode ? "/supply-chain-light.svg" : "/supply-chain-dark.svg"}
                alt="Supply Chain Icon"
                width={128}
                height={128}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Supply Chain</h3>
              <p className="text-[var(--muted)] text-center">
                Incoterms, vendor qualification, serialization
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={darkMode ? "/business-strategy-light.svg" : "/business-strategy-dark.svg"}
                alt="Business Strategy Icon"
                width={128}
                height={128}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Business & Strategy</h3>
              <p className="text-[var(--muted)] text-center">
                Startup ops, budgeting, investor readiness
              </p>
            </div>
          </div>
        </section>
    </main>
  );
}
