"use client"

import type { ReactElement } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle } from "lucide-react"
import { Project } from "@/data/projects"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

interface CaseStudyProps {
  project: Project
}

export function CaseStudy({ project }: CaseStudyProps) {
  const getProjectImage = (slug: string) => {
    const imageMap: Record<string, string> = {
      'innocent-photos': '/innocent_photos.png',
      'lumina-bridge-foundation': '/lbf.png',
      'talent-bridge-africa': '/Talent Bridge Africa.png',
      'byishimo-patrick-artist': '/patrick_byishimo.png',
      'fati-sango-portfolio': '/sango.png',
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
    return imageMap[slug] || '/tekriders.png'
  }

  const contentSections = [
    project.challenges && project.challenges.length > 0 && {
      title: "The Challenge",
      content: (
        <div className="grid gap-4">
          {project.challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/60"
            >
              <div className="mt-1">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <p className="text-muted-foreground">{challenge}</p>
            </motion.div>
          ))}
        </div>
      ),
    },
    project.highlights && project.highlights.length > 0 && {
      title: "The Process",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          {project.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-border rounded-xl hover:border-primary/50 transition-colors bg-card"
            >
              <CheckCircle className="h-6 w-6 text-primary mb-3" />
              <p className="text-foreground">{highlight}</p>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: "Tech Stack",
      content: (
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline" className="text-sm px-4 py-2">
              {tech}
            </Badge>
          ))}
        </div>
      ),
    },
    project.results && project.results.length > 0 && {
      title: "Results",
      content: (
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
      ),
    },
    project.outcomes && project.outcomes.length > 0 && {
      title: "Impact",
      content: (
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
      ),
    },
  ].filter((section): section is { title: string; content: ReactElement } => Boolean(section))

  return (
    <>
      <section className="site-section">
        <div className="site-content">
          <ScrollReveal direction="up">
            <div className="mb-12">
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
                    className="playful-btn px-8"
                  >
                    <a
                      href={project.links.live || project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Visit Site
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
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
        </div>
      </section>

      {contentSections.map((section, index) => (
        <section
          key={section.title}
          className={index % 2 === 0 ? "site-section-alt" : "site-section"}
        >
          <div className="site-content">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl font-bold text-foreground mb-6 font-display">
                {section.title}
              </h2>
              {section.content}
            </ScrollReveal>
          </div>
        </section>
      ))}
    </>
  )
}
