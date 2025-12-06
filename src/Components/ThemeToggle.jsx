import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // run once on mount - determine stored theme or system preference
    try {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else if (storedTheme === "light") {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      } else {
        // no stored preference -> follow system preference
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
          setIsDarkMode(true);
          document.documentElement.classList.add("dark");
        } else {
          setIsDarkMode(false);
          document.documentElement.classList.remove("dark");
        }
      }
    } catch (e) {
      // fail silently in environments without localStorage
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
      aria-pressed={isDarkMode}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-slate-800" />
      )}
    </button>
  );
};

export default ThemeToggle;