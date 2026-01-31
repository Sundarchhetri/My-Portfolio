import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:john@example.com', label: 'Email' },
    ];

    const quickLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <footer className="bg-card border-t border-border py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8 text-center md:text-left">
                    {/* Brand */}
                    <motion.div className="flex flex-col items-center md:items-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h3
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl font-bold mb-4 text-primary cursor-pointer"
                        >
                           Sundar Chhetri
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground"
                        >
                            Full Stack Developer passionate about creating beautiful and functional web experiences.
                        </motion.p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-4 text-card-foreground">
                            Quick Links
                        </h4>

                        <ul className="space-y-3 flex flex-col items-center md:items-start">
                            {quickLinks.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <NavLink
                                        to={item.to}
                                        end={item.to === "/"}
                                        className={({ isActive }) =>
                                            `inline-block px-3 py-1 rounded-md transition-colors duration-300
                                                ${isActive
                                                ? "text-primary font-medium"
                                                : "text-muted-foreground hover:text-primary"
                                            }`
                                        }

                                    >
                                        <motion.span whileHover={{ x: 5 }}>
                                            {item.name}
                                        </motion.span>
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>


                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-4 text-card-foreground">Connect</h4>
                        <div className="flex justify-center md:justify-start gap-5">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.3 + index * 0.1,
                                        type: 'spring',
                                        stiffness: 200
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 360,
                                        backgroundColor: 'var(--primary)',
                                        color: 'var(--primary-foreground)'
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center transition-colors duration-300"
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="border-t border-border pt-8 text-center"
                >
                    <motion.p
                        className="text-muted-foreground flex flex-col md:flex-row items-center justify-center gap-2 text-sm"
                    >
                        Made with{' '}
                        <motion.span
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: 'easeInOut'
                            }}
                        >
                            <Heart size={16} className="text-red-500" fill="currentColor" />
                        </motion.span>
                        {' '}© {currentYear} Sundar Chhetri. All rights reserved.
                    </motion.p>
                </motion.div>
            </div>
        </footer>
    );
}
export default Footer;