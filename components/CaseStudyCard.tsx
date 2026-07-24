import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import type { CaseStudy } from "@/lib/caseStudies";

// Domain-themed gradient covers per accent.
const ACCENT: Record<string, string> = {
  primary: "bg-gradient-to-br from-primary-container to-inverse-primary",
  secondary: "bg-gradient-to-br from-secondary to-secondary-container",
  tertiary: "bg-gradient-to-br from-tertiary to-tertiary-container",
};

export default function CaseStudyCard({
  cs,
  index = 0,
}: {
  cs: CaseStudy;
  index?: number;
}) {
  return (
    <Reveal delay={(index % 4) * 0.08} className="h-full">
      <TiltCard className="glass-card rounded-xl overflow-hidden flex flex-col h-full group interactive-el transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(183,109,255,0.2)]">
        {/* Themed cover */}
        <div
          className={`h-40 relative overflow-hidden flex items-center justify-center ${ACCENT[cs.accent]}`}
        >
          <span className="material-symbols-outlined text-white/90 text-[64px] group-hover:scale-110 transition-transform duration-500">
            {cs.icon}
          </span>
          {cs.highlight && (
            <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_8px_#4ae176]" />
              <span className="font-label-bold text-[10px] text-tertiary tracking-wider uppercase">
                {cs.highlight}
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-grow">
          <span className="text-primary font-label-bold text-[11px] uppercase tracking-wider mb-2">
            {cs.role}
          </span>
          <h3 className="font-headline-lg-mobile text-xl text-on-surface mb-3">
            {cs.title}
          </h3>
          <p className="text-on-surface-variant font-body-md text-sm mb-4 leading-relaxed flex-grow">
            {cs.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-label-bold text-on-surface"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
}
