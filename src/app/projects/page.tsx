import { Metadata } from "next";
import Link from "next/link";
import { ProjectsClient } from "./projects-client";
import { Button } from "@/components/ui/button";
import { generatePageSEO } from "@/lib/seo";
import { siteCopy } from "@/data/site-copy";

export const metadata: Metadata = generatePageSEO(
  "Projects - Prince Iranzi",
  "Explore 19+ client projects: nonprofit websites, professional portfolios, PWAs, and full-stack platforms built with Next.js and TypeScript.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <>
      <section className="site-section">
        <div className="site-content text-center max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {siteCopy.projects.title}
          </h1>
          <p className="mt-3 text-muted-foreground">{siteCopy.projects.subtitle}</p>
        </div>
      </section>
      <section className="site-section-alt">
        <div className="site-content">
          <ProjectsClient />
        </div>
      </section>

      <section className="site-section">
        <div className="site-content text-center">
          <div className="playful-card p-8 max-w-xl mx-auto border-0 shadow-none">
            <h2 className="text-3xl font-bold text-foreground mb-5 font-display">
              {siteCopy.sections.cta.title}
            </h2>
            <Button asChild size="lg" className="playful-btn px-8 py-6">
              <Link href="/contact">{siteCopy.sections.cta.primary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
