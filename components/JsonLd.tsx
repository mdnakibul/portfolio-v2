import { SITE_URL, PROFILE } from "@/lib/profile";
import { SOCIALS } from "@/lib/socials";

/**
 * Structured data (JSON-LD) describing the site owner and site. Helps search
 * engines and AI answer engines understand who this is, their role, skills,
 * and where else to find them.
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: PROFILE.name,
        alternateName: "Nakibul Hosen",
        url: SITE_URL,
        image: `${SITE_URL}/images/nahid-portrait.png`,
        jobTitle: PROFILE.role,
        description: PROFILE.summary,
        email: SOCIALS.email,
        worksFor: { "@type": "Organization", name: "Alpha OBS LLP" },
        knowsAbout: [
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "MongoDB",
          "MySQL",
          "GraphQL",
          "Full-Stack Development",
          "SaaS Development",
          "REST APIs",
        ],
        sameAs: [SOCIALS.github, SOCIALS.linkedin, SOCIALS.twitter],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Nakibul.Dev",
        url: SITE_URL,
        description: PROFILE.summary,
        author: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
