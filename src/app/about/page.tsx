import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Code, 
  TrendingUp, 
  MapPin, 
  Award, 
  Users, 
  Target,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { skillsByCategory } from "@/data/skills";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
  "About - Prince Iranzi",
  "Learn about Prince Iranzi, a Software Engineer and Digital Marketer from Rwanda, East Africa. Discover his journey, skills, and passion for building human-centered digital solutions.",
  "/about"
);

export default function AboutPage() {
  const skillCategories = [
    { key: 'frontend', name: 'Frontend Development', icon: Code },
    { key: 'backend', name: 'Backend Development', icon: Code },
    { key: 'mobile', name: 'Mobile Development', icon: Code },
    { key: 'devops', name: 'DevOps & Deployment', icon: Code },
    { key: 'marketing', name: 'Digital Marketing', icon: TrendingUp },
    { key: 'tools', name: 'Tools & Technologies', icon: Code },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Software Engineer & Digital Marketer passionate about building 
            reliable, human-centered digital solutions that make a difference.
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Based in Kigali, Rwanda, I&apos;m a passionate software engineer and 
                  digital marketer with over 3 years of experience building 
                  web applications, mobile apps, and digital marketing strategies 
                  that drive real business results.
                </p>
                <p>
                  My journey began with a curiosity about how technology can solve 
                  real-world problems, especially in underserved communities. This 
                  led me to specialize in offline-first applications and digital 
                  marketing strategies that work in low-connectivity environments.
                </p>
                <p>
                  I believe in the power of technology to create positive change, 
                  whether it&apos;s through an educational PWA that works offline or 
                  a marketing campaign that reaches the right audience at the right time.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  Kigali, Rwanda, East Africa
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Experience</h3>
                </div>
                <p className="text-muted-foreground">
                  3+ years in software development and digital marketing
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Focus</h3>
                </div>
                <p className="text-muted-foreground">
                  Human-centered design and accessible technology solutions
                </p>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Mission & Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">My Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To bridge the digital divide by creating accessible, reliable 
                technology solutions that work for everyone, regardless of 
                connectivity or technical expertise.
              </p>
            </Card>
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Core Values</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Accessibility and inclusion in all solutions</li>
                <li>• User-centered design and development</li>
                <li>• Continuous learning and improvement</li>
                <li>• Ethical technology practices</li>
                <li>• Community impact and social good</li>
              </ul>
            </Card>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Skills & Expertise
          </h2>
          <div className="space-y-8">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const skills = skillsByCategory[category.key] || [];
              
              if (skills.length === 0) return null;
              
              return (
                <Card key={category.key} className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <Badge 
                            variant={
                              skill.level === 'expert' ? 'default' :
                              skill.level === 'advanced' ? 'secondary' :
                              skill.level === 'intermediate' ? 'outline' : 'outline'
                            }
                            className="text-xs"
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {skill.years} year{skill.years !== 1 ? 's' : ''}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. 
            Whether you need a web application, mobile app, or digital marketing 
            strategy, let&apos;s discuss how I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a 
                href="https://docs.google.com/document/d/13dbqlzTmFgiQJVOGmOCjCytSYYhHs_xRhJ0CWgw3Gpg/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
