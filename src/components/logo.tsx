import * as React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center space-x-3 font-bold text-xl group ${className}`}
      aria-label="Ahmer Zulfiqar - Home"
    >
      {/* Logo Icon */}
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="transition-transform duration-300 group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id="logoText" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f8fafc', stopOpacity: 0.9 }} />
            </linearGradient>
          </defs>

          {/* Background circle with gradient */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="url(#logoBg)"
            className="drop-shadow-sm"
          />

          {/* Decorative ring */}
          <circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            stroke="url(#logoText)"
            strokeWidth="0.5"
            opacity="0.3"
          />

          {/* AZ Text */}
          <text
            x="20"
            y="26"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="16"
            fontWeight="700"
            textAnchor="middle"
            fill="url(#logoText)"
            className="drop-shadow-sm"
          >
            AZ
          </text>

          {/* Subtle accent dot */}
          <circle
            cx="12"
            cy="12"
            r="1.5"
            fill="url(#logoText)"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="gradient-text leading-tight">Ahmer Zulfiqar</span>
          <span className="text-xs text-muted-foreground font-normal -mt-0.5">
            Full-Stack Developer
          </span>
        </div>
      )}
    </Link>
  );
}
