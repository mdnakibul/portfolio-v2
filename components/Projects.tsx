import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

// ─────────────────────────────────────────────────────────────────────────
// Personal project — fully owned, open work. REPLACE the placeholder values
// below with your real project (name, description, stack, and links).
// ─────────────────────────────────────────────────────────────────────────
const PERSONAL = {
  title: "VetVertex",
  description:
    "A full-stack web application for veterinary clinics to manage appointments, patient records, and billing. Built from scratch to production with a focus on responsive design and user-friendly interfaces. Serving veterinarians and vet clinics in production since June 2026.",
  tags: ["React", "Node.js", "MySQL", "Express"],
  liveUrl: "https://vetvertex.com",
  liveLabel: "Visit Site",
  // Commercial product — source is kept private (no public repo).
  repoUrl: "",
};

// Professional / company work. Specifics are intentionally generalized to
// respect confidentiality — that's why these have no public repo links.
const CASE_STUDIES = [
  {
    title: "E-commerce Scale-up",
    live: true,
    description:
      "Architected a highly scalable MERN stack solution to handle 10x traffic spikes during holiday sales. Focused heavily on MongoDB indexing strategies and resilient Stripe webhook integration for flawless checkout flows.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Stripe API"],
    image: "/images/cs-1.jpg",
    imageAlt:
      "Futuristic e-commerce analytics dashboard with neon purple and cyan graphs.",
    overlay: "bg-primary/20",
  },
  {
    title: "Real-time Analytics Engine",
    description:
      "Engineered a low-latency dashboard using Socket.io and React to process and visualize thousands of concurrent events per second without dropping frames.",
    tags: ["Socket.io", "React", "Node.js"],
    image: "/images/cs-2.jpg",
    imageAlt:
      "Dark-themed real-time analytics interface with glowing neon charts and data streams.",
    overlay: "bg-secondary-container/20",
  },
  {
    title: "DevOps Automation Suite",
    description:
      "Streamlined deployment pipelines across 15 microservices using Node.js scripting, Docker, and GitHub Actions, reducing deployment time by 70%.",
    tags: ["Docker", "GitHub Actions", "Node.js"],
    image: "/images/cs-3.jpg",
    imageAlt:
      "Conceptual DevOps pipeline with glowing interconnected nodes in purple and green.",
    overlay: "bg-tertiary-container/20",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-bold text-[12px] border border-white/5">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      {/* Section header */}
      <Reveal className="text-center mb-16">
        <h2 className="font-display-xl text-display-xl text-on-surface mb-6 drop-shadow-[0_0_15px_rgba(221,183,255,0.3)]">
          Selected Work
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          A mix of what I&apos;ve built on my own and the professional work
          I&apos;ve shipped with teams.
        </p>
      </Reveal>

      {/* ── Band 1: Personal Projects ── */}
      <Reveal className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="material-symbols-outlined text-primary">
            rocket_launch
          </span>
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Personal Projects
          </h3>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Designed and built end-to-end — from first commit to production.
        </p>
      </Reveal>

      <Reveal className="mb-24">
        <TiltCard className="glass-card rounded-xl overflow-hidden flex flex-col md:flex-row group interactive-el transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(183,109,255,0.2)]">
          {/* Cover — replace with a real screenshot at /public/images/ */}
          <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden flex items-center justify-center primary-gradient">
            <span className="material-symbols-outlined text-white/90 text-[80px] group-hover:scale-110 transition-transform duration-500">
              code_blocks
            </span>
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#4ae176]" />
              <span className="font-label-bold text-label-bold text-tertiary tracking-wider uppercase">
                Personal
              </span>
            </div>
            <h4 className="font-headline-lg text-headline-lg md:text-headline-lg-mobile text-on-surface mb-4">
              {PERSONAL.title}
            </h4>
            <p className="text-on-surface-variant font-body-md text-body-md mb-6 leading-relaxed">
              {PERSONAL.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {PERSONAL.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {PERSONAL.liveUrl && (
                <a
                  href={PERSONAL.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="squishy-btn primary-gradient text-on-primary font-label-bold text-label-bold py-3 px-6 rounded-full flex items-center gap-2 shadow-[0_4px_14px_0_rgba(183,109,255,0.39)] interactive-el"
                >
                  {PERSONAL.liveLabel}
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_outward
                  </span>
                </a>
              )}
              {PERSONAL.repoUrl ? (
                <a
                  href={PERSONAL.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="squishy-btn bg-surface-container-high hover:bg-surface-bright border border-white/10 text-on-surface font-label-bold text-label-bold py-3 px-6 rounded-full flex items-center gap-2 transition-colors interactive-el"
                >
                  GitHub
                  <span className="material-symbols-outlined text-[18px]">
                    code
                  </span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-on-surface-variant font-label-bold text-[11px] uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">
                    lock
                  </span>
                  Source private
                </span>
              )}
            </div>
          </div>
        </TiltCard>
      </Reveal>

      {/* ── Band 2: Case Studies ── */}
      <Reveal className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="material-symbols-outlined text-primary">work</span>
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Case Studies
          </h3>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high border border-white/10 font-label-bold text-[11px] uppercase tracking-wider text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            Professional · NDA
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Impact from company and client work. Technical specifics are
          generalized to respect confidentiality, so these focus on the
          architecture and outcomes rather than proprietary detail.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CASE_STUDIES.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 0.12} className="h-full">
            <TiltCard className="glass-card rounded-xl overflow-hidden flex flex-col h-full group interactive-el transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(183,109,255,0.2)]">
              <div className="h-44 relative overflow-hidden">
                <div
                  className={`absolute inset-0 ${cs.overlay} mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500`}
                />
                <img
                  src={cs.image}
                  alt={cs.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {cs.live && (
                  <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_8px_#4ae176]" />
                    <span className="font-label-bold text-[10px] text-tertiary tracking-wider uppercase">
                      Live
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-headline-lg-mobile text-xl text-on-surface mb-3">
                  {cs.title}
                </h4>
                <p className="text-on-surface-variant font-body-md text-sm mb-4 leading-relaxed flex-grow">
                  {cs.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-label-bold text-on-surface"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant pt-2 border-t border-white/5">
                  <span className="material-symbols-outlined text-[16px]">
                    lock
                  </span>
                  <span className="font-label-bold text-[11px] uppercase tracking-wider">
                    Confidential engagement
                  </span>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
