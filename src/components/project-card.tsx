"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn, getProjectTypeColor, getClientTypeColor } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="card overflow-hidden h-full hover:shadow-lg transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          {project.images && project.images[0] ? (
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => console.log(`Image failed to load: ${project.images?.[0]?.src}`)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-sm">No image available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge
              variant={project.status === "live" ? "default" : "secondary"}
              className="text-xs"
            >
              {project.status === "live" ? "Live" : project.status === "wip" ? "In Progress" : "Case Study"}
            </Badge>
          </div>
        </div>

        <div className="card-content space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              {project.featured && (
                <Badge variant="outline" className="text-xs">
                  Featured
                </Badge>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge
                className={cn("text-xs", getProjectTypeColor(project.type))}
                variant="secondary"
              >
                {project.type}
              </Badge>
              <Badge
                className={cn("text-xs", getClientTypeColor(project.clientType))}
                variant="secondary"
              >
                {project.clientType}
              </Badge>
            </div>
          </div>

          {/* Summary */}
          <p className="text-muted-foreground text-sm line-clamp-3">
            {project.summary}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.tech.length - 4}
              </Badge>
            )}
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-4 py-3 border-t border-b">
              {project.metrics.slice(0, 2).map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="font-semibold text-sm text-primary">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
              {project.links?.live && (
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View live project</span>
                  </Link>
                </Button>
              )}
              {project.links?.repo && (
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <Link
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">View source code</span>
                  </Link>
                </Button>
              )}
            </div>
            
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/projects/${project.slug}`}>
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
