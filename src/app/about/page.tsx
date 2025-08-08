"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowRight, Code, Users, Trophy, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "PostgreSQL", "React Native", "Flutter", "AWS", "Docker",
  "Tailwind CSS", "Framer Motion", "Prisma", "GraphQL", "REST APIs"
];

const stats = [
  { icon: Code, label: "Projects Completed", value: "50+" },
  { icon: Users, label: "Happy Clients", value: "25+" },
  { icon: Trophy, label: "Years Experience", value: "5+" },
  { icon: Clock, label: "Response Time", value: "<24h" },
];

const timeline = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    description: "Expanded into mobile development and motion design, serving startups and agencies worldwide."
  },
  {
    year: "2022",
    title: "Full-Stack Developer",
    description: "Specialized in React and Node.js, building scalable web applications for growing companies."
  },
  {
    year: "2020",
    title: "Frontend Developer",
    description: "Started my journey in web development, focusing on creating beautiful user interfaces."
  },
  {
    year: "2019",
    title: "Computer Science Graduate",
    description: "Graduated with a degree in Computer Science, ready to make an impact in tech."
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="heading-1">
              About <span className="gradient-text">Ahmer</span>
            </h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience 
                building web applications, mobile apps, and digital experiences that 
                solve real-world problems and drive business growth.
              </p>
              <p>
                My journey began with a curiosity about how things work on the web. 
                Today, I help startups validate their ideas and agencies deliver 
                exceptional projects to their clients through clean code, thoughtful 
                design, and strategic thinking.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Work With Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/about/ahmer-profile.jpg"
                alt="Ahmer Zulfiqar - Full-Stack Developer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-muted/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="font-bold text-2xl text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Skills & Technologies</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            I work with modern technologies to build scalable, maintainable, 
            and performant applications.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Badge variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">My Journey</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            A brief look at my professional journey and key milestones.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 pb-8 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
                  {item.year}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-px bg-border h-full mt-4" />
                )}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="heading-4 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">My Approach</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            I believe great software comes from understanding both the technical 
            requirements and the human needs behind them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "User-Centered",
              description: "Every decision is made with the end user in mind, ensuring intuitive and accessible experiences."
            },
            {
              title: "Quality-Focused",
              description: "Clean, maintainable code with comprehensive testing and documentation for long-term success."
            },
            {
              title: "Results-Driven",
              description: "Focused on delivering measurable business value and exceeding project expectations."
            }
          ].map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="card-content space-y-4">
                <h3 className="heading-4">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-muted/30">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="heading-2">Let's Work Together</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? I'd love to hear about your 
              project and explore how we can create something amazing together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">
                View My Work
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
