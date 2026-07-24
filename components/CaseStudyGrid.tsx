import Link from "next/link";
import CaseStudyCard from "./CaseStudyCard";
import { CASE_STUDIES } from "@/lib/caseStudies";

const FEATURED = 4;

export default function CaseStudyGrid() {
  const featured = CASE_STUDIES.slice(0, FEATURED);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((cs, i) => (
          <CaseStudyCard key={cs.title} cs={cs} index={i} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/work"
          className="squishy-btn inline-flex items-center gap-2 bg-surface-container-high hover:bg-surface-bright border border-white/10 text-on-surface font-label-bold text-label-bold py-3 px-7 rounded-full transition-colors interactive-el"
        >
          View all projects
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </Link>
      </div>
    </>
  );
}
