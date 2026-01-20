import { projects } from "../data/projects";
import { Github, } from "lucide-react";

const Projects = () => {
    return (
        <section className="min-h-screen bg-gray-50 dark:bg-slate-900 py-20 pt-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    {/* Section Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-500 dark:text-emerald-500 mb-12 text-center">
                        Projects
                    </h2>

                </div>


                {/* Projects Grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-2xl  border border-emerald-600 transition-shadow duration-300"
                        >
                            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg group">
                                <img
                                    src={"logo.png"}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-sm font-medium tracking-wide">
                                        View Project
                                    </span>
                                </div>
                            </div>

                            {/* Project Title */}
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-slate-300 mb-4">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100 text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center gap-1 text-gray-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                                >
                                    <Github size={16} /> GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
