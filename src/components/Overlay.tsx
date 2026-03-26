'use client';

import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Overlay = () => {
  const { scrollYProgress } = useScroll();

  // --- 1. IMAGE ANIMATION (0% to 40% of scroll) ---
  const frameIndex = useTransform(scrollYProgress, [0, 0.4], [0, 20]);

  const frames = useMemo(() => {
    return Array.from({ length: 21 }, (_, i) => {
      const num = i.toString().padStart(2, '0');
      // This is the "Master Link" that forces GitHub to show the images
      return `https://raw.githubusercontent.com/deepikapremjani-commits/-PORTFOLIO--1/main/public/Assets/sequence/frame_${num}_delay-0.066s.png`;
    });
  }, []);

  // --- 2. TEXT TIMING (No more overlapping) ---
  // Text A: Fades out completely by 20% scroll
  const opacityA = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const yA = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Text B: Starts at 25%, fades out by 50%
  const opacityB = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const yB = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);

  // Text C: Starts at 60%, fades out by 85%
  const opacityC = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
  const yC = useTransform(scrollYProgress, [0.6, 0.8], [50, -50]);

  return (
    <div className="relative min-h-[800vh] bg-black">
      {/* BACKGROUND IMAGES */}
      <div className="fixed inset-0 z-[-1]">
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

      {/* PART A: Deepika Premjani */}
      <motion.div
        style={{ opacity: opacityA, y: yA }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-start justify-center px-12 md:px-24 text-left"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight drop-shadow-2xl">
          Deepika Premjani
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-2 tracking-[0.2em] uppercase font-medium">
          Interior Designer
        </p>
      </motion.div>

      {/* PART B: I Design */}
      <motion.div
        style={{ opacity: opacityB, y: yB }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-start justify-center px-12 md:px-24 text-left pointer-events-none"
      >
        <h2 className="text-5xl md:text-7xl font-thin text-white leading-tight">
          I DESIGN <br />
          <span className="text-gray-400 font-medium">spaces that belong..</span>
        </h2>
      </motion.div>

      {/* PART C: Bridging */}
      <motion.div
        style={{ opacity: opacityC, y: yC }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-end justify-center px-12 md:px-24 text-right pointer-events-none"
      >
        <h2 className="text-4xl md:text-6xl font-bold max-w-2xl text-white leading-tight">
          Bridging design <br />
          <span className="text-gray-400 font-light italic">and engineering.</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default Overlay;
