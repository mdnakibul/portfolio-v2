export type CaseStudy = {
  title: string;
  role: string;
  description: string;
  tags: string[];
  icon: string; // Material Symbol name
  accent: "primary" | "secondary" | "tertiary";
  highlight?: string; // optional metric badge, e.g. "200k+ users"
};

// Professional / client work, ordered strongest-first (only the first few show
// on the page; the rest are behind "View all"). Specifics are generalized to
// respect confidentiality.
export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Meditation App — Backend & Admin",
    role: "Back-End Developer · Solo",
    description:
      "Built the backend and admin panel for a meditation app single-handedly and shipped it in under two months. The platform now serves 200k+ users.",
    tags: ["Node.js", "MySQL", "Admin Panel", "React JS"],
    icon: "self_improvement",
    accent: "tertiary",
    highlight: "200k+ users",
  },
  {
    title: "Sales CRM — Lead Aggregation",
    role: "Full-Stack Developer",
    description:
      "Built a sales CRM that pulls customer conversations from Instagram and WhatsApp into one place so the team can track every lead — moving the sales org off spreadsheets and onto a purpose-built web app.",
    tags: ["Full-Stack", "WhatsApp API", "Instagram API", "Node.js"],
    icon: "insights",
    accent: "primary",
  },
  {
    title: "Web3 Authentication App",
    role: "Full-Stack Developer · Solo",
    description:
      "Designed and built a Web3 authentication application end-to-end to client specification — wallet-based login and secure session handling across the front and back end, delivered solo.",
    tags: ["Web3", "React", "Node.js"],
    icon: "token",
    accent: "secondary",
  },
  {
    title: "Veterinary Platform",
    role: "Full-Stack Developer · Team of 10",
    description:
      "Worked in a 10-developer team building a veterinary platform that connects pet parents with vets, contributing full-stack features across Node.js and Next.js.",
    tags: ["Next.js", "Node.js", "Team of 10"],
    icon: "pets",
    accent: "tertiary",
  },
  {
    title: "Gym Class Booking System",
    role: "Full-Stack Developer",
    description:
      "Built a gym class-booking system with role-based access control and member plan assignment, connecting coach, IT, and sales teams within a single workflow.",
    tags: ["RBAC", "Node.js", "React", "Vite", "MySQL"],
    icon: "fitness_center",
    accent: "primary",
  },
  {
    title: "Health Marketing Portals",
    role: "Full-Stack Developer",
    description:
      "Developed web portals for a health marketing agency connecting brokers, customers, and gym instructors — including syncing data from an existing third-party CRM.",
    tags: ["Full-Stack", "CRM Sync", "Node.js"],
    icon: "health_and_safety",
    accent: "secondary",
  },
  {
    title: "Content-as-a-Service Admin Panel",
    role: "Full-Stack Developer · Solo",
    description:
      "Solo-built the admin panel for a Content-as-a-Service platform — content management, user roles, and API integration — owning the full stack end to end.",
    tags: ["React", "Node.js", "MongoDB"],
    icon: "admin_panel_settings",
    accent: "tertiary",
  },
  {
    title: "B2B E-commerce Platform",
    role: "React Developer",
    description:
      "Built responsive storefront and dashboard interfaces for a B2B e-commerce platform, turning complex catalog and ordering flows into clean, reusable React components.",
    tags: ["React", "JavaScript", "REST APIs"],
    icon: "storefront",
    accent: "primary",
  },
  {
    title: "Testimonial Call Booking",
    role: "Full-Stack Developer",
    description:
      "Built a meeting-booking system for a fitness app's testimonial calls, integrating Google Meet to auto-create calendar events and generate meeting links.",
    tags: ["Google Calendar API", "Node.js", "React"],
    icon: "event",
    accent: "secondary",
  },
  {
    title: "Skincare Platform + Admin",
    role: "Full-Stack Developer",
    description:
      "Built a skincare platform with customer-facing and admin experiences, integrating multiple databases into a single, reliable data layer.",
    tags: ["Full-Stack", "Multi-DB", "React", "Fire-CMS", "Firebase"],
    icon: "spa",
    accent: "tertiary",
  },
  {
    title: "Ed-Tech Learning Platform",
    role: "Front-End Developer · Team of 7",
    description:
      "Developed front-end features for an ed-tech platform alongside a team of seven developers, building reusable UI components on a shared codebase.",
    tags: ["React", "JavaScript", "Team of 7"],
    icon: "school",
    accent: "primary",
  },
  {
    title: "Node.js Blog Platform",
    role: "Back-End Developer",
    description:
      "Built a blog application with Node.js server-rendered views and REST APIs, optimizing MongoDB queries to handle large datasets and heavy read traffic.",
    tags: ["Node.js", "MongoDB", "REST APIs"],
    icon: "article",
    accent: "secondary",
  },
  {
    title: "Razorpay Payment Integration",
    role: "Developer",
    description:
      "Integrated Razorpay into a Framer-built website, adding coupon-code support for discounts at checkout.",
    tags: ["Razorpay", "Payments", "Framer"],
    icon: "payments",
    accent: "tertiary",
  },
];
