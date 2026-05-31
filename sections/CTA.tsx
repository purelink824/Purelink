"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { OrganicBlob } from "@/components/OrganicBlob";
import { fadeUp } from "@/lib/animations";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-primary" />
      <OrganicBlob className="absolute -right-10 top-0 h-64 w-64 opacity-30" />
      <OrganicBlob className="absolute -left-16 bottom-0 h-48 w-48 rotate-180 opacity-20" />
      <motion.div
        className="relative mx-auto max-w-3xl px-5 text-center md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Looking for a Reliable Garlic Supply Partner?
        </h2>
        <p className="mt-4 text-base text-white/80">
          Let&apos;s discuss your requirements — bulk orders, regular supply, or custom packaging.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="#contact" className="!bg-white !text-primary hover:!bg-cream">
            Contact Us
          </Button>
          <Button href="#contact" variant="outline" className="!border-white/40 !text-white hover:!bg-white/10">
            Request Quote
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
