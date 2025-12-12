import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sandala Nithin Kumar. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-neon-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-neon-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Built With */}
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" /> using React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;