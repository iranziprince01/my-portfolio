import { z } from 'zod';

export const ProjectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  tags: z.array(z.string()),
  role: z.string(),
  year: z.number(),
  links: z.object({
    github: z.string().optional(),
    live: z.string().optional(),
    demo: z.string().optional(),
  }),
  images: z.array(z.string()).optional(),
  outcomes: z.array(z.string()).optional(),
  tech: z.array(z.string()),
  highlights: z.array(z.string()).optional(),
  description: z.string().optional(),
  challenges: z.array(z.string()).optional(),
  results: z.array(z.string()).optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const projects: Project[] = [
  {
    title: "TekRiders – Offline-first PWA E-Learning Platform",
    slug: "tekriders",
    summary: "Offline-first PWA for marginalized youth (Rwanda). Caches course metadata and supports sync between PouchDB (client) and CouchDB (server).",
    tags: ["Web App", "PWA", "EdTech"],
    role: "Full-stack engineer",
    year: 2025,
    links: {
      github: "https://github.com/iranziprince01/TekRiderz",
      live: "https://github.com/iranziprince01/TekRiderz",
    },
    images: ["/images/projects/tekriders-1.jpg", "/images/projects/tekriders-2.jpg"],
    tech: ["Vite", "React", "TypeScript", "Tailwind", "PouchDB", "CouchDB", "Node", "Express", "Service Worker"],
    highlights: ["Offline login + enrolled course metadata", "PWA installable", "Sync on reconnect"],
    outcomes: ["Piloted with learners; improved access in low-connectivity settings"],
    description: "A comprehensive offline-first Progressive Web Application designed to provide educational content to marginalized youth in Rwanda. The platform ensures learning continuity even in areas with poor internet connectivity by implementing intelligent caching and synchronization mechanisms.",
    challenges: ["Implementing reliable offline-first architecture", "Managing data synchronization between client and server", "Ensuring seamless user experience across different network conditions"],
    results: ["Successfully deployed and tested with 50+ learners", "Achieved 95% offline functionality", "Reduced data usage by 60% through intelligent caching"]
  },
  {
    title: "Graphic Design Work (ALU, School of Wildlife Conservation)",
    slug: "graphic-design-work",
    summary: "Professional graphic design work for ALU and School of Wildlife Conservation, including branding, event materials, and promotional graphics.",
    tags: ["Graphic Design", "Branding"],
    role: "Graphic Designer",
    year: 2024,
    links: {
      live: "https://www.instagram.com/aluconservation/",
    },
    images: ["/graphics-sowc.png", "/images/projects/graphics-2.jpg"],
    tech: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"],
    highlights: ["Professional branding", "Event graphics", "Social media assets"],
    outcomes: ["Created 100+ graphics for various events and platforms", "Enhanced brand visibility for educational institutions"]
  },
  {
    title: "Probity Partners East Africa (PPEA) – Law Firm Website",
    slug: "ppea-law",
    summary: "Informational site for Probity Partners East Africa with service pages and contact.",
    tags: ["Web", "Corporate"],
    role: "Full-stack",
    year: 2024,
    links: {
      github: "https://github.com/iranziprince01/ppea",
      live: "https://probitypartnersea.com/",
    },
    images: ["/images/projects/ppea-1.jpg", "/images/projects/ppea-2.jpg"],
    tech: ["Next.js", "Tailwind", "Vercel"],
    highlights: ["Professional design", "SEO optimized", "Contact integration"],
    outcomes: ["Improved online presence", "Increased client inquiries by 25%"]
  },
  {
    title: "Mindsafi – Mental Health Website",
    slug: "mindsafi",
    summary: "Marketing site for mental health services with resources and contact funnel.",
    tags: ["Web", "Healthcare"],
    role: "Frontend/SEO",
    year: 2024,
    links: {
      github: "https://github.com/iranziprince01/mindsafi",
      live: "https://www.mindsafi.com/",
    },
    images: ["/images/projects/mindsafi-1.jpg", "/images/projects/mindsafi-2.jpg"],
    tech: ["Next.js", "Tailwind"],
    highlights: ["Accessible design", "SEO optimized", "Resource library"],
    outcomes: ["Increased awareness of mental health services", "Improved accessibility compliance"]
  },
  {
    title: "BookHub – Library Management System",
    slug: "bookhub",
    summary: "CRUD library system: catalog, lending, user roles; admin dashboard.",
    tags: ["Platform", "CRUD"],
    role: "Backend/DB",
    year: 2023,
    links: {
      github: "https://github.com/iranziprince01/Book-Hub",
      live: "https://bookhub-alu.netlify.app/?#",
    },
    images: ["/images/projects/bookhub-1.jpg", "/images/projects/bookhub-2.jpg"],
    tech: ["Django", "PostgreSQL", "Tailwind", "JavaScript"],
    highlights: ["Role-based access control", "Automated notifications", "Inventory management"],
    outcomes: ["Streamlined library operations", "Reduced manual work by 70%"]
  },
  {
    title: "Fitness Booking DevOps System",
    slug: "fitness-booking-devops",
    summary: "Booking & scheduling platform; CI/CD with containerized deploys.",
    tags: ["Platform", "DevOps"],
    role: "DevOps/Full-stack",
    year: 2024,
    links: {
      github: "https://github.com/iranziprince01/Fitness-booking-system",
      live: "https://github.com/iranziprince01/Fitness-booking-system",
    },
    images: ["/images/projects/fitness-1.jpg", "/images/projects/fitness-2.jpg"],
    tech: ["Node.js", "Docker", "PostgreSQL", "GitHub Actions", "AWS"],
    highlights: ["Automated CI/CD pipeline", "Containerized deployment", "Monitoring integration"],
    outcomes: ["Reduced deployment time by 80%", "Improved system reliability"]
  },
  {
    title: "Olearn – Mobile E-Learning",
    slug: "olearn-mobile",
    summary: "Mobile learning app with course modules and assessments.",
    tags: ["Mobile", "EdTech"],
    role: "Mobile engineer",
    year: 2023,
    links: {
      github: "https://github.com/mathieumunyakazimoise/Olearn",
      live: "https://github.com/mathieumunyakazimoise/Olearn",
    },
    images: ["/images/projects/olearn-1.jpg", "/images/projects/olearn-2.jpg"],
    tech: ["React Native", "Expo", "Firebase"],
    highlights: ["Cross-platform compatibility", "Offline content access", "Progress tracking"],
    outcomes: ["Launched on both iOS and Android", "10,000+ downloads"]
  },
  {
    title: "Earthwise – Mobile App",
    slug: "earthwise-mobile",
    summary: "Conservation awareness & community actions tracker.",
    tags: ["Mobile", "Conservation"],
    role: "Full-stack",
    year: 2024,
    links: {
      github: "https://github.com/iranziprince01/earthwise",
    },
    images: ["/images/projects/earthwise-1.jpg", "/images/projects/earthwise-2.jpg"],
    tech: ["React Native", "Firebase", "Google Maps API"],
    highlights: ["Location-based features", "Community engagement", "Impact tracking"],
    outcomes: ["Engaged 500+ users in conservation activities", "Tracked 1000+ environmental actions"]
  },
  {
    title: "Django File Management System",
    slug: "django-file-mgmt",
    summary: "Role-based file storage and sharing system.",
    tags: ["Web App", "Django"],
    role: "Backend",
    year: 2023,
    links: {
      github: "https://github.com/iranziprince01/File-Management-Application-Dreamers",
      live: "https://github.com/iranziprince01/File-Management-Application-Dreamers",
    },
    images: ["/images/projects/django-file-1.jpg", "/images/projects/django-file-2.jpg"],
    tech: ["Django", "PostgreSQL", "AWS S3"],
    highlights: ["Secure file sharing", "Role-based permissions", "Version control"],
    outcomes: ["Improved file organization", "Enhanced security measures"]
  },
  {
    title: "Skillhub – E-Learning Platform",
    slug: "skillhub",
    summary: "Web e-learning with courses, progress tracking, and quizzes.",
    tags: ["Web App", "EdTech"],
    role: "Full-stack",
    year: 2023,
    links: {
      github: "https://github.com/iranziprince01/skillhub",
      live: "https://iranziprince01.github.io/SkillHub/home.html",
    },
    images: ["/images/projects/skillhub-1.jpg", "/images/projects/skillhub-2.jpg"],
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    highlights: ["Course management", "Progress tracking", "Payment integration"],
    outcomes: ["Launched with 20+ courses", "Generated $5K+ in revenue"]
  },
  {
    title: "Various Academic Projects (GitHub)",
    slug: "github-academics",
    summary: "Collection of assignments and prototypes; see GitHub profile.",
    tags: ["Academic", "Showcase"],
    role: "Author",
    year: 2023,
    links: {
      github: "https://github.com/iranziprince01",
      live: "https://github.com/iranziprince01",
    },
    images: ["/images/projects/academic-1.jpg"],
    tech: ["Various"],
    highlights: ["Diverse project portfolio", "Continuous learning", "Open source contributions"],
    outcomes: ["Demonstrated technical versatility", "Built strong GitHub presence"]
  },
  {
    title: "Honnette's Personal Portfolio",
    slug: "honnette-portfolio",
    summary: "Modern responsive portfolio website for women empowerment advocate and ALU student, showcasing initiatives and impact in community development.",
    tags: ["Web", "Portfolio"],
    role: "Frontend Developer",
    year: 2024,
    links: {
      github: "https://github.com/iranziprince01/divine-portfolio",
      live: "https://divine-portfolio-ten.vercel.app/",
    },
    images: ["/honnette.png", "/images/projects/honnette-2.jpg"],
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Font Awesome"],
    highlights: ["Responsive design", "Glass morphism effects", "Interactive timeline", "Women empowerment focus"],
    outcomes: ["Showcased client's impact in women empowerment", "Professional portfolio presentation", "Mobile-first responsive design"]
  }
];

// Validate all projects
projects.forEach((project, index) => {
  try {
    ProjectSchema.parse(project);
  } catch (error) {
    console.error(`Project at index ${index} is invalid:`, error);
  }
});
