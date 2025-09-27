import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  Award, 
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { experiences } from "@/data/experience";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
  "Experience - Prince Iranzi",
  "Explore Prince Iranzi's professional experience in software engineering and digital marketing. From freelance projects to full-time roles across East Africa.",
  "/experience"
);

export default function ExperiencePage() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'default';
      case 'part-time': return 'secondary';
      case 'contract': return 'outline';
      case 'freelance': return 'outline';
      case 'internship': return 'outline';
      default: return 'outline';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'full-time': return 'Full-time';
      case 'part-time': return 'Part-time';
      case 'contract': return 'Contract';
      case 'freelance': return 'Freelance';
      case 'internship': return 'Internship';
      default: return type;
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Experience & Impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software engineering and digital marketing, 
            with a focus on creating meaningful impact through technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-border" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-5 top-6 w-3 h-3 bg-primary rounded-full border-4 border-background" />
              
              {/* Experience Card */}
              <div className="ml-16">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-lg text-primary font-medium mb-2">
                          <Briefcase className="h-5 w-5" />
                          {experience.company}
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {experience.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {experience.startDate} - {experience.current ? 'Present' : experience.endDate}
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant={getTypeColor(experience.type)}
                        className="mt-4 sm:mt-0"
                      >
                        {getTypeLabel(experience.type)}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-16" />

        {/* Summary Stats */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Impact Summary
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Users Impacted</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground">Average Revenue Increase</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I&apos;m always excited to take on new challenges and create meaningful 
            solutions. Let&apos;s discuss how I can help with your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="https://docs.google.com/document/d/13dbqlzTmFgiQJVOGmOCjCytSYYhHs_xRhJ0CWgw3Gpg/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-muted transition-colors"
            >
              View Resume
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
