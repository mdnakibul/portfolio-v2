import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import CaseStudyCard from "@/components/CaseStudyCard";
import { CASE_STUDIES } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A full list of projects Md Nakibul Hosen Nahid has built across e-commerce, SaaS, ed-tech, health, fintech and more — as a MERN / full-stack developer.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <CustomCursor />

      {/* Subtle ambient background (lighter than the home page's WebGL) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-tertiary/10 rounded-full blur-[110px]" />
      </div>

      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        {/* Header */}
        <header className="mb-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-label-bold text-label-bold mb-8 interactive-el"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
            Back to portfolio
          </Link>

          <h1 className="font-display-xl text-display-xl text-on-surface mb-6 drop-shadow-[0_0_15px_rgba(221,183,255,0.3)]">
            All Work
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            {CASE_STUDIES.length} projects across e-commerce, SaaS, ed-tech,
            health, fintech and more. These are company and client engagements —
            technical specifics are generalized to respect confidentiality, so
            they focus on the role, architecture, and outcomes.
          </p>
        </header>

        {/* Full grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <CaseStudyCard key={cs.title} cs={cs} index={i} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
