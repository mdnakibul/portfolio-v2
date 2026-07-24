import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import CaseStudyGrid from "./CaseStudyGrid";

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
  // Add a screenshot at /public/images/ and set the path here (e.g.
  // "/images/vetvertex.png"). Leave "" to show the gradient placeholder.
  image: "/images/vetvertex.png",
  imageAlt:
    "VetVertex — appointment and patient management dashboard for veterinary clinics.",
};

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
          {/* Cover — shows a screenshot when PERSONAL.image is set, else a
              gradient placeholder. Drop an image in /public/images/. */}
          <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
            {PERSONAL.image ? (
              <>
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img
                  src={PERSONAL.image}
                  alt={PERSONAL.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  style={{ objectFit: "fill" }}
                />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center primary-gradient">
                <span className="material-symbols-outlined text-white/90 text-[80px] group-hover:scale-110 transition-transform duration-500">
                  code_blocks
                </span>
              </div>
            )}
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

      <CaseStudyGrid />
    </section>
  );
}
