import { site, vercelCloneUrl } from "@/lib/config";
import { BrandBadges } from "@/components/BrandBadges";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { MemePanel } from "@/components/MemePanel";

const Home = () => (
  <section className="mx-auto max-w-3xl px-6 py-20 text-center">
    {/* Tagline pill */}
    <div
      className="inline-block rounded-2xl px-3 py-1 text-sm font-medium"
      style={{ background: `${site.brandColor}20`, color: site.brandColor }}
    >
      {site.tagline}
    </div>

    {/* Title + blurb */}
    <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
      {site.name}
    </h1>
    <p className="mt-4 text-lg text-slate-600">{site.description}</p>

    {/* Badges */}
    <BrandBadges className="mt-5" />

    {/* New meme panel */}
    <MemePanel className="mt-12" />

    {/* Bottom CTA: GitHub (icon) + Deploy */}
    <div id="deploy" className="mt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm">
        <p className="mb-3 text-sm text-slate-600">Quick start</p>
        <div className="flex justify-center gap-3">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            aria-label="Open GitHub repository"
            title="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href={vercelCloneUrl}
            className="rounded-lg px-4 py-2 text-sm font-medium text-white"
            style={{ background: site.brandColor }}
            aria-label="Clone & deploy on Vercel"
          >
            ▲ Deploy with Vercel
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
