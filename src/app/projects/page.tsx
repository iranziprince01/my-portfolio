import { Metadata } from "next";
import { ProjectsClient } from "./projects-client";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
  "Projects - Prince Iranzi",
  "Explore my portfolio of web applications, mobile apps, and digital marketing projects. From offline-first PWAs to full-stack platforms.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of web applications, mobile apps, and digital marketing 
            projects I&apos;ve built and managed. Each project represents a unique 
            challenge and learning opportunity.
          </p>
        </div>
        <ProjectsClient />
      </div>
    </div>
  );
}
