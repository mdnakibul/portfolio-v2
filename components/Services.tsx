import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: "web",
    title: "Full-Stack Web Apps",
    blurb:
      "End-to-end MERN applications — from database design and APIs to a polished, responsive React UI. One person, whole stack.",
  },
  {
    icon: "rocket_launch",
    title: "SaaS & MVPs",
    blurb:
      "Turn an idea into a launched product. I've built and shipped a live SaaS (VetVertex), so I know how to go from zero to paying users.",
  },
  {
    icon: "api",
    title: "APIs & Backends",
    blurb:
      "Scalable, secure REST APIs and server logic with Node.js, Express, and SQL/NoSQL databases — built to grow with your traffic.",
  },
  {
    icon: "dashboard_customize",
    title: "React Frontends",
    blurb:
      "Fast, interactive, accessible interfaces with clean, maintainable component architecture and pixel-perfect execution.",
  },
];

export default function Services() {
  return (
    <section id="services" className="space-y-16">
      <Reveal className="text-center">
        <h2 className="font-display-xl text-display-xl text-gradient mb-4">
          How I Can Help
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          Whether you&apos;re hiring for a team or have a project to ship, here&apos;s
          where I add the most value — end to end, or wherever you need a hand.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service, i) => (
          <Reveal
            key={service.title}
            delay={i * 0.08}
            className="glass-panel rounded-lg p-8 tactile-card group interactive-el flex gap-5"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary-container/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-primary text-3xl">
                {service.icon}
              </span>
            </div>
            <div>
              <h3 className="font-headline-lg-mobile text-xl text-on-background mb-2">
                {service.title}
              </h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                {service.blurb}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="text-center">
        <a
          href="#contact"
          className="squishy-btn inline-flex items-center gap-2 primary-gradient text-on-primary font-label-bold text-label-bold py-4 px-8 rounded-full shadow-[0_4px_14px_0_rgba(183,109,255,0.39)] interactive-el"
        >
          Start a Conversation
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </a>
      </Reveal>
    </section>
  );
}
