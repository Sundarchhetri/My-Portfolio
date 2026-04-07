import { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Layers,
  Folder,
  Mail,
  Download,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CvPdfDocument from "../cv/CvPdfDocument";

const menuItems = [
  { label: "Home", icon: Home, link: "/" },
  { label: "About", icon: User, link: "/about" },
  { label: "Skills", icon: Layers, link: "/skills" },
  { label: "Projects", icon: Folder, link: "/projects" },
  { label: "Contact", icon: Mail, link: "/contact" },
];

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <motion.div
            onClick={() => navigate("/")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 cursor-pointer shrink-0"
          >
            <img
              src="/WebLogo.png"
              alt="Sundar Chhetri Logo"
              className="h-10 w-10 md:h-11 md:w-11 object-contain rounded-xl"
            />

            <span className="hidden sm:block text-base md:text-lg font-bold text-primary whitespace-nowrap">
              Sundar Chhetri
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-8 ml-auto">
            {menuItems.map(({ label, link }) => (
              <li key={label}>
                <NavLink
                  to={link}
                  end={link === "/"}
                  className="group relative px-3 py-2 rounded-xl flex items-center transition-all"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`text-sm transition-colors ${isActive
                          ? "text-primary"
                          : "text-foreground/80 group-hover:text-primary"
                          }`}
                      >
                        {label}
                      </span>

                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] w-full bg-primary transition-transform origin-center ${isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                          }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}

            {/* CV Button */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 inline-flex items-center gap-2 px-4 lg:px-6 py-2.5 bg-primary text-primary-foreground rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <PDFDownloadLink
                document={<CvPdfDocument />}
                fileName="Sundar_Chhetri_CV_File.pdf"
                style={{ textDecoration: "none" }}
              >
                {({ loading }) => (
                  <motion.div
                    className="inline-flex items-center gap-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-sm">
                      {loading ? "Generating PDF..." : "Download CV"}
                    </span>
                    <Download size={14} />
                  </motion.div>
                )}
              </PDFDownloadLink>
            </motion.div>

            {/* Theme Switcher */}
            <li>
              <ThemeSwitcher
                open={themeOpen}
                setOpen={setThemeOpen}
                onOpenTheme={() => setMenuOpen(false)}
              />
            </li>
          </ul>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3">
            <div className="md:hidden">
             <ThemeSwitcher
                open={themeOpen}
                setOpen={setThemeOpen}
                onOpenTheme={() => setMenuOpen(false)}
              />
            </div>

            <button
              onClick={() => {
                setMenuOpen(!menuOpen),
                  setThemeOpen(false)
              }}
              className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col items-start gap-3 px-6 py-6">
              {menuItems.map(({ label, link, icon: Icon }) => (
                <li key={label} className="w-full">
                  <NavLink
                    to={link}
                    end={link === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-muted hover:text-primary"
                      }`
                    }
                  >
                    <Icon size={20} />
                    <span className="text-sm font-medium">{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile CV Button */}
            <div className="px-6 pb-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full"
              >
                <PDFDownloadLink
                  document={<CvPdfDocument />}
                  fileName="Sundar_Chhetri_CV_File.pdf"
                  style={{ textDecoration: "none" }}
                >
                  {({ loading }) => (
                    <div className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-2xl shadow-md">
                      <span className="text-sm font-medium">
                        {loading ? "Generating PDF..." : "Download CV"}
                      </span>
                      <Download size={16} />
                    </div>
                  )}
                </PDFDownloadLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavigationBar;