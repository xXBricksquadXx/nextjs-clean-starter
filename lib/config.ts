export const site = {
  name: "Clean Starter",
  tagline: "Ship fast, stay clean.",
  description:
    "A Next.js boilerplate with Airbnb linting, Prettier formatting, and instant Vercel deploy.",
  brandColor: "#0ea5e9",
  cta: { label: "Deploy to Vercel", href: "#deploy" },
  links: {
    github: "https://github.com/USERNAME/nextjs-clean-starter", // <-- update after push
    contact: "mailto:you@example.com",
  },
} as const;

export const vercelCloneUrl = `https://vercel.com/new/clone?repository-url=${encodeURIComponent(
  site.links.github
)}`;
