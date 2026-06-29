"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, TrendingUp } from "lucide-react"
import { projects } from "@/data/projects"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { Testimonials } from "@/components/testimonials"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { siteStats } from "@/data/site-stats"
import { siteCopy } from "@/data/site-copy"

export default function Home() {
  const featuredProjects = projects.slice(0, 6)
  const { engineering, marketing } = siteCopy.sections.whatIDo

  return (
    <div className="flex flex-col">
        <HeroSection />

        <section className="site-section-alt">
          <div className="site-content">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {siteStats.map((stat, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                  <div className="playful-card text-center p-5">
                    <div className="text-3xl font-bold text-primary mb-1 font-display">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-content">
            <ScrollReveal direction="up">
              <div className="text-center mb-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display">
                  {siteCopy.sections.featuredProjects.title}
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {siteCopy.sections.featuredProjects.subtitle}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-center">
                <Button asChild size="lg" className="px-6 py-6 playful-btn">
                  <Link href="/projects">
                    All projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="site-section-alt">
          <div className="site-content">
            <ScrollReveal direction="up">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display">
                  {siteCopy.sections.whatIDo.title}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ScrollReveal direction="up" delay={0.1}>
                <Card className="playful-card p-6 h-full border-0 shadow-none">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-display">
                      {engineering.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-5">{engineering.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {engineering.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <Card className="playful-card p-6 h-full border-0 shadow-none">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-display">
                      {marketing.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-5">{marketing.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {marketing.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Testimonials limit={3} />

        <section className="site-section-alt">
          <div className="site-content">
            <ScrollReveal direction="up">
              <div className="text-center p-8 playful-card">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 font-display">
                  {siteCopy.sections.cta.title}
                </h2>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" className="px-6 py-6 playful-btn">
                    <Link href="/contact">
                      {siteCopy.sections.cta.primary}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-6 py-6 rounded-xl border-2 font-semibold"
                  >
                    <Link href="/projects">{siteCopy.sections.cta.secondary}</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
  )
}
