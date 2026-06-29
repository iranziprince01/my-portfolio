import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Award, Users } from "lucide-react";
import { SkillsSection } from "@/components/skills-section";
import { generatePageSEO } from "@/lib/seo";
import { siteCopy } from "@/data/site-copy";

export const metadata: Metadata = generatePageSEO(
  "About - Prince Iranzi",
  "Software engineer and digital marketer in Kigali. Websites, web apps, and growth marketing for nonprofits and founders.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <section className="site-section">
        <div className="site-content text-center max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {siteCopy.about.title}
          </h1>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {siteCopy.about.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Card className="playful-card p-5 border-0 shadow-none">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Location</h3>
                </div>
                <p className="text-muted-foreground text-sm">{siteCopy.about.cards.location}</p>
              </Card>
              <Card className="playful-card p-5 border-0 shadow-none">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Experience</h3>
                </div>
                <p className="text-muted-foreground text-sm">{siteCopy.about.cards.experience}</p>
              </Card>
              <Card className="playful-card p-5 border-0 shadow-none">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">Focus</h3>
                </div>
                <p className="text-muted-foreground text-sm">{siteCopy.about.cards.focus}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-content">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center font-display">
            Skills
          </h2>
          <SkillsSection />
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-content text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
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
