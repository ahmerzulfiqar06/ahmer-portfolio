import * as React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "default" | "footer";
}

export function Logo({ className = "", showText = true, variant = "default" }: LogoProps) {
  const isFooter = variant === "footer";
  const size = isFooter ? "32" : "48";
  const iconSize = isFooter ? "32" : "40";

  return (
    <Link
      href="/"
      className={`flex items-center ${isFooter ? 'space-x-2' : 'space-x-3'} font-bold group ${className}`}
      aria-label="AhmerZ - Home"
    >
      {/* Logo Icon */}
      <div className="relative">
        <svg
          width={iconSize}
          height={iconSize}
          viewBox={`0 0 ${size} ${size}`}
          className={`transition-all duration-300 ${isFooter ? 'group-hover:scale-110' : 'group-hover:scale-105'}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`logoBg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.9 }} />
            </linearGradient>
            <linearGradient id={`logoText-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f8fafc', stopOpacity: 0.95 }} />
            </linearGradient>
          </defs>

          {/* Modern geometric background */}
          <rect
            x={isFooter ? "2" : "4"}
            y={isFooter ? "2" : "4"}
            width={isFooter ? "28" : "40"}
            height={isFooter ? "28" : "40"}
            rx={isFooter ? "6" : "8"}
            fill={`url(#logoBg-${variant})`}
            className="drop-shadow-lg"
          />

          {/* Clean border */}
          <rect
            x={isFooter ? "3" : "5"}
            y={isFooter ? "3" : "5"}
            width={isFooter ? "26" : "38"}
            height={isFooter ? "26" : "38"}
            rx={isFooter ? "5" : "7"}
            fill="none"
            stroke={`url(#logoText-${variant})`}
            strokeWidth="0.5"
            opacity="0.2"
          />

          {/* Modern typography */}
          <text
            x={isFooter ? "16" : "24"}
            y={isFooter ? "21" : "29"}
            fontFamily="'Inter', system-ui, -apple-system, sans-serif"
            fontSize={isFooter ? "10" : "14"}
            fontWeight="800"
            textAnchor="middle"
            fill={`url(#logoText-${variant})`}
            letterSpacing={isFooter ? "0.5" : "0.8"}
            className="drop-shadow-sm"
          >
            AhmerZ
          </text>

          {/* Minimal accent line */}
          <line
            x1={isFooter ? "8" : "12"}
            y1={isFooter ? "12" : "16"}
            x2={isFooter ? "12" : "16"}
            y2={isFooter ? "12" : "16"}
            stroke={`url(#logoText-${variant})`}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
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
