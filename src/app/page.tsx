"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code, TrendingUp } from "lucide-react"
import { projects } from "@/data/projects"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { Testimonials } from "@/components/testimonials"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { NoSSR } from "@/components/no-ssr"
import { IntroVideo } from "@/components/animations/intro-video"
import { siteStats } from "@/data/site-stats"

export default function Home() {
  const featuredProjects = projects.slice(0, 6)

  return (
    <>
      <NoSSR>
        <IntroVideo />
      </NoSSR>
      <div className="flex flex-col">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="site-content">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {siteStats.map((stat, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                  <div className="text-center p-4 bg-card border border-border rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1 font-display">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="site-content">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-display">
                  Featured Projects
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Recent client work across nonprofits, founders, and growing brands —
                  built with Next.js, TypeScript, and growth-focused digital marketing.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-center">
                <Button 
                  asChild 
                  size="lg"
                  className="px-6 py-6"
                >
                  <Link href="/projects">
                    View All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="site-content">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-display">
                  What I Do
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Engineering and marketing under one roof — from discovery and build
                  to launch, SEO, and campaigns that drive measurable growth.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal direction="up" delay={0.1}>
                <Card className="p-6 h-full border">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground font-display">
                      Software Engineering
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Production-grade websites, web apps, and PWAs for nonprofits,
                    professionals, and startups — built with React, Next.js, and TypeScript.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Client & Nonprofit Websites",
                      "Progressive Web Apps (PWA)",
                      "API Development & Integration",
                      "DevOps & Deployment"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <Card className="p-6 h-full border">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground font-display">
                      Digital Marketing
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Strategic digital marketing campaigns that drive growth, 
                    increase visibility, and generate measurable results.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "SEO & Content Marketing",
                      "Social Media Strategy",
                      "Paid Advertising Campaigns",
                      "Analytics & Performance Tracking"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="site-content">
            <ScrollReveal direction="up">
              <div className="text-center p-8 bg-card border border-border rounded-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-display">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let&apos;s discuss your next website, web app, or marketing campaign —
                  clear communication, reliable delivery, and results you can measure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg"
                    className="px-6 py-6"
                  >
                    <Link href="/contact">
                      Get In Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="px-6 py-6"
                  >
                    <Link href="/projects">View My Work</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  )
}
