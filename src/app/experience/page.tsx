import { Metadata } from "next"
import Link from "next/link"
import { generatePageSEO } from "@/lib/seo"
import { siteCopy } from "@/data/site-copy"
import {
  ArrowRight,
  LineChart,
  Shield,
  ScanEye,
  HeartHandshake,
  Code,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = generatePageSEO(
  "Experience - Prince Iranzi",
  "Software engineering, digital marketing, and other domains Prince Iranzi works in.",
  "/experience"
)

const domainAreas = [
  {
    title: "Data Analysis",
    description: "Dashboards and reporting that turn raw data into clear next steps.",
    Icon: LineChart,
  },
  {
    title: "Cybersecurity",
    description: "Secure development habits and threat-aware product decisions.",
    Icon: Shield,
  },
  {
    title: "Perception Annotation",
    description: "High-quality labeling work that improves how AI models see the world.",
    Icon: ScanEye,
  },
  {
    title: "Social Entrepreneurship",
    description: "Ventures where impact and sustainability share the same goal.",
    Icon: HeartHandshake,
  },
  {
    title: "Software Engineering",
    description: "Sites, platforms, and PWAs with React, Next.js, APIs, and reliable deploys.",
    Icon: Code,
  },
  {
    title: "Digital Marketing",
    description: "SEO, content, social, and paid media tied to traffic and lead metrics.",
    Icon: TrendingUp,
  },
] as const

export default function ExperiencePage() {
  return (
    <>
      <section className="site-section" aria-labelledby="domains-heading">
        <div className="site-content">
          <div className="mx-auto mb-8 max-w-xl text-center sm:mb-10">
            <h1
              id="domains-heading"
              className="font-display text-3xl font-bold text-foreground sm:text-4xl"
            >
              {siteCopy.experience.title}
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              {siteCopy.experience.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {domainAreas.map(({ title, description, Icon }) => (
              <div key={title} className="playful-card p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-foreground font-display mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-content text-center">
          <div className="playful-card p-8 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-foreground font-display mb-5">
              {siteCopy.sections.cta.title}
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold playful-btn"
            >
              {siteCopy.experience.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
