"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Code, Zap, Database } from "lucide-react";

export function HeroAnimation() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Code icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-primary/20"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 12)}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [-5, 5, -5],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <Code size={24 + i * 4} />
          </motion.div>
        ))}

        {/* Database icons */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`db-${i}`}
            className="absolute text-blue-500/20"
            style={{
              right: `${15 + (i * 20)}%`,
              bottom: `${25 + (i * 15)}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            <Database size={20 + i * 3} />
          </motion.div>
        ))}

        {/* Zap icons for energy */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`zap-${i}`}
            className="absolute text-yellow-500/20"
            style={{
              left: `${60 + (i * 10)}%`,
              top: `${10 + (i * 25)}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <Zap size={16 + i * 4} />
          </motion.div>
        ))}
      </div>

      {/* Main devices */}
      <div className="relative flex items-center justify-center gap-8 md:gap-12">
        {/* Laptop Mockup */}
        <motion.div
          initial={{ x: -100, opacity: 0, rotateY: -15 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            {/* Laptop screen */}
            <motion.div
              className="w-48 md:w-64 h-32 md:h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-t-lg border-2 border-slate-700 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Screen content */}
              <div className="absolute inset-2 bg-gradient-to-br from-slate-900 to-black rounded-md">
                {/* Browser mockup */}
                <div className="h-3 bg-slate-700 rounded-t-md flex items-center px-2 gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                {/* Code lines animation */}
                <div className="p-2 space-y-1">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-1 bg-primary/30 rounded"
                      style={{ width: `${60 + Math.random() * 30}%` }}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scaleX: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Laptop base */}
            <div className="w-48 md:w-64 h-3 bg-gradient-to-r from-slate-700 to-slate-800 rounded-b-lg"></div>
          </div>

          {/* Floating code snippets */}
          <motion.div
            className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-2 shadow-lg"
            animate={{
              y: [-5, 5, -5],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <code className="text-xs text-primary font-mono">
              const app = createApp()
            </code>
          </motion.div>
        </motion.div>

        {/* Connection line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-primary/50 to-blue-500/50 origin-left"
        />

        {/* Phone Mockup */}
        <motion.div
          initial={{ x: 100, opacity: 0, rotateY: 15 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative">
            {/* Phone screen */}
            <motion.div
              className="w-24 md:w-32 h-48 md:h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-slate-700 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Screen content */}
              <div className="absolute inset-1 bg-gradient-to-br from-slate-900 to-black rounded-xl">
                {/* Status bar */}
                <div className="h-4 bg-slate-800 rounded-t-xl flex items-center justify-between px-2">
                  <div className="text-xs text-white/70">9:41</div>
                  <div className="flex gap-1">
                    <div className="w-3 h-1 bg-white/50 rounded-full"></div>
                  </div>
                </div>

                {/* App interface mockup */}
                <div className="p-2 space-y-2">
                  {/* Header */}
                  <motion.div
                    className="h-3 bg-primary/30 rounded"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Content blocks */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-2 bg-muted/50 rounded"
                      style={{ width: `${70 + Math.random() * 25}%` }}
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scaleX: [0.9, 1, 0.9],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating UI elements */}
          <motion.div
            className="absolute -top-2 -left-6 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-2 shadow-lg"
            animate={{
              y: [-3, 3, -3],
              x: [-2, 2, -2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <code className="text-xs text-blue-500 font-mono">
              &lt;Mobile /&gt;
            </code>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech stack indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-8 flex justify-center gap-4"
      >
        {[
          { icon: Code, label: "React" },
          { icon: Database, label: "Next.js" },
          { icon: Smartphone, label: "Mobile" },
        ].map((tech, index) => (
          <motion.div
            key={tech.label}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 1.2 + index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full px-3 py-1"
          >
            <tech.icon size={14} className="text-primary" />
            <span className="text-xs font-medium">{tech.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
