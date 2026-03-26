'use client';

import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Overlay = () => {
  const { scrollYProgress } = useScroll();

  // 1. ANIMATION LOGIC (0 to 20 frames)
  // This plays the animation while you scroll the first 45% of the page
  const frameIndex = useTransform(scrollYProgress, [0, 0.45], [0, 20]);

  const frames = useMemo(() => {
    return Array.from({ length: 21 }, (_, i) => {
      // This looks for the EXACT names in your public folder
      const num = i.toString().padStart(2, '0');
      return `/frame_${num}_delay-0.066s.png`;
    });
  }, []);

  // 2. TEXT TIMING (Zero Overlap)
  const opacityA = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const yA = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  const opacityB = useTransform(scrollYProgress, [0.25, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const yB = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);

  const opacityC = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 0]);
  const yC = useTransform(scrollYProgress, [0.7, 0.85], [50, -50]);

  return (
    <div className="relative min-h-[800vh] bg-black">
      {/* THE IMAGE LAYER (Scroll Sequence) */}
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

      {/* THE TEXT LAYER */}
      <div className="relative z-10">
        {/* Section 1: Hero */}
        <motion.div 
          style={{ opacity: opacityA, y: yA }} 
          className="fixed inset-0 flex flex-col items-start justify-center px-12 md:px-24 text-left"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
            Deepika Premjani
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-2 tracking-[0.2em] uppercase font-medium">
            Interior Designer
          </p>
          <p className="text-lg italic text-white/90 mt-6 font-light">
            Transforming visions into vivid realities.
          </p>
        </motion.div>

        {/* Section 2: I Design */}
        <motion.div 
          style={{ opacity: opacityB, y: yB }} 
          className="fixed inset-0 flex flex-col items-start justify-center px-12 md:px-24 text-left pointer-events-none"
        >
          <h2 className="text-5xl md:text-7xl font-thin text-white leading-tight">
            I DESIGN <br />
            <span className="text-gray-400 font-medium">spaces that belong..</span>
          </h2>
        </motion.div>

        {/* Section 3: Engineering */}
        <motion.div 
          style={{ opacity: opacityC, y: yC }} 
          className="fixed inset-0 flex flex-col items-end justify-center px-12 md:px-24 text-right pointer-events-none"
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
