"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "./animations/scroll-reveal"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Decorative gradient orbs - subtle */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-full border-2 border-primary shadow-md">
                  Software Engineer & Digital Marketer
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground font-display leading-tight tracking-tight">
                  Building{" "}
                  <span className="text-primary">Digital</span>
                  <br />
                  Solutions That{" "}
                  <span className="text-primary">Matter</span>
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Crafting reliable, scalable web platforms with modern technologies. 
                Specialized in full-stack and mobile app development.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="text-base px-8 py-6 font-medium"
                >
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 py-6 border-2"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Image with decorative elements */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md group">
                {/* Main image container - softer, friendlier shape */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-border/80 shadow-xl shadow-primary/5 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10">
                  <Image
                    src="/profile.PNG"
                    alt="Prince Iranzi - Software Engineer & Digital Marketer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                    priority
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
                </div>
                
                {/* Code badge - rounder, gentle tilt, subtle hover */}
                <div className="absolute -top-3 -right-3 w-20 h-20 border-2 border-primary/25 rounded-2xl rotate-6 bg-primary/5 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:rotate-0 hover:scale-105">
                  <span className="text-sm font-mono text-primary font-medium">
                    {'</>'}
                  </span>
                </div>
                
                {/* Accent dot - playful hover */}
                <div className="absolute -bottom-5 -left-5 w-14 h-14 bg-primary/10 rounded-full border-2 border-primary/25 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
