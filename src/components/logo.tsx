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
      {/* Logo Icon - Same as favicon design */}
      <div className="relative">
        <svg
          width={isFooter ? "36" : "48"}
          height={isFooter ? "36" : "48"}
          viewBox="0 0 44 44"
          className={`transition-transform duration-300 ${isFooter ? 'group-hover:scale-110' : 'group-hover:scale-105'}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`primaryGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.7 }} />
            </linearGradient>
            <linearGradient id={`accentGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            </linearGradient>
            <filter id={`glow-${variant}`}>
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Transparent background - just elegant borders */}
          <rect
            width="44"
            height="44"
            rx="10"
            fill="none"
            stroke={`url(#primaryGradient-${variant})`}
            strokeWidth="1.5"
            opacity="0.8"
            className="drop-shadow-sm"
          />

          {/* Inner gradient ring */}
          <rect
            x="3"
            y="3"
            width="38"
            height="38"
            rx="8"
            fill="none"
            stroke={`url(#accentGradient-${variant})`}
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* Sleek inner accent */}
          <rect
            x="6"
            y="6"
            width="32"
            height="32"
            rx="6"
            fill="none"
            stroke={`url(#primaryGradient-${variant})`}
            strokeWidth="0.3"
            opacity="0.4"
          />

          {/* AZ text with gradient and glow */}
          <text
            x="22"
            y="28"
            fontFamily="'Inter', system-ui, -apple-system, sans-serif"
            fontSize={isFooter ? "14" : "16"}
            fontWeight="800"
            textAnchor="middle"
            fill={`url(#primaryGradient-${variant})`}
            filter={`url(#glow-${variant})`}
            letterSpacing="0.5"
            className="drop-shadow-sm"
          >
            AZ
          </text>

          {/* Decorative accent lines */}
          <line
            x1="14"
            y1="14"
            x2="18"
            y2="14"
            stroke={`url(#accentGradient-${variant})`}
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.5"
          />
          <line
            x1="26"
            y1="14"
            x2="30"
            y2="14"
            stroke={`url(#accentGradient-${variant})`}
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.5"
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
