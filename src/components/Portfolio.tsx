'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Commercial', 'Residential', 'Restaurant'];

const projectsData = [
  ...[2,3,4,5,6,7].map(n => ({
    id: `comm_${n}`,
    category: 'Commercial',
    src: `/Assets/Projects/COMMERCIAL PROJECTS/${n}.png`
  })),
  ...[21,22,23,24,25,26].map(n => ({
    id: `res_${n}`,
    category: 'Residential',
    src: `/Assets/Projects/RESIDENTIAL PROJECTS/frame_${n}_delay-0.066s.png`
  })),
  ...[1,3,4,5,6,7].map(n => ({
    id: `rest_${n}`,
    category: 'Restaurant',
    src: `/Assets/Projects/RESTAURANT PROJECTS/${n}.png`
  }))
];

// Simple shuffle for the 'All' tab to mix things up!
const shuffledProjects = [...projectsData].sort(() => Math.random() - 0.5);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? shuffledProjects 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center">Project Portfolio</h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 outline-none ${
                activeTab === cat 
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                  : 'bg-transparent text-gray-400 border-white/20 hover:border-white/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-2xl bg-white/5 border border-white/10"
              >
                <img 
                  src={project.src} 
                  alt={`${project.category} Project`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[#c6a47e] font-mono tracking-widest text-xs font-semibold uppercase block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-medium text-white">View Project Details</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
