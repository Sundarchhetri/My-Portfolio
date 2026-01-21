import { useState } from "react";
import { Menu, X, Home, User, Folder, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const menuItems = [
  { label: "Home", icon: Home, link: "/" },
  { label: "About", icon: User, link: "/about" },
  { label: "Projects", icon: Folder, link: "/projects" },
  { label: "Contact", icon: Mail, link: "/contact" },
];

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/0 dark:bg-slate-900/70 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/">
          <img src="/logo.png" alt="Sundar Chhetri" className="h-20 w-30" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          {menuItems.map(({ label, icon: Icon, link }) => (
            <li key={label}>
              <NavLink
                to={link}
                end={link === "/"}
                className={({ isActive }) =>
                  `group relative px-3 py-2 rounded-xl flex flex-col items-center transition-all
                  ${isActive
                    ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600"
                    : "text-gray-800 dark:text-slate-200 hover:text-emerald-600"}`
                }
              >
                <Icon size={18} />
                <span className="text-sm mt-1">{label}</span>

                {/* underline */}
                <span className="absolute -bottom-1 h-[2px] w-full bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-900"
          >
            <ul className="flex flex-col items-center gap-5 py-6">
              {menuItems.map(({ label, icon: Icon, link }) => (
                <NavLink
                  key={label}
                  to={link}
                  end={link === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex flex-col items-center px-4 py-2 rounded-lg
                    ${isActive
                      ? "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/40"
                      : "text-gray-700 dark:text-slate-200"}`
                  }
                >
                  <Icon size={18} />
                  <span className="text-sm mt-1">{label}</span>
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavigationBar;
