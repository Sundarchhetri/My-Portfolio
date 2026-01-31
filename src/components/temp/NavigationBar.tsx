import { useState } from "react";
import { Menu, X, Home, User, Layers, Folder, Mail } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const menuItems = [
  { label: "Home", icon: Home, link: "/" },
  { label: "About", icon: User, link: "/about" },
  { label: "Skills", icon: Layers, link: "/skills" },
  { label: "Projects", icon: Folder, link: "/projects" },
  { label: "Contact", icon: Mail, link: "/contact" },
];

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-muted backdrop-blur-lg transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <motion.div
            onClick={() => navigate("/")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            Sundar Chhetri
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            {menuItems.map(({ label, link }) => (
              <li key={label}>
                <NavLink
                  to={link}
                  end={link === "/"}
                  className="group relative px-3 py-2 rounded-xl flex flex-col items-center transition-all"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`text-sm mt-1 transition-colors
        ${isActive ? "text-primary" : "text-foreground/80 group-hover:text-primary"}`}
                      >
                        { }
                        {label}

                      </span>

                      <span
                        className={`absolute -bottom-1 h-[2px] w-full bg-primary transition-transform origin-center
                      ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                      />
                    </>
                  )}
                </NavLink>

              </li>
            ))}
            {/* Add ThemeSwitcher to Desktop Menu */}
            <li>
              <ThemeSwitcher />
            </li>
          </ul>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <ThemeSwitcher />
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden">
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

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
            className="md:hidden bg-card/95 backdrop-blur-md"
          >
            <ul className="flex flex-row items-center justify-center gap-2 px-6 py-6">
              {menuItems.map(({ label, link, icon: Icon }) => (
                <li key={label}>
                  <NavLink
                    to={link}
                    end={link === "/"}
                    className={({ isActive }) =>
                      `group relative px-3 py-2 rounded-xl flex flex-col items-center transition-all
                      ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"}`
                    }
                  >
                    <Icon size={22} className="mb-1" />

                    <span className="text-sm mt-1">{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavigationBar;
