"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, hoverLift, softZoom } from "@/lib/animations";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
};

export function ProductCard({ title, description, image }: ProductCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
    >
      <motion.div variants={hoverLift} className="h-full">
        <div className="relative aspect-[4/3] overflow-hidden bg-cream">
          <motion.div variants={softZoom} className="absolute inset-0">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
        <div className="p-6">
          <h3 className="font-heading text-lg font-semibold text-text">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text/65">{description}</p>
        </div>
      </motion.div>
    </motion.article>
  );
}
