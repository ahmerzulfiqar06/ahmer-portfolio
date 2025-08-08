export type ProjectType = "web" | "mobile" | "motion";
export type ClientType = "startup" | "agency" | "personal";
export type ProjectStatus = "live" | "wip" | "case-study";

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  clientType: ClientType;
  summary: string;
  highlights: string[];
  tech: string[];
  metrics?: { label: string; value: string }[];
  dates?: { started?: string; finished?: string };
  links?: { live?: string; repo?: string; caseStudy?: string };
  images?: { src: string; alt: string }[];
  featured?: boolean;
  status?: ProjectStatus;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  startingPrice?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  budget: string;
  timeline: string;
  message: string;
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
