"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

type Experience = {
  period: string;
  current?: boolean;
  company: string;
  companyClass: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  /** Which side the text card sits on (desktop). */
  cardSide: "left" | "right";
  dot: { size: string; color: string; glow: string; outerGlow: string };
};

const EXPERIENCES: Experience[] = [
  {
    period: "2022 - Present",
    current: true,
    company: "TechNova",
    companyClass:
      "text-on-surface-variant bg-surface-container/50",
    title: "Senior Full-Stack Developer",
    description:
      "Leading a cross-functional team to engineer robust, high-availability SaaS platforms. Architected scalable microservices using Node.js and delivered seamless, highly interactive user experiences with modern React. Driven significant performance improvements across the stack.",
    tags: ["React", "Node.js", "System Design"],
    image: "/images/exp-1.jpg",
    imageAlt:
      "Abstract dark tech environment with glowing purple geometric data structures.",
    cardSide: "left",
    dot: {
      size: "w-4 h-4",
      color: "bg-primary",
      glow: "shadow-[0_0_10px_#ddb7ff]",
      outerGlow: "shadow-[0_0_20px_rgba(221,183,255,0.3)]",
    },
  },
  {
    period: "2020 - 2022",
    company: "WebFlow Studios",
    companyClass: "text-primary bg-primary/10",
    title: "MERN Developer",
    description:
      "Specialized in translating complex design prototypes into pixel-perfect, highly interactive React applications. Championed MongoDB schema optimizations that reduced query times by 40%. Collaborated closely with design teams to ensure tactile UI/UX implementations.",
    tags: ["MongoDB", "UI/UX", "Express"],
    image: "/images/exp-2.jpg",
    imageAlt:
      "Macro 3D render of a stylized database cluster with glowing cyan and purple energy flows.",
    cardSide: "right",
    dot: {
      size: "w-3 h-3",
      color: "bg-surface-variant",
      glow: "",
      outerGlow: "shadow-[0_0_20px_rgba(221,183,255,0.1)]",
    },
  },
  {
    period: "2018 - 2020",
    company: "StartUp Inc",
    companyClass: "text-on-surface bg-surface-container-highest",
    title: "Junior Developer",
    description:
      "Cut my teeth building responsive web applications from the ground up. Developed and maintained RESTful APIs, integrated third-party services, and ensured cross-browser compatibility. Laid the foundational knowledge for scalable web architecture.",
    tags: ["REST APIs", "JavaScript", "HTML/CSS"],
    cardSide: "left",
    dot: {
      size: "w-2 h-2",
      color: "bg-outline",
      glow: "",
      outerGlow: "shadow-[0_0_20px_rgba(221,183,255,0.05)]",
    },
  },
];

const nodeVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] },
  },
};

function Card({ exp }: { exp: Experience }) {
  return (
    <div className="glass-panel rounded-xl p-8 tilt-card w-full cursor-default interactive-el">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="px-3 py-1 bg-surface-container-high rounded-full text-primary font-label-bold text-xs tracking-widest border border-primary/20 flex items-center gap-2">
          {exp.current && (
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          )}
          {exp.period}
        </span>
        <span
          className={`font-label-bold text-sm px-3 py-1 rounded-full ${exp.companyClass}`}
        >
          {exp.company}
        </span>
      </div>
      <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:text-3xl text-on-surface mb-4">
        {exp.title}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {exp.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-label-bold text-on-surface"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ImageBox({
  exp,
  align,
}: {
  exp: Experience;
  align?: "right";
}) {
  if (!exp.image) return null;
  return (
    <div
      role="img"
      aria-label={exp.imageAlt}
      className={`w-full h-48 rounded-xl bg-cover bg-center glass-panel opacity-40 hover:opacity-100 transition-opacity duration-500 filter grayscale hover:grayscale-0 ${
        align === "right" ? "ml-auto" : ""
      }`}
      style={{ backgroundImage: `url('${exp.image}')` }}
    />
  );
}

function Dot({ exp }: { exp: Experience }) {
  return (
    <div
      className={`timeline-dot absolute left-[24px] md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border-4 border-background ${exp.dot.outerGlow} z-20 top-0 md:top-auto`}
    >
      <div
        className={`${exp.dot.size} rounded-full ${exp.dot.color} ${exp.dot.glow}`}
      />
    </div>
  );
}

function TimelineRow({ exp }: { exp: Experience }) {
  return (
    <motion.div
      variants={nodeVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="flex flex-col md:flex-row items-center justify-between w-full relative"
    >
      {exp.cardSide === "left" ? (
        <>
          <div className="w-full md:w-[45%] flex justify-end pr-0 md:pr-12 pl-16 md:pl-0 order-2 md:order-1 mt-6 md:mt-0">
            <Card exp={exp} />
          </div>
          <Dot exp={exp} />
          <div className="w-full md:w-[45%] order-3 hidden md:block">
            <ImageBox exp={exp} />
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-[45%] order-3 md:order-1 hidden md:block pl-0 md:pl-12">
            <ImageBox exp={exp} align="right" />
          </div>
          <Dot exp={exp} />
          <div className="w-full md:w-[45%] flex justify-start pl-16 md:pl-12 order-2 md:order-3 mt-6 md:mt-0">
            <Card exp={exp} />
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Draw the central line as the section scrolls through the viewport.
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <section id="experience" className="relative">
      {/* Header */}
      <header className="max-w-container-max mx-auto mb-24 text-center md:text-left relative">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <h2 className="font-display-xl text-display-xl text-primary mb-6 drop-shadow-[0_0_15px_rgba(221,183,255,0.3)]">
          Professional Journey
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl text-lg">
          Tracing the evolution from building responsive interfaces to
          architecting scalable MERN stack solutions. A timeline of technical
          growth and impactful delivery.
        </p>
      </header>

      {/* Timeline */}
      <div ref={sectionRef} className="max-w-container-max mx-auto relative mt-16 pb-16">
        {/* Central line (desktop centered, mobile at 24px) */}
        <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 md:-translate-x-1/2 w-1 rounded-full overflow-hidden bg-primary/10 z-0">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full rounded-full bg-gradient-to-b from-primary to-primary/50"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-16 md:gap-32">
          {EXPERIENCES.map((exp) => (
            <TimelineRow key={exp.title} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
