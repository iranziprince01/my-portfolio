import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, TrendingUp } from "lucide-react";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Software Engineer &{" "}
                <span className="text-primary">Digital Marketer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Building reliable, human-centered web platforms and growth-ready 
                experiences. Specializing in React, Next.js, and digital marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/resume">Get Resume</Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            
            {/* Right side - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 shadow-2xl">
                  <div className="w-full h-full relative rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm">
        <Image
                      src="/profile.PNG"
                      alt="Prince Iranzi - Software Engineer & Digital Marketer"
                      fill
                      className="object-cover object-center"
          priority
        />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/80">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Users Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing full-stack development 
              and digital marketing expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.slug} className="group hover:shadow-lg transition-shadow overflow-hidden">
                {/* Project Thumbnail */}
                <div className="relative h-48 bg-muted/30 overflow-hidden">
                  <Image
                    src={
                      project.slug === 'tekriders' ? '/tekriders.png' :
                      project.slug === 'iarm-ministries' ? '/iarm.png' :
                      project.slug === 'graphic-design-work' ? '/graphics-sowc.png' :
                      project.slug === 'ppea-law' ? '/PPEA.png' :
                      project.slug === 'mindsafi' ? '/mindsafi.png' :
                      project.slug === 'bookhub' ? '/bookhub.png' :
                      project.slug === 'fitness-booking-devops' ? '/fitness-booking.jpg' :
                      project.slug === 'olearn-mobile' ? '/olearn.webp' :
                      project.slug === 'earthwise-mobile' ? '/earthwise.jpg' :
                      project.slug === 'django-file-mgmt' ? '/file-management.png' :
                      project.slug === 'skillhub' ? '/skillhub.png' :
                      project.slug === 'github-academics' ? '/academic-projects.png' :
                      project.slug === 'honnette-portfolio' ? '/honnette.png' :
                      '/images/projects/placeholder.jpg'
                    }
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{project.year}</Badge>
                    <div className="flex gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {project.role}
                    </span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/projects/${project.slug}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining technical expertise with marketing insights to deliver 
              comprehensive digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Software Engineering
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Full-stack web applications, mobile apps, and PWAs built with 
                modern technologies like React, Next.js, and TypeScript.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Web & Mobile App Development</li>
                <li>• Progressive Web Apps (PWA)</li>
                <li>• API Development & Integration</li>
                <li>• DevOps & Deployment</li>
              </ul>
            </Card>
            <Card className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Digital Marketing
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Strategic digital marketing campaigns that drive growth, 
                increase visibility, and generate measurable results.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• SEO & Content Marketing</li>
                <li>• Social Media Strategy</li>
                <li>• Paid Advertising Campaigns</li>
                <li>• Analytics & Performance Tracking</li>
              </ul>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
