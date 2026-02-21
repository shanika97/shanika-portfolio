import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
export function Education() {
  const education = [
  {
    degree: 'BSc Degree in Information Technology',
    institution: 'Vavuniya Campus of the University of Jaffna',
    period: '2020 – 2023',
    details: 'GPA - 3.10 (2nd Lower Division)'
  },
  {
    degree: 'Diploma in Human Resource Management',
    institution: 'IMBS Green Campus',
    period: '2022 – 2023',
    details: ''
  },
  {
    degree: 'Secondary Education',
    institution: 'Mahamaya Balika Vidyalaya, Kadawatha',
    period: '2003 – 2016',
    details: ''
  }];

  return (
    <section id="education" className="py-20 relative">
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
            Education
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2
            }}
            className="relative pl-8 pb-12 last:pb-0 border-l border-gray-800 last:border-l-0">

              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0d0213]"></div>

              <div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="text-purple-400" size={20} />
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                </div>

                <p className="text-lg text-purple-300 font-medium mb-1">
                  {edu.institution}
                </p>
                {edu.details &&
              <p className="text-gray-400 text-sm">{edu.details}</p>
              }
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}