import * as React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "default" | "footer";
}

export function Logo({ className = "", showText = true, variant = "default" }: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`flex items-center ${isFooter ? 'space-x-2' : 'space-x-3'} font-bold group ${className}`}
      aria-label="AhmerZ - Home"
    >
      {/* Logo Icon */}
      <div className="relative">
        <svg
          width={isFooter ? "36" : "44"}
          height={isFooter ? "36" : "44"}
          viewBox="0 0 44 44"
          className={`transition-transform duration-300 ${isFooter ? 'group-hover:scale-110' : 'group-hover:scale-105'}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`logoBg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id={`logoText-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f8fafc', stopOpacity: 0.9 }} />
            </linearGradient>
          </defs>

          {/* Clean circular background */}
          <circle
            cx="22"
            cy="22"
            r="20"
            fill={`url(#logoBg-${variant})`}
            className="drop-shadow-md"
          />

          {/* Subtle inner ring */}
          <circle
            cx="22"
            cy="22"
            r="18"
            fill="none"
            stroke={`url(#logoText-${variant})`}
            strokeWidth="0.5"
            opacity="0.3"
          />

          {/* Clean typography */}
          <text
            x="22"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize={isFooter ? "12" : "14"}
            fontWeight="700"
            textAnchor="middle"
            fill={`url(#logoText-${variant})`}
            className="drop-shadow-sm"
          >
            AhmerZ
          </text>

          {/* Simple accent dot */}
          <circle
            cx="22"
            cy="15"
            r="1.5"
            fill={`url(#logoText-${variant})`}
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`gradient-text leading-tight ${isFooter ? 'text-lg' : 'text-xl'}`}>AhmerZ</span>
          {!isFooter && (
            <span className="text-xs text-muted-foreground font-normal -mt-0.5">
              Full-Stack Development
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
