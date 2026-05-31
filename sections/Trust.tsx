"use client";

import { motion } from "framer-motion";
import { TrustIcon } from "@/components/TrustIcon";
import { TRUST_ITEMS } from "@/constants/trust";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Trust() {
  return (
    <section className="border-y border-text/5 bg-white/60 py-10">
      <motion.ul
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-5 md:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {TRUST_ITEMS.map((item) => (
          <motion.li key={item.title} variants={fadeUp} className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <TrustIcon icon={item.icon} className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-text">{item.title}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
