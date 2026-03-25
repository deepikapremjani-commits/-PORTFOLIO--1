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
    <main className="bg-[#121212] min-h-screen font-sans selection:bg-[#c6a47e] selection:text-white">
      {/* Scrollytelling Hero Area */}
      <section className="relative w-full">
        <ScrollyCanvas numFrames={21} />
        <Overlay />
      </section>

      {/* Software Skills Grid */}
      <SoftwareSkills />
      
      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Education />

      {/* Dynamic Project Gallery */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
