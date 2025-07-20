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
    fieldnotes: language === "EN" ? "Fieldnotes" : "Livres blancs",
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
      <li><Link href="/">{navLabels.home}</Link></li>
      <li><Link href="/about">{navLabels.about}</Link></li>
      <li><Link href="/resume">{navLabels.resume}</Link></li>
      <li><Link href="/projects">{navLabels.projects}</Link></li>
      <li><Link href="/fieldnotes">{navLabels.fieldnotes}</Link></li>
      <li><Link href="/contact">{navLabels.contact}</Link></li>
    </>
  );

  return (
    <nav className={`fixed top-2 left-0 right-0 z-50 mx-auto max-w-7xl rounded-lg shadow-lg text-[#ebebeb] transition-transform duration-300 ${
      show ? "translate-y-0" : "-translate-y-[110%]"
    }`}>
      <div className="flex items-center justify-between px-6 md:px-8 py-4 md:py-8 border-b bg-gradient-to-t from-black to-[#3d3d3d] rounded-lg shadow-2xl">

        {/* Brand */}
        <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
          Jonathan Truong
        </Link>

        {/* Desktop menu */}
        <div
         className="hidden md:flex items-center gap-6">
          <ul className="flex flex-row gap-6 text-lg font-bold">
            {navLinks}
          </ul>

          {/* Divider */}
          <div className="h-6 w-[2px] bg-gray-400 opacity-75" />

          {/* Theme + Lang */}
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


        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden px-6 bg-gradient-to-t from-black to-[#3d3d3d] rounded-b-lg shadow-2xl text-lg font-bold overflow-hidden transform transition-all duration-500 ease-out
          ${isMenuOpen ? "max-h-[500px] opacity-100 translate-y-0 py-4 space-y-2" : "max-h-0 opacity-0 -translate-y-4 py-0"}
        `}
      >
        <ul className="flex flex-col gap-2">
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
