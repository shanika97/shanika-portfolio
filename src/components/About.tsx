import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Award } from 'lucide-react';
export function About() {
  const stats = [
  {
    label: 'Years Experience',
    value: '2+',
    icon: <Briefcase className="w-6 h-6 text-purple-400" />
  },
  {
    label: 'Projects Completed',
    value: '6+',
    icon: <Code2 className="w-6 h-6 text-purple-400" />
  },
  {
    label: 'Technologies',
    value: '15+',
    icon: <Award className="w-6 h-6 text-purple-400" />
  }];

  return (
    <section id="about" className="py-20 relative">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
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
              delay: 0.2
            }}>

            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-purple-600/20"></div>

              <h3 className="text-2xl font-bold mb-6 text-white">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate about building meaningful digital solutions, I am a
                self-driven Software Engineer with solid experience in
                full-stack development and real-world fintech projects.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I thrive in fast-paced environments, enjoy learning new
                technologies, and consistently deliver quality solutions on
                time. I recently updated my portfolio to reflect my latest
                projects, achievements, and technical growth, and I am excited
                to bring this experience to a new challenge.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50
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
              delay: 0.4
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {stats.map((stat, index) =>
            <motion.div
              key={index}
              whileHover={{
                y: -5
              }}
              className={`glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center ${index === 2 ? 'sm:col-span-2' : ''}`}>

                <div className="mb-3 p-3 bg-purple-500/10 rounded-full">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </h4>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}