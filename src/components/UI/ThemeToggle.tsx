import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  // State: true = dark mode, false = light mode
  const [dark, setDark] = useState<boolean>(() =>
    localStorage.getItem("theme") === "dark"
  );

  // Apply dark class to <html> and save in localStorage
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition"
      aria-label="Toggle Theme"
    >
      {dark ? (
        <Sun className="text-yellow-400" size={20} />
      ) : (
        <Moon className="text-slate-700" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
