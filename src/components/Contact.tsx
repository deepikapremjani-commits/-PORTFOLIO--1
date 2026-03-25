'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative z-20 bg-zinc-950 py-32 px-6 md:px-12 text-white border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "0px 0px -100px 0px" }}
           className="w-full flex flex-col items-center"
        >
          <motion.span variants={itemVariants} className="text-[#c6a47e] font-sans tracking-widest text-sm font-semibold uppercase mb-4 block">
            Get in touch
          </motion.span>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-thin mb-12 tracking-wide leading-tight">
            Let's design something <br />
            <span className="font-medium text-zinc-300">extraordinary together.</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 w-full mt-8">
            
            {/* Email Link */}
            <a 
              href="mailto:deepikapremjani@gmail.com" 
              className="group relative flex items-center justify-center gap-4 py-4 px-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Mail className="w-5 h-5 text-[#c6a47e]" />
              <span className="text-lg font-light tracking-wide text-zinc-200 group-hover:text-white transition-colors duration-300">
                deepikapremjani@gmail.com
              </span>
            </a>

            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/designassistinteriorstudio" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-4 py-4 px-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Instagram className="w-5 h-5 text-[#c6a47e]" />
              <span className="text-lg font-light tracking-wide text-zinc-200 group-hover:text-white transition-colors duration-300">
                @designassistinteriorstudio
              </span>
            </a>

          </motion.div>
        </motion.div>

        {/* Minimal Footer */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 pt-8 w-full border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm font-light tracking-wide"
        >
          <p>© {new Date().getFullYear()} Deepika Premjani. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Interior Design Portfolio</p>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;
