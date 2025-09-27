import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Code, 
  TrendingUp, 
  MessageSquare,
  CheckCircle,
  Clock
} from "lucide-react";
import { services } from "@/data/services";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
  "Services - Prince Iranzi",
  "Professional software engineering and digital marketing services. Web apps, mobile apps, PWAs, SEO, and growth marketing strategies.",
  "/services"
);

export default function ServicesPage() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'development': return Code;
      case 'marketing': return TrendingUp;
      case 'consulting': return MessageSquare;
      default: return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'development': return 'text-blue-600';
      case 'marketing': return 'text-green-600';
      case 'consulting': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const getCategoryBgColor = (category: string) => {
    switch (category) {
      case 'development': return 'bg-blue-50 dark:bg-blue-950/20';
      case 'marketing': return 'bg-green-50 dark:bg-green-950/20';
      case 'consulting': return 'bg-purple-50 dark:bg-purple-950/20';
      default: return 'bg-gray-50 dark:bg-gray-950/20';
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software engineering and digital marketing solutions 
            tailored to your business needs. From concept to deployment and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = getCategoryIcon(service.category);
            const iconColor = getCategoryColor(service.category);
            const bgColor = getCategoryBgColor(service.category);
            
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${bgColor}`}>
                      <Icon className={`h-6 w-6 ${iconColor}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        ${service.pricing.starting}
                        <span className="text-sm font-normal text-muted-foreground">
                          /{service.pricing.period}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Starting price
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {service.timeline}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">What&apos;s Included</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-muted-foreground">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {service.technologies && service.technologies.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.slice(0, 6).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {service.technologies.length > 6 && (
                          <Badge variant="secondary" className="text-xs">
                            +{service.technologies.length - 6}
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Deliverables</h4>
                    <ul className="space-y-1">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="text-sm text-muted-foreground">
                          • {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button asChild className="w-full">
                    <a href="/contact">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Separator className="mb-16" />

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            My Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Discovery</h3>
              <p className="text-muted-foreground text-sm">
                Understanding your needs, goals, and requirements through detailed consultation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Planning</h3>
              <p className="text-muted-foreground text-sm">
                Creating a detailed project plan with timelines, milestones, and deliverables.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Development</h3>
              <p className="text-muted-foreground text-sm">
                Building your solution with regular updates and transparent communication.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Launch & Support</h3>
              <p className="text-muted-foreground text-sm">
                Deploying your solution and providing ongoing support and maintenance.
              </p>
            </div>
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Why Choose Me */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why Choose Me?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Technical Excellence</h3>
              <p className="text-muted-foreground">
                Modern technologies, clean code, and best practices for scalable, maintainable solutions.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Business Focus</h3>
              <p className="text-muted-foreground">
                Every solution is designed with your business goals and user needs in mind.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Proven Results</h3>
              <p className="text-muted-foreground">
                Track record of delivering successful projects that drive real business value.
              </p>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and how I can help you achieve your goals. 
            I&apos;m here to answer any questions and provide a detailed proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">Start a Project</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
