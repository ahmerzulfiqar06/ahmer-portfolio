import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "car-spa-detailing",
    title: "Auto Spa - Premium Car Detailing Studio",
    type: "web",
    clientType: "personal",
    summary: "Professional, responsive marketing website for a premium car wash and detailing business with booking system, payment integration, and modern animations.",
    highlights: [
      "Built fully responsive design optimized for mobile-first experience",
      "Integrated Stripe & PayPal payment processing for booking system",
      "Implemented interactive before/after gallery with filterable categories",
      "Deployed on Cloudflare Pages with edge runtime optimization",
      "Created professional email automation system with Resend API",
      "Designed modern UI with gradient animations and micro-interactions"
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe", "PayPal", "Resend", "Cloudflare Pages", "Mapbox", "React Hook Form", "Zod"],
    metrics: [
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Mobile Performance", value: "95/100" },
      { label: "Load Time", value: "<2s" },
      { label: "Conversion Rate", value: "4.2%" }
    ],
    dates: { started: "2024-12", finished: "2025-01" },
    links: {
      live: "https://f948f972.car-spa.pages.dev/",
      repo: "https://github.com/ahmerzulfiqar06/Car-Spa",
      caseStudy: "/projects/car-spa-detailing"
    },
    images: [
      { src: "/projects/car-spa-homepage.png", alt: "Auto Spa homepage with premium gradient design and modern animations" },
      { src: "/projects/car-spa-services.png", alt: "Service packages with booking system and pricing" },
      { src: "/projects/car-spa-gallery.png", alt: "Interactive before/after gallery with customer testimonials" }
    ],
    featured: true,
    status: "live"
  },
  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    type: "web",
    clientType: "startup",
    summary: "Real-time analytics platform for B2B SaaS companies with custom chart builders, user segmentation, and automated reporting.",
    highlights: [
      "Built scalable real-time data pipeline processing 1M+ events daily",
      "Implemented advanced chart builder with 15+ visualization types",
      "Designed role-based access control for enterprise clients",
      "Achieved 99.9% uptime with automated scaling"
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Prisma", "TailwindCSS", "Chart.js", "WebSockets"],
    metrics: [
      { label: "Daily Active Users", value: "12,000+" },
      { label: "Data Points Processed", value: "1M+/day" },
      { label: "Performance Score", value: "98/100" },
      { label: "Client Retention", value: "95%" }
    ],
    dates: { started: "2023-08", finished: "2024-01" },
    links: {
      live: "https://analytics-demo.example.com",
      repo: "https://github.com/ahmerzulfiqar/saas-analytics",
      caseStudy: "/projects/saas-analytics-dashboard"
    },
    images: [
      { src: "/projects/saas-dashboard-1.jpg", alt: "Dashboard overview showing real-time metrics" },
      { src: "/projects/saas-dashboard-2.jpg", alt: "Custom chart builder interface" }
    ],
    featured: true,
    status: "live"
  },
  {
    slug: "ecommerce-platform-stripe",
    title: "E-commerce Platform with Stripe",
    type: "web",
    clientType: "agency",
    summary: "Full-featured e-commerce platform with inventory management, multi-vendor support, and advanced payment processing.",
    highlights: [
      "Integrated Stripe Connect for multi-vendor payments",
      "Built automated inventory tracking and low-stock alerts",
      "Implemented advanced search with Elasticsearch",
      "Created admin dashboard with sales analytics"
    ],
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Elasticsearch", "AWS S3", "NextAuth.js", "Prisma"],
    metrics: [
      { label: "Transaction Volume", value: "$500K+" },
      { label: "Conversion Rate", value: "3.2%" },
      { label: "Page Load Time", value: "<2s" },
      { label: "Mobile Score", value: "95/100" }
    ],
    dates: { started: "2023-05", finished: "2023-09" },
    links: {
      live: "https://shop-demo.example.com",
      caseStudy: "/projects/ecommerce-platform-stripe"
    },
    images: [
      { src: "/projects/ecommerce-1.jpg", alt: "Product catalog with advanced filtering" },
      { src: "/projects/ecommerce-2.jpg", alt: "Checkout flow with Stripe integration" }
    ],
    featured: true,
    status: "live"
  },
  {
    slug: "healthcare-admin-system",
    title: "Healthcare Admin System",
    type: "web",
    clientType: "startup",
    summary: "HIPAA-compliant patient management system with appointment scheduling, medical records, and billing integration.",
    highlights: [
      "Ensured HIPAA compliance with end-to-end encryption",
      "Built appointment scheduling with automated reminders",
      "Integrated with major EMR systems via HL7 FHIR",
      "Implemented secure document management"
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "FHIR", "Stripe"],
    metrics: [
      { label: "Patients Managed", value: "50,000+" },
      { label: "Appointments/Month", value: "15,000+" },
      { label: "System Uptime", value: "99.95%" },
      { label: "Security Score", value: "A+" }
    ],
    dates: { started: "2023-02", finished: "2023-07" },
    links: {
      caseStudy: "/projects/healthcare-admin-system"
    },
    images: [
      { src: "/projects/healthcare-1.jpg", alt: "Patient dashboard with medical records" },
      { src: "/projects/healthcare-2.jpg", alt: "Appointment scheduling interface" }
    ],
    featured: true,
    status: "live"
  },
  {
    slug: "react-native-fitness-app",
    title: "Cross-Platform Fitness App",
    type: "mobile",
    clientType: "startup",
    summary: "React Native fitness tracking app with workout plans, progress analytics, and social features.",
    highlights: [
      "Built cross-platform app for iOS and Android",
      "Integrated with health data APIs (HealthKit/Google Fit)",
      "Implemented offline-first architecture",
      "Created social features with real-time updates"
    ],
    tech: ["React Native", "TypeScript", "Expo", "Supabase", "React Query", "Reanimated"],
    metrics: [
      { label: "App Store Rating", value: "4.8/5" },
      { label: "Downloads", value: "25,000+" },
      { label: "Daily Active Users", value: "5,000+" }
    ],
    dates: { started: "2023-10", finished: "2024-02" },
    links: {
      live: "https://apps.apple.com/fitness-tracker",
      repo: "https://github.com/ahmerzulfiqar/fitness-app"
    },
    status: "wip"
  },
  {
    slug: "component-library-motion",
    title: "Motion Component Library",
    type: "motion",
    clientType: "personal",
    summary: "Comprehensive React component library with advanced animations, micro-interactions, and accessibility features.",
    highlights: [
      "Created 50+ animated components with Framer Motion",
      "Built Storybook documentation with live examples",
      "Implemented automatic accessibility testing",
      "Published to NPM with TypeScript support"
    ],
    tech: ["React", "TypeScript", "Framer Motion", "Storybook", "Jest", "Rollup"],
    metrics: [
      { label: "NPM Downloads", value: "2,500+/week" },
      { label: "GitHub Stars", value: "450+" },
      { label: "Bundle Size", value: "<50KB" }
    ],
    dates: { started: "2023-06", finished: "2023-08" },
    links: {
      live: "https://motion-components.dev",
      repo: "https://github.com/ahmerzulfiqar/motion-ui"
    },
    status: "wip"
  },
  {
    slug: "white-label-cms-integration",
    title: "White-label CMS Integration",
    type: "web",
    clientType: "agency",
    summary: "Headless CMS integration for agency clients with custom content modeling, API optimization, and multi-site management.",
    highlights: [
      "Integrated Contentful CMS with custom content models",
      "Built reusable components for multiple client sites",
      "Implemented automated content migration tools",
      "Created admin training documentation and workflows"
    ],
    tech: ["Next.js", "Contentful", "GraphQL", "TypeScript", "Vercel", "Webhooks"],
    metrics: [
      { label: "Sites Deployed", value: "12" },
      { label: "Content Migration", value: "100K+ entries" },
      { label: "Editor Satisfaction", value: "9.5/10" }
    ],
    dates: { started: "2023-03", finished: "2023-05" },
    links: {
      caseStudy: "/projects/white-label-cms-integration"
    },
    status: "case-study"
  }
];
