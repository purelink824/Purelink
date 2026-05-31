"use client";

import { motion } from "framer-motion";
import { SectionHeader, SectionWrapper } from "@/components/ui/SectionWrapper";
import { PROCESS_STEPS } from "@/constants/process";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Process() {
  return (
    <SectionWrapper id="process" className="bg-white/50">
      <SectionHeader
        eyebrow="Our Process"
        title="From Source to Your Kitchen"
        description="A clear, quality-first journey — designed for consistency at every step."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-primary/20 md:block" />
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              className="min-w-[200px] flex-1 md:min-w-0"
            >
              <div className="relative mb-4 flex items-center gap-3 md:flex-col md:items-start">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white shadow-md md:mx-0">
                  {step.step}
                </span>
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-primary/20 md:block" aria-hidden />
                )}
              </div>
              <h3 className="font-heading text-base font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text/65">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
