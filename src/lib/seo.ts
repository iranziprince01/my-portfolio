import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://princeiranzi.dev';

export const defaultSEO: Metadata = {
  title: {
    default: 'Prince Iranzi - Software Engineer & Digital Marketer',
    template: '%s | Prince Iranzi'
  },
  description: 'Software Engineer & Digital Marketer building reliable, human-centered web platforms and growth-ready experiences. Specializing in React, Next.js, and digital marketing strategies.',
  keywords: [
    'Software Engineer',
    'Digital Marketer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Web Development',
    'Mobile App Development',
    'PWA',
    'SEO',
    'Digital Marketing',
    'Kigali',
    'Rwanda',
    'East Africa'
  ],
  authors: [{ name: 'Prince Iranzi' }],
  creator: 'Prince Iranzi',
  publisher: 'Prince Iranzi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Prince Iranzi - Software Engineer & Digital Marketer',
    description: 'Software Engineer & Digital Marketer building reliable, human-centered web platforms and growth-ready experiences.',
    siteName: 'Prince Iranzi Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prince Iranzi - Software Engineer & Digital Marketer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prince Iranzi - Software Engineer & Digital Marketer',
    description: 'Software Engineer & Digital Marketer building reliable, human-centered web platforms and growth-ready experiences.',
    images: ['/og-image.jpg'],
    creator: '@princeiranzi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export function generateProjectSEO(project: {
  title: string;
  summary: string;
  slug: string;
  images?: string[];
}): Metadata {
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `${baseUrl}/projects/${project.slug}`,
      images: project.images?.length ? [
        {
          url: project.images[0],
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ] : undefined,
    },
    twitter: {
      title: project.title,
      description: project.summary,
      images: project.images?.length ? [project.images[0]] : undefined,
    },
  };
}

export function generatePageSEO(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
    },
    twitter: {
      title,
      description,
    },
  };
}
