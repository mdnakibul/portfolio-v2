"use client";

import { useEffect, useRef, useState } from "react";
import Brand from "./Brand";

const LINKS = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

// Section order as they appear in the document (for topmost-wins tie-breaking).
const DOC_ORDER = [
  "hero",
  "services",
  "projects",
  "about",
  "skills",
  "experience",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const visibility = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const sections = DOC_ORDER.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.current[entry.target.id] = entry.isIntersecting;
        });
        // Highlight the first (topmost) section currently crossing the band.
        const current = DOC_ORDER.find((id) => visibility.current[id]);
        if (current) setActive(current);
      },
      // A thin band around the vertical middle of the viewport — whichever
      // section crosses the middle is "active".
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      id="top-nav"
      className="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-xl border-b border-white/10 shadow-sm transition-all duration-300 hover:bg-white/5"
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-4">
        <a
          href="#hero"
          className="text-headline-lg font-headline-lg hover:animate-bounce cursor-pointer spring-snappy interactive-el"
        >
          <Brand />
        </a>

        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.id ? "page" : undefined}
              className={
                active === link.id
                  ? "text-primary font-bold border-b-2 border-primary pb-1 font-label-bold text-label-bold hover:scale-105 hover:bg-white/5 transition-all duration-300 spring-snappy interactive-el"
                  : "text-on-surface-variant font-medium hover:text-primary font-label-bold text-label-bold hover:scale-105 hover:bg-white/5 transition-all duration-300 spring-snappy interactive-el"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
