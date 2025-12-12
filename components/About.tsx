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
                {/* Gradient Border Effect - More Subtle */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500 group-hover:duration-200"></div>

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
            <div className="lg:col-span-1 pl-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 text-slate-300 leading-relaxed text-xl"
              >
                <p>
                  I'm passionate about <strong className="text-neon-400">Web Development</strong> with 6+ months of hands-on experience building responsive, user-friendly web applications. Currently working as a Web Development Intern at <strong className="text-slate-100">Sria Infotech Pvt. Ltd</strong>, where I collaborate with cross-functional teams to deliver production-ready solutions.
                </p>

                <p>
                  I specialize in modern web technologies and love transforming design concepts into clean, maintainable code.
                </p>

                {/* Key Highlights */}
                <div className="space-y-3 mt-6">
                  <h3 className="text-xl font-semibold text-neon-400 mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-lg">
                      <span className="mr-3 mt-1.5 w-2 h-2 bg-neon-400 rounded-full flex-shrink-0"></span>
                      <span>Proficient in <strong className="text-slate-100">React.js, Tailwind CSS, JavaScript, Python</strong></span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="mr-3 mt-1.5 w-2 h-2 bg-neon-400 rounded-full flex-shrink-0"></span>
                      <span>Experienced in building scalable, component-based architectures</span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="mr-3 mt-1.5 w-2 h-2 bg-neon-400 rounded-full flex-shrink-0"></span>
                      <span>I enjoy solving real-world problems through clean architecture, reusable components, and performance-optimized solutions.</span>
                    </li>
                    <li className="flex items-start text-lg">
                      <span className="mr-3 mt-1.5 w-2 h-2 bg-neon-400 rounded-full flex-shrink-0"></span>
                      <span>Committed to continuous learning and exploring new frameworks   or collaborating with teams to deliver impactful digital products.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
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
                    className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 border-b-2 border-b-slate-600/30 hover:border-neon-400 transition-colors shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-slate-100">{edu.degree}</h4>
                      <span className="text-neon-400 text-sm font-mono bg-neon-400/10 px-2 py-1 rounded">{edu.year}</span>
                    </div>
                    <p className="text-slate-300 mb-3">{edu.institution}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">{edu.location}</span>
                      <span className="font-semibold text-slate-200 bg-slate-700/50 px-3 py-1 rounded">{edu.grade}</span>
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