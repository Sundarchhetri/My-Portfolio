import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React / TypeScript', level: 75 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'Next.js', level: 1 },
        { name: 'Vue.js', level: 1 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Java', level: 90 },
        { name: 'Python', level: 60 },
        { name: 'PostgreSQL', level: 75 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Figma', level: 85 },
        { name: 'AWS', level: 2 },
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-muted/30">
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
            Skills & Expertise
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
            A comprehensive set of tools and technologies I use to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: -50, rotateY: -90 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border"
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2 + 0.2 }}
                className="text-2xl font-bold mb-6 text-primary"
              >
                {category.category}
              </motion.h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                  >
                    <div className="flex justify-between mb-2">
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="text-card-foreground font-medium"
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        className="text-muted-foreground"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.4,
                          ease: "easeOut"
                        }}
                        whileHover={{
                          boxShadow: "0 0 10px rgba(var(--primary), 0.5)",
                          height: "10px"
                        }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-muted-foreground text-lg"
          >
            Always learning and exploring new technologies to stay ahead of the curve
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
export default Skills;