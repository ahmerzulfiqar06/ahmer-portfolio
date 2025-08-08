"use client";

import { motion } from "framer-motion";

const companies = [
  "HealthTech Innovations",
  "DataFlow Analytics",
  "Digital Agency Pro",
  "FitLife Mobile",
  "TechStart Inc",
  "Innovation Labs",
];

export function LogoCloud() {
  return (
    <div className="py-8">
      <p className="text-center text-sm text-muted-foreground mb-8">
        Trusted by companies worldwide
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {companies.map((company, index) => (
          <motion.div
            key={company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="text-muted-foreground font-medium text-sm hover:text-foreground transition-colors">
              {company}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
