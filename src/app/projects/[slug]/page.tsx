import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Github, Calendar, User, Tag } from "lucide-react";
import { projects } from "@/data/projects";
import { generateProjectSEO } from "@/lib/seo";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return generateProjectSEO(project);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {project.summary}
          </p>

          {/* Project Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Year</span>
              <span className="font-medium">{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Role</span>
              <span className="font-medium">{project.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Category</span>
              <span className="font-medium">{project.tags[0]}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-border bg-background text-foreground rounded-md hover:bg-muted transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-border bg-background text-foreground rounded-md hover:bg-muted transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            )}
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Project Description */}
        {project.description && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">About This Project</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          </section>
        )}

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Challenges</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Results</h2>
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{result}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Impact & Outcomes</h2>
            <ul className="space-y-3">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter(p => p.slug !== project.slug && p.tags.some(tag => project.tags.includes(tag)))
              .slice(0, 2)
              .map((relatedProject) => (
                <Card key={relatedProject.slug} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{relatedProject.year}</Badge>
                      <div className="flex gap-1">
                        {relatedProject.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {relatedProject.summary}
                    </p>
                    <a
                      href={`/projects/${relatedProject.slug}`}
                      className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

      </div>
    </div>
  );
}
