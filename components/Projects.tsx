import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  // Tech badge colors mapping
  const techColors: { [key: string]: string } = {
    'React': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Tailwind': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    'JavaScript': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Node.js': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Express.js': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    'Python': 'bg-blue-600/20 text-blue-300 border-blue-600/30',
    'Machine Learning': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'HTML': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'CSS': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    'JS': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
  };

  const getTechColor = (tech: string) => techColors[tech] || 'bg-slate-500/20 text-slate-400 border-slate-500/30';

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
              className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-6 border border-slate-700 hover:border-neon-400 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-neon-500/20 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
              </div>

              {/* Tech Tags with Colors */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className={`text-sm font-semibold px-3 py-1 rounded-full border ${getTechColor(t)}`}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Features - Limited to 5 */}
              <ul className="space-y-2 mb-6 flex-grow">
                {project.features.slice(0, 5).map((feature, i) => (
                  <li key={i} className="flex items-start text-lg text-slate-300">
                    <span className="mr-2 mt-1 w-1.5 h-1.5 bg-neon-400 rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-slate-100 transition-colors font-medium"
                >
                  <Github size={18} />
                  Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-neon-400/10 hover:bg-neon-400/20 text-neon-400 hover:text-neon-300 transition-colors font-medium border border-neon-400/30"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;