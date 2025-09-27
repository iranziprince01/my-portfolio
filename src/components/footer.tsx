import Link from "next/link"
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/iranziprince01",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/prince-iranzi/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:prince@princeiranzi.dev",
    icon: Mail,
  },
]

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Prince Iranzi
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Software Engineer & Digital Marketer building reliable, human-centered 
              web platforms and growth-ready experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:princeiranzi4@gmail.com"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                princeiranzi4@gmail.com
              </a>
              <a
                href="tel:+250785961427"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                +250785961427
              </a>
              <a
                href="https://docs.google.com/document/d/13dbqlzTmFgiQJVOGmOCjCytSYYhHs_xRhJ0CWgw3Gpg/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Prince Iranzi. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
