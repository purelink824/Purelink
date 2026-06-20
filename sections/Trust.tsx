"use client";

import { motion } from "framer-motion";
import { TrustIcon } from "@/components/TrustIcon";
import { TRUST_ITEMS } from "@/constants/trust";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Trust() {
  return (
    <section className="py-12" style={{ background: 'var(--cream)' }}>
      <motion.ul
        className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 md:grid-cols-5 md:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {TRUST_ITEMS.map((item) => (
          <motion.li
            key={item.title}
            variants={fadeUp}
            className="flex flex-col items-center text-center"
            whileHover={{ translateY: -6 }}
          >
            <div
              className="mb-3 flex items-center justify-center rounded-full"
              style={{
                height: 72,
                width: 72,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.98))',
                boxShadow: '0 8px 30px rgba(16,24,16,0.06)',
                border: '1px solid rgba(27,94,32,0.06)',
                backdropFilter: 'blur(6px)'
              }}
            >
              <TrustIcon icon={item.icon} className="h-8 w-8 text-[var(--primary-dark)]" />
            </div>
            <span className="text-sm font-medium text-text">{item.title}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
