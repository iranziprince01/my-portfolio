"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Project } from "@/data/projects"
import { ScrollReveal } from "./animations/scroll-reveal"

interface ProjectCardProps {
  project: Project
  index?: number
  featured?: boolean
}

const getProjectImage = (slug: string) => {
  const imageMap: Record<string, string> = {
    'lumina-bridge-foundation': '/lbf.png',
    'talent-bridge-africa': '/Talent Bridge Africa.png',
    'byishimo-patrick-artist': '/patrick_byishimo.png',
    'fati-sango-portfolio': '/sango.png',
    'tekriders': '/tekriders.png',
    'iarm-ministries': '/iarm.png',
    'graphic-design-work': '/graphics-sowc.png',
    'ppea-law': '/PPEA.png',
    'mindsafi': '/mindsafi.png',
    'bookhub': '/bookhub.png',
    'fitness-booking-devops': '/fitness-booking.jpg',
    'olearn-mobile': '/olearn.webp',
    'earthwise-mobile': '/earthwise.jpg',
    'django-file-mgmt': '/file-management.png',
    'skillhub': '/skillhub.png',
    'github-academics': '/academic-projects.png',
    'honnette-portfolio': '/honnette.png',
  }
  // Fallback to a known existing image if slug is not mapped
  return imageMap[slug] || '/tekriders.png'
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const hasLiveLink = project.links.live || project.links.demo

  return (
    <ScrollReveal delay={index * 0.05} direction="up">
      <Card className="group h-full flex flex-col overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl bg-card/50 backdrop-blur-sm pt-0">
        {/* Image Container - flush to top */}
        <div className="relative h-52 bg-gradient-to-br from-muted/50 to-muted/30 overflow-hidden rounded-t-xl">
          <Image
            src={getProjectImage(project.slug)}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Year Badge - Modern style */}
          <div className="absolute top-3 left-3 z-10">
            <Badge className="bg-background/90 backdrop-blur-md text-foreground border border-border/50 shadow-sm text-xs font-medium px-2.5 py-0.5">
              {project.year}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-5 flex-1 flex flex-col">
          {/* Header Section */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-display leading-tight line-clamp-2">
              {project.title}
            </h3>

            {/* Tags - Compact and modern */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="text-[10px] px-2 py-0.5 border-primary/15 text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Role - Subtle */}
          <div className="mt-auto pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
              {project.role}
            </p>
            
            {/* Action Buttons - Equal Size */}
            <div className="flex gap-2">
              {hasLiveLink ? (
                <Button
                  asChild
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs h-9 shadow-sm hover:shadow-md transition-all"
                >
                  <a
                    href={project.links.live || project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Visit Site
                  </a>
                </Button>
              ) : (
                <Button
                  disabled
                  className="flex-1 opacity-40 cursor-not-allowed text-xs h-9"
                  variant="outline"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                  Unavailable
                </Button>
              )}
              
              <Button 
                asChild 
                variant="outline" 
                className="flex-1 border border-border/50 hover:border-primary/50 text-xs h-9 font-medium"
              >
                <Link href={`/projects/${project.slug}`} className="flex items-center justify-center gap-1.5">
                  More Details
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  )
}
