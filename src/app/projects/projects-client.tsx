"use client"

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Filter, X, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { getProjectImage } from "@/data/media";

const allTags = Array.from(new Set(projects.flatMap(project => project.tags))).sort();

export function ProjectsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.every(tag => project.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 border-border/50 focus:border-primary/50"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:w-auto h-10 border-border/50 hover:border-primary/50"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {selectedTags.length > 0 && (
              <Badge variant="secondary" className="ml-2 text-xs px-1.5 py-0">
                {selectedTags.length}
              </Badge>
            )}
          </Button>
        </div>

        {/* Filter Tags */}
        {showFilters && (
          <div className="space-y-4 p-5 border border-border/50 rounded-lg bg-muted/20 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">Filter by tags</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground h-8 text-xs"
              >
                Clear all
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleTag(tag)}
                  className={`h-8 text-xs transition-all ${
                    selectedTags.includes(tag) 
                      ? "bg-primary hover:bg-primary/90" 
                      : "border-border/50 hover:border-primary/50"
                  }`}
                >
                  {tag}
                  {selectedTags.includes(tag) && (
                    <X className="h-3 w-3 ml-1.5" />
                  )}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between py-2">
        <p className="text-sm text-muted-foreground font-medium">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
        </p>
        {(searchQuery || selectedTags.length > 0) && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs h-8">
            Clear filters
          </Button>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.slug} className="group h-full flex flex-col overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl bg-card/50 backdrop-blur-sm pt-0">
              {/* Project Thumbnail - flush to top */}
              <div className="relative h-52 bg-gradient-to-br from-muted/50 to-muted/30 overflow-hidden rounded-t-xl">
                <Image
                  src={getProjectImage(project.slug)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Year Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <Badge className="bg-background/90 backdrop-blur-md text-foreground border border-border/50 shadow-sm text-xs font-medium px-2.5 py-0.5">
                    {project.year}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-5 flex-1 flex flex-col">
                {/* Header Section */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-display leading-tight line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Tags - Compact */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-[10px] px-2 py-0.5 border-primary/15 text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Role Section */}
                <div className="mt-auto pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
                    {project.role}
                  </p>
                  
                  {/* Action Buttons - Equal Size */}
                  <div className="flex gap-2">
                    {(project.links.live || project.links.demo) ? (
                      <Button
                        asChild
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs h-9 shadow-sm hover:shadow-md transition-all"
                      >
                        <a
                          href={project.links.live || project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Visit Site
                        </a>
                      </Button>
                    ) : (
                      <Button
                        disabled
                        className="flex-1 opacity-40 cursor-not-allowed text-xs h-9"
                        variant="outline"
                      >
                        <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                        Unavailable
                      </Button>
                    )}
                    <Button 
                      asChild 
                      variant="outline" 
                      className="flex-1 border border-border/50 hover:border-primary/50 text-xs h-9 font-medium"
                    >
                      <Link href={`/projects/${project.slug}`} className="flex items-center justify-center gap-1.5">
                        More Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">No projects found</h3>
            <p>Try adjusting your search terms or filters</p>
          </div>
          <Button onClick={clearFilters}>
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
