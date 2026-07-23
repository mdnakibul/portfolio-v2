import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const FEATURED = {
  title: "E-commerce Scale-up",
  description:
    "Architected a highly scalable MERN stack solution to handle 10x traffic spikes during holiday sales. Focused heavily on MongoDB indexing strategies and resilient Stripe webhook integration for flawless checkout flows.",
  tags: ["MongoDB", "Express", "React", "Node.js", "Stripe API"],
  image: "/images/cs-1.jpg",
  imageAlt:
    "Futuristic e-commerce analytics dashboard with neon purple and cyan graphs.",
};

const SECONDARY = [
  {
    title: "Real-time Analytics Engine",
    description:
      "Engineered a low-latency dashboard using Socket.io and React to process and visualize thousands of concurrent events per second without dropping frames.",
    image: "/images/cs-2.jpg",
    imageAlt:
      "Dark-themed real-time analytics interface with glowing neon charts and data streams.",
    icon: "insights",
    overlay: "bg-secondary-container/20",
  },
  {
    title: "DevOps Automation Suite",
    description:
      "Streamlined deployment pipelines across 15 microservices using Node.js scripting, Docker, and GitHub Actions, reducing deployment time by 70%.",
    image: "/images/cs-3.jpg",
    imageAlt:
      "Conceptual DevOps pipeline with glowing interconnected nodes in purple and green.",
    icon: "terminal",
    overlay: "bg-tertiary-container/20",
  },
];

export default function CaseStudies() {
  return (
    <section id="projects">
      {/* Header */}
      <Reveal className="text-center mb-16">
        <h2 className="font-display-xl text-display-xl text-on-surface mb-6 drop-shadow-[0_0_15px_rgba(221,183,255,0.3)]">
          Deep Dives
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          A closer look at the architecture, challenges, and solutions behind my
          most impactful work.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter">
        {/* Featured case study */}
        <Reveal className="col-span-1 md:col-span-12">
          <TiltCard className="glass-card rounded-xl overflow-hidden flex flex-col md:flex-row group interactive-el transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(183,109,255,0.2)]">
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <img
                src={FEATURED.image}
                alt={FEATURED.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#4ae176]" />
                <span className="font-label-bold text-label-bold text-tertiary tracking-wider uppercase">
                  Live
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg md:text-headline-lg-mobile text-on-surface mb-4">
                {FEATURED.title}
              </h3>
              <p className="text-on-surface-variant font-body-md text-body-md mb-6 leading-relaxed">
                {FEATURED.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {FEATURED.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-bold text-[12px] border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="squishy-btn primary-gradient text-on-primary font-label-bold text-label-bold py-3 px-6 rounded-full self-start flex items-center gap-2 shadow-[0_4px_14px_0_rgba(183,109,255,0.39)] interactive-el"
              >
                Read Full Case Study
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </TiltCard>
        </Reveal>

        {/* Secondary case studies */}
        {SECONDARY.map((cs, i) => (
          <Reveal
            key={cs.title}
            delay={0.15 + i * 0.15}
            className="col-span-1 md:col-span-6"
          >
            <TiltCard className="glass-card rounded-xl overflow-hidden flex flex-col h-full group interactive-el transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(183,109,255,0.2)]">
              <div className="h-48 relative overflow-hidden">
                <div
                  className={`absolute inset-0 ${cs.overlay} mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500`}
                />
                <img
                  src={cs.image}
                  alt={cs.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-4">
                  {cs.title}
                </h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-6 leading-relaxed flex-grow">
                  {cs.description}
                </p>
                <button
                  type="button"
                  className="squishy-btn bg-surface-container-high hover:bg-surface-bright border border-white/10 text-on-surface font-label-bold text-label-bold py-3 px-6 rounded-full self-start flex items-center gap-2 transition-colors interactive-el"
                >
                  View Details
                  <span className="material-symbols-outlined text-[18px]">
                    {cs.icon}
                  </span>
                </button>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
