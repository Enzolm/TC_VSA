import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Récupérer la préférence du mode dans le localStorage
    const storedPreference = localStorage.getItem("darkMode");
    return storedPreference === "true";
  });

  // Ajoute ou enlève la classe "dark" sur l'élément racine et met à jour le localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Mettre à jour le localStorage
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#2d372a] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-transform"
    >
      {darkMode ? <Moon /> : <Sun />}
    </button>
  );
}
