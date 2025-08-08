"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Testimonial as TestimonialType } from "@/types";

interface TestimonialProps {
  testimonial: TestimonialType;
  index?: number;
}

export function Testimonial({ testimonial, index = 0 }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card h-full"
    >
      <div className="card-content space-y-4">
        {/* Quote Icon */}
        <Quote className="h-8 w-8 text-primary/20" />

        {/* Content */}
        <blockquote className="text-muted-foreground leading-relaxed">
          "{testimonial.content}"
        </blockquote>

        {/* Rating */}
        {testimonial.rating && (
          <div className="flex space-x-1">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < testimonial.rating!
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        )}

        {/* Author */}
        <div className="flex items-center space-x-3 pt-4 border-t">
          {testimonial.avatar && (
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
          )}
          <div>
            <div className="font-medium text-sm">{testimonial.name}</div>
            <div className="text-xs text-muted-foreground">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
