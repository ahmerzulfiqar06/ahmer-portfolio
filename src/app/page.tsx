"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Code, Smartphone, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { Testimonial } from "@/components/testimonial";
import { LogoCloud } from "@/components/logo-cloud";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", 
  "React Native", "AWS", "Tailwind CSS", "Framer Motion", "Prisma"
];

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications with modern frameworks and scalable architecture."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications using React Native and Flutter."
  },
  {
    icon: Palette,
    title: "UI/Motion Design",
    description: "Beautiful interfaces with smooth animations and micro-interactions."
  }
];

export default function HomePage() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent_70%)]" />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge 
                variant="outline" 
                className="mb-6 border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available for new projects
                </div>
              </Badge>
            </motion.div>
            
            <h1 className="heading-1 max-w-5xl mx-auto leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block"
              >
                Full-Stack Engineer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60"
              >
                Building Digital Excellence
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="body-large max-w-3xl mx-auto text-muted-foreground/90"
            >
              I create scalable web applications, cross-platform mobile experiences, 
              and motion-rich interfaces that drive business growth and delight users.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300" asChild>
                <Link href="/contact">
                  Let&apos;s Talk
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-12"
          >
            <LogoCloud />
          </motion.div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-gradient-to-b from-background to-muted/30">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-6">
              What I Do <span className="text-primary">Best</span>
            </h2>
            <p className="body-large max-w-3xl mx-auto text-muted-foreground/90">
              I specialize in creating cutting-edge digital solutions that transform 
              ideas into reality and drive measurable business results.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center h-full transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className="h-16 w-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  {/* Floating particles around icon */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/40 rounded-full"
                        style={{
                          left: `${30 + i * 20}%`,
                          top: `${20 + i * 15}%`,
                        }}
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 2 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="heading-4 mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary/50 to-primary group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Ready to bring your vision to life?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5 hover:border-primary/50" asChild>
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Featured Work</h2>
          <p className="body-large max-w-2xl mx-auto">
            A selection of recent projects that showcase my expertise in 
            full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Tech Stack</h2>
          <p className="body-large max-w-2xl mx-auto">
            I work with modern technologies to build scalable, maintainable, 
            and performant applications.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Badge variant="secondary" className="text-sm py-2 px-4">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Client Testimonials</h2>
          <p className="body-large max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients say about 
            working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <Testimonial
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="heading-2">Ready to Start Your Project?</h2>
            <p className="body-large max-w-2xl mx-auto">
              Let's discuss your vision and turn it into a reality. I'm here 
              to help you build something amazing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Book a Call
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resume.pdf" target="_blank">
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
