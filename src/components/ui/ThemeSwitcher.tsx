import { useState } from "react";
import { Sun, Moon, Waves, Palette } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const themes = [
    { name: "Light", value: "light", icon: Sun },
    { name: "Dark", value: "dark", icon: Moon },
    { name: "Ocean", value: "ocean", icon: Waves },
  ];

  return (
    <div className="relative">
      {/* Theme Button */}
      <button
        onClick={() => setOpen(!open)}
        className=" px-3 py-2 rounded-xl hover:bg-muted transition"
      >
        
        <Palette size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute right-0 mt-2 w-28 bg-card border rounded-lg shadow-lg overflow-hidden z-50">
          {themes.map(({ name, value, icon: Icon }) => (
            <li
              key={value}
              onClick={() => {
                setTheme(value as "light" | "dark" | "ocean");
                setOpen(false);
              }}
              className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-primary/10 transition ${
                theme === value ? "bg-primary/20 font-semibold" : ""
              }`}
            >
              <Icon size={16} />
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeSwitcher;
