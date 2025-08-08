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
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <p className="text-sm font-medium text-muted-foreground/80">
          Trusted by companies worldwide
        </p>
      </motion.div>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 lg:gap-6 items-center">
        {companies.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.05,
              type: "spring",
              stiffness: 120
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              transition: { duration: 0.2 }
            }}
            className="flex items-center justify-center group cursor-pointer"
          >
            <div className="relative">
              {/* Logo container */}
              <div className={`
                w-12 h-12 rounded-lg bg-gradient-to-br ${company.color} 
                flex items-center justify-center shadow-md
                group-hover:shadow-lg transition-all duration-300
                group-hover:rotate-2
              `}>
                <span className="text-white font-bold text-sm">
                  {company.logo}
                </span>
              </div>
              
              {/* Subtle glow effect */}
              <div className={`
                absolute inset-0 rounded-lg bg-gradient-to-br ${company.color} 
                opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300
                -z-10
              `} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
