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
    period: "Mar 2023 - Present",
    current: true,
    company: "Alpha OBS LLP",
    companyClass: "text-primary bg-primary/10",
    title: "MERN Stack Developer",
    description:
      "Promoted to build and own full-stack features across the MERN stack — designing MongoDB data models, Express and Node.js APIs, and dynamic React front-ends for production web applications.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
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
    period: "Oct 2021 - Mar 2023",
    company: "Alpha OBS LLP",
    companyClass: "text-on-surface-variant bg-surface-container/50",
    title: "React JS Developer",
    description:
      "Developed dynamic, component-driven user interfaces in React, turning designs into responsive, high-performance web applications and reusable UI components.",
    tags: ["React", "JavaScript", "REST APIs"],
    image: "/images/exp-2.jpg",
    imageAlt:
      "Macro 3D render of a stylized database cluster with glowing cyan and purple energy flows.",
    cardSide: "right",
    dot: {
      size: "w-3 h-3",
      color: "bg-surface-variant",
      glow: "",
      outerGlow: "shadow-[0_0_20px_rgba(221,183,255,0.15)]",
    },
  },
  {
    period: "Sep 2020 - Oct 2021",
    company: "leadsbee.org",
    companyClass: "text-on-surface-variant bg-surface-container/50",
    title: "Web Developer (Contract)",
    description:
      "Built and maintained responsive client websites and custom WordPress solutions, and began crafting interactive front-ends with React.",
    tags: ["React", "JavaScript", "WordPress"],
    cardSide: "left",
    dot: {
      size: "w-3 h-3",
      color: "bg-surface-variant",
      glow: "",
      outerGlow: "shadow-[0_0_20px_rgba(221,183,255,0.1)]",
    },
  },
  {
    period: "Jan 2020 - Sep 2020",
    company: "Freelance",
    companyClass: "text-on-surface bg-surface-container-highest",
    title: "Freelance Developer",
    description:
      "Started my journey building responsive marketing sites and WordPress themes for clients using HTML, CSS, JavaScript, and Bootstrap.",
    tags: ["HTML/CSS", "JavaScript", "Bootstrap", "WordPress"],
    cardSide: "right",
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
