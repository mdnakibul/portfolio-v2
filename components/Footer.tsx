import Brand from "./Brand";

const SOCIALS = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Email", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full rounded-t-lg bg-surface-container-lowest border-t border-surface-container-low mt-24 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter py-12 gap-8 max-w-container-max mx-auto">
        <div className="font-headline-lg text-headline-lg">
          <Brand />
        </div>
        <div className="flex gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-on-surface-variant hover:text-primary transition-all font-label-bold text-label-bold hover:rotate-12 hover:scale-110 duration-300 interactive-el"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="font-body-md text-body-md text-tertiary">
          © 2026 Nakibul Hosen. Built with tactile precision.
        </div>
      </div>
    </footer>
  );
}
