'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Commercial', 'Residential', 'Restaurant'];

const commercialImages = [
  '_DSC1146.png', '_DSC1191.png', '_DSC1204.png', '_DSC1230.png', '_DSC1316.png', 
  '_DSC1341.png', '_DSC1401.png', '_DSC1420.png', '_DSC1438.png', '_DSC1473.png', 
  '_DSC1529.png', '_DSC1611.png', '_DSC1617.png', '_DSC1656.png', '_DSC1664.png', 
  '_DSC1737.png', '_DSC1757.png', '_DSC1782.png', '_DSC1790.png', '_DSC1799.png', 
  '_DSC1827.png', '_DSC1873.png', '_DSC6318.png', '_DSC6372.png', '_DSC6381.png', 
  '_DSC6399.png', '_DSC6434.png', '_DSC6671.png', '_DSC6689.png', '_DSC6707.png', 
  '_DSC6716.png', '_DSC6725.png'
];
const residentialImages = ['frame_21_delay-0.066s.png', 'frame_22_delay-0.066s.png', 'frame_23_delay-0.066s.png', 'frame_24_delay-0.066s.png', 'frame_25_delay-0.066s.png', 'frame_26_delay-0.066s.png', 'frame_27_delay-0.066s.png', 'frame_28_delay-0.066s.png', 'frame_29_delay-0.066s.png', 'frame_30_delay-0.066s.png', 'frame_31_delay-0.066s.png', 'frame_32_delay-0.066s.png', 'frame_33_delay-0.066s.png', 'frame_34_delay-0.066s.png', 'frame_35_delay-0.066s.png', 'frame_36_delay-0.066s.png', 'frame_37_delay-0.066s.png', 'frame_38_delay-0.066s.png', 'frame_39_delay-0.066s.png', 'frame_40_delay-0.066s.png', 'frame_41_delay-0.066s.png', 'frame_42_delay-0.066s.png', 'frame_43_delay-0.066s.png', 'frame_44_delay-0.066s.png', 'frame_45_delay-0.066s.png', 'frame_46_delay-0.066s.png', 'frame_48_delay-0.066s.png', 'frame_49_delay-0.066s.png', 'frame_50_delay-0.066s.png', 'frame_51_delay-0.066s.png', 'frame_52_delay-0.066s.png', 'frame_53_delay-0.066s.png', 'frame_54_delay-0.066s.png', 'frame_55_delay-0.066s.png', 'frame_56_delay-0.066s.png', 'frame_57_delay-0.066s.png', 'frame_58_delay-0.066s.png', 'frame_59_delay-0.066s.png', 'frame_60_delay-0.066s.png', 'frame_61_delay-0.066s.png', 'frame_62_delay-0.066s.png', 'frame_63_delay-0.066s.png', 'frame_64_delay-0.066s.png', 'frame_65_delay-0.066s.png', 'frame_66_delay-0.066s.png'];
const restaurantImages = ['1.png', '10.png', '11.png', '12.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png'];

type Project = {
  id: string;
  category: string;
  src: string;
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);

  const allProjects = useMemo(() => {
    return [
      ...commercialImages.map((img) => ({
        id: `comm_${img}`,
        category: 'Commercial',
       src: /-PORTFOLIO--1/Assets/Projects/COMMERCIAL PROJECTS/${img},
      })),
      ...residentialImages.map((img) => ({
        id: `res_${img}`,
        category: 'Residential',
       src: /-PORTFOLIO--1/Assets/Projects/RESIDENTIAL PROJECTS/${img},
      })),
      ...restaurantImages.map((img) => ({
        id: `rest_${img}`,
        category: 'Restaurant',
        src: /-PORTFOLIO--1/Assets/Projects/RESTAURANT PROJECTS/${img},
      })),
    ];
  }, []);

  const displayedProjects = useMemo(() => {
    if (activeTab === 'All') return allProjects;
    return allProjects.filter((p) => p.category === activeTab);
  }, [activeTab, allProjects]);

  // Framer Motion variants for staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <section className="relative z-20 bg-zinc-950 py-32 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-[0.2em] text-center">PORTFOLIO</h2>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 outline-none ${
                activeTab === cat 
                  ? 'bg-white text-zinc-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] font-medium' 
                  : 'bg-transparent text-gray-400 border-white/20 hover:border-white/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Staggered Grid Layout */}
        <motion.div 
          layout 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={() => setSelectedImage(project)}
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-3xl bg-white/5 border border-white/10"
              >
                <motion.img 
                  layoutId={`img-${project.id}`}
                  src={project.src} 
                  alt={`${project.category} Project`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[#c6a47e] font-sans tracking-widest text-xs font-semibold uppercase block mb-1 drop-shadow-md">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-medium text-white drop-shadow-md">View details</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md bg-zinc-950/80"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <motion.button 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors backdrop-blur-lg"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </motion.button>
            
            {/* Image Container */}
            <motion.div 
              layoutId={`card-${selectedImage.id}`}
              className="relative w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center pointer-events-none"
            >
              <motion.img 
                layoutId={`img-${selectedImage.id}`}
                src={selectedImage.src} 
                alt={`${selectedImage.category} Project Full Size`} 
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-3xl"
              />
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4 } }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-950/90 to-transparent"
              >
                <span className="text-[#c6a47e] font-sans tracking-widest text-sm font-semibold uppercase">
                  {selectedImage.category} Design
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
