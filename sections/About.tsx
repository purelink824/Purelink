"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/lib/animations";

const STORY = `At Purelink Foods, we believe quality food ingredients begin with careful selection, responsible sourcing, and consistent processing.

Starting from a single location, our focus has always been simple — deliver fresh, hygienically handled garlic products that businesses can trust every single time.

We work closely with trusted sourcing partners and use careful quality checks to ensure every batch meets high standards before reaching our customers.

From peeled garlic to fresh cloves and raw bulbs, we are committed to supplying products that bring consistency, freshness, and reliability to kitchens, wholesalers, and food businesses.

As we continue to grow, our mission remains the same:
to build long-term relationships through quality, transparency, and dependable service.`;

export function About() {
  const paragraphs = STORY.split("\n\n");

  return (
    <SectionWrapper id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div variants={fadeUp} className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5">
          <Image
            src="/images/about-team.png"
            alt="Purelink Foods team at garlic sourcing"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
        <div>
          <motion.div variants={fadeUp} className="mb-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">About Us</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-text md:text-4xl">
              Built on Quality, Grown with Trust
            </h2>
          </motion.div>
          <div className="space-y-4 text-base leading-relaxed text-text/75">
            {paragraphs.map((p) => (
              <motion.p key={p.slice(0, 40)} variants={fadeUp}>
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
