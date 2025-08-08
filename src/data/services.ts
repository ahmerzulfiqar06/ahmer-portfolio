import { Service } from "@/types";

export const startupServices: Service[] = [
  {
    id: "mvp-development",
    title: "MVP Development",
    description: "Get your product to market fast with a scalable foundation. Perfect for validating ideas and securing funding.",
    features: [
      "Full-stack web application",
      "User authentication & authorization",
      "Database design & optimization",
      "Responsive design for all devices",
      "Basic analytics integration",
      "Deployment & CI/CD setup"
    ],
    deliverables: [
      "Production-ready application",
      "Technical documentation",
      "Deployment guide",
      "Basic testing suite",
      "2 weeks of post-launch support"
    ],
    timeline: "4-8 weeks",
    startingPrice: "$15,000"
  },
  {
    id: "rapid-iteration",
    title: "Rapid Iteration & Scaling",
    description: "Quickly iterate on your existing product based on user feedback and scale for growth.",
    features: [
      "Feature development & optimization",
      "Performance monitoring & improvements",
      "User analytics & insights",
      "A/B testing implementation",
      "API integrations",
      "Security hardening"
    ],
    deliverables: [
      "New features & improvements",
      "Performance audit report",
      "Analytics dashboard",
      "Scaled infrastructure",
      "Ongoing maintenance plan"
    ],
    timeline: "2-6 weeks per iteration",
    startingPrice: "$8,000"
  }
];

export const agencyServices: Service[] = [
  {
    id: "white-label-development",
    title: "White-label Development",
    description: "High-quality development services for your clients with seamless handoff and documentation.",
    features: [
      "Custom web applications",
      "E-commerce platforms",
      "CMS integrations",
      "API development",
      "Third-party integrations",
      "Performance optimization"
    ],
    deliverables: [
      "Complete source code",
      "Technical documentation",
      "Client training materials",
      "Deployment guide",
      "White-label branding options"
    ],
    timeline: "6-12 weeks",
    startingPrice: "$20,000"
  },
  {
    id: "technical-consulting",
    title: "Technical Consulting",
    description: "Architecture reviews, code audits, and technical strategy for your development projects.",
    features: [
      "Code quality assessment",
      "Architecture review",
      "Performance optimization",
      "Security audit",
      "Technology recommendations",
      "Team mentoring"
    ],
    deliverables: [
      "Comprehensive audit report",
      "Improvement recommendations",
      "Implementation roadmap",
      "Best practices guide",
      "Follow-up consultations"
    ],
    timeline: "1-3 weeks",
    startingPrice: "$5,000"
  }
];
