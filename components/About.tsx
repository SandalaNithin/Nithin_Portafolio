import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-neon-400 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {/* Photo and About Text - Side by Side */}
          <div className="grid lg:grid-cols-2 gap-20 px-6 sm:px-6 lg:pl-0 lg:pr-8">
            {/* Photo Frame - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 flex justify-center items-start"
            >
              <div className="relative group">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>

                {/* Photo Container */}
                <div className="relative bg-slate-800/90 backdrop-blur-sm p-2 rounded-2xl border border-slate-700">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="/assets/Photo.jpg"
                      alt="Photo"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Text - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-6 text-slate-300 leading-relaxed text-xl"
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
  I enjoy solving real-world problems through clean architecture, reusable components, and performance-optimized solutions.
</p>

<p>
  I am also committed to continuous growth—whether it’s exploring new frameworks, 
  or collaborating with teams to deliver impactful digital products.  
  My goal is to become a versatile full-stack developer capable of building end-to-end applications.
</p>

            </motion.div>
          </div>

          {/* Education - Below Photo */}
          <div className="px-6 sm:px-6 lg:pl-0 lg:pr-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                <GraduationCap className="text-neon-400" /> Education
              </h3>
              <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
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
        </div>
      </div>
    </section>
  );
};

export default About;