import { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin, 
  Phone,
  Clock, 
  Github, 
  Linkedin,
  ExternalLink
} from "lucide-react";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
  "Contact - Prince Iranzi",
  "Get in touch with Prince Iranzi for your next software engineering or digital marketing project. Available for freelance and consulting opportunities.",
  "/contact"
);

export default function ContactPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? I&apos;d love to hear about your ideas 
            and discuss how I can help bring them to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">princeiranzi4@gmail.com</p>
                      <a 
                        href="mailto:princeiranzi4@gmail.com"
                        className="text-sm text-primary hover:underline"
                      >
                        Send an email
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+250785961427</p>
                      <a 
                        href="tel:+250785961427"
                        className="text-sm text-primary hover:underline"
                      >
                        Call now
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Kigali, Rwanda</p>
                      <p className="text-sm text-muted-foreground">East Africa</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Response Time</h3>
                      <p className="text-muted-foreground">Within 24 hours</p>
                      <p className="text-sm text-muted-foreground">Usually much faster</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://github.com/iranziprince01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://www.linkedin.com/in/prince-iranzi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Resume */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Download Resume
              </h3>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://docs.google.com/document/d/13dbqlzTmFgiQJVOGmOCjCytSYYhHs_xRhJ0CWgw3Gpg/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What&apos;s your typical project timeline?
              </h3>
              <p className="text-muted-foreground">
                Project timelines vary based on complexity. Simple websites take 2-4 weeks, 
                while complex web applications can take 2-3 months. I provide detailed 
                timelines during our initial consultation.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Do you work with clients outside Rwanda?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! I work with clients globally. I&apos;m comfortable with remote 
                collaboration and can accommodate different time zones for meetings 
                and communication.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What&apos;s included in your development services?
              </h3>
              <p className="text-muted-foreground">
                My services include design, development, testing, deployment, and 
                post-launch support. I also provide documentation, training, and 
                maintenance packages as needed.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                How do you handle project communication?
              </h3>
              <p className="text-muted-foreground">
                I maintain regular communication through your preferred channels 
                (email, Slack, WhatsApp). I provide weekly progress updates and 
                am always available for questions and feedback.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
