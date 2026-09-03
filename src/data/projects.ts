import { z } from 'zod';
import { mediaUrls } from './media';

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

const rawProjects: Project[] = [
  {
    title: "Enviro Horizon Solutions",
    slug: "fresh-edges-services",
    summary:
      "Marketing website for Enviro Horizon Solutions, a property care company offering reliable maintenance and facility services with a clear path to request quotes and explore offerings.",
    tags: ["Web", "Corporate"],
    role: "Full-stack Developer",
    year: 2026,
    links: {
      live: "https://www.enviroworkssinc.ca/",
    },
    images: ["/FESL.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Service-focused homepage highlighting reliable property care",
      "Clear CTAs for inquiries and customer engagement",
      "Clean, mobile-friendly layout built for trust and conversions",
    ],
    outcomes: [
      "Gives EnviroWorks Services Inc a professional online presence for new client inquiries",
      "Makes services and contact paths easy to find on any device",
    ],
    description:
      "A modern business site for EnviroWorks Services Inc that presents property care offerings, builds trust with a polished brand experience, and guides visitors toward getting in touch.",
  },
  {
    title: "Complexe Scolaire Manasse",
    slug: "complexe-scolaire-manasse",
    summary:
      "Official school website for Complexe Scolaire Manasse in Mont-Amba, Kinshasa, presenting programs, admissions, and school information for parents and students.",
    tags: ["Web", "Education"],
    role: "Full-stack Developer",
    year: 2026,
    links: {
      live: "https://complexe-scolaire-manasse.vercel.app/",
    },
    images: ["/CSM.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "School identity and program information tailored for families in Kinshasa",
      "Structured pages for admissions, contact, and key school details",
      "Responsive design optimized for parents browsing on mobile",
    ],
    outcomes: [
      "Helps parents and students discover Complexe Scolaire Manasse online",
      "Centralizes school information and contact in one professional site",
    ],
    description:
      "A bilingual-friendly school website for Complexe Scolaire Manasse that showcases the institution's identity, programs, and enrollment information with a clear, accessible layout.",
  },
  {
    title: "Rwoga Family Association",
    slug: "rwoga",
    summary:
      "Official website for Rwoga Family Association, a student-led nonprofit founded by Congolese students at African Leadership University to support refugee communities.",
    tags: ["Web", "NGO", "Nonprofit"],
    role: "Full-stack Developer",
    year: 2026,
    links: {
      live: "https://www.rwoga.org/",
    },
    images: ["/rwoga.png"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    highlights: [
      "Hero and storytelling focused on lighting the way for refugee communities",
      "Clear paths to explore impact, partner, donate, and get involved",
      "Mission-led pages covering work, engagement, and transparency resources",
    ],
    outcomes: [
      "Gives Rwoga a professional public presence for donors, partners, and community members",
      "Makes it easier for visitors to understand the mission and take action",
    ],
    description:
      "A modern marketing site for Rwoga Family Association that presents the organization's mission, programs, and calls to action—from exploring impact to partnering and donating—with a clean, mobile-friendly layout.",
  },
  {
    title: "Innocent Photos - Photography Website",
    slug: "innocent-photos",
    summary:
      "Professional photography website for Innocent Photos, a Tallahassee-based studio offering weddings, portraits, family sessions, and more across the USA.",
    tags: ["Web", "Photography"],
    role: "Full-stack Developer",
    year: 2026,
    links: {
      live: "https://innocentphotos.com/",
    },
    images: ["/innocent_photos.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Portfolio showcase and service pages for weddings, portraits, family, and events",
      "Client testimonials and clear booking flow for session inquiries",
      "Mobile-first gallery and booking flow for session inquiries",
    ],
    outcomes: [
      "Helps visitors book sessions with clear service pages and CTAs",
      "Helps convert visitors into booked sessions with clear CTAs and service details"
    ]
  },
  {
    title: "Lumina Bridge Foundation - NGO Website",
    slug: "lumina-bridge-foundation",
    summary:
      "Official website for Lumina Bridge Foundation, an Edmonton-based nonprofit empowering youth and communities across Alberta through arts, culture, leadership, and wellness programs.",
    tags: ["Web", "NGO"],
    role: "Full-stack Developer",
    year: 2026,
    links: {
      live: "https://www.luminabridgefoundation.org/",
    },
    images: ["/lbf.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Mission, vision, and program areas presented for donors, partners, and community members",
      "Impact stories and priority populations sections highlighting real community outcomes",
      "Contact and office details with clear program navigation",
    ],
    outcomes: [
      "Supports donors, partners, and volunteers finding programs fast",
      "Supports program discovery, partnerships, volunteering, and community engagement"
    ]
  },
  {
    title: "Talent Bridge Africa - Student Talent Studio",
    slug: "talent-bridge-africa",
    summary: "Student-powered talent studio connecting African students, graduates, and refugee youth with growing businesses that need flexible digital talent.",
    tags: ["Web", "Talent Platform"],
    role: "Full-stack Developer",
    year: 2026,
    links: {
      live: "https://tbawork.com/",
    },
    images: ["/Talent Bridge Africa.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Landing page clearly explaining the student talent studio model",
      "Sections tailored for both businesses and students with clear CTAs",
      "Dual paths for students and businesses with clear next-step CTAs",
    ],
    outcomes: [
      "Connects students and refugee youth with real client opportunities",
    ]
  },
  {
    title: "Byishimo Patrick - Gospel Artist Portfolio",
    slug: "byishimo-patrick-artist",
    summary: "Official portfolio for gospel artist Patrick Byishimo, showcasing music, ministry story, events, and contact information.",
    tags: ["Web", "Artist Portfolio"],
    role: "Frontend Developer",
    year: 2026,
    links: {
      live: "https://www.byishimomusic.com/",
    },
    images: ["/patrick_byishimo.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Hero section centered on artist identity and latest releases",
      "Structured sections for music, events, and ministry impact",
      "Clean, responsive design suitable for fans, event organizers, and churches"
    ],
    outcomes: [
      "Gives Patrick a professional online presence as a gospel artist",
      "Supports bookings and engagement with audiences in Edmonton and beyond"
    ]
  },
  {
    title: "Fati Sango Portfolio",
    slug: "fati-sango-portfolio",
    summary:
      "Portfolio website for Fati Sango, social entrepreneur and business analyst: professional story, positioning, and impact online.",
    tags: ["Web", "Portfolio"],
    role: "Full-stack Developer",
    year: 2026,
    links: {
      live: "https://sango-portfolio.vercel.app/",
    },
    images: ["/sango.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Clear positioning as a social entrepreneur and business analyst",
      "Responsive layout with strong visual hierarchy",
      "Deployed on Vercel for fast, reliable delivery"
    ],
    outcomes: [
      "A dedicated professional presence for Fati Sango's work and impact",
      "Makes it easy for visitors to explore background and connect"
    ],
    description:
      "A modern portfolio showcasing Fati Sango's work as a social entrepreneur and business analyst, with sections tailored to story, expertise, and audience engagement."
  },
  {
    title: "TekRiders - Offline-first PWA E-Learning Platform",
    slug: "tekriders",
    summary: "Offline-first PWA for marginalized youth (Rwanda). Caches course metadata and supports sync between PouchDB (client) and CouchDB (server).",
    tags: ["Web App", "PWA", "EdTech"],
    role: "Full-stack engineer",
    year: 2025,
    links: {
      github: "https://github.com/iranziprince01/TekRiderz",
      live: "https://github.com/iranziprince01/TekRiderz",
    },
    images: ["/tekriders.png"],
    tech: ["Vite", "React", "TypeScript", "Tailwind", "PouchDB", "CouchDB", "Node", "Express", "Service Worker"],
    highlights: ["Offline login + enrolled course metadata", "PWA installable", "Sync on reconnect"],
    outcomes: ["Piloted with learners; improved access in low-connectivity settings"],
    description: "A comprehensive offline-first Progressive Web Application designed to provide educational content to marginalized youth in Rwanda. The platform ensures learning continuity even in areas with poor internet connectivity by implementing intelligent caching and synchronization mechanisms.",
    challenges: ["Implementing reliable offline-first architecture", "Managing data synchronization between client and server", "Ensuring seamless user experience across different network conditions"],
    results: ["Successfully deployed and tested with 50+ learners", "Achieved 95% offline functionality", "Reduced data usage by 60% through intelligent caching"]
  },
  {
    title: "International Anglican Revival Ministries - Church Website",
    slug: "iarm-ministries",
    summary: "Ministry site for IARM in Edmonton, outlining service times, ministries, and donation options for a multicultural congregation.",
    tags: ["Web", "Nonprofit", "Ministry"],
    role: "Frontend & content integration",
    year: 2025,
    links: {
      github: "https://github.com/iranziprince01/IARM",
      live: "https://www.iarmministries.org/",
    },
    images: ["/iarm.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: ["Clear service times and ministry overview", "Donation and contact calls-to-action", "Bilingual-friendly content for English and Kinyarwanda visitors"],
    outcomes: ["Improved digital presence for a multicultural church community", "Centralized information for worship schedules and outreach programs"]
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
    images: ["/graphics-sowc.png"],
    tech: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"],
    highlights: ["Professional branding", "Event graphics", "Social media assets"],
    outcomes: ["Created 100+ graphics for various events and platforms", "Enhanced brand visibility for educational institutions"]
  },
  {
    title: "Probity Partners East Africa (PPEA) - Law Firm Website",
    slug: "ppea-law",
    summary: "Informational site for Probity Partners East Africa with service pages and contact.",
    tags: ["Web", "Corporate"],
    role: "Full-stack",
    year: 2024,
    links: {
      github: "https://github.com/iranziprince01/ppea",
      live: "https://probitypartnersea.com/",
    },
    images: ["/PPEA.png"],
    tech: ["Next.js", "Tailwind", "Vercel"],
    highlights: ["Accessible layout", "SEO-ready structure", "Contact integration"],
    outcomes: ["Improved online presence", "Increased client inquiries by 25%"]
  },
  {
    title: "Mindsafi - Mental Health Website",
    slug: "mindsafi",
    summary: "Marketing site for mental health services with resources and contact funnel.",
    tags: ["Web", "Healthcare"],
    role: "Frontend/SEO",
    year: 2024,
    links: {
      github: "https://github.com/iranziprince01/mindsafi",
      live: "https://www.mindsafi.com/",
    },
    images: ["/mindsafi.png"],
    tech: ["Next.js", "Tailwind"],
    highlights: ["Accessible layout", "Resource library", "Clear service pages"],
    outcomes: ["Increased awareness of mental health services", "Improved accessibility compliance"]
  },
  {
    title: "BookHub - Library Management System",
    slug: "bookhub",
    summary: "CRUD library system: catalog, lending, user roles; admin dashboard.",
    tags: ["Platform", "CRUD"],
    role: "Backend/DB",
    year: 2023,
    links: {
      github: "https://github.com/iranziprince01/Book-Hub",
      live: "https://bookhub-alu.netlify.app/?#",
    },
    images: ["/bookhub.png"],
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
    images: ["/fitness-booking.jpg"],
    tech: ["Node.js", "Docker", "PostgreSQL", "GitHub Actions", "AWS"],
    highlights: ["Automated CI/CD pipeline", "Containerized deployment", "Monitoring integration"],
    outcomes: ["Reduced deployment time by 80%", "Improved system reliability"]
  },
  {
    title: "Olearn - Mobile E-Learning",
    slug: "olearn-mobile",
    summary: "Mobile learning app with course modules and assessments.",
    tags: ["Mobile", "EdTech"],
    role: "Mobile engineer",
    year: 2023,
    links: {
      github: "https://github.com/mathieumunyakazimoise/Olearn",
      live: "https://github.com/mathieumunyakazimoise/Olearn",
    },
    images: ["/olearn.webp"],
    tech: ["React Native", "Expo", "Firebase"],
    highlights: ["Cross-platform compatibility", "Offline content access", "Progress tracking"],
    outcomes: ["Launched on both iOS and Android", "10,000+ downloads"]
  },
  {
    title: "Earthwise - Mobile App",
    slug: "earthwise-mobile",
    summary: "Conservation awareness & community actions tracker.",
    tags: ["Mobile", "Conservation"],
    role: "Full-stack",
    year: 2024,
    links: {
      github: "https://github.com/iranziprince01/earthwise",
    },
    images: ["/earthwise.jpg"],
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
    images: ["/file-management.png"],
    tech: ["Django", "PostgreSQL", "AWS S3"],
    highlights: ["Secure file sharing", "Role-based permissions", "Version control"],
    outcomes: ["Improved file organization", "Enhanced security measures"]
  },
  {
    title: "Skillhub - E-Learning Platform",
    slug: "skillhub",
    summary: "Web e-learning with courses, progress tracking, and quizzes.",
    tags: ["Web App", "EdTech"],
    role: "Full-stack",
    year: 2023,
    links: {
      github: "https://github.com/iranziprince01/skillhub",
      live: "https://iranziprince01.github.io/SkillHub/home.html",
    },
    images: ["/skillhub.png"],
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
    images: ["/academic-projects.png"],
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
    images: ["/honnette.png"],
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Font Awesome"],
    highlights: ["Responsive design", "Glass morphism effects", "Interactive timeline", "Women empowerment focus"],
    outcomes: ["Showcased client's impact in women empowerment", "Professional portfolio presentation", "Mobile-first responsive design"]
  },
  {
    title: "Patrick Iranzi - Personal Leadership Portfolio",
    slug: "patrick-portfolio",
    summary: "Personal portfolio highlighting leadership journey, key artifacts, and experiences as an ALU student and emerging entrepreneur.",
    tags: ["Web", "Portfolio"],
    role: "Frontend Developer",
    year: 2025,
    links: {
      github: "https://github.com/iranziprince01/patrick-portfolio",
      live: "https://patrick-portfolio-theta.vercel.app/",
    },
    images: ["/Patrick.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Timeline of leadership milestones and key artifacts",
      "Clean, reader-friendly layout focused on story and impact",
      "Responsive design optimized for mobile and desktop"
    ],
    outcomes: [
      "Showcases Patrick's leadership journey and core competencies",
      "Provides a professional link for applications and networking"
    ]
  }
];

export const projects: Project[] = rawProjects
  .map((project) => ({
    ...project,
    images: mediaUrls(project.images),
  }))
  .sort((a, b) => b.year - a.year);

// Validate all projects
projects.forEach((project, index) => {
  try {
    ProjectSchema.parse(project);
  } catch (error) {
    console.error(`Project at index ${index} is invalid:`, error);
  }
});
