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
      "Delivered 15+ web applications and mobile apps",
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
    title: "Learning Design Experience Intern",
    company: "African Leadership University",
    location: "Remote (Rwanda)",
    startDate: "May 2023",
    endDate: "Sept 2024",
    current: false,
    description: "Assisted in designing and developing interactive courses, applying instructional design principles and education technologies to enhance learner engagement.",
    achievements: [
      "Designed interactive learning experiences",
      "Applied instructional design principles",
      "Enhanced learner engagement through technology",
      "Developed educational content and materials"
    ],
    technologies: ["Instructional Design", "Learning Management Systems", "Educational Technology", "Course Development"],
    type: "internship"
  },
  {
    title: "Admin & Programs Coordinator",
    company: "The Codefactory Africa",
    location: "Hybrid (Rwanda)",
    startDate: "June 2025",
    current: true,
    description: "Coordinating training programs and administrative operations, ensuring smooth execution, stakeholder engagement, and alignment with organizational goals.",
    achievements: [
      "Coordinated multiple training programs",
      "Managed administrative operations efficiently",
      "Ensured stakeholder engagement and satisfaction",
      "Aligned programs with organizational goals"
    ],
    technologies: ["Program Management", "Administrative Systems", "Stakeholder Management", "Training Coordination"],
    type: "full-time"
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
    title: "Community Conservation, Data Visualisation, and Mapping Extern",
    company: "National Geographic Society & The Nature Conservancy",
    location: "Remote (USA)",
    startDate: "Sept 2024",
    endDate: "Nov 2024",
    current: false,
    description: "Mastered production of data-driven maps and insights on plastic waste impacts while collaborating with conservation teams to recommend sustainable habitat protection strategies.",
    achievements: [
      "Produced data-driven maps on plastic waste impacts",
      "Collaborated with international conservation teams",
      "Developed sustainable habitat protection strategies",
      "Created visualizations for conservation insights"
    ],
    technologies: ["Data Visualization", "GIS Mapping", "Conservation Analysis", "Environmental Data"],
    type: "contract"
  },
  {
    title: "Robotics Facilitator",
    company: "Edified Generation Rwanda - King David Academy",
    location: "On-site (Rwanda)",
    startDate: "Jan 2024",
    endDate: "May 2024",
    current: false,
    description: "Designed and delivered robotics workshops, mentoring students in building functional robots and fostering critical STEM skills through hands-on learning.",
    achievements: [
      "Designed and delivered robotics workshops",
      "Mentored students in building functional robots",
      "Fostered critical STEM skills through hands-on learning",
      "Enhanced student engagement in technology education"
    ],
    technologies: ["Robotics", "STEM Education", "Workshop Design", "Student Mentoring"],
    type: "part-time"
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
  },
  {
    title: "IT & Customer Support",
    company: "Nyagatare Legal Firm",
    location: "On-site (Rwanda)",
    startDate: "Mar 2022",
    endDate: "Aug 2022",
    current: false,
    description: "Delivered IT troubleshooting and customer support services, ensuring seamless operations and efficient client service delivery.",
    achievements: [
      "Provided IT troubleshooting support",
      "Delivered efficient customer support services",
      "Ensured seamless operations",
      "Maintained client satisfaction"
    ],
    technologies: ["IT Support", "Customer Service", "Technical Troubleshooting", "System Maintenance"],
    type: "full-time"
  },
  {
    title: "Founder, CEO, and Executive Director",
    company: "Digital Refugee Empowerment Network (DREN)",
    location: "Remote",
    startDate: "July 2021",
    current: true,
    description: "Provide visionary leadership and advocacy, building strategic partnerships and mobilizing resources to expand digital access and inclusion for refugee communities.",
    achievements: [
      "Founded and led digital empowerment organization",
      "Built strategic partnerships for refugee communities",
      "Mobilized resources for digital inclusion",
      "Provided visionary leadership and advocacy"
    ],
    technologies: ["Leadership", "Strategic Planning", "Partnership Development", "Community Advocacy"],
    type: "full-time"
  }
];
