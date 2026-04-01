'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { id: 1, name: 'AutoCAD', image: '/Assets/SoftwareSkills/autocad.png' },
  { id: 2, name: 'SketchUp', image: '/Assets/SoftwareSkills/sketchup.png' },
  { id: 3, name: 'V-Ray', image: '/Assets/SoftwareSkills/vray.png' },
  { id: 4, name: 'Enscape', image: '/Assets/SoftwareSkills/enscape.png' },
];

export default function SoftwareSkills() {
  return (
    <section className="relative z-20 bg-[#121212] py-16 md:py-32 px-4 md:px-12 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-20 tracking-tighter text-center">
            Software Proficiency
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative bg-[#1c1c1c] p-4 md:p-10 rounded-2xl md:rounded-3xl border border-white/5 hover:border-white/30 transition-all duration-500 flex flex-col items-center cursor-pointer"
            >
              {/* White icon box — full width, perfect square */}
              <div className="mb-4 md:mb-8 w-full aspect-square bg-white rounded-xl md:rounded-2xl flex items-center justify-center p-4 md:p-6 shadow-lg">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-base md:text-xl font-semibold text-white/70 group-hover:text-white transition-colors duration-300 text-center">
                {skill.name}
              </h3>

              <motion.div
                className="h-0.5 bg-[#c6a47e] mt-2 md:mt-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '32px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}