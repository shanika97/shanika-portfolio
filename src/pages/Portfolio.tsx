import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Education } from '../components/Education';
import { Certificates } from '../components/Certificates';
import { Contact } from '../components/Contact';
export function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0d0213] text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <p>
          © {new Date().getFullYear()} Shanika Maduwanthi. All rights reserved.
        </p>
      </footer>
    </div>);

}