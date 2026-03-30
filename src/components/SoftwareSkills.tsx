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
    <section className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tighter text-center">Software Proficiency</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -12, scale: 1.05, transition: { duration: 0.3 } }}
              className="group relative bg-[#1c1c1c] p-10 rounded-3xl border border-white/5 hover:border-white/30 transition-all duration-500 flex flex-col items-center cursor-pointer"
              style={{ boxShadow: '0 0 0 0 rgba(198,164,126,0)' }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at center, rgba(198,164,126,0.08) 0%, transparent 70%)' }}
              />

              {/* Icon box */}
              <motion.div
                className="mb-8 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg"
                style={{ width: '144px', height: '144px' }
                whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Name */}
              <motion.h3
                className="text-xl font-semibold text-white/70 group-hover:text-white transition-colors duration-300 tracking-wide"
              >
                {skill.name}
              </motion.h3>

              {/* Underline animation */}
              <motion.div
                className="h-0.5 bg-[#c6a47e] mt-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '40px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSkills;