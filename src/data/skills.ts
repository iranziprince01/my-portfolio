import { z } from 'zod';

export const SkillSchema = z.object({
  name: z.string(),
  category: z.enum(['frontend', 'backend', 'mobile', 'devops', 'marketing', 'tools', 'languages']),
  level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']),
  years: z.number(),
  description: z.string().optional(),
});

export type Skill = z.infer<typeof SkillSchema>;

export const skills: Skill[] = [
  // Frontend Skills
  {
    name: "React",
    category: "frontend",
    level: "expert",
    years: 4,
    description: "Building complex, interactive user interfaces with React hooks, context, and modern patterns"
  },
  {
    name: "Next.js",
    category: "frontend",
    level: "expert",
    years: 3,
    description: "Full-stack React framework with SSR, SSG, and App Router expertise"
  },
  {
    name: "TypeScript",
    category: "languages",
    level: "advanced",
    years: 3,
    description: "Strong typing for JavaScript applications, improving code quality and developer experience"
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "expert",
    years: 3,
    description: "Utility-first CSS framework for rapid UI development and consistent design systems"
  },
  {
    name: "JavaScript",
    category: "languages",
    level: "expert",
    years: 5,
    description: "Modern JavaScript (ES6+) with async/await, modules, and functional programming"
  },
  {
    name: "HTML5",
    category: "frontend",
    level: "expert",
    years: 6,
    description: "Semantic HTML with accessibility best practices and modern web standards"
  },
  {
    name: "CSS3",
    category: "frontend",
    level: "expert",
    years: 6,
    description: "Advanced CSS with Grid, Flexbox, animations, and responsive design"
  },

  // Backend Skills
  {
    name: "Node.js",
    category: "backend",
    level: "advanced",
    years: 3,
    description: "Server-side JavaScript with Express.js and modern Node.js features"
  },
  {
    name: "Python",
    category: "languages",
    level: "advanced",
    years: 4,
    description: "Backend development with Django, Flask, and data processing"
  },
  {
    name: "Django",
    category: "backend",
    level: "advanced",
    years: 3,
    description: "Full-featured Python web framework with ORM, authentication, and admin interface"
  },
  {
    name: "PostgreSQL",
    category: "backend",
    level: "advanced",
    years: 3,
    description: "Relational database design, optimization, and complex queries"
  },
  {
    name: "MongoDB",
    category: "backend",
    level: "intermediate",
    years: 2,
    description: "NoSQL database for flexible data storage and retrieval"
  },
  {
    name: "REST APIs",
    category: "backend",
    level: "advanced",
    years: 3,
    description: "Designing and implementing RESTful APIs with proper error handling and documentation"
  },

  // Mobile Skills
  {
    name: "React Native",
    category: "mobile",
    level: "advanced",
    years: 2,
    description: "Cross-platform mobile development with native performance"
  },
  {
    name: "Flutter",
    category: "mobile",
    level: "intermediate",
    years: 1,
    description: "Google's UI toolkit for building natively compiled applications"
  },
  {
    name: "Firebase",
    category: "mobile",
    level: "advanced",
    years: 2,
    description: "Backend-as-a-Service for mobile apps with authentication, database, and cloud functions"
  },

  // DevOps Skills
  {
    name: "Docker",
    category: "devops",
    level: "intermediate",
    years: 2,
    description: "Containerization for consistent deployment across environments"
  },
  {
    name: "AWS",
    category: "devops",
    level: "intermediate",
    years: 2,
    description: "Cloud services including EC2, S3, RDS, and Lambda functions"
  },
  {
    name: "Vercel",
    category: "devops",
    level: "advanced",
    years: 3,
    description: "Frontend deployment platform with edge functions and analytics"
  },
  {
    name: "GitHub Actions",
    category: "devops",
    level: "intermediate",
    years: 2,
    description: "CI/CD pipelines for automated testing and deployment"
  },

  // Marketing Skills
  {
    name: "Google Analytics",
    category: "marketing",
    level: "advanced",
    years: 3,
    description: "Web analytics and user behavior tracking for data-driven decisions"
  },
  {
    name: "Facebook Ads",
    category: "marketing",
    level: "advanced",
    years: 3,
    description: "Social media advertising campaigns and audience targeting"
  },
  {
    name: "Google Ads",
    category: "marketing",
    level: "advanced",
    years: 3,
    description: "Search and display advertising with keyword optimization"
  },
  {
    name: "SEO",
    category: "marketing",
    level: "advanced",
    years: 4,
    description: "Search engine optimization for improved organic visibility"
  },
  {
    name: "Content Marketing",
    category: "marketing",
    level: "advanced",
    years: 3,
    description: "Creating engaging content that drives traffic and conversions"
  },
  {
    name: "Social Media Marketing",
    category: "marketing",
    level: "advanced",
    years: 4,
    description: "Multi-platform social media strategy and community management"
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    level: "advanced",
    years: 5,
    description: "Version control and collaborative development workflows"
  },
  {
    name: "Figma",
    category: "tools",
    level: "intermediate",
    years: 2,
    description: "UI/UX design and prototyping for web and mobile applications"
  },
  {
    name: "VS Code",
    category: "tools",
    level: "expert",
    years: 4,
    description: "Primary code editor with extensive extensions and customization"
  },
  {
    name: "Postman",
    category: "tools",
    level: "advanced",
    years: 3,
    description: "API testing and documentation for backend development"
  }
];

// Group skills by category for easier display
export const skillsByCategory = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);
