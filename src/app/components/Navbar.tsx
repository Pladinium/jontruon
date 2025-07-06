import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from "react";

type NavbarProps = {
  language: string;
  setLanguage: (lang: string) => void;
};

export default function Navbar({language, setLanguage}:NavbarProps) {
  const navLabels = {
    home: language === "EN" ? "Home" : "Accueil",
    resume: language === "EN" ? "Resume" : "CV",
    projects: language === "EN" ? "Projects" : "Projets",
    whitepapers: language === "EN" ? "Whitepapers" : "Livres blancs",
    contact: language === "EN" ? "Contact" : "Contacter",
  };
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          // Scrolling down → hide navbar
          setShow(false);
        } else {
          // Scrolling up → show navbar
          setShow(true);
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

  return (
    <nav   className={`fixed top-2 left-0 right-0 z-50 mx-auto max-w-7xl rounded-lg shadow-lg text-[#ebebeb] transition-transform duration-300 ${
    show ? "translate-y-0" : "-translate-y-[110%]"}`}>
      <div className="flex items-center justify-between px-6 md:px-8 py-4 md:py-8 border-b border-gray-500 bg-gradient-to-t from-black to-[#3d3d3d] rounded-lg shadow-2xl">

        <div className="text-2xl font-bold">
          Jonathan Truong
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex flex-col md:flex-row gap-4 md:space-x-4 text-lg font-bold text-center md:text-left">
            <li>
              <a href="#home" className="hover:text-gray-400 transition-colors duration-250">
                {navLabels.home}
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:text-gray-400 transition-colors duration-250">
                {navLabels.resume}
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400 transition-colors duration-250">
                {navLabels.projects}
              </a>
            </li>
            <li>
              <a href="#whitepapers" className="hover:text-gray-400 transition-colors duration-250">
                {navLabels.whitepapers}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400 transition-colors duration-250">
                {navLabels.contact}
              </a>
            </li>
          </ul>

          <div className="h-8 w-[2px] bg-gray-400 opacity-75"></div>

          <div className="flex items-center gap-4 text-medium">
            <ThemeToggle />
            <button
              onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
              className="hover:opacity-80 hover:underline underline-offset-4 cursor-pointer">
              {language}
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}
