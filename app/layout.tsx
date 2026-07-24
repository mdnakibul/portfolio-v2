import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/profile";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const DESCRIPTION =
  "MERN Stack Developer with 6+ years building production web apps & SaaS. Available for full-time roles and freelance projects. Creator of VetVertex.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Md Nakibul Hosen Nahid — MERN Stack Developer",
    template: "%s · Nakibul.Dev",
  },
  description: DESCRIPTION,
  keywords: [
    "Md Nakibul Hosen Nahid",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Freelance Web Developer",
    "SaaS Developer",
    "VetVertex",
  ],
  authors: [{ name: "Md Nakibul Hosen Nahid", url: SITE_URL }],
  creator: "Md Nakibul Hosen Nahid",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Nakibul.Dev",
    title: "Md Nakibul Hosen Nahid — MERN Stack Developer",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Nakibul Hosen Nahid — MERN Stack Developer",
    description: DESCRIPTION,
    creator: "@HosenNakibul",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${outfit.variable} ${jakarta.variable}`}>
      <head>
        {/* Material Symbols — used for nav + button icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col overflow-x-hidden selection:bg-primary/30 selection:text-primary-fixed">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
