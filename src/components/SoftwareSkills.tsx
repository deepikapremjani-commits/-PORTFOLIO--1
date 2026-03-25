'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
{ id: 1, name: 'AutoCAD', image: '/-PORTFOLIO--1/Assets/SoftwareSkills/autocad.png' },
  { id: 2, name: 'SketchUp', image: '/-PORTFOLIO--1/Assets/SoftwareSkills/sketchup.png' },
  { id: 3, name: 'V-Ray', image: '/-PORTFOLIO--1/Assets/SoftwareSkills/vray.png' },
  { id: 4, name: 'Enscape', image: '/-PORTFOLIO--1/Assets/SoftwareSkills/enscape.png' },
];

const SoftwareSkills = () => {
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center">Software Proficiency</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-white/30 hover:bg-white/10"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mb-6 relative flex items-center justify-center bg-white rounded-2xl p-6 shadow-lg">
                <img 
                  src={skill.image} 
                  alt={skill.name} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold tracking-wide text-gray-200">{skill.name}</h3>
              
              {/* Subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl bg-gradient-to-tr from-[#c6a47e]/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSkills;
