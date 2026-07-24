"use client";

import { motion, type Variants } from "framer-motion";
import Typewriter from "./Typewriter";
import TiltLink from "./TiltLink";
import { PROFILE, SPECIALTIES, STATS } from "@/lib/profile";

const SPRING = [0.175, 0.885, 0.32, 1.275] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const revealUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: SPRING } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex-grow flex flex-col items-center justify-center relative z-10 pt-32 pb-24 px-gutter min-h-screen"
    >
      <div className="max-w-container-max mx-auto w-full flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-surface-container-low/40 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-14 max-w-4xl shadow-2xl"
        >
          {/* Dual-track availability */}
          <motion.div variants={revealUp} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-white/5">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_#4ae176]" />
              <span className="font-label-bold text-label-bold text-tertiary uppercase tracking-wider">
                Available for full-time &amp; freelance
              </span>
            </span>
          </motion.div>

          {/* Name + role */}
          <motion.p
            variants={revealUp}
            className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface-variant mb-4"
          >
            {PROFILE.name} · {PROFILE.role}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={revealUp}
            className="font-display-xl text-display-xl text-on-surface mb-6"
          >
            I build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">
              production-grade
            </span>{" "}
            web apps &amp; SaaS.
          </motion.h1>

          {/* Rotating specialties */}
          <motion.div
            variants={revealUp}
            className="mb-6 h-7 flex justify-center items-center"
          >
            <span className="text-primary font-label-bold text-label-bold tracking-wider flex items-center gap-2">
              <span className="text-on-surface-variant">&gt;</span>
              <Typewriter phrases={SPECIALTIES} />
            </span>
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={revealUp}
            className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-10"
          >
            {PROFILE.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={revealUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <TiltLink
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-bold text-label-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(221,183,255,0.3)] interactive-el tilt-btn"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                View My Work
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

          {/* CV download */}
          <motion.div variants={revealUp}>
            <a
              href={PROFILE.cvUrl}
              download
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-bold text-label-bold interactive-el"
            >
              <span className="material-symbols-outlined text-[18px]">
                download
              </span>
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          animate="show"
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel rounded-lg py-5 px-3 text-center"
            >
              <div className="font-display-xl text-2xl md:text-3xl text-primary">
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-on-surface-variant mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
