"use client";

const LINKS = [
  { label: "Projects", href: "#projects", active: true },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      id="top-nav"
      className="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-xl border-b border-white/10 shadow-sm transition-all duration-300 hover:bg-white/5"
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-4">
        <a
          href="#"
          className="text-headline-lg font-headline-lg text-primary hover:animate-bounce cursor-pointer spring-snappy interactive-el"
        >
          MERN.DEV
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? "text-primary font-bold border-b-2 border-primary pb-1 font-label-bold text-label-bold hover:scale-105 hover:bg-white/5 transition-all duration-300 spring-snappy interactive-el"
                  : "text-on-surface-variant font-medium hover:text-primary font-label-bold text-label-bold hover:scale-105 hover:bg-white/5 transition-all duration-300 spring-snappy interactive-el"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <button
            aria-label="Toggle Dark Mode"
            className="text-primary hover:scale-105 hover:bg-white/5 p-2 rounded-full transition-all duration-300 spring-snappy interactive-el"
          >
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
