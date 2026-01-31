import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const socialIcons = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sundarchhetri@9876.com", label: "Email" },
  ];
  const navigate = useNavigate();

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-background px-4"
    >
      <div className="max-w-4xl mx-auto mt-40 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.8,
          }}
          // rotate: 20
          whileHover={{ scale: 1.5, }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-4xl font-bold shadow-lg"
        >

          <motion.a

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >

            <motion.img src="/logo.png" alt="Sundar Chhetri" whileHover={{ scale: 1 }} className=" rounded-full h-50 min-w-80" />

          </motion.a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-foreground"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Hi, I'm{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 150 }}
            className="text-primary inline-block"
          >
            Sundar Chhetri
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl md:text-2xl text-primary mb-4"
        >
          <Typewriter
            words={[
              "Full Stack Developer",
              "IT Student",
            ]}
            loop={0}              // number | boolean
            cursor={true}         // boolean
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto"
        >
          <GraduationCap className="inline-flex p-2 w-12 h-12 gap-5 justify-center items-center" />BICTE Student · Myagdi Multiple Campus
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center gap-6 mb-8"
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 1.6 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 shadow-md"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
        >

          <motion.button
            onClick={() => navigate("/projects")}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 mb-16 bg-primary text-primary-foreground rounded-full hover:shadow-lg transition-all duration-300"
          >

            <motion.span>Explore My Work</motion.span>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
export default Home;