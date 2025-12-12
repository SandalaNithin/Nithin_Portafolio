import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-neon-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-neon-400 group cursor-pointer flex flex-col items-center text-center transition-colors"
            >
              <div className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-neon-400/20 transition-colors">
                <Award className="text-slate-300 group-hover:text-neon-400 transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">{cert.title}</h3>
              <span className="text-base text-neon-400 flex items-center gap-1 mt-auto">
                View Certificate <ExternalLink size={12} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;