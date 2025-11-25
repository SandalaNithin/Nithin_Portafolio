import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center text-slate-500">
        <p>© {new Date().getFullYear()} Sandala Nithin Kumar. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, Tailwind & Framer Motion</p>
      </div>
    </footer>
  );
};

export default Footer;