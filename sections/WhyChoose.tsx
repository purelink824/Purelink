"use client";

import { motion } from "framer-motion";
import { SectionHeader, SectionWrapper } from "@/components/ui/SectionWrapper";
import { WHY_CHOOSE } from "@/constants/whyChoose";
import { fadeUp, hoverLift } from "@/lib/animations";
import { TrustIcon } from "@/components/TrustIcon";

const cardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.995 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
  }),
  hover: { scale: 1.02 },
};

const iconForTitle: Record<string, string> = {
  "Consistent Quality": "check",
  "Hygienic Handling": "shield",
  "Reliable Supply": "truck",
  "Competitive Pricing": "package",
  "Fresh Produce": "leaf",
  "Customer-Focused Service": "check",
};

export function WhyChoose() {
  return (
    <SectionWrapper>
      <SectionHeader
        eyebrow="Why Purelink"
        title="Why Choose Us"
        description="Partnership-focused supply built around quality, hygiene, and reliability."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_CHOOSE.map((item, idx) => (
          <motion.div
            key={item.title}
            custom={idx}
            variants={cardVariants as any}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-transform duration-200 hover:shadow-xl"
          >
            <motion.div variants={hoverLift} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div
                  className="flex items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105"
                  style={{
                    height: 56,
                    width: 56,
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                    boxShadow: '0 8px 24px rgba(30,80,32,0.14)',
                  }}
                >
                  <TrustIcon icon={iconForTitle[item.title] ?? "check"} className="h-6 w-6 text-white" />
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text/65">{item.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
