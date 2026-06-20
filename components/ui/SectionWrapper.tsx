"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function SectionWrapper({ id, children, className, containerClassName }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <motion.div
        className={cn("mx-auto max-w-6xl px-5 md:px-8", containerClassName)}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn("mb-14 max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--primary)]">{eyebrow}</p>
      )}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-text md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-text/70">{description}</p>}
    </motion.div>
  );
}
