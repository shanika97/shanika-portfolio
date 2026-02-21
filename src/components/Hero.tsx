import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
export function Hero() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: string;
      size: string;
      duration: string;
      delay: string;
    }>>(
      []);
  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({
      length: 30
    }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`
    }));
    setParticles(newParticles);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) =>
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay
            }} />

        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="flex-1 text-center md:text-left">

            <h2 className="text-purple-400 font-medium text-lg mb-4 tracking-wide">
              HELLO, I'M
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4 text-white leading-tight">
              Shanika <br />
              <span className="text-gradient">Maduwanthi</span>
            </h1>

            <div className="h-8 mb-8 overflow-hidden">
              <motion.p
                initial={{
                  y: 20,
                  opacity: 0
                }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5
                }}
                className="text-xl md:text-2xl text-gray-300 font-light">

                Associate Software Engineer
              </motion.p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 justify-center md:justify-start">
              <motion.a
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                href="mailto:shanikagamageagm@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300">

                Hire Me
              </motion.a>

              <div className="flex items-center gap-4">
                <motion.a
                  whileHover={{
                    y: -3,
                    color: '#a855f7'
                  }}
                  href="https://www.linkedin.com/in/shanika-aththatage-312a0b255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-300"
                  aria-label="LinkedIn Profile">

                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{
                    y: -3,
                    color: '#a855f7'
                  }}
                  href="https://github.com/shanika97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-300"
                  aria-label="GitHub Profile">

                  <Github size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="flex-1 flex justify-center md:justify-end">

            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl glow-purple">
                <img
                  src={`${import.meta.env.BASE_URL}WhatsApp_Image_2026-02-21_at_7.27.41_AM.jpg`}
                  alt="Shanika Maduwanthi"
                  className="w-full h-full object-cover" />

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{
          delay: 1.5,
          duration: 2,
          repeat: Infinity
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400">

        <ChevronDown size={32} />
      </motion.div>
    </section>);

}