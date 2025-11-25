import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-neon-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-slate-300 leading-relaxed text-lg"
          >
            <p>
              I am a passionate <strong className="text-neon-400">Web Developer Intern</strong> at Sria Infotech Pvt. Ltd with a strong foundation in Computer Science.
              Currently pursuing my B.Tech at RGMCET, I have cultivated a deep interest in building responsive, user-friendly web applications.
            </p>
            <p>
              With over 6 months of hands-on experience, I have honed my skills in the modern web stack including 
              <span className="text-slate-100 font-semibold"> React, Tailwind CSS, and JavaScript</span>. 
              I love translating design concepts into clean, production-ready code.
            </p>
            <p>
              I am eager to contribute to innovative projects and continue learning in the fast-evolving tech landscape.
            </p>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <GraduationCap className="text-neon-400" /> Education
            </h3>
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-neon-400 transition-colors shadow-lg"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-slate-100">{edu.degree}</h4>
                  <span className="text-neon-400 text-sm font-mono bg-neon-400/10 px-2 py-1 rounded">{edu.year}</span>
                </div>
                <p className="text-slate-300 mb-1">{edu.institution}</p>
                <div className="flex justify-between text-sm text-slate-400">
                  <span>{edu.location}</span>
                  <span className="font-semibold text-slate-200">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;