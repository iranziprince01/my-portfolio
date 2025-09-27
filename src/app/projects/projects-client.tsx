"use client"

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Filter, X } from "lucide-react";
import { projects } from "@/data/projects";

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
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:w-auto"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {selectedTags.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {selectedTags.length}
              </Badge>
            )}
          </Button>
        </div>

        {/* Filter Tags */}
        {showFilters && (
          <div className="space-y-4 p-4 border rounded-lg bg-muted/30">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Filter by tags</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground"
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
                  className="h-8"
                >
                  {tag}
                  {selectedTags.includes(tag) && (
                    <X className="h-3 w-3 ml-1" />
                  )}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
        </p>
        {(searchQuery || selectedTags.length > 0) && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear filters
          </Button>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.slug} className="group hover:shadow-lg transition-all duration-200 overflow-hidden">
              {/* Project Thumbnail */}
              <div className="relative h-48 bg-muted/30 overflow-hidden">
                <Image
                  src={
                    project.slug === 'tekriders' ? '/tekriders.png' :
                    project.slug === 'graphic-design-work' ? '/graphics-sowc.png' :
                    project.slug === 'ppea-law' ? '/PPEA.png' :
                    project.slug === 'mindsafi' ? '/mindsafi.png' :
                    project.slug === 'bookhub' ? '/bookhub.png' :
                    project.slug === 'fitness-booking-devops' ? '/fitness-booking.jpg' :
                    project.slug === 'olearn-mobile' ? '/olearn.webp' :
                    project.slug === 'earthwise-mobile' ? '/earthwise.jpg' :
                    project.slug === 'django-file-mgmt' ? '/file-management.png' :
                    project.slug === 'skillhub' ? '/skillhub.png' :
                    project.slug === 'github-academics' ? '/academic-projects.png' :
                    project.slug === 'honnette-portfolio' ? '/honnette.png' :
                    '/images/projects/placeholder.jpg'
                  }
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{project.year}</Badge>
                  <div className="flex gap-1 flex-wrap">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.summary}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Role</span>
                    <span className="font-medium">{project.role}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-2">
                    {project.links.github && (
                      <Button asChild variant="ghost" size="sm">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs"
                        >
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.links.live && (
                      <Button asChild variant="ghost" size="sm">
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs"
                        >
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/projects/${project.slug}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
