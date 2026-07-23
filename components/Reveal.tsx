"use client";

import { motion, type Variants } from "framer-motion";

// The design's "springUp" keyframe, expressed as a Framer Motion variant.
const springUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
  },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Render as a different element (defaults to div). */
  as?: "div" | "section" | "h2" | "h3";
};

/**
 * Reveals its children with a spring "overshoot" the first time they scroll
 * into view.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={springUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
