'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Overlay = () => {
  const { scrollYProgress } = useScroll();

  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);

  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.7], [50, -50]);

  return (
    <div className="relative">
      {/* 100% BRIGHTNESS BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-white">
        <img 
          src="https://raw.githubusercontent.com/deepikapremjani-commits/-PORTFOLIO--1/main/public/Assets/sequence/frame_00_delay-0.066s.png" 
          alt="Deepika Premjani"
          className="w-full h-full object-cover opacity-100" 
        />
      </div>

      {/* Hero Section: Your Name & Title */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center px-8 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
          Deepika Premjani
        </h1>
        <p className="text-xl md:text-2xl text-white mt-4 tracking-widest uppercase font-semibold">
          Interior Designer
        </p>
        <p className="text-lg italic text-white/90 mt-2">
          Transforming visions into vivid realities.
        </p>
      </motion.div>

      {/* Section 2: Scrolling Text */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-start px-8 md:px-24 pointer-events-none"
      >
        <h2 className="text-5xl md:text-7xl font-thin text-white leading-tight">
          I DESIGN <br />
          <span className="text-gray-300 font-medium">spaces that belong..</span>
        </h2>
      </motion.div>

      {/* Section 3: Scrolling Text */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-end px-8 md:px-24 pointer-events-none"
      >
        <h2 className="text-4xl md:text-6xl font-bold max-w-2xl text-right text-white leading-tight">
          Bridging design <br />
          <span className="text-gray-300 font-light italic">and engineering.</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default Overlay;
