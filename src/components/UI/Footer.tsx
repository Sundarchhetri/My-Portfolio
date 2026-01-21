import { Github, Linkedin, ArrowUp, Facebook, Code2Icon } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-white dark:bg-gray-950 text-gray-700 dark:text-slate-300 border-t border-emerald-500 dark:border-gray-800">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-b-lg"></div>

            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    {/* Left - Brand Section */}
                    <div className="text-center md:text-left">
                        <div className="mb-4">
                            <div className="flex felx-row justify-start items-center gap-3">
                                <Code2Icon size={50} className=""/>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                                    Sundar Chhetri
                                </h2>
                            </div>
                            <div className="">
                                <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Full Stack Developer</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-slate-400 max-w-xs mx-auto md:mx-0">
                            Building exceptional digital experiences with clean code and modern design.
                        </p>
                    </div>

                    {/* Center - Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="font-semibold text-gray-800 dark:text-slate-200 mb-4 text-lg">Quick Links</h3>
                        <div className="flex flex-col gap-3">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 transition-all duration-200 ${isActive
                                        ? "text-emerald-600 dark:text-emerald-400 font-medium"
                                        : "hover:text-emerald-600 dark:hover:text-emerald-400 hover:translate-x-1"
                                    }`
                                }
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100"></div>
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 transition-all duration-200 ${isActive
                                        ? "text-emerald-600 dark:text-emerald-400 font-medium"
                                        : "hover:text-emerald-600 dark:hover:text-emerald-400 hover:translate-x-1"
                                    }`
                                }
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100"></div>
                                About
                            </NavLink>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 transition-all duration-200 ${isActive
                                        ? "text-emerald-600 dark:text-emerald-400 font-medium"
                                        : "hover:text-emerald-600 dark:hover:text-emerald-400 hover:translate-x-1"
                                    }`
                                }
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100"></div>
                                Projects
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 transition-all duration-200 ${isActive
                                        ? "text-emerald-600 dark:text-emerald-400 font-medium"
                                        : "hover:text-emerald-600 dark:hover:text-emerald-400 hover:translate-x-1"
                                    }`
                                }
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100"></div>
                                Contact
                            </NavLink>
                        </div>
                    </div>

                    {/* Right - Social & Contact */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-gray-800 dark:text-slate-200 mb-4 text-lg">Let's Connect</h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400 mb-6 max-w-xs mx-auto md:mx-0">
                            Open for collaborations and interesting projects
                        </p>

                        <div className="flex justify-center md:justify-start gap-4">
                            <Link
                                to="https://github.com/sundarchhetri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 bg-emerald-100 dark:bg-gray-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 hover:-translate-y-1"
                                aria-label="GitHub"
                            >
                                <Github size={20} className="text-gray-600 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/sundar-chhetri/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 bg-emerald-100 dark:bg-gray-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 hover:-translate-y-1"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} className="text-gray-600 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                            </Link>
                            <Link
                                to="https://www.facebook.com/bad.shy.432"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 bg-emerald-100 dark:bg-gray-800 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300 hover:-translate-y-1"
                                aria-label="Instagram"
                            >
                                <Facebook size={20} className="text-gray-600 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-4 border-t border-emerald-500 dark:border-gray-800">
                    <div className="flex md:flex justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-center md:text-left">
                            <p className="text-sm text-gray-600 dark:text-slate-400">
                                <strong>&copy; {currentYear} Sundar Chhetri. All rights reserved.</strong>
                            </p>
                        </div>

                        {/* Back to top button */}
                        <button
                            onClick={scrollToTop}
                            className="group px-4 py-2 text-sm bg-emerald-600 text-white font-medium hover:bg-emerald-700 dark:bg-gray-800 dark:hover:bg-emerald-900/20 rounded-lg transition-all duration-300 flex items-center gap-2"
                            aria-label="Scroll to top"
                        >
                            <span>Back to top</span>
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;