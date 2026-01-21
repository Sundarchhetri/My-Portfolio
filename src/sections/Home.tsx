import { Hand, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN - TEXT */}
        <div>
          <p className="text-emerald-600 font-medium mb-2 flex items-center gap-2">
            <Hand size={50} /> Hello, I'm
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Sundar Chhetri
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-slate-300">
            Full Stack Developer & UI Enthusiast
          </h2>

          <div className="rounded-sm">
            <p className="mt-2 flex items-center gap-2 text-emerald-600 dark:text-slate-400">
              <GraduationCap size={20} />
              BICTE Student · Myagdi Multiple Campus
            </p>
          </div>

          <p className="mt-6 text-gray-600 dark:text-slate-400 max-w-xl">
            I build modern, responsive, and user-friendly web applications
            using React, Tailwind CSS, Node.js, and Spring Boot.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN - IMAGE */}
        <div className="flex justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-600 shadow-lg">
            <img
              src="/logo.png"
              alt="Sundar Chhetri"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;