import Reveal from "./Reveal";

const SKILLS = [
  {
    name: "MongoDB",
    icon: "database",
    blurb:
      "Flexible schema design and robust data aggregation for dynamic architectures.",
  },
  {
    name: "Express.js",
    icon: "code_blocks",
    blurb:
      "Streamlined routing and middleware management for high-performance APIs.",
  },
  {
    name: "React",
    icon: "view_quilt",
    blurb:
      "Component-driven UI development with complex state management and kinetic feedback.",
  },
  {
    name: "Node.js",
    icon: "dns",
    blurb:
      "Event-driven backend execution for real-time, scalable network applications.",
  },
  {
    name: "MySQL",
    icon: "table_chart",
    blurb:
      "Relational schema design, complex joins, and query optimization for transactional integrity.",
  },
  {
    name: "GraphQL",
    icon: "hub",
    blurb:
      "Typed schemas and precise, over-fetch-free data loading for efficient client-server contracts.",
  },
  {
    name: "Next.js",
    icon: "web",
    blurb:
      "Server-side rendering, the App Router, and edge-ready React for fast, SEO-friendly experiences.",
  },
  {
    name: "Linux",
    icon: "terminal",
    blurb:
      "At home on the command line — server administration, shell scripting, and deployment workflows.",
  },
  {
    name: "AWS",
    icon: "cloud",
    blurb:
      "Cloud infrastructure and deployment — EC2, S3, and scalable hosting for production workloads.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-16">
      <Reveal delay={0.1} className="text-center">
        <h2 className="font-display-xl text-display-xl text-gradient mb-4">
          Technical Arsenal
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          The core technologies powering my interactive playgrounds and scalable
          architectures.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill, i) => (
          <Reveal
            key={skill.name}
            delay={i * 0.06}
            className="glass-panel rounded-lg p-6 tactile-card group interactive-el"
          >
            <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-primary text-2xl">
                {skill.icon}
              </span>
            </div>
            <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background mb-2">
              {skill.name}
            </h4>
            <p className="font-body-md text-on-surface-variant text-sm">
              {skill.blurb}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
