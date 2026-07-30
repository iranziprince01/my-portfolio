"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "./animations/scroll-reveal"
import { siteCopy } from "@/data/site-copy"
import { mediaUrl } from "@/data/media"

export function HeroSection() {
  const words = siteCopy.hero.title.split(" ")
  const launchIdx = words.findIndex((w) => w === "launch")
  const growIdx = words.findIndex((w) => w === "grow")

  return (
    <section className="relative flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left space-y-7">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-5">
                <div className="inline-flex px-4 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-full border-2 border-primary/80">
                  {siteCopy.badge}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display leading-[1.1] tracking-tight">
                  {words.map((word, i) => {
                    const clean = word.replace(/[.,]/g, "")
                    const highlight = i === launchIdx || i === growIdx
                    return (
                      <span key={i}>
                        {highlight ? (
                          <span className="text-primary">{clean}</span>
                        ) : (
                          clean
                        )}
                        {i < words.length - 1 ? " " : ""}
                      </span>
                    )
                  })}
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                {siteCopy.hero.subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="text-base px-8 py-6 playful-btn">
                  <Link href="/projects">
                    {siteCopy.hero.ctaWork}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-6 rounded-xl border-2 font-semibold"
                >
                  <Link href="/contact">{siteCopy.hero.ctaContact}</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md group">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-[3px] border-border/80 shadow-xl shadow-primary/10 transition-all duration-300 group-hover:-translate-y-1">
                  <Image
                    src={mediaUrl("/Prince.jpg")}
                    alt="Prince Iranzi"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top scale-125 origin-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                </div>

                <div className="absolute -top-3 -right-3 w-16 h-16 border-[3px] border-primary/30 rounded-2xl rotate-6 bg-primary/10 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:rotate-0">
                  <span className="text-sm font-mono text-primary font-bold">{"</>"}</span>
                </div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-2xl border-[3px] border-primary/40 flex items-center justify-center shadow-lg shadow-primary/20">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
