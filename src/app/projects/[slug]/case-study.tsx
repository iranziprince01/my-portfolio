"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Project } from "@/data/projects"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

interface CaseStudyProps {
  project: Project
}

export function CaseStudy({ project }: CaseStudyProps) {
  const getProjectImage = (slug: string) => {
    const imageMap: Record<string, string> = {
      'tekriders': '/tekriders.png',
      'iarm-ministries': '/iarm.png',
      'graphic-design-work': '/graphics-sowc.png',
      'ppea-law': '/PPEA.png',
      'mindsafi': '/mindsafi.png',
      'bookhub': '/bookhub.png',
      'fitness-booking-devops': '/fitness-booking.jpg',
      'olearn-mobile': '/olearn.webp',
      'earthwise-mobile': '/earthwise.jpg',
      'django-file-mgmt': '/file-management.png',
      'skillhub': '/skillhub.png',
      'github-academics': '/academic-projects.png',
      'honnette-portfolio': '/honnette.png',
    }
    return imageMap[slug] || '/images/projects/placeholder.jpg'
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <ScrollReveal direction="right">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </ScrollReveal>

        {/* Hero Section */}
        <ScrollReveal direction="up">
          <div className="mb-16">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              {project.description || project.summary}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {(project.links.live || project.links.demo) ? (
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all px-8"
                >
                  <a 
                    href={project.links.live || project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-5 w-5" />
                    View Live Demo
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </ScrollReveal>

        {/* Hero Image */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden mb-16 shadow-2xl">
            <Image
              src={getProjectImage(project.slug)}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>

        {/* Problem Section */}
        {project.challenges && project.challenges.length > 0 && (
          <ScrollReveal direction="up" delay={0.1}>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-display">The Challenge</h2>
              <div className="grid gap-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl"
                  >
                    <div className="mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-muted-foreground">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Process Section */}
        {project.highlights && project.highlights.length > 0 && (
          <ScrollReveal direction="up" delay={0.2}>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-display">The Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <CheckCircle className="h-6 w-6 text-primary mb-3" />
                    <p className="text-foreground">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Tech Stack */}
        <ScrollReveal direction="up" delay={0.3}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Results Section */}
        {project.results && project.results.length > 0 && (
          <ScrollReveal direction="up" delay={0.4}>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Results</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20"
                  >
                    <CheckCircle className="h-6 w-6 text-primary mb-3" />
                    <p className="text-foreground">{result}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
          <ScrollReveal direction="up" delay={0.5}>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-display">Impact</h2>
              <div className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-muted-foreground text-lg">{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}
      </div>
    </div>
  )
}
