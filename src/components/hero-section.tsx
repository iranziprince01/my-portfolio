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
    <section className="relative overflow-hidden bg-background py-10 sm:py-14 lg:flex lg:min-h-[calc(100dvh-5rem)] lg:items-center lg:py-0">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute top-1/4 right-1/4 hidden h-96 w-96 rounded-full bg-primary/8 blur-3xl sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/4 hidden h-80 w-80 rounded-full bg-accent/8 blur-3xl sm:block"
        aria-hidden
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-left sm:space-y-7">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-4 sm:space-y-5">
                <div className="inline-flex rounded-full border-2 border-primary/80 bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground sm:px-4 sm:py-2 sm:text-sm">
                  {siteCopy.badge}
                </div>
                <h1 className="font-display text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]">
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
                        {i === growIdx && (
                          <span className="text-primary" aria-hidden="true">
                            .
                          </span>
                        )}
                        {i < words.length - 1 ? " " : ""}
                      </span>
                    )
                  })}
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteCopy.hero.subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="playful-btn px-8 py-6 text-base">
                  <Link href="/projects">
                    {siteCopy.hero.ctaWork}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-xl border-2 px-8 py-6 text-base font-semibold"
                >
                  <Link href="/contact">{siteCopy.hero.ctaContact}</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="group relative w-full max-w-[220px] sm:max-w-xs lg:max-w-md">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-[3px] border-border/80 shadow-xl shadow-primary/10 transition-all duration-300 sm:rounded-3xl group-hover:-translate-y-1">
                  <Image
                    src={mediaUrl("/Prince.jpg")}
                    alt="Prince Iranzi"
                    fill
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 320px, 448px"
                    className="object-cover object-top scale-125 origin-top"
                    priority
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                </div>

                <div className="absolute -top-3 -right-3 hidden h-16 w-16 rotate-6 items-center justify-center rounded-2xl border-[3px] border-primary/30 bg-primary/10 backdrop-blur-sm transition-transform duration-300 sm:flex group-hover:rotate-0">
                  <span className="font-mono text-sm font-bold text-primary">{"</>"}</span>
                </div>

                <div className="absolute -bottom-4 -left-4 hidden h-12 w-12 items-center justify-center rounded-2xl border-[3px] border-primary/40 bg-primary shadow-lg shadow-primary/20 sm:flex">
                  <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
