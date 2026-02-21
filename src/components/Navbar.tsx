import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [
{
  name: 'About',
  href: '#about'
},
{
  name: 'Experience',
  href: '#experience'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Education',
  href: '#education'
},
{
  name: 'Certificates',
  href: '#certificates'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="text-2xl font-bold font-playfair cursor-pointer"
            onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
            }>

            <span className="text-gradient">SM</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) =>
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium transition-colors duration-300 hover:text-purple-400 ${activeSection === link.href.substring(1) ? 'text-purple-400' : 'text-gray-300'}`}>

                {link.name}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none">

              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden glass-nav border-t border-gray-800">

            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) =>
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md transition-colors ${activeSection === link.href.substring(1) ? 'text-purple-400 bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>

                  {link.name}
                </button>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}