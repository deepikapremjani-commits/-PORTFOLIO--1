'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 0,
      role: 'Freelance Interior Designer',
      company: 'Independent',
      location: 'Remote / On-site',
      responsibilities: [
        'Providing independent interior design services for residential and commercial clients',
        'Developing concept designs, layouts, and 3D visualizations',
        'Collaborating directly with clients to understand their vision and requirements',
        'Managing projects from design concept to final execution',
        'Coordinating with vendors and suppliers for materials and furnishings',
      ],
    },
    {
      id: 1,
      role: 'Senior Interior Designer',
      company: 'Space O Design',
      location: 'Ahmedabad',
      responsibilities: [
        'Developed interior design plans and elevations',
        'Conducted site visits ensuring execution',
        'Coordinated with vendors and suppliers',
        'Managed projects from concept to installation',
      ],
    },
    {
      id: 2,
      role: 'Junior Interior Designer',
      company: 'Detales Design Stories',
      location: 'Ahmedabad',
      responsibilities: [
        'Created 3D interior models using CAD software',
        'Prepared project documentation',
        'Translated client ideas into design concepts',
        'Coordinated with vendors and suppliers',
      ],
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Experience</h2>
        </motion.div>

        <div className="relative border-l border-white/20 ml-3 md:ml-6 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-[#c6a47e] shadow-[0_0_10px_#c6a47e]" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-lg text-gray-400 font-medium mt-1">
                    {exp.company} <span className="text-gray-600 px-2">•</span> {exp.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-[#c6a47e] mr-3 mt-1.5 opacity-60">▹</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
