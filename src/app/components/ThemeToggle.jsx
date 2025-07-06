"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`relative w-12 h-6 rounded-full transition-colors duration-300 cursor-pointer ${
        darkMode ? "bg-gray-700" : "bg-gray-400"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
          darkMode ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
}
