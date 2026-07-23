// Single source of truth for social / contact links, used by the footer and
// the contact section.
export const SOCIALS = {
  github: "https://github.com/mdnakibul",
  linkedin: "https://www.linkedin.com/in/md-nakibul-hosen-nahid/",
  twitter: "https://x.com/HosenNakibul",
  email: "nakibulhosen7@gmail.com",
} as const;

export const mailto = `mailto:${SOCIALS.email}`;
