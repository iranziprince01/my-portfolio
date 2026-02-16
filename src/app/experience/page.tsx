import { Metadata } from "next"
import Link from "next/link"
import { ExperienceTimeline } from "./experience-timeline"
import { experiences } from "@/data/experience"
import { generatePageSEO } from "@/lib/seo"
import { ArrowRight, BarChart3, Users, TrendingUp, Calendar } from "lucide-react"

export const metadata: Metadata = generatePageSEO(
  "Experience - Prince Iranzi",
  "Explore Prince Iranzi's professional experience in software engineering and digital marketing. From freelance projects to full-time roles across East Africa.",
  "/experience"
)

export default function ExperiencePage() {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <header className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display tracking-tight mb-6">
            Experience & Impact
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My journey in software engineering and digital marketing—building products
            and campaigns that create real impact.
          </p>
        </header>

        {/* Timeline */}
        <ExperienceTimeline experiences={experiences} />

        {/* Impact Summary */}
        <section className="mt-20 sm:mt-24 pb-20 sm:pb-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display text-center mb-10">
            Impact at a Glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                value: "50+",
                label: "Projects Delivered",
                icon: BarChart3,
              },
              {
                value: "500+",
                label: "Users Impacted",
                icon: Users,
              },
              {
                value: "40%",
                label: "Avg. Revenue Increase",
                icon: TrendingUp,
              },
              {
                value: "4+",
                label: "Years Experience",
                icon: Calendar,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border/60 bg-card/50 p-5 sm:p-6 text-center hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
              >
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-primary font-display">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 sm:mt-28 text-center">
          <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 dark:bg-primary/10 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-3">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I&apos;m always excited to take on new challenges and create meaningful
              solutions. Let&apos;s discuss how I can help with your next project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
