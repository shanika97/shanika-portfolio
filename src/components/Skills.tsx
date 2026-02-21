import React, { Children } from 'react';
import { motion } from 'framer-motion';
export function Skills() {
  const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'PHP', 'Python', 'JavaScript', 'TypeScript', 'C/C++/C#']
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
    'Spring Boot',
    'Spring MVC',
    'Angular',
    'React',
    'Struts2',
    'Bootstrap',
    'jQuery']

  },
  {
    title: 'Database',
    skills: ['MySQL', 'SQL']
  },
  {
    title: 'Web Technologies',
    skills: ['HTML5', 'CSS3', 'JSP', 'Servlet']
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'Agile', 'Figma', 'UI/UX Design']
  },
  {
    title: 'Other Skills',
    skills: [
    'Performance Optimization',
    'Security Best Practices',
    'Analytical Thinking',
    'Teamwork']

  }];

  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors duration-300">

              <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                {category.title}
              </h3>
              <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true
              }}
              className="flex flex-wrap gap-2">

                {category.skills.map((skill, idx) =>
              <motion.span
                key={idx}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(168, 85, 247, 0.2)'
                }}
                className="px-3 py-1.5 bg-white/5 text-sm text-gray-300 rounded-full border border-white/10 cursor-default transition-colors">

                    {skill}
                  </motion.span>
              )}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}