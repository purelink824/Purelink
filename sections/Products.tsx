"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeader, SectionWrapper } from "@/components/ui/SectionWrapper";
import { PRODUCTS } from "@/constants/products";
import { fadeUp } from "@/lib/animations";

export function Products() {
  return (
    <SectionWrapper id="products" className="bg-cream">
      <SectionHeader
        eyebrow="Our Products"
        title="Garlic Solutions for Every Kitchen"
        description="From peeled cloves to bulk supply — products processed for consistency and ready for your business."
      />
      <motion.div
        variants={fadeUp}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {PRODUCTS.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
