import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center text-center space-y-12"
    >
      <Reveal delay={0.1}>
        <h2 className="font-display-xl text-display-xl text-gradient mb-4">
          Who I Am
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          Translating complex logic into fluid, tactile digital experiences.
        </p>
      </Reveal>

      <Reveal
        delay={0.2}
        className="glass-panel rounded-xl w-full max-w-4xl p-8 md:p-12 text-left flex flex-col md:flex-row gap-8 items-center"
      >
        <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 border-2 border-primary/30 shadow-[0_0_30px_rgba(221,183,255,0.2)]">
          {/* Swap this for your own photo — /public/images/portrait.jpg */}
          <img
            src="/images/portrait.jpg"
            alt="Portrait of the developer at a softly lit, dark-themed studio workspace."
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="font-headline-lg text-headline-lg text-on-background">
            Hello.
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            I build full-stack applications with a focus on deep engineering and
            delightful user interfaces. My approach bridges the gap between raw
            data and human interaction, utilizing the MERN stack to deliver
            robust, scalable platforms that feel alive to the touch.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-white/5 font-label-bold text-label-bold text-tertiary">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              Available for work
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-white/5 font-label-bold text-label-bold text-on-surface">
              <span className="material-symbols-outlined text-[18px]">
                location_on
              </span>
              Remote Global
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
