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
          width={isFooter ? "36" : "44"}
          height={isFooter ? "36" : "44"}
          viewBox="0 0 44 44"
          className={`transition-transform duration-300 ${isFooter ? 'group-hover:scale-110' : 'group-hover:scale-105'}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`bgGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--background))', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--muted))', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id={`textGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>

          {/* Rounded rectangle background - theme aware */}
          <rect
            width="44"
            height="44"
            rx="8"
            fill={`url(#bgGradient-${variant})`}
            className="drop-shadow-md"
          />

          {/* Inner circle stroke - theme aware */}
          <circle
            cx="22"
            cy="22"
            r="19"
            fill="none"
            stroke={`url(#textGradient-${variant})`}
            strokeWidth="0.7"
            opacity="0.4"
          />

          {/* AZ text - theme aware */}
          <text
            x="22"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize={isFooter ? "14" : "16"}
            fontWeight="700"
            textAnchor="middle"
            fill={`url(#textGradient-${variant})`}
            className="drop-shadow-sm"
          >
            AZ
          </text>
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
