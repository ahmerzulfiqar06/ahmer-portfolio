"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { startupServices, agencyServices } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="text-center space-y-4 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-1"
          >
            <span className="gradient-text">Services</span> That Drive Results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-large max-w-3xl mx-auto"
          >
            Whether you're a startup looking to validate your idea or an agency
            needing reliable development partners, we provide tailored solutions
            that deliver measurable results.
          </motion.p>
        </div>

        {/* For Startups */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">For Startups</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable development to get your product to market quickly 
              and scale with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {startupServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card h-full"
              >
                <div className="card-content space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="heading-4">{service.title}</h3>
                      {service.startingPrice && (
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Starting at</div>
                          <div className="font-semibold text-primary">{service.startingPrice}</div>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold mb-3">Deliverables</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Timeline: {service.timeline}</span>
                  </div>

                  {/* CTA */}
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* For Agencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">For Agencies</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              White-label development services with seamless client handoffs 
              and comprehensive documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agencyServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="card h-full"
              >
                <div className="card-content space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="heading-4">{service.title}</h3>
                      {service.startingPrice && (
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Starting at</div>
                          <div className="font-semibold text-primary">{service.startingPrice}</div>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold mb-3">Deliverables</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Timeline: {service.timeline}</span>
                  </div>

                  {/* CTA */}
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Partner With Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Process */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Process</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures your project is delivered on time,
            on budget, and exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery", description: "Understanding your goals, requirements, and constraints" },
            { step: "02", title: "Planning", description: "Creating detailed specifications and project timeline" },
            { step: "03", title: "Development", description: "Building your solution with regular updates and feedback" },
            { step: "04", title: "Delivery", description: "Testing, deployment, and comprehensive handoff" },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="heading-4 mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="heading-2">Ready to Get Started?</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom 
              solution that fits your needs and budget.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
