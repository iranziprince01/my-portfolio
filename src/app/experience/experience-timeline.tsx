"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import {
  Calendar,
  MapPin,
  Briefcase,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react"
import { Experience } from "@/data/experience"

function getTypeLabel(type: string) {
  const labels: Record<string, string> = {
    "full-time": "Full-time",
    "part-time": "Part-time",
    contract: "Contract",
    freelance: "Freelance",
    internship: "Internship",
  }
  return labels[type] ?? type
}

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="relative">
      {/* Vertical line - visible on larger screens */}
      <div
        className="absolute left-[23px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/40 hidden sm:block"
        aria-hidden
      />

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.08}>
            <div className="relative flex gap-6 sm:gap-8">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">
                  {experiences.length - index}
                </span>
              </div>

              {/* Card */}
              <Card className="flex-1 overflow-hidden border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-card/80">
                {/* Accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/60" />

                <CardContent className="p-6 sm:p-8">
                  {/* Header row */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display">
                          {exp.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="border-primary/40 text-primary font-medium text-xs"
                        >
                          {getTypeLabel(exp.type)}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase className="h-4 w-4 flex-shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.startDate}
                          {exp.current ? " – Present" : ` – ${exp.endDate}`}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 pl-0 sm:pl-0">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-medium bg-primary/5 text-foreground border border-primary/10 hover:border-primary/20 hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
