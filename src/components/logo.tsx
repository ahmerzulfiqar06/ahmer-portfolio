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
          width={isFooter ? "42" : "52"}
          height={isFooter ? "42" : "52"}
          viewBox="0 0 52 52"
          className={`transition-transform duration-300 ${isFooter ? 'group-hover:scale-110' : 'group-hover:scale-105'}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`logoBg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.9 }} />
            </linearGradient>
            <linearGradient id={`logoAccent-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Modern sleek background */}
          <rect
            x="2"
            y="2"
            width="48"
            height="48"
            rx="12"
            fill={`url(#logoBg-${variant})`}
            className="drop-shadow-lg"
          />

          {/* Elegant inner border */}
          <rect
            x="4"
            y="4"
            width="44"
            height="44"
            rx="10"
            fill="none"
            stroke={`url(#logoAccent-${variant})`}
            strokeWidth="0.8"
            opacity="0.4"
          />

          {/* Stylish connected typography */}
          <text
            x="26"
            y="32"
            fontFamily="'Segoe UI', 'Helvetica Neue', system-ui, sans-serif"
            fontSize={isFooter ? "14" : "16"}
            fontWeight="600"
            textAnchor="middle"
            fill="white"
            letterSpacing={isFooter ? "1" : "1.2"}
            className="drop-shadow-sm"
            style={{
              fontStyle: 'italic',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            AhmerZ
          </text>

          {/* Modern accent elements */}
          <circle
            cx="16"
            cy="16"
            r="2"
            fill="white"
            opacity="0.8"
          />
          <circle
            cx="36"
            cy="16"
            r="1.5"
            fill="white"
            opacity="0.6"
          />

          {/* Sleek connecting line */}
          <path
            d="M16 18 L36 18"
            stroke="white"
            strokeWidth="0.8"
            opacity="0.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`leading-tight font-semibold ${isFooter ? 'text-lg' : 'text-xl'}`}
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)) 50%, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: 'italic',
              letterSpacing: '0.5px'
            }}
          >
            AhmerZ
          </span>
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
