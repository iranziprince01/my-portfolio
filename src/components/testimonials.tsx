"use client"

import { Quote, Star } from "lucide-react"
import { ScrollReveal } from "./animations/scroll-reveal"

interface Testimonial {
  name: string
  role: string
  company: string
  image?: string
  content: string
  rating?: number
}

const testimonials: Testimonial[] = [
  {
    name: "Kayigamba Alice",
    role: "Managing Director",
    company: "PPEA",
    content: "Prince delivered exceptional results on our project. His technical expertise combined with strategic thinking helped us achieve our goals faster than expected. The website he built for us has significantly improved our online presence and user engagement.",
    rating: 5
  },
  {
    name: "Rev. Jean nsengiyumva",
    role: "Senior Pastor",
    company: "IARM",
    content: "Working with Prince was a game-changer for our ministry. He not only built a beautiful and functional website but also provided valuable insights on user experience and digital marketing. His attention to detail and commitment to quality is outstanding.",
    rating: 5
  },
  {
    name: "Fati Sango",
    role: "Founder",
    company: "MindSafi",
    content: "Prince transformed our vision into reality and exceeded our expectations. The mental health platform he developed is intuitive, accessible, and has helped us reach more people in need. His technical skills and understanding of our mission made all the difference.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="site-content">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-display">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by organizations and leaders who value quality and innovation
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.05} direction="up">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors h-full flex flex-col">
                <Quote className="h-6 w-6 text-primary/20 mb-3" />
                
                {testimonial.rating && (
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                    ))}
                  </div>
                )}

                <p className="text-foreground mb-4 leading-relaxed text-sm flex-1">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
