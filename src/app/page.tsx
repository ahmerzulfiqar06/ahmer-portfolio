"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Code, Smartphone, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { Testimonial } from "@/components/testimonial";

import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { HeroAnimation } from "@/components/hero-animation";

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
      <Section className="relative pt-4 pb-12 md:pt-6 md:pb-16 overflow-hidden">
        {/* Enhanced background with mesh gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/[0.02] to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.08),transparent_50%)]" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
        </div>
        
        {/* Dynamic particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-10, 10, -10],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative flex flex-col min-h-[70vh]">
          {/* Top section - Headline/Description and Mockups */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center flex-1">
            {/* Left side content - Headline and Description */}
            <div className="relative z-10 space-y-6 text-left">
              {/* Main headline with enhanced typography */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl"
              >
                <span className="block leading-tight">
                  Full-Stack Development
                </span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-500 leading-tight"
                >
                  Crafting Digital Excellence
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg md:text-xl max-w-2xl text-muted-foreground/80 leading-relaxed"
              >
                We transform ideas into scalable applications with modern technologies
                and exceptional user experiences.
              </motion.p>
            </div>

            {/* Right side animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <HeroAnimation />
              </div>
            </motion.div>
          </div>

          {/* Bottom section - Buttons and Stats */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8 mt-12">
            {/* Enhanced action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl border-0 px-8"
                  asChild
                >
                  <Link href="/projects">
                    View Our Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-border/40 hover:border-primary/40 hover:bg-primary/5 backdrop-blur-sm px-8"
                  asChild
                >
                  <Link href="/contact">
                    Let&apos;s Connect
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Compact stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex justify-center items-center gap-8"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="w-px h-6 bg-border" />
              <div className="text-center">
                <div className="text-xl font-bold text-primary">25+</div>
                <div className="text-xs text-muted-foreground">Happy Clients</div>
              </div>
              <div className="w-px h-6 bg-border" />
              <div className="text-center">
                <div className="text-xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
            </motion.div>
          </div>
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
              What We Do <span className="text-primary">Best</span>
            </h2>
            <p className="body-large max-w-3xl mx-auto text-muted-foreground/90">
              We specialize in creating cutting-edge digital solutions that transform
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

      {/* About Developer Section */}
      <Section className="bg-gradient-to-br from-background via-primary/[0.02] to-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Developer Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main photo container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 p-1">
                <div className="relative h-96 lg:h-[500px] w-full overflow-hidden rounded-xl bg-muted">
                  {/* Replace with your actual photo */}
                  <Image
                    src="/your-photo.jpg" // <-- Replace with your actual image filename
                    alt="AhmerZ - Full-Stack Developer"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 space-y-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-primary/60 rounded-full"
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.8,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg"></div>
              </div>
            </div>
          </motion.div>

              {/* Right side - Services & Pricing */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-sm font-medium">
                      WHAT WE OFFER
                    </Badge>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-4xl lg:text-5xl font-bold leading-tight"
                  >
                    <span className="text-foreground">WEBSITES STARTING AT</span>{" "}
                    <span className="gradient-text">$0 DOWN</span>{" "}
                    <span className="text-foreground">AND</span>{" "}
                    <span className="gradient-text">$150 PER MONTH</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-muted-foreground leading-relaxed text-lg"
                  >
                    We offer $0 down for a standard 5-page professional business website. If you need more than 
                    that, we provide custom pricing based on scope of work, additional features, and complexity. 
                    12-month minimum contract includes design, development, hosting, unlimited edits, 24/7 support, 
                    and lifetime updates.
                  </motion.p>
                </div>

                {/* Feature Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {[
                    {
                      icon: "🔒",
                      title: "100% SECURE",
                      description: "Our sites use enterprise-grade security, SSL certificates, and best practices to keep your data safe."
                    },
                    {
                      icon: "🎨",
                      title: "CUSTOM DESIGNED",
                      description: "Every design is crafted by our in-house design team to perfectly match your brand and vision."
                    },
                    {
                      icon: "⚡",
                      title: "LIGHTNING FAST",
                      description: "Optimized for speed with perfect 100/100 PageSpeed scores and blazing-fast load times."
                    },
                    {
                      icon: "💰",
                      title: "MONEY BACK GUARANTEE",
                      description: "If we can't deliver what you need, you get your money back. We stand behind our work."
                    },
                    {
                      icon: "🚀",
                      title: "UNLIMITED SUPPORT",
                      description: "Real support from real developers. When you call, you get the owner and lead developer."
                    },
                    {
                      icon: "📈",
                      title: "SEO OPTIMIZED",
                      description: "Built with SEO best practices from day one. We know what works and how to get you ranking."
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{feature.icon}</div>
                        <h3 className="font-bold text-foreground text-sm tracking-wide">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed pl-11">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="pt-4"
                >
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-lg px-12 py-6 rounded-full font-semibold tracking-wide" 
                    asChild
                  >
                    <Link href="/contact">
                      SCHEDULE A CALL
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Featured Work</h2>
          <p className="body-large max-w-2xl mx-auto">
            A selection of recent projects that showcase our expertise in
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
            We work with modern technologies to build scalable, maintainable,
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
            Don't just take our word for it. Here's what clients say about
            working with us.
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
              Let's discuss your vision and turn it into a reality. We're here
              to help you build something amazing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                View Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
