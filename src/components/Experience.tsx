import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
export function Experience() {
  const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Epic Lanka Technology Group',
    period: 'Jan 2025 – Present',
    location: 'Thalangama, Sri Lanka',
    projects: [
    {
      name: 'Affiniti CRM System',
      description:
      'Designed, developed, and maintained enterprise-grade CRM applications using Spring Boot, React, JSP, and MySQL, ensuring security best practices, performance, and maintainability. Collaborated in an Agile environment.'
    },
    {
      name: 'Doxmate System (Front-end Developer)',
      description:
      'Web-based document management system automating workflows, centralizing documents and transactional data. Built using Angular, SCSS, and Git.'
    }]

  },
  {
    title: 'Intern – Full Stack Developer',
    company: 'Epic Lanka Technology Group',
    period: 'Nov 2023 – Dec 2024',
    location: 'Thalangama, Sri Lanka',
    projects: [
    {
      name: 'e-Lottery Platform-Admin Portal',
      description:
      'Administrative Control Panel facilitating parameter initialization, reference data management, and transaction monitoring. Optimized system performance through database indexing. Tech stack: Spring MVC, JSP, MySQL, Git, Java, jQuery.'
    },
    {
      name: 'MMS Solution',
      description:
      'Merchant management & QR solution provided by Epic Lanka, currently utilized by BOC Bank. Tech stack: Spring MVC, JSP, MySQL, Git, Java, jQuery.'
    }]

  }];

  return (
    <section id="experience" className="py-20 relative bg-black/20">
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
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800 rounded-full">
            <motion.div
              initial={{
                height: 0
              }}
              whileInView={{
                height: '100%'
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut'
              }}
              className="w-full bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full" />

          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2
              }}
              className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Content */}
                <div className="flex-1 ml-8 md:ml-0">
                  <div
                  className={`glass-card p-6 rounded-xl relative ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>

                    {/* Arrow for desktop */}
                    <div
                    className={`hidden md:block absolute top-6 w-4 h-4 bg-white/5 border-l border-t border-white/10 transform rotate-45 ${index % 2 === 0 ? '-right-2.5 border-r border-b border-l-0 border-t-0 bg-gray-900' : '-left-2.5 bg-gray-900'}`}>
                  </div>

                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end text-sm text-gray-400">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {exp.projects.map((project, idx) =>
                    <div key={idx} className="bg-white/5 p-4 rounded-lg">
                          <h4 className="font-semibold text-white mb-1 flex items-center gap-2">
                            <Briefcase size={14} className="text-purple-400" />
                            {project.name}
                          </h4>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                    )}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0d0213] z-10 mt-6"></div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}