"use client";

import { motion } from "framer-motion";

export function LoadingSpinner({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-primary/20 border-t-primary rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}

export function SkeletonLoader({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`bg-gradient-to-r from-muted/50 via-muted to-muted/50 rounded-md ${className}`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        backgroundSize: "200% 100%"
      }}
    />
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="space-y-8">
      {/* Status badge skeleton */}
      <div className="flex justify-center">
        <SkeletonLoader className="h-8 w-48 rounded-full" />
      </div>

      {/* Title skeleton */}
      <div className="space-y-4">
        <SkeletonLoader className="h-16 md:h-20 lg:h-24 w-full max-w-2xl mx-auto" />
        <SkeletonLoader className="h-12 md:h-16 lg:h-20 w-full max-w-3xl mx-auto" />
      </div>

      {/* Description skeleton */}
      <SkeletonLoader className="h-6 w-full max-w-2xl mx-auto" />

      {/* Buttons skeleton */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <SkeletonLoader className="h-12 w-40" />
        <SkeletonLoader className="h-12 w-40" />
      </div>

      {/* Stats skeleton */}
      <div className="flex justify-center items-center gap-8 pt-6">
        <div className="text-center space-y-2">
          <SkeletonLoader className="h-8 w-12" />
          <SkeletonLoader className="h-4 w-16" />
        </div>
        <div className="w-px h-6 bg-border" />
        <div className="text-center space-y-2">
          <SkeletonLoader className="h-8 w-12" />
          <SkeletonLoader className="h-4 w-16" />
        </div>
        <div className="w-px h-6 bg-border" />
        <div className="text-center space-y-2">
          <SkeletonLoader className="h-8 w-12" />
          <SkeletonLoader className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}
