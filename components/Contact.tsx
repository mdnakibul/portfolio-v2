import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      {/* Ambient background blobs, scoped to the section */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-tertiary/10 rounded-full blur-[100px] animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: headline + socials */}
        <Reveal className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-white/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span className="font-label-bold text-label-bold text-tertiary uppercase tracking-wider">
              Available for work
            </span>
          </div>
          <h2 className="font-display-xl text-display-xl md:text-[80px] leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-surface-tint to-secondary">
            Let&apos;s
            <br />
            Connect
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-12 max-w-md">
            Have a project in mind, a technical challenge to solve, or just want
            to chat about the MERN stack? Drop me a message.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              aria-label="GitHub"
              className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-white/5 text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:rotate-12 interactive-el"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-white/5 text-on-surface-variant hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 hover:-translate-y-1 hover:-rotate-12 interactive-el"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Email"
              className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-white/5 text-on-surface-variant hover:text-tertiary hover:border-tertiary/50 hover:bg-tertiary/10 transition-all duration-300 hover:-translate-y-1 hover:rotate-12 interactive-el"
            >
              <span className="material-symbols-outlined text-2xl">mail</span>
            </a>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.2} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
