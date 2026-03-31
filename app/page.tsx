import React from 'react';
import ScrollyCanvas from '../src/components/ScrollyCanvas';
import Overlay from '../src/components/Overlay';
import Projects from '../src/components/Projects';
import SoftwareSkills from '../src/components/SoftwareSkills';
import Experience from '../src/components/Experience';
import Education from '../src/components/Education';
import Contact from '../src/components/Contact';

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen font-sans">
      <section id="home" className="relative w-full">
        <ScrollyCanvas numFrames={21} />
        <Overlay />
      </section>
      <section id="skills">
        <SoftwareSkills />
      </section>
      <section id="experience">
        <Experience />
        <Education />
      </section>
      <section id="portfolio">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}