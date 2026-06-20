"use client";

import { motion } from "framer-motion";
import { SectionHeader, SectionWrapper } from "@/components/ui/SectionWrapper";
import { PROCESS_STEPS } from "@/constants/process";
import { fadeUp, staggerContainer } from "@/lib/animations";
const stepVariants: any = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

const lineTransition: any = { duration: 0.9, ease: [0.22, 1, 0.36, 1] };

export function Process() {
  return (
    <SectionWrapper id="process" className="bg-[#FAFBF8]">
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
        {/* Animated line-draw for timeline (desktop) */}
            <motion.svg
          viewBox="0 0 100 2"
          className="absolute left-0 right-0 top-10 hidden h-[3px] w-full md:block"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="timeline-grad" x1="0%" x2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.98" />
              <stop offset="60%" stopColor="var(--primary-dark)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 1 L100 1"
            stroke="url(#timeline-grad)"
            strokeWidth={3}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={lineTransition}
          />
        </motion.svg>

        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="min-w-[200px] flex-1 md:min-w-0"
            >
              <div className="relative mb-4 flex items-center gap-3 md:flex-col md:items-start group">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white transition-transform duration-200 md:mx-0"
                  style={{
                      background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                      boxShadow: '0 6px 20px rgba(30,80,32,0.12)'
                    }}
                >
                  {step.step}
                </span>
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-primary/20 md:block" aria-hidden />
                )}
              </div>

              <article className="rounded-2xl p-4 transition-shadow md:p-5"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))',
                  boxShadow: '0 6px 18px rgba(16,24,16,0.06)',
                  backdropFilter: 'saturate(120%) blur(4px)'
                }}
              >
                <h3 className="font-heading text-base font-semibold text-text">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text/65">{step.description}</p>
              </article>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
