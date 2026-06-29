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
    name: "Aristote Bikino",
    role: "CEO",
    company: "Lumina Bridge Foundation",
    content: "Prince built a website that finally tells our story the right way. Our programs, impact, and contact details are easy to find, and partners and community members take us more seriously online. He listened, moved fast, and delivered exactly what we needed.",
    rating: 5
  },
  {
    name: "Innocent Bahati",
    role: "Professional Photographer",
    company: "Innocent Photos",
    content: "I needed a site that shows my work and makes booking simple. Prince delivered both. My portfolio looks clean, my services are clear, and clients can reach me without confusion. It has already helped me present my brand more professionally.",
    rating: 5
  },
  {
    name: "Jerome Iska",
    role: "Founder",
    company: "Talent Bridge Africa",
    content: "Prince understood our mission from day one. He built a site that explains what Talent Bridge Africa does for students and businesses in a way people actually get. The layout is clear, modern, and ready for the growth we are working toward.",
    rating: 5
  },
  {
    name: "Kayigamba Alice",
    role: "Managing Director",
    company: "PPEA",
    content: "Prince delivered exceptional results on our project. His technical expertise combined with strategic thinking helped us achieve our goals faster than expected. The website he built for us has significantly improved our online presence and user engagement.",
    rating: 5
  },
  {
    name: "Rev. Jean Nsengiyumva",
    role: "Senior Pastor",
    company: "IARM",
    content: "Working with Prince was a game-changer for our ministry. He not only built a beautiful and functional website but also provided valuable insights on user experience and digital marketing. His attention to detail and commitment to quality is outstanding.",
    rating: 5
  },
  {
    name: "Fati Sango",
    role: "Founder",
    company: "Mindsafi",
    content: "Prince built a professional, accessible website that helped us reach more people and clearly present our mental health services. His technical skill and genuine care for our mission made all the difference.",
    rating: 5
  }
]

export function Testimonials({ limit }: { limit?: number }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <section className="site-section">
      <div className="site-content">
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display">
              Client words
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.05} direction="up">
              <div className="playful-card p-6 h-full flex flex-col border-0 shadow-none">
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
