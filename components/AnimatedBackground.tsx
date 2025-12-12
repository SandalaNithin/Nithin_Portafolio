import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-900">
            {/* Animated Gradient Orbs */}
            <motion.div
                className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-full filter blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyan-900/20 to-slate-800/25 rounded-full filter blur-3xl"
                animate={{
                    x: [0, -80, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <motion.div
                className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-slate-700/25 to-slate-800/30 rounded-full filter blur-3xl"
                animate={{
                    x: [0, -50, 0],
                    y: [0, -80, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            <motion.div
                className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-neon-900/15 to-cyan-900/15 rounded-full filter blur-3xl"
                animate={{
                    x: [0, 60, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                }}
            />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            {/* Noise Texture for depth */}
            <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
                <svg className="w-full h-full">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>
        </div>
    );
};

export default AnimatedBackground;
