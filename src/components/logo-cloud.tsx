"use client";

import { motion } from "framer-motion";

const companies = [
  {
    name: "HealthTech",
    logo: "HT",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    name: "DataFlow",
    logo: "DF",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "TechPro",
    logo: "TP",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "FitLife",
    logo: "FL",
    color: "from-orange-500 to-orange-600"
  },
  {
    name: "StartupX",
    logo: "SX",
    color: "from-pink-500 to-pink-600"
  },
  {
    name: "Innovation",
    logo: "IN",
    color: "from-indigo-500 to-indigo-600"
  },
];

export function LogoCloud() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-sm font-medium text-muted-foreground mb-2">
          Trusted by companies worldwide
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/60">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-muted-foreground/20" />
          <span>Building the future together</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-muted-foreground/20" />
        </div>
      </motion.div>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 lg:gap-8 items-center">
        {companies.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="flex items-center justify-center group cursor-pointer"
          >
            <div className="relative">
              {/* Logo container with gradient background */}
              <div className={`
                w-16 h-16 rounded-xl bg-gradient-to-br ${company.color} 
                flex items-center justify-center shadow-lg
                group-hover:shadow-xl transition-all duration-300
                group-hover:rotate-3
              `}>
                <span className="text-white font-bold text-lg">
                  {company.logo}
                </span>
              </div>
              
              {/* Glow effect on hover */}
              <div className={`
                absolute inset-0 rounded-xl bg-gradient-to-br ${company.color} 
                opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300
                -z-10
              `} />
              
              {/* Company name */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-medium text-muted-foreground/0 group-hover:text-muted-foreground transition-all duration-300">
                  {company.name}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Floating stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-center items-center gap-8 mt-16 text-center"
      >
        <div className="space-y-1">
          <div className="text-2xl font-bold text-primary">50+</div>
          <div className="text-xs text-muted-foreground">Projects</div>
        </div>
        <div className="w-px h-8 bg-muted-foreground/20" />
        <div className="space-y-1">
          <div className="text-2xl font-bold text-primary">25+</div>
          <div className="text-xs text-muted-foreground">Clients</div>
        </div>
        <div className="w-px h-8 bg-muted-foreground/20" />
        <div className="space-y-1">
          <div className="text-2xl font-bold text-primary">5+</div>
          <div className="text-xs text-muted-foreground">Years</div>
        </div>
      </motion.div>
    </div>
  );
}
