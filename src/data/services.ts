import { z } from 'zod';

export const ServiceSchema = z.object({
  title: z.string(),
  description: z.string(),
  features: z.array(z.string()),
  pricing: z.object({
    starting: z.string(),
    currency: z.string().default("USD"),
    period: z.string().default("project"),
  }),
  category: z.enum(['development', 'marketing', 'consulting']),
  technologies: z.array(z.string()).optional(),
  deliverables: z.array(z.string()),
  timeline: z.string(),
});

export type Service = z.infer<typeof ServiceSchema>;

export const services: Service[] = [
  {
    title: "Web Application Development",
    description: "Custom web applications built with modern technologies, focusing on performance, scalability, and user experience.",
    features: [
      "Responsive design for all devices",
      "Fast loading times",
      "Secure authentication",
      "Database integration",
      "API development",
      "Mobile-first approach"
    ],
    pricing: {
      starting: "400-800",
      currency: "USD",
      period: "project"
    },
    category: "development",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Vercel"],
    deliverables: [
      "Fully functional web application",
      "Source code and documentation",
      "Deployment and hosting setup",
      "3 months of support and maintenance"
    ],
    timeline: "4-8 weeks"
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications for iOS and Android using React Native and Flutter, ensuring consistent user experience across platforms.",
    features: [
      "Cross-platform compatibility",
      "Native performance",
      "Offline functionality",
      "Push notifications",
      "App store deployment",
      "User authentication",
      "Real-time features"
    ],
    pricing: {
      starting: "1000-1500",
      currency: "USD",
      period: "project"
    },
    category: "development",
    technologies: ["React Native", "Flutter", "Firebase", "TypeScript", "Redux", "Jest"],
    deliverables: [
      "iOS and Android apps",
      "App store listings",
      "Source code and documentation",
      "6 months of support and updates"
    ],
    timeline: "6-12 weeks"
  },
  {
    title: "Progressive Web App (PWA) Development",
    description: "Offline-first web applications that work like native apps, perfect for areas with limited internet connectivity.",
    features: [
      "Offline functionality",
      "App-like experience",
      "Push notifications",
      "Installable on devices",
      "Fast loading",
      "Background sync",
      "Cross-platform compatibility"
    ],
    pricing: {
      starting: "500-1000",
      currency: "USD",
      period: "project"
    },
    category: "development",
    technologies: ["React", "PWA", "Service Workers", "IndexedDB", "Workbox", "Vite"],
    deliverables: [
      "Fully functional PWA",
      "Offline capabilities",
      "Installation guide",
      "Performance optimization"
    ],
    timeline: "5-10 weeks"
  },
  {
    title: "Digital Marketing Services",
    description: "Comprehensive digital marketing solutions including graphic design, social media management, SEO, paid advertising, and email marketing to grow your business.",
    features: [
      "Graphic design and branding",
      "Social media management",
      "SEO optimization",
      "Paid advertising campaigns",
      "Email marketing",
      "Analytics and reporting",
      "Brand positioning"
    ],
    pricing: {
      starting: "200-800",
      currency: "USD",
      period: "month"
    },
    category: "marketing",
    technologies: ["Adobe Creative Suite", "Google Analytics", "Facebook Ads", "Google Ads", "Canva", "Mailchimp"],
    deliverables: [
      "Comprehensive marketing strategy",
      "Visual content and graphics",
      "Social media content calendar",
      "Campaign setup and management",
      "Monthly performance reports"
    ],
    timeline: "Ongoing"
  },
];
