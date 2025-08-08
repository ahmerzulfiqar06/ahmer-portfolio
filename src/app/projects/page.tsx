"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { Filters } from "@/components/filters";
import { projects } from "@/data/projects";
import { ProjectType } from "@/types";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedType, setSelectedType] = React.useState<ProjectType | "all">("all");
  const [sortBy, setSortBy] = React.useState<"newest" | "impact" | "complexity">("newest");

  // Filter and sort projects
  const filteredProjects = React.useMemo(() => {
    const filtered = projects.filter((project) => {
      // Type filter
      if (selectedType !== "all" && project.type !== selectedType) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(query) ||
          project.summary.toLowerCase().includes(query) ||
          project.tech.some((tech) => tech.toLowerCase().includes(query))
        );
      }

      return true;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          const dateA = new Date(a.dates?.finished || a.dates?.started || "");
          const dateB = new Date(b.dates?.finished || b.dates?.started || "");
          return dateB.getTime() - dateA.getTime();
        case "impact":
          // Sort by featured first, then by metrics count
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return (b.metrics?.length || 0) - (a.metrics?.length || 0);
        case "complexity":
          // Sort by tech stack size
          return b.tech.length - a.tech.length;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedType, sortBy]);

  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="text-center space-y-4 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-1"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-large max-w-3xl mx-auto"
          >
            A comprehensive look at the projects I've built for startups, 
            agencies, and personal exploration. Each project represents a 
            unique challenge and solution.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Filters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </motion.div>

        {/* Results */}
        <div className="space-y-6">
          {/* Results count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-muted-foreground"
          >
            Showing {filteredProjects.length} of {projects.length} projects
          </motion.p>

          {/* Projects grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <h3 className="heading-4 mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters.
              </p>
            </motion.div>
          )}
        </div>
      </Section>
    </>
  );
}
