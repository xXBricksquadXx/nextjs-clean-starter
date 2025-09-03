import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/config";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: `${site.name} – ${site.tagline}`,
  description: site.description,
  openGraph: { title: site.name, description: site.description, images: ["/og.png"] },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className="bg-white text-slate-900 antialiased">
      <div className="min-h-dvh flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </body>
  </html>
);

export default RootLayout;
