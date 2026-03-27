'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { id: 1, name: 'AutoCAD', image: '/Assets/SoftwareSkills/autocad.png' },
  { id: 2, name: 'SketchUp', image: '/Assets/SoftwareSkills/sketchup.png' },
  { id: 3, name: 'V-Ray', image: '/Assets/SoftwareSkills/vray.png' },
  { id: 4, name: 'Enscape', image: '/Assets/SoftwareSkills/enscape.png' },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter text-center">Software Proficiency</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: skill.id * 0.1 }}
              className="group relative bg-[#1c1c1c] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-6 relative">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-contain transition-all duration-500"
                />
              </div>
              <h3 className="text-lg font-medium text-white/70 group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSkills;
