import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Users } from "lucide-react";
import { projects } from "@/data/projects";
import { generateProjectMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { cn, getProjectTypeColor, getClientTypeColor, formatDateRange } from "@/lib/utils";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return generateProjectMetadata(project);
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <Section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="space-y-8">
          {/* Back button */}
          <Button variant="ghost" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          {/* Title & Meta */}
          <div className="space-y-6">
            <div className="space-y-4">
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
                {project.featured && (
                  <Badge variant="outline" className="text-xs">
                    Featured
                  </Badge>
                )}
                <Badge
                  variant={project.status === "live" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {project.status === "live" ? "Live" : project.status === "wip" ? "In Progress" : "Case Study"}
                </Badge>
              </div>

              <h1 className="heading-1">{project.title}</h1>
              
              <p className="body-large">{project.summary}</p>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              {project.dates && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDateRange(project.dates.started, project.dates.finished)}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{project.clientType === "personal" ? "Personal Project" : `${project.clientType} Client`}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              {project.links?.live && (
                <Button asChild>
                  <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </Link>
                </Button>
              )}
              {project.links?.repo && (
                <Button variant="outline" asChild>
                  <Link href={project.links.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Images */}
      {project.images && project.images.length > 0 && (
        <Section className="py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden border"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Highlights */}
            <div>
              <h2 className="heading-3 mb-6">Key Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Problem & Solution (placeholder) */}
            <div>
              <h2 className="heading-3 mb-6">Problem & Solution</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  This project addressed several key challenges in the {project.type} development space. 
                  Through careful analysis and iterative development, I created a solution that not only 
                  met the immediate needs but also provided a scalable foundation for future growth.
                </p>
                <p className="text-muted-foreground">
                  The implementation focused on performance, user experience, and maintainability, 
                  resulting in a product that exceeded expectations and delivered measurable results.
                </p>
              </div>
            </div>

            {/* Architecture (placeholder) */}
            <div>
              <h2 className="heading-3 mb-6">Technical Architecture</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  The application was built using modern best practices and follows a scalable 
                  architecture pattern. Key technical decisions were made to ensure optimal 
                  performance, security, and maintainability.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="card">
              <div className="card-header">
                <h3 className="font-semibold">Technology Stack</h3>
              </div>
              <div className="card-content">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="card">
                <div className="card-header">
                  <h3 className="font-semibold">Key Metrics</h3>
                </div>
                <div className="card-content">
                  <div className="space-y-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        <span className="font-semibold text-primary">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Project Details */}
            <div className="card">
              <div className="card-header">
                <h3 className="font-semibold">Project Details</h3>
              </div>
              <div className="card-content">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <span className="capitalize">{project.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Client</span>
                    <span className="capitalize">{project.clientType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="capitalize">{project.status}</span>
                  </div>
                  {project.dates && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline</span>
                      <span>{formatDateRange(project.dates.started, project.dates.finished)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Projects */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">More Projects</h2>
          <p className="body-large">Explore other projects in my portfolio</p>
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
