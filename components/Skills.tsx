import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Code, Palette, Wrench } from 'lucide-react';

const categoryIcons: { [key: string]: React.ReactNode } = {
  'Programming': <Code className="w-6 h-6" />,
  'Frontend': <Palette className="w-6 h-6" />,
  'Tools': <Wrench className="w-6 h-6" />
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-blue-200 hover:border-blue-600/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-blue-400/10 group"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-blue-900 group-hover:scale-110 transition-transform">
                  {categoryIcons[category.title]}
                </span>
                <h3 className="text-2xl font-bold text-black group-hover:text-blue-900 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 rounded-lg text-blue-900 text-lg font-medium border border-blue-300 hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;