import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { BackToTop } from "@/components/back-to-top"
import { siteCopy } from "@/data/site-copy"

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
]

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/20 bg-primary text-primary-foreground">
      <div className="site-container py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-4 text-lg font-[900] text-primary-foreground">
              Prince Iranzi
            </h3>
            <p className="mb-4 max-w-md text-primary-foreground/90">
              {siteCopy.footer.tagline}
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
                    className="text-primary-foreground/90 transition-colors hover:text-primary-foreground"
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
            <h4 className="mb-4 text-sm font-[900] text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-[900] text-primary-foreground">
              Say hello
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:princeiranzi4@gmail.com"
                className="flex items-start text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
              >
                <Mail className="mt-0.5 mr-2 h-4 w-4 shrink-0" />
                <span className="break-all">princeiranzi4@gmail.com</span>
              </a>
              <a
                href="tel:+250785961427"
                className="flex items-center text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
              >
                <Phone className="mr-2 h-4 w-4 shrink-0" />
                +250785961427
              </a>
              <p className="flex items-center text-sm text-primary-foreground/90">
                <MapPin className="mr-2 h-4 w-4 shrink-0" />
                Kigali, Rwanda
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex justify-center sm:justify-start items-center">
            <p className="text-sm text-primary-foreground/90">
              © {new Date().getFullYear()} Prince Iranzi. All rights reserved.
            </p>
          </div>
        </div>
        <BackToTop />
      </div>
    </footer>
  )
}
