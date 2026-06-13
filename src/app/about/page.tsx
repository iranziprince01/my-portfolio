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
  CheckCircle
} from "lucide-react";
import { skillsByCategory } from "@/data/skills";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
  "About - Prince Iranzi",
  "Learn about Prince Iranzi, a Software Engineer and Digital Marketer based in Rwanda. Building Next.js websites, PWAs, and digital marketing for clients across East Africa and internationally.",
  "/about"
);

export default function AboutPage() {
  const skillCategories = [
    { key: 'languages', name: 'Languages', icon: Code },
    { key: 'frontend', name: 'Frontend Development', icon: Code },
    { key: 'backend', name: 'Backend Development', icon: Code },
    { key: 'mobile', name: 'Mobile Development', icon: Code },
    { key: 'devops', name: 'DevOps & Deployment', icon: Code },
    { key: 'marketing', name: 'Digital Marketing', icon: TrendingUp },
    { key: 'tools', name: 'Tools & Technologies', icon: Code },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="site-content">
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
                  Based in Kigali, Rwanda, I&apos;m a software engineer and digital
                  marketer with 4+ years of experience building websites, web apps,
                  and marketing strategies that drive real business results for
                  clients across East Africa and internationally.
                </p>
                <p>
                  My journey began with a curiosity about how technology can solve
                  real-world problems, especially in underserved communities. That
                  focus led me to offline-first applications, production-grade
                  websites for nonprofits and professionals, and campaigns that
                  reach the right audience.
                </p>
                <p>
                  I believe in technology that creates positive change — whether
                  it&apos;s a nonprofit site for Lumina Bridge Foundation, an
                  offline-first learning platform, or a marketing campaign that
                  turns visibility into inquiries and growth.
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
                  Kigali, Rwanda — serving clients across East Africa and internationally
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Experience</h3>
                </div>
                <p className="text-muted-foreground">
                  4+ years in software development and digital marketing
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Focus</h3>
                </div>
                <p className="text-muted-foreground">
                  Client websites, web apps, and growth-focused digital marketing
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
                To help nonprofits, founders, and growing brands launch reliable
                web platforms and marketing systems that expand reach, build trust,
                and create lasting community impact.
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
            I&apos;m open to new client projects — nonprofit websites, professional
            portfolios, web apps, and digital marketing. Let&apos;s talk about your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">Get In Touch</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
