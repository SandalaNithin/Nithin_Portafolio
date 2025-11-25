import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-neon-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l-2 border-slate-700 space-y-8"
        >
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-400 shadow-[0_0_10px_#22d3ee]" />
          
          <div className="bg-slate-800/30 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-neon-400/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                  <Briefcase className="text-neon-400 w-5 h-5" />
                  {EXPERIENCE.role}
                </h3>
                <h4 className="text-xl text-neon-400 mt-1">{EXPERIENCE.company}</h4>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <span className="inline-block bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm font-medium">
                  {EXPERIENCE.period}
                </span>
                <p className="text-slate-500 text-sm mt-1">{EXPERIENCE.location}</p>
              </div>
            </div>

            <ul className="space-y-3">
              {EXPERIENCE.description.map((item, index) => (
                <li key={index} className="flex items-start text-slate-300">
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-neon-400 rounded-full flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;