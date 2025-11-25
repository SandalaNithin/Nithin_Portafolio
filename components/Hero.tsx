import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Web Development Enthusiast";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        // Simple loop or stop
        index = fullText.length;
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-neon-400 font-medium mb-4">Hello World, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
            {PERSONAL_INFO.name}
          </h1>
          
          <div className="h-12 text-2xl md:text-4xl text-slate-400 font-light mb-8">
            <span className="border-r-2 border-neon-400 pr-1 animate-pulse">
              {text}
            </span>
          </div>

          <p className="text-slate-400 text-lg mb-8 flex items-center justify-center gap-2">
            <span>📍</span> {PERSONAL_INFO.location}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-400 to-blue-600 text-slate-900 font-bold shadow-lg shadow-neon-500/25 flex items-center gap-2"
            >
              View Projects <ChevronRight size={20} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Sandala_Nithin_Kumar_Resume.pdf" 
              download="Sandala_Nithin_Kumar_Resume.pdf"
              className="px-8 py-3 rounded-full border border-neon-400 text-neon-400 font-bold hover:bg-neon-400/10 transition-colors flex items-center gap-2"
            >
              Download Resume <Download size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;