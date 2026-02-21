import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
export function Certificates() {
  const certificates = [
  {
    title: 'Angular',
    issuer: 'Great Learning',
    date: 'Oct 2023'
  },
  {
    title: 'React For Beginners',
    issuer: 'Udemy',
    date: 'Nov 2024'
  },
  {
    title: 'Figma',
    issuer: 'Udemy',
    date: ''
  },
  {
    title: 'HTML',
    issuer: 'SoloLearn',
    date: 'Feb 2023'
  },
  {
    title: 'Java Programming',
    issuer: 'Great Learning',
    date: 'Nov 2023'
  },
  {
    title: 'Introduction to Java Spring Framework',
    issuer: 'SimpleLearn',
    date: 'Feb 2024'
  },
  {
    title: 'Java',
    issuer: 'PROVIOUS Institute',
    date: 'Aug 2021'
  },
  {
    title: 'PHP Tutorial Beginner to Advanced',
    issuer: 'Udemy',
    date: 'Dec 2023'
  },
  {
    title: 'Programming Basic',
    issuer: 'Great Learning',
    date: 'Oct 2023'
  },
  {
    title: 'Python',
    issuer: 'Moratuwa University',
    date: 'July 2022'
  },
  {
    title: 'SQL',
    issuer: 'Udemy',
    date: 'Dec 2023'
  },
  {
    title: 'Road to INSL (Coding Competition)',
    issuer: 'IEEE Innovation Nation Sri Lanka',
    date: ''
  }];

  return (
    <section id="certificates" className="py-20 relative bg-black/20">
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
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) =>
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
              duration: 0.4,
              delay: index * 0.05
            }}
            whileHover={{
              y: -5,
              borderColor: 'rgba(168, 85, 247, 0.4)'
            }}
            className="glass-card p-5 rounded-xl border border-white/5 hover:bg-white/5 transition-all duration-300">

              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Award className="text-purple-400" size={20} />
                </div>
                {cert.date &&
              <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar size={10} />
                    {cert.date}
                  </span>
              }
              </div>
              <h3 className="font-bold text-white mb-1 line-clamp-2 min-h-[3rem]">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}