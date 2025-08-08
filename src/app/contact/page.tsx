"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ahmerzulfiqar.dev",
    href: "mailto:hello@ahmerzulfiqar.dev"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide",
    href: null
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null
  }
];

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on complexity, but most web applications take 4-12 weeks. I'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! I work with clients worldwide and am comfortable with remote collaboration across different time zones."
  },
  {
    question: "What's included in your development services?",
    answer: "I provide end-to-end development including planning, design, development, testing, deployment, and post-launch support."
  },
  {
    question: "Can you work with my existing team?",
    answer: "Yes, I frequently collaborate with existing teams and can integrate seamlessly with your development workflow."
  }
];

export default function ContactPage() {
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
            Let's Build Something <span className="gradient-text">Amazing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-large max-w-3xl mx-auto"
          >
            Ready to turn your vision into reality? I'm here to help you build 
            exceptional digital experiences that drive results and delight users.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="heading-3 mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about your project? Want to discuss requirements 
                or get a quote? I'm here to help and respond quickly.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            <div className="card">
              <div className="card-content space-y-4">
                <h3 className="font-semibold">What to Expect</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Free initial consultation call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Detailed project proposal with timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Transparent pricing and process</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQs */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Common questions about working together and my development process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="card-content space-y-3">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
