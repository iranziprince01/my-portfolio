import { Metadata } from "next";
import { ProjectsClient } from "./projects-client";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
  "Projects - Prince Iranzi",
  "Explore 19+ client projects: nonprofit websites, professional portfolios, PWAs, and full-stack platforms built with Next.js and TypeScript.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="site-content">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Client work for nonprofits, founders, and growing brands — from production
            Next.js websites to offline-first PWAs and full-stack platforms.
          </p>
        </div>
        <ProjectsClient />
      </div>
    </div>
  );
}
