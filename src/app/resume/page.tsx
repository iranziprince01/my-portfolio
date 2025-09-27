import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download } from "lucide-react";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
  "Resume - Prince Iranzi",
  "Download Prince Iranzi's resume and view his professional experience, skills, and achievements in software engineering and digital marketing.",
  "/resume"
);

export default function ResumePage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Resume
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Download my resume or view it online to learn more about my 
            professional experience and qualifications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a
                href="https://docs.google.com/document/d/13dbqlzTmFgiQJVOGmOCjCytSYYhHs_xRhJ0CWgw3Gpg/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View Online
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://docs.google.com/document/d/13dbqlzTmFgiQJVOGmOCjCytSYYhHs_xRhJ0CWgw3Gpg/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        {/* Resume Preview */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="space-y-8">
              {/* Header Section */}
              <div className="text-center border-b pb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Prince Iranzi
                </h2>
                <p className="text-xl text-muted-foreground mb-4">
                  Software Engineer & Digital Marketer
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span>📧 princeiranzi4@gmail.com</span>
                  <span>📱 +250785961427</span>
                  <span>📍 Kigali, Rwanda</span>
                  <span>🔗 princeiranzi.dev</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 border-b pb-2">
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate software engineer and digital marketer with 3+ years of experience 
                  building web applications, mobile apps, and digital marketing strategies. 
                  Specialized in React, Next.js, and creating offline-first solutions for 
                  underserved communities. Proven track record of delivering projects that 
                  drive real business results and user engagement.
                </p>
              </div>

              {/* Key Skills */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 border-b pb-2">
                  Key Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Development</h4>
                    <div className="flex flex-wrap gap-1">
                      {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Django', 'React Native', 'PostgreSQL'].map(skill => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Marketing</h4>
                    <div className="flex flex-wrap gap-1">
                      {['SEO', 'Google Analytics', 'Social Media', 'Content Marketing', 'Google Ads', 'Facebook Ads'].map(skill => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Highlights */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 border-b pb-2">
                  Experience Highlights
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Managed social media platforms for 4+ big companies</li>
                  <li>• Designed 100+ graphics for different events and platforms</li>
                  <li>• Designed, developed and deployed 10+ web and mobile apps</li>
                  <li>• Increased client revenue by 40% through strategic digital marketing campaigns</li>
                  <li>• Built offline-first PWA serving 500+ users in low-connectivity areas</li>
                  <li>• Improved application performance by 60% through optimization techniques</li>
                  <li>• Mentored 2 junior developers and established development best practices</li>
                </ul>
              </div>

              {/* Notable Projects */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 border-b pb-2">
                  Notable Projects
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground">Probity Partners East Africa - Law Firm Website</h4>
                    <p className="text-sm text-muted-foreground">
                      Developed and deployed a professional website for a law firm with modern design and functionality
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Classy Apps for Ugandan Company</h4>
                    <p className="text-sm text-muted-foreground">
                      Developed and deployed 3 mobile applications: CUSTOMER, DRIVER, and VENDOR apps for a Ugandan company
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">WordPress Website Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Managed 5+ websites for big companies built with WordPress, including maintenance and updates
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">TekRiders - Offline-first PWA</h4>
                    <p className="text-sm text-muted-foreground">
                      E-learning platform for marginalized youth with offline capabilities and PouchDB/CouchDB sync
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Personal Brand Portfolios</h4>
                    <p className="text-sm text-muted-foreground">
                      Series of minimalist personal sites showcasing profiles and contact functionality
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 border-b pb-2">
                  Education & Certifications
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground">Software Engineering (Bachelor)</h4>
                    <p className="text-sm text-muted-foreground">African Leadership University</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">High School - Kayonda Modern School</h4>
                    <p className="text-sm text-muted-foreground">Maths - Physics - Computer Science</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Udemy</h4>
                    <p className="text-sm text-muted-foreground">Web Development</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Coursera</h4>
                    <p className="text-sm text-muted-foreground">Cybersecurity</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-6">
            I&apos;m always excited to take on new challenges and create meaningful solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
