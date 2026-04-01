'use client';

import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Overlay = () => {
  const { scrollYProgress } = useScroll();

  const frameIndex = useTransform(scrollYProgress, [0, 0.45], [0, 20]);

  const frames = useMemo(() => {
    return Array.from({ length: 21 }, (_, i) => {
      const num = i.toString().padStart(2, '0');
      return `/sequence/frame_${num}_delay-0.066s.png`;
    });
  }, []);

  const opacityA = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const yA = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacityB = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const yB = useTransform(scrollYProgress, [0.3, 0.45], [50, -50]);
  const opacityC = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]);
  const yC = useTransform(scrollYProgress, [0.65, 0.8], [50, -50]);

  return (
    <div className="relative min-h-[800vh] bg-black">

      {/* IMAGE LAYER */}
      <div className="fixed inset-0 z-0">
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

      {/* TEXT LAYER */}
      <div className="relative z-10 pointer-events-none">

        {/* Section 1: Hero — cinematic split reveal */}
        <motion.div
          style={{ opacity: opacityA, y: yA }}
          className="fixed inset-0 flex flex-col items-start justify-center px-12 md:px-24 text-left"
        >
          {/* Name: split reveal — top slides down, bottom slides up */}
          <div className="overflow-hidden flex flex-col items-start">
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl leading-tight whitespace-nowrap"
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Deepika
            </motion.h1>
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl leading-tight whitespace-nowrap"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Premjani
            </motion.h1>
          </div>

          {/* Interior Designer: shimmer glow */}
          <motion.div
            className="relative mt-3 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Base text */}
            <p className="text-xl md:text-2xl text-gray-300 tracking-[0.2em] uppercase font-medium">
              Interior Designer
            </p>

            {/* Shimmer sweep */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              style={{ mixBlendMode: 'overlay', opacity: 0.7 }}
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{
                duration: 1.5,
                delay: 1.2,
                repeat: Infinity,
                repeatDelay: 4,
                ease: 'easeInOut',
              }}
            />

            {/* Glow copy on top */}
            <motion.p
              className="absolute inset-0 text-xl md:text-2xl tracking-[0.2em] uppercase font-medium text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.7, 1] }}
              transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
              style={{
                textShadow:
                  '0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(198,164,126,0.6)',
              }}
            >
              Interior Designer
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Section 2: I Design */}
        <motion.div
          style={{ opacity: opacityB, y: yB }}
          className="fixed inset-0 flex flex-col items-start justify-center px-12 md:px-24 text-left"
        >
          <h2 className="text-5xl md:text-7xl font-thin text-white leading-tight">
            I DESIGN <br />
            <span className="text-gray-400 font-medium">spaces that belong..</span>
          </h2>
        </motion.div>

        {/* Section 3: Engineering */}
        <motion.div
          style={{ opacity: opacityC, y: yC }}
          className="fixed inset-0 flex flex-col items-end justify-center px-12 md:px-24 text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight">
            Bridging design <br />
            <span className="text-gray-400 font-light italic">and engineering.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
};

export default Overlay;