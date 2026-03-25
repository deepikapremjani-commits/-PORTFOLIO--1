'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Engineering',
      field: 'Civil Engineering',
      institution: 'Government Engineering College, Dahod',
      duration: '2018 – 2022',
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 text-white border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Education</h2>
        </motion.div>

        <div className="relative">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {item.degree} <span className="text-[#c6a47e]">in {item.field}</span>
                  </h3>
                  <p className="text-xl text-gray-400 font-light">
                    {item.institution}
                  </p>
                </div>
                <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm tracking-widest font-mono text-gray-300">
                  {item.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
