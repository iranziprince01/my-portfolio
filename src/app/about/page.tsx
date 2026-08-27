import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { MapPin, Award, Users } from "lucide-react";
import { SkillsSection } from "@/components/skills-section";
import { LazyImage } from "@/components/ui/lazy-image";
import { generatePageSEO } from "@/lib/seo";
import { siteCopy } from "@/data/site-copy";
import { mediaUrl } from "@/data/media";

export const metadata: Metadata = generatePageSEO(
  "About - Prince Iranzi",
  "Software engineer and digital marketer in Kigali. Websites, web apps, and growth marketing for nonprofits and founders.",
  "/about"
);

const aboutCards = [
  {
    title: "Location",
    body: siteCopy.about.cards.location,
    Icon: MapPin,
  },
  {
    title: "Experience",
    body: siteCopy.about.cards.experience,
    Icon: Award,
  },
  {
    title: "Focus",
    body: siteCopy.about.cards.focus,
    Icon: Users,
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-content mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {siteCopy.about.title}
          </h1>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-content">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-10">
            {/*
              On lg, the image is taken out of flow so the right column sets the row height.
              The photo then scales proportionally to that height (width shrinks with it).
            */}
            <div className="relative mx-auto w-full max-w-[17.5rem] sm:max-w-[19rem] lg:mx-0 lg:max-w-none">
              <div className="lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center">
                <div className="h-auto w-full overflow-hidden rounded-2xl border-[3px] border-border/80 shadow-xl shadow-primary/10 lg:h-full lg:w-auto lg:max-w-full">
                  <LazyImage
                    src={mediaUrl("/Prince2.jpg")}
                    alt="Prince Iranzi"
                    width={4636}
                    height={6000}
                    sizes="(max-width: 1024px) 19rem, 28vw"
                    className="block h-auto w-full object-contain lg:h-full lg:w-auto lg:max-w-full"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 sm:gap-12">
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                {siteCopy.about.story.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
                {aboutCards.map(({ title, body, Icon }) => (
                  <div
                    key={title}
                    className="flex flex-col justify-center gap-1.5 rounded-2xl border-2 border-border/60 bg-card px-4 py-3.5 shadow-sm"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" aria-hidden />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">{title}</h3>
                    <p className="text-xs leading-snug text-muted-foreground">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-content">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
            Skills
          </h2>
          <SkillsSection />
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-content text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            {siteCopy.sections.cta.title}
          </h2>
          <Button asChild size="lg" className="playful-btn px-8 py-6">
            <a href="/contact">{siteCopy.sections.cta.primary}</a>
          </Button>
        </div>
      </section>
    </>
  );
}
