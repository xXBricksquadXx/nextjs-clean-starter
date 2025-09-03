"use client";

import Link from "next/link";
import { site } from "@/lib/config";
import { BrandBadges } from "./BrandBadges";
import { GitHubIcon } from "./icons/GitHubIcon";

export const SiteHeader = () => (
  <header className="border-b bg-white/60 backdrop-blur">
    <div className="mx-auto max-w-6xl px-6 py-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="font-bold text-base md:text-lg">
          {site.name}
        </Link>

        <div className="hidden md:block">
          <BrandBadges />
        </div>

        <nav className="flex items-center gap-3 text-sm">
          {/* GitHub icon button (opens in new tab) */}
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-3 py-1.5 font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            aria-label="Open GitHub repository"
            title="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* keep Contact as a simple link */}
          <a className="hover:underline" href={site.links.contact}>
            Contact
          </a>
        </nav>
      </div>
    </div>
  </header>
);
