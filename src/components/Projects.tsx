'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioFolders = [
  {
    id: 'commercial',
    name: 'Commercial',
    cover: '/Assets/Projects/COMMERCIAL PROJECTS/_DSC1146.png',
    images: [
      '_DSC1146.png', '_DSC1191.png', '_DSC1204.png', '_DSC1230.png',
      '_DSC1316.png', '_DSC1341.png', '_DSC1401.png', '_DSC1420.png',
      '_DSC1438.png', '_DSC1473.png', '_DSC1529.png', '_DSC1611.png',
      '_DSC1617.png', '_DSC1656.png', '_DSC1664.png', '_DSC1737.png',
      '_DSC1757.png', '_DSC1782.png', '_DSC1790.png', '_DSC1799.png',
      '_DSC1827.png', '_DSC1873.png', '_DSC6318.png', '_DSC6372.png',
      '_DSC6381.png', '_DSC6399.png', '_DSC6434.png', '_DSC6671.png',
      '_DSC6689.png', '_DSC6707.png', '_DSC6716.png', '_DSC6725.png'
    ].map(img => `/Assets/Projects/COMMERCIAL PROJECTS/${img}`),
    count: 32,
    color: '#c6a47e'
  },
  {
    id: 'residential',
    name: 'Residential',
    cover: '/Assets/Projects/RESIDENTIAL PROJECTS/frame_21_delay-0.066s.png',
    images: Array.from({ length: 46 }, (_, i) => i + 21)
      .filter(n => n !== 47)
      .map(n => `/Assets/Projects/RESIDENTIAL PROJECTS/frame_${n}_delay-0.066s.png`),
    count: 46,
    color: '#7e9cc6'
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    cover: '/Assets/Projects/RESTAURANT PROJECTS/1.png',
    images: ['1','3','4','5','6','7','8','9','10','11','12','14','15','16','17','18','19','20']
      .map(n => `/Assets/Projects/RESTAURANT PROJECTS/${n}.png`),
    count: 18,
    color: '#c67e7e'
  }
];

const Projects = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const activeFolder = portfolioFolders.find(f => f.id === openFolder);

  return (
    <section className="relative z-20 bg-zinc-950 py-32 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 tracking-[0.2em] text-center"
        >
          PORTFOLIO
        </motion.h2>

        {/* Folder View */}
        <AnimatePresence mode="wait">
          {!openFolder ? (
            <motion.div
              key="folders"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {portfolioFolders.map((folder, index) => (
                <motion.div
                  key={folder.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setOpenFolder(folder.id)}
                  className="cursor-pointer group"
                >
                  {/* Folder Shape */}
                  <div className="relative">
                    {/* Folder Tab */}
                    <div
                      className="absolute -top-4 left-4 w-24 h-6 rounded-t-lg"
                      style={{ backgroundColor: folder.color }}
                    />
                    {/* Folder Body */}
                    <div
                      className="relative rounded-b-2xl rounded-tr-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-300"
                      style={{ backgroundColor: '#1c1c1c' }}
                    >
                      {/* Cover Image */}
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={folder.cover}
                          alt={folder.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                          loading="lazy"
                        />
                      </div>
                      {/* Folder Info */}
                      <div className="p-6 flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white">{folder.name}</h3>
                          <p className="text-sm text-gray-400 mt-1">{folder.count} photos</p>
                        </div>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 group-hover:border-white/60 transition-all"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Images Inside Folder */
            <motion.div
              key="images"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Back Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setOpenFolder(null)}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                <span>Back to folders</span>
              </motion.button>

              <h3 className="text-2xl font-bold mb-8" style={{ color: activeFolder?.color }}>
                {activeFolder?.name} Projects
              </h3>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeFolder?.images.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    onClick={() => setSelectedImage(src)}
                    className="aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                  >
                    <img
                      src={src}
                      alt={`${activeFolder.name} ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 rounded-full p-3"
              onClick={() => setSelectedImage(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </motion.button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              className="max-w-5xl max-h-[90vh] w-auto h-auto rounded-2xl object-contain"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
