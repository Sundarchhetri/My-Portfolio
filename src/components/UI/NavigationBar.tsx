import { useState } from "react";
import { Menu, X, Home, User, Folder, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";


const NavigationBar = () => {
    const [open, setOpen] = useState<boolean>(false);

    const menuItems = [
        { label: "Home", icon: Home, link: "/home" },
        { label: "About", icon: User, link: "/about" },
        { label: "Projects", icon: Folder, link: "/projects" },
        { label: "Contact", icon: Mail, link: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-50 dark:bg-slate-900 shadow-md z-50 backdrop:blur-md">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo */}
                <NavLink to="/" className="h-32 w-32 block">
                    <img
                        src="/logo.png"
                        alt="My Portfolio"
                        className="h-full w-full object-contain"
                    />
                </NavLink>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-12 font-medium">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.label}>
                                <NavLink
                                    to={item.link}
                                    className={({ isActive }) =>
                                        `mt-1 flex flex-col items-center cursor-pointer transition-colors duration-200
                                            ${isActive
                                            ? "text-emerald-600 dark:text-emerald-400"
                                            : "text-gray-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400"}`
                                    }
                                >
                                    <Icon size={20} />
                                    <span className="text-sm mt-1">{item.label}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>


                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-gray-800 dark:text-slate-200"
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {
                open && (
                    <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
                        <ul className="flex flex-col gap-4 px-6 py-4 font-medium">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.label}>
                                        <NavLink
                                            to={item.link}
                                            onClick={() => setOpen(false)}
                                            className={({ isActive }) => `flex flex-col items-center transition-colors
                                    ${isActive
                                                    ? "text-emerald-600 dark:text-emerald-400"
                                                    : "text-gray-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400"
                                                }`
                                            }
                                        >
                                            <Icon size={20} />
                                            <span className="text-sm mt-1">{item.label}</span>
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>

                    </div>
                )
            }
        </nav >
    );
};

export default NavigationBar;
