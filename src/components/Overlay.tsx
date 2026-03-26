'use client';

import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Overlay = () => {
  const { scrollYProgress } = useScroll();

  // --- ANIMATION LOGIC (The 21 photos) ---
  // This turns your scroll into a frame number from 0 to 20
  const frameIndex = useTransform(scrollYProgress, [0, 0.4], [0, 20]);

  const frames = useMemo(() => {
    return Array.from({ length: 21 }, (_, i) => {
      // This automatically creates the name: frame_00_delay-0.066s.png, etc.
      const num = i.toString().padStart(2, '0');
      return `/-PORTFOLIO--1/Assets/sequence/frame_${num}_delay-0.066s.png`;
    });
  }, []);

  // --- TEXT ANIMATIONS (Based on your VS Code settings) ---
  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [50, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.7], [50, -50]);

  const tagline = "Transforming visions into vivid realities.";

  return (
    <div className="relative min-h-[600vh]">
      {/* BACKGROUND ANIMATION LAYER */}
      <div className="fixed inset-0 z-[-1] bg-black">
        {frames.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            style={{
              display: useTransform(frameIndex, (latest) => 
                Math.round(latest) === i ? 'block' : 'none'
              ),
            }}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Part A: Your Name and Title (Left Aligned) */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-start justify-center px-12 md:px-24 text-left"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight drop-shadow-2xl">
          Deepika Premjani
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-2 tracking-[0.2em] uppercase font-medium">
          Interior Designer
        </p>
        <p className="text-lg italic text-white/90 mt-6 font-light">
          {tagline}
        </p>
      </motion.div>

      {/* Part B: Scrolling Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-start px-12 md:px-24 pointer-events-none"
      >
        <h2 className="text-5xl md:text-7xl font-thin text-white leading-tight">
          I DESIGN <br />
          <span className="text-gray-400 font-medium">spaces that belong..</span>
        </h2>
      </motion.div>

      {/* Part C: Scrolling Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-end px-12 md:px-24 pointer-events-none"
      >
        <h2 className="text-4xl md:text-6xl font-bold max-w-2xl text-right text-white leading-tight">
          Bridging design <br />
          <span className="text-gray-400 font-light italic">and engineering.</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default Overlay;
