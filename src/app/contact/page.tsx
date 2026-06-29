import { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock, Github, Linkedin } from "lucide-react";
import { generatePageSEO } from "@/lib/seo";
import { siteCopy } from "@/data/site-copy";

export const metadata: Metadata = generatePageSEO(
  "Contact - Prince Iranzi",
  "Get in touch for websites, web apps, or digital marketing. Based in Kigali, working with clients worldwide.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <section className="site-section">
        <div className="site-content text-center max-w-xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {siteCopy.contact.title}
          </h1>
          <p className="mt-3 text-muted-foreground">{siteCopy.contact.subtitle}</p>
        </div>
      </section>

      <section className="site-section-alt">
        <div className="site-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-4">
              <Card className="playful-card p-5 border-0 shadow-none">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">princeiranzi4@gmail.com</p>
                    <a
                      href="mailto:princeiranzi4@gmail.com"
                      className="text-sm text-primary hover:underline"
                    >
                      Email me
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="playful-card p-5 border-0 shadow-none">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">+250 785 961 427</p>
                    <a href="tel:+250785961427" className="text-sm text-primary hover:underline">
                      Call
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="playful-card p-5 border-0 shadow-none">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Kigali, Rwanda</p>
                    <p className="text-sm text-muted-foreground">Remote clients welcome</p>
                  </div>
                </div>
              </Card>

              <Card className="playful-card p-5 border-0 shadow-none">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{siteCopy.contact.response}</p>
                  </div>
                </div>
              </Card>

              <div className="flex gap-3 pt-2">
                <Button asChild variant="outline" className="rounded-xl border-2 font-semibold">
                  <a
                    href="https://github.com/iranziprince01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl border-2 font-semibold">
                  <a
                    href="https://www.linkedin.com/in/prince-iranzi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-content">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center font-display">
            Quick answers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Card className="playful-card p-5 border-0 shadow-none">
              <h3 className="font-bold text-foreground mb-2">Timeline?</h3>
              <p className="text-sm text-muted-foreground">
                Marketing sites: 2–4 weeks. Custom apps: 6–12 weeks. I share milestones upfront.
              </p>
            </Card>
            <Card className="playful-card p-5 border-0 shadow-none">
              <h3 className="font-bold text-foreground mb-2">Remote work?</h3>
              <p className="text-sm text-muted-foreground">
                Yes. I work with clients in Rwanda, East Africa, North America, and beyond.
              </p>
            </Card>
            <Card className="playful-card p-5 border-0 shadow-none">
              <h3 className="font-bold text-foreground mb-2">What you get?</h3>
              <p className="text-sm text-muted-foreground">
                Design, build, launch, and post-launch support. Marketing-only or build-only both work.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
