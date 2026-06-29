import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generatePageSEO } from "@/lib/seo";
import { siteCopy } from "@/data/site-copy";

export const metadata: Metadata = generatePageSEO(
  "Blog - Prince Iranzi",
  "Articles on software engineering, digital marketing, and building products in East Africa.",
  "/blog"
);

export default function BlogPage() {
  return (
    <section className="site-section">
      <div className="site-content max-w-xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
          {siteCopy.blog.title}
        </h1>
        <p className="text-muted-foreground mb-8">{siteCopy.blog.subtitle}</p>
        <Card className="playful-card border-0 shadow-none">
          <CardContent className="p-8">
            <p className="text-muted-foreground mb-6">
              First up: how TekRiders stays usable offline in low-connectivity areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="playful-btn">
                <a href="/contact">{siteCopy.blog.notify}</a>
              </Button>
              <Button asChild variant="outline" className="rounded-xl border-2 font-semibold">
                <Link href="/projects">See TekRiders</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
