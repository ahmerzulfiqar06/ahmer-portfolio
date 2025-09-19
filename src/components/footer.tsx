import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ahmerzulfiqar",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ahmerzulfiqar",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ahmerzulfiqar",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:hello@ahmerzulfiqar.dev",
    icon: Mail,
  },
];

const quickLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl gradient-text">
                AZ Studios
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Full-stack development company crafting exceptional digital experiences for
              startups and agencies worldwide.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  asChild
                >
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>Technical Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Start a Project
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/services">
                  <Download className="mr-2 h-4 w-4" />
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AZ Studios. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
