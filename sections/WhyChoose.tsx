"use client";

import { motion } from "framer-motion";
import { SectionHeader, SectionWrapper } from "@/components/ui/SectionWrapper";
import { WHY_CHOOSE } from "@/constants/whyChoose";
import { fadeUp, hoverLift } from "@/lib/animations";

export function WhyChoose() {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow="Why Purelink"
        title="Why Choose Us"
        description="Partnership-focused supply built around quality, hygiene, and reliability."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_CHOOSE.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="rest"
            whileHover="hover"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
          >
            <motion.div variants={hoverLift}>
              <div className="mb-4 h-1 w-10 rounded-full bg-primary" />
              <h3 className="font-heading text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text/65">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
