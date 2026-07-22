"use client";

import { motion, type Variants } from "framer-motion";
import Typewriter from "./Typewriter";
import TiltLink from "./TiltLink";

const SPRING = [0.175, 0.885, 0.32, 1.275] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const revealUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: SPRING },
  },
};

export default function Hero() {
  return (
    <main className="flex-grow flex items-center justify-center relative z-10 pt-32 pb-24 px-gutter min-h-screen">
      <div className="max-w-container-max mx-auto w-full flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-surface-container-low/40 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-16 max-w-4xl shadow-2xl"
        >
          {/* Tagline (typewriter) */}
          <motion.div
            variants={revealUp}
            className="mb-6 h-8 flex justify-center items-center"
          >
            <span className="text-tertiary font-label-bold text-label-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_#4ae176]" />
              <Typewriter />
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={revealUp}
            className="font-display-xl text-display-xl text-on-surface mb-8"
          >
            I build high-energy <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">
              digital experiences.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={revealUp}
            className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-12"
          >
            Full-stack MERN engineering focused on tactile interfaces, scalable
            architecture, and pixel-perfect execution. Bridging the gap between
            robust backend systems and delightful user interactions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={revealUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <TiltLink
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-bold text-label-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(221,183,255,0.3)] interactive-el tilt-btn"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </span>
            </TiltLink>

            <TiltLink
              href="#contact"
              className="px-8 py-4 bg-surface-container-high/50 backdrop-blur-sm border border-outline/30 text-on-surface font-label-bold text-label-bold rounded-full hover:bg-surface-container-highest interactive-el tilt-btn"
            >
              Get in Touch
            </TiltLink>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          animate="show"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
        >
          <span className="font-label-bold text-[10px] uppercase tracking-widest text-on-surface-variant">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </motion.div>
      </div>
    </main>
  );
}
