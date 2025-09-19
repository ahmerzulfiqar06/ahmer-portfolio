import { Metadata } from "next";
import { Project } from "@/types";

const siteConfig = {
  name: "AhmerZ",
  title: "AhmerZ - Full-Stack Development & Software Engineering",
  description: "We specialize in modern web applications, mobile apps, and motion design. We build production-ready solutions for startups and agencies using Next.js, React Native, and cutting-edge technologies.",
  url: "https://ahmerzulfiqar.dev",
  ogImage: "https://ahmerzulfiqar.dev/og-image.jpg",
  author: {
    name: "AhmerZ",
    email: "hi@ahmerz.com",
    twitter: "@ahmerzulfiqar",
    github: "https://github.com/ahmerzulfiqar",
    linkedin: "https://linkedin.com/in/ahmerzulfiqar",
  },
};

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = "website",
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;
  const metaUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "full-stack development",
      "software engineering",
      "web development",
      "mobile apps",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "React Native",
      "startup development",
      "agency development",
      "software company",
      "digital agency",
    ],
    authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      type,
      locale: "en_US",
      url: metaUrl,
      siteName: siteConfig.name,
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.author.twitter,
      creator: siteConfig.author.twitter,
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateProjectMetadata(project: Project): Metadata {
  return generateMetadata({
    title: project.title,
    description: project.summary,
    url: `/projects/${project.slug}`,
    type: "article",
    image: project.images?.[0]?.src,
  });
}

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.author.name,
    email: siteConfig.author.email,
    url: siteConfig.url,
    description: siteConfig.description,
    image: siteConfig.ogImage,
    foundingDate: "2023",
    industry: "Software Development",
    serviceArea: "Global",
    sameAs: [
      siteConfig.author.github,
      siteConfig.author.linkedin,
      `https://twitter.com/${siteConfig.author.twitter.replace("@", "")}`,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Web Development",
            description: "Modern web applications using Next.js, React, and TypeScript"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Cross-platform mobile applications using React Native"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Motion Design",
            description: "Interactive animations and user experience design"
          }
        }
      ]
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "React Native",
      "PostgreSQL",
      "AWS",
      "Full-Stack Development",
      "Mobile Development",
      "Web Development",
      "Software Engineering",
      "Digital Agency",
    ],
  };
}

export function generateProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: {
      "@type": "Organization",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    dateCreated: project.dates?.started,
    dateModified: project.dates?.finished,
    keywords: project.tech.join(", "),
    image: project.images?.[0]?.src,
  };
}

export { siteConfig };
