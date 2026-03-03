import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative pl-12 border-l-2 border-blue-400 space-y-8"
        >
          {EXPERIENCE.map((exp, expIndex) => (
            <div key={expIndex} className="relative">
              <div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-blue-900 shadow-[0_0_10px_#1e3a8a]" />

              <div className="bg-white backdrop-blur-md p-8 rounded-2xl border border-blue-200 hover:border-blue-600/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-black flex items-center gap-2">
                      <Briefcase className="text-blue-900 w-5 h-5" />
                      {exp.role}
                    </h3>
                    <h4 className="text-2xl text-blue-900 mt-1">{exp.company}</h4>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <span className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                    <p className="text-blue-800 text-sm mt-1">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start text-xl text-blue-800">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-900 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;