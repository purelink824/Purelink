"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { OrganicBlob } from "@/components/OrganicBlob";
import { SITE } from "@/constants/site";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 pb-20 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <OrganicBlob className="absolute left-[5%] top-[30%] h-48 w-48 opacity-80" />
        <OrganicBlob className="absolute right-[10%] top-[20%] h-64 w-64 rotate-45 opacity-60" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="text-sm font-medium uppercase tracking-widest text-primary">
            {SITE.tagline}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight text-text md:text-5xl lg:text-[3.25rem]"
          >
            Premium Garlic Solutions for Modern Food Businesses
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-base leading-relaxed text-text/70 md:text-lg">
            Carefully sourced and hygienically processed garlic products built for consistency, freshness, and
            dependable supply.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Button href="#products">Explore Products</Button>
            <Button href="#contact" variant="outline">
              Request Quote
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 md:max-w-none"
        >
          <Image
            src="/images/hero-garlic.png"
            alt="Fresh premium garlic"
            width={600}
            height={600}
            className="aspect-square w-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
