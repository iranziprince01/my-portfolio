import { Metadata } from "next"
import Link from "next/link"
import { ExperienceTimeline } from "./experience-timeline"
import { experiences } from "@/data/experience"
import { generatePageSEO } from "@/lib/seo"
import {
  ArrowRight,
  BarChart3,
  Users,
  TrendingUp,
  Calendar,
  LineChart,
  Shield,
  ScanEye,
  HeartHandshake,
  Code,
} from "lucide-react"

export const metadata: Metadata = generatePageSEO(
  "Experience - Prince Iranzi",
  "Explore Prince Iranzi's professional experience: data analysis, cybersecurity, perception annotation, social entrepreneurship, software engineering, and digital marketing across East Africa.",
  "/experience"
)

const domainAreas = [
  {
    title: "Data Analysis",
    description:
      "Exploring patterns, metrics, and evidence to inform decisions: dashboards, reporting, and turning raw information into clear, actionable insight.",
    Icon: LineChart,
  },
  {
    title: "Cybersecurity",
    description:
      "Building and operating with security in mind: threat awareness, safe practices in development, and protecting users and systems.",
    Icon: Shield,
  },
  {
    title: "Perception Annotation",
    description:
      "Contributing to high-quality training data through careful labeling and human-in-the-loop workflows that improve how models understand the world.",
    Icon: ScanEye,
  },
  {
    title: "Social Entrepreneurship",
    description:
      "Designing initiatives that pair impact with sustainability, including ventures and projects where social good and long-term viability go hand in hand.",
    Icon: HeartHandshake,
  },
  {
    title: "Software Engineering",
    description:
      "Full-stack development: web and mobile apps, APIs, PWAs, and reliable systems built with modern stacks from React and Next.js to databases and cloud deployment.",
    Icon: Code,
  },
  {
    title: "Digital Marketing",
    description:
      "Growth-focused campaigns: SEO, content, social media, and paid ads, measuring what works and iterating to reach the right audiences with clear results.",
    Icon: TrendingUp,
  },
] as const

export default function ExperiencePage() {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="site-content">
        {/* Additional domains (first) */}
        <section className="mb-16 sm:mb-20" aria-labelledby="domains-heading">
          <h2
            id="domains-heading"
            className="text-2xl sm:text-3xl font-bold text-foreground font-display text-center mb-3"
          >
            Broader domains
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed">
            Data analysis, cybersecurity, perception annotation, social entrepreneurship,
            software engineering, and digital marketing. I deepen my practice in these domains
            through study, projects, or mission-driven work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {domainAreas.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="rounded-xl border border-border/60 bg-card/50 p-6 sm:p-7 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground font-display mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Header */}
        <header className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display tracking-tight mb-6">
            Experience & Impact
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My journey in software engineering and digital marketing: building products
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
