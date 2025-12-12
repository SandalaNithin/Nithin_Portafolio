import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-neon-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-6 border border-slate-700 hover:border-neon-400 transition-all hover:shadow-lg hover:shadow-neon-500/10 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-neon-400 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-neon-400 bg-neon-400/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 mb-6 flex-grow">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-lg text-slate-300">
                    <span className="mr-2 mt-1 w-1 h-1 bg-slate-500 rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-slate-700/50 hover:bg-neon-400/20 text-slate-300 hover:text-neon-400 transition-colors font-medium"
              >
                View Code <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;