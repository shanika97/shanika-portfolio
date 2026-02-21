import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink } from
'lucide-react';
export function Contact() {
  return (
    <section id="contact" className="py-20 relative">
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
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
              duration: 0.6
            }}>

            <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm currently looking for new opportunities. Whether you have
                  a question or just want to say hi, I'll try my best to get
                  back to you!
                </p>

                <div className="space-y-6">
                  <a
                    href="mailto:shanikagamageagm@gmail.com"
                    className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">

                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-purple-500/20 transition-colors">
                      <Mail size={20} />
                    </div>
                    <span>shanikagamageagm@gmail.com</span>
                  </a>

                  <div className="flex items-center gap-4 text-gray-300 group">
                    <div className="p-3 bg-white/5 rounded-full">
                      <Phone size={20} />
                    </div>
                    <span>0756381168</span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-300 group">
                    <div className="p-3 bg-white/5 rounded-full">
                      <MapPin size={20} />
                    </div>
                    <span>Kadawatha, Sri Lanka</span>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/shanika-aththatage-312a0b255/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300">

                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/shanika97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300">

                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* References & CTA */}
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
              duration: 0.6
            }}
            className="flex flex-col gap-6">

            <div className="glass-card p-8 rounded-2xl flex-1">
              <h3 className="text-xl font-bold text-white mb-6">References</h3>

              <div className="space-y-6">
                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="font-bold text-white">Amila Perera</h4>
                  <p className="text-sm text-purple-300">
                    Vice President-IT | CIO, Epic Lanka (PVT) Ltd.
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    amila_c@epclanka.net | 0777124213
                  </p>
                </div>

                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="font-bold text-white">
                    Isuru Sahan Gunasekara
                  </h4>
                  <p className="text-sm text-purple-300">
                    Senior Software Engineer, Epic Lanka Pvt LTD
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    isgunasekara94@gmail.com | 0766816457
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to work together?
              </h3>
              <motion.a
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                href="mailto:shanikagamageagm@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300">

                <Mail size={20} />
                Hire Me Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}