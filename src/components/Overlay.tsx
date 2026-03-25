'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Overlay = () => {
  const { scrollYProgress } = useScroll();

  // Text 1 (0% scroll) fades out smoothly over the first 30% of scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Text 2 (30% scroll)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [50, -50]);

  // Text 3 (60% scroll)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.7], [50, -50]);

  const tagline = "Transforming visions into vivid realities.";

  // Part A: Name and Title
  const partAVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Part B: Tagline Stagger
  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6, // Start slightly after Part A fades in
        staggerChildren: 0.05
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 font-sans">

      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-start px-12 md:px-24 pointer-events-none"
      >
        <div className="text-left flex flex-col items-start justify-center space-y-4 md:space-y-6 text-white max-w-4xl">
          <motion.div
            variants={partAVariants}
            initial="hidden"
            animate="visible"
            className="drop-shadow-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-2">
              Deepika Premjani
            </h1>
            <p className="text-2xl md:text-4xl font-semibold uppercase tracking-widest text-zinc-300">
              Interior Designer
            </p>
          </motion.div>

          <motion.div
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl md:text-3xl font-medium italic drop-shadow-2xl max-w-4xl leading-tight"
          >
            {tagline.split("").map((char, index) => (
              <motion.span key={index} variants={charVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-start px-8 md:px-24 pointer-events-none"
      >
        <h2 className="text-5xl md:text-7xl font-thin text-white leading-tight">
          I DESIGN <br />
          <span className="text-gray-400 font-medium">spaces that belong..</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-end px-8 md:px-24 pointer-events-none"
      >
        <h2 className="text-4xl md:text-6xl font-bold max-w-2xl text-right text-white leading-tight drop-shadow-lg">
          Bridging design <br />
          <span className="text-gray-400 font-light italic">and engineering.</span>
        </h2>
      </motion.div>

    </div>
  );
};

export default Overlay;
