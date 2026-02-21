import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Leaf,
  Database,
  ShoppingCart,
  Camera,
  Briefcase,
  GraduationCap,
  FileText } from
'lucide-react';
export function Projects() {
  const projects = [
  {
    title: 'Doxmate (Bizflow and DMS)',
    badge: 'Enterprise',
    description:
    'An enterprise content management and business process automation solution that offers document management systems and dynamic workflows.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    icon: <FileText className="w-10 h-10 text-cyan-400" />,
    featured: true,
    color: 'border-cyan-500'
  },
  {
    title: 'AI Plant Disease Detection',
    badge: 'AI / Machine Learning',
    description:
    'AI-powered system that identifies plant diseases from images and provides management recommendations for farmers and agricultural professionals.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'Google Colab'],
    icon: <Leaf className="w-10 h-10 text-green-400" />,
    featured: true,
    color: 'border-green-500'
  },
  {
    title: 'Affiniti CRM System',
    badge: 'Enterprise',
    description:
    'Enterprise-grade CRM application with security best practices, performance optimization, and Agile development workflow.',
    tags: ['Spring Boot', 'React', 'JSP', 'MySQL'],
    icon: <Briefcase className="w-10 h-10 text-blue-400" />,
    color: 'border-blue-500'
  },
  {
    title: 'e-Lottery Platform',
    badge: 'Fintech',
    description:
    'Administrative Control Panel for e-Lottery with parameter initialization, transaction monitoring, and optimized database performance.',
    tags: ['Spring MVC', 'JSP', 'MySQL', 'Java', 'jQuery'],
    icon: <Database className="w-10 h-10 text-purple-400" />,
    color: 'border-purple-500'
  },
  {
    title: 'Employee Management System',
    badge: 'Full Stack',
    description:
    'Full-stack employee management system with Angular frontend and Spring Boot backend.',
    tags: ['Angular', 'Spring Boot', 'MySQL'],
    icon: <Briefcase className="w-10 h-10 text-orange-400" />,
    color: 'border-orange-500'
  },
  {
    title: 'Photography Website',
    badge: 'Web',
    description:
    'Website for photography services including wedding packages and different function packages.',
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    icon: <Camera className="w-10 h-10 text-pink-400" />,
    color: 'border-pink-500'
  },
  {
    title: 'WorkLoad Management System',
    badge: 'Academic',
    description:
    'Web-based Workload Calculation Portal for Academic Staff of the Faculty of Applied Science (3rd Year Group Project).',
    tags: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
    icon: <GraduationCap className="w-10 h-10 text-yellow-400" />,
    color: 'border-yellow-500'
  },
  {
    title: 'E-Commerce Furniture Shop',
    badge: 'E-Commerce',
    description:
    'Simple e-commerce website with full-stack implementation for furniture shop.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Spring Boot', 'MySQL'],
    icon: <ShoppingCart className="w-10 h-10 text-indigo-400" />,
    color: 'border-indigo-500'
  }];

  return (
    <section id="projects" className="py-20 relative bg-black/20">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            whileHover={{
              y: -10
            }}
            className={`glass-card rounded-xl overflow-hidden flex flex-col h-full border-t-4 ${project.color} group`}>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-gray-300 border border-white/10">
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) =>
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/5">

                      {tag}
                    </span>
                )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}