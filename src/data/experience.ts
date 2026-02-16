import { z } from 'zod';

export const ExperienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string(),
  achievements: z.array(z.string()),
  technologies: z.array(z.string()),
  type: z.enum(['full-time', 'part-time', 'contract', 'freelance', 'internship']),
});

export type Experience = z.infer<typeof ExperienceSchema>;

export const experiences: Experience[] = [
  {
    title: "Software Engineer & Digital Marketer",
    company: "Freelance",
    location: "Kigali, Rwanda",
    startDate: "2023",
    current: true,
    description: "Providing full-stack development and digital marketing services to clients across East Africa. Specializing in web applications, mobile apps, and growth marketing strategies.",
    achievements: [
      "Delivered 50+ web applications and mobile apps",
      "Increased client revenue by 40% through digital marketing campaigns",
      "Built offline-first PWA serving 500+ users in low-connectivity areas",
      "Established partnerships with 3 local businesses for ongoing development"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Python", "Django", "React Native", "PostgreSQL", "MongoDB", "AWS", "Vercel"],
    type: "freelance"
  },
  {
    title: "Marketing & Operations, Social Media Intern",
    company: "ALU, School of Wildlife Conservation",
    location: "Remote (Rwanda)",
    startDate: "Oct 2023",
    endDate: "Aug 2025",
    current: false,
    description: "Led social media marketing initiatives by creating engaging campaigns, analyzing performance metrics, and optimizing strategies to expand audience reach and strengthen brand presence.",
    achievements: [
      "Created engaging social media campaigns for wildlife conservation",
      "Analyzed performance metrics to optimize marketing strategies",
      "Expanded audience reach and strengthened brand presence",
      "Developed content strategies for conservation awareness"
    ],
    technologies: ["Social Media Management", "Analytics", "Content Creation", "Brand Management"],
    type: "internship"
  },
  {
    title: "Marketing - Social Media Manager",
    company: "Rock & Stones Ltd",
    location: "Remote (Kenya)",
    startDate: "April 2025",
    endDate: "Aug 2025",
    current: false,
    description: "Managed multi-platform social media presence, creating compelling content to grow audiences, boost customer engagement, and showcase Kenyan fashion culture.",
    achievements: [
      "Managed multi-platform social media presence",
      "Created compelling content for fashion brand",
      "Grew audience and boosted customer engagement",
      "Showcased Kenyan fashion culture effectively"
    ],
    technologies: ["Social Media Management", "Content Creation", "Fashion Marketing", "Brand Development"],
    type: "contract"
  },
  {
    title: "Backend Development Intern",
    company: "Rich Tech Company Ltd",
    location: "On-site (Rwanda)",
    startDate: "May 2024",
    endDate: "Aug 2024",
    current: false,
    description: "Engineered scalable backend systems by building Node.js APIs, optimizing databases, and collaborating with teams to ensure performance and reliability.",
    achievements: [
      "Built scalable Node.js APIs",
      "Optimized database performance",
      "Collaborated with development teams",
      "Ensured system performance and reliability"
    ],
    technologies: ["Node.js", "API Development", "Database Optimization", "Backend Systems"],
    type: "internship"
  },
  {
    title: "Frontend Web Development Intern",
    company: "Oasis Infobyte",
    location: "Remote (India)",
    startDate: "Sept 2023",
    endDate: "Dec 2023",
    current: false,
    description: "Developed responsive, secure, and user-friendly websites, enhancing client satisfaction through usability testing and tailored digital solutions.",
    achievements: [
      "Developed responsive and user-friendly websites",
      "Enhanced client satisfaction through usability testing",
      "Created tailored digital solutions",
      "Implemented security best practices"
    ],
    technologies: ["Frontend Development", "Responsive Design", "Usability Testing", "Web Security"],
    type: "internship"
  }
];
