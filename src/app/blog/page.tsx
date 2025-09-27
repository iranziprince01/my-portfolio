import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { generatePageSEO } from "@/lib/seo";

export const metadata: Metadata = generatePageSEO(
  "Blog - Prince Iranzi",
  "Read articles and insights from Prince Iranzi on software engineering, digital marketing, and technology trends.",
  "/blog"
);

// Placeholder blog posts - in a real implementation, these would come from MDX files or a CMS
const blogPosts = [
  {
    title: "Building Offline-First PWAs for Low-Connectivity Areas",
    excerpt: "Learn how to create Progressive Web Apps that work seamlessly even with poor internet connectivity, using PouchDB and CouchDB for data synchronization.",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["PWA", "Offline", "React", "Tutorial"],
    slug: "offline-first-pwas"
  },
  {
    title: "The Future of Digital Marketing in East Africa",
    excerpt: "Exploring the unique challenges and opportunities in digital marketing across East Africa, and how to create campaigns that resonate with local audiences.",
    date: "2024-12-10",
    readTime: "6 min read",
    tags: ["Marketing", "East Africa", "Strategy"],
    slug: "digital-marketing-east-africa"
  },
  {
    title: "Why I Choose React and Next.js for Web Development",
    excerpt: "My thoughts on why React and Next.js have become my go-to stack for building modern web applications, and the benefits they provide.",
    date: "2024-12-05",
    readTime: "5 min read",
    tags: ["React", "Next.js", "Web Development"],
    slug: "react-nextjs-web-development"
  }
];

export default function BlogPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Blog & Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on software engineering, 
            digital marketing, and technology trends.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <Card className="mb-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground mb-6">
            I&apos;m currently working on creating valuable content about software engineering, 
            digital marketing, and technology trends. Check back soon for articles, 
            tutorials, and insights from my experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/contact">Get Notified</a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/projects">View My Work</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder Posts */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Planned Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 ml-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" size="sm" disabled>
                    Coming Soon
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Get notified when I publish new articles about software engineering, 
              digital marketing, and technology trends.
            </p>
            <Button asChild size="lg">
              <a href="/contact">Subscribe to Updates</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
