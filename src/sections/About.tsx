import { User } from "lucide-react";

const About = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT COLUMN - TEXT */}
                <div>
                    {/* Section Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                        <User size={28} /> About Me
                    </h2>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-slate-300 mb-4">
                        Hi! I'm <strong>Sundar Chhetri</strong>, a BICTE student at Myagdi Multiple Campus
                        and a passionate Full Stack Developer. I love building modern, responsive,
                        and user-friendly web applications using <strong>React, Tailwind CSS, Node.js, and Spring Boot</strong>.
                    </p>

                    <p className="text-gray-700 dark:text-slate-300 mb-6">
                        I enjoy solving real-world problems with clean code, creating efficient
                        applications, and continuously learning new technologies. My goal is to deliver
                        meaningful solutions and contribute to exciting projects.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3">
                        {["React", "Tailwind CSS", "Node.js", "Java", "PostgreSQL"].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100 font-medium text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN - IMAGE */}
                <div className="flex justify-end">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 border-emerald-600 shadow-lg">
                        <img
                            src="/logo.png "
                            alt="Sundar Chhetri"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
