<!-- Title / Banner (dark-mode aware) -->
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://placehold.co/1200x280/0b1220/ffffff?text=Clean+Starter&font=inter">
    <img alt="Clean Starter" src="https://placehold.co/1200x280/f7f8fb/0b1220?text=Clean+Starter&font=inter">
  </picture>
</p>

<p align="center">
  <b>Next.js 14 + Tailwind</b> starter with <b>Airbnb ESLint</b> + <b>Prettier</b>. Clean defaults, fast deploy.
</p>

<p align="center">
  <a href="https://github.com/xXBricksquadXx/nextjs-clean-starter/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-111827?style=flat-square">
  </a>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-111827?style=flat-square&logo=nextdotjs&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-111827?style=flat-square&logo=typescript&logoColor=white">
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-3-111827?style=flat-square&logo=tailwindcss&logoColor=white">
  <img alt="ESLint Airbnb" src="https://img.shields.io/badge/ESLint-Airbnb-111827?style=flat-square&logo=eslint&logoColor=white">
  <img alt="Prettier" src="https://img.shields.io/badge/Prettier-on-111827?style=flat-square&logo=prettier&logoColor=white">
</p>

<p align="center">
  <a href="https://nextjs-clean-starter-ten.vercel.app/"><b>Live demo</b></a> ·
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FxXBricksquadXx%2Fnextjs-clean-starter"><b>Clone & Deploy</b></a> ·
  <a href="https://github.com/xXBricksquadXx/nextjs-clean-starter"><b>Repository</b></a>
</p>

---

## Use this repo as a template: click “Use this template” → “Create a new repository”.
## Overview
Opinionated starter focused on **clean code** and **quick shipping**:
- ES6+ (arrow functions) & strict TypeScript
- Airbnb ESLint rules + Prettier formatting
- Tailwind CSS
- One-file branding (`lib/config.ts`)
- Vercel “Clone & Deploy” link

Use it for microsites, landers, or as a base without yak-shaving.

---

## Quick start
```bash
npm install
npm run dev
# open http://localhost:3000
```
---

## Configure
Edit lib/config.ts to rebrand in seconds
```bash
export const site = {
  name: "Clean Starter",
  tagline: "Ship fast, stay clean.",
  description: "A Next.js boilerplate with Airbnb linting, Prettier formatting, and instant Vercel deploy.",
  brandColor: "#0ea5e9",
  cta: { label: "Deploy to Vercel", href: "#deploy" },
  links: {
    github: "https://github.com/xXBricksquadXx/nextjs-clean-starter",
    demo: "https://nextjs-clean-starter-ten.vercel.app/",
    contact: "mailto:you@example.com"
  }
} as const;

export const vercelCloneUrl =
  `https://vercel.com/new/clone?repository-url=${encodeURIComponent(site.links.github)}`;
```

---



