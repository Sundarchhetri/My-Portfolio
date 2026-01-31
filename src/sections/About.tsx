import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Rocket, Heart } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Code,
      title: 'Learning Clean Code',
      description: 'I focus on writing readable and well-structured code while improving daily.',
    },
    {
      icon: Palette,
      title: 'UI & Basics of Design',
      description: 'I enjoy building clean and responsive interfaces using modern tools.',
    },
    {
      icon: Rocket,
      title: 'Growing Skills',
      description: 'I am continuously learning React, Spring Boot, and backend development.',
    },
    {
      icon: Heart,
      title: 'Problem Solving',
      description: 'I like solving real-world problems through academic and personal projects.',
    },
  ];


  return (
    <section ref={ref} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            I am a BICTE 8th semester student with a strong interest in web and software development.
            I have basic to intermediate knowledge of React with TypeScript, Java Spring Boot, and PostgreSQL.
            I enjoy learning new technologies and building practical projects to improve my skills.
            My focus is on writing clean code and developing simple, useful, and user-friendly applications.

          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{
                  delay: index * 0.15 + 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ rotate: 360, scale: 1.2 }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
              >
                <feature.icon size={32} />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.3 }}
                className="text-xl font-bold mb-2 text-card-foreground"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.4 }}
                className="text-muted-foreground"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
          className="mt-16 p-8 rounded-2xl bg-card border border-border shadow-lg"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-2xl font-bold mb-4 text-card-foreground"
          >
            My Journey
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="text-muted-foreground leading-relaxed mb-4"
          >
            Hi! I'm Sundar Chhetri, a BICTE 8th semester student at Myagdi Multiple Campus with a strong interest in full-stack web development.

I have basic to intermediate knowledge of React with TypeScript, Java Spring Boot, and PostgreSQL. I enjoy building simple web applications, learning backend concepts, and working with databases.

I am passionate about improving my skills, writing clean code, and turning ideas into working applications. My goal is to start my career as a junior developer and gain real-world experience through projects and collaboration.

          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.0 }}
            className="text-muted-foreground leading-relaaxed"
          >
            When I'm not coding, you'll find me exploring new technologies, contributing to open source,
            or enjoying a good cup of coffee while sketching new design ideas.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
export default About;