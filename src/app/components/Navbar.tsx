"use client";
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  language: string;
  setLanguage: (lang: string) => void;
};

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const navLabels = {
    about: language === "EN" ? "About" : "À propos",
    home: language === "EN" ? "Home" : "Accueil",
    resume: language === "EN" ? "Resume" : "CV",
    projects: language === "EN" ? "Projects" : "Projets",
    resources: language === "EN" ? "Resources" : "Ressources",
    contact: language === "EN" ? "Contact" : "Contacter",
  };

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) return; // Prevent bounce jitter

      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = (
    <>
      <li><Link href="/" className="touch-active-bg navlink-feedback rounded px-1 py-1 transition-colors duration-150">
          {navLabels.home}
        </Link>
      </li>
          <li><Link href="/about" className="touch-active-bg navlink-feedback rounded px-1 py-1 transition-colors duration-150">
          {navLabels.about}
        </Link>
      </li>
          <li><Link href="/resume" className="touch-active-bg navlink-feedback rounded px-1 py-1 transition-colors duration-150">
          {navLabels.resume}
        </Link>
      </li>
          <li><Link href="/projects" className="touch-active-bg navlink-feedback rounded px-1 py-1 transition-colors duration-150">
          {navLabels.projects}
        </Link>
      </li>
          <li><Link href="/resources" className="touch-active-bg navlink-feedback rounded px-1 py-1 transition-colors duration-150">
          {navLabels.resources}
        </Link>
      </li>
    </>
  );

  return (
    <nav className={`fixed top-2 left-0 right-0 z-50 mx-auto max-w-6xl rounded-lg shadow-lg text-[var(--foreground)] transition-transform duration-300 ${
      show ? "translate-y-0" : "-translate-y-[110%]"
    }`}>
      <div className="backdrop-blur-sm flex items-center justify-between px-6 md:px-8 py-4 md:py-8 border bg-(var(--background)) transition-all rounded-lg shadow-4xl">

        <Link href="/" className="text-2xl font-bold touch-active-bg rounded px-2 py-1 transition-all duration-150 inline-block hover:text-[var(--accent)]">
          Jonathan Truong
        </Link>


        <div
         className="hidden md:flex items-center gap-6 ">
          <ul className="flex flex-row gap-6 text-lg font-bold touch-active-bg transition-colors duration-200">
            {navLinks}
          </ul>

          <div className="h-6 w-[2px] bg-gray-400 opacity-75" />

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
              className="hover:opacity-80 hover:underline underline-offset-4 cursor-pointer"
            >
              {language}
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[var(--foreground)]"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`backdrop-blur-sm md:hidden px-6 bg-[var(--background)/70] rounded-b-lg shadow-2xl text-lg font-bold overflow-hidden transform transition-all duration-300 ease-out
          ${isMenuOpen ? "max-h-[500px] opacity-100 translate-y-0 py-4 space-y-2" : "max-h-0 opacity-0 -translate-y-4 py-0"}
        `}
      >
        <ul className="flex flex-col gap-2 mobile-active-bg transition-colors duration-100">
          {navLinks}
        </ul>
        <div className="flex items-center justify-between pt-4">
          <ThemeToggle />
          <button
            onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
            className="hover:opacity-80 hover:underline underline-offset-4 cursor-pointer"
          >
            {language}
          </button>
        </div>
      </div>
    </nav>
  );
}
