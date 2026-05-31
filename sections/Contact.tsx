"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader, SectionWrapper } from "@/components/ui/SectionWrapper";
import { SITE } from "@/constants/site";
import { fadeUp } from "@/lib/animations";

export function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-cream">
      <SectionHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Share your requirements — we'll respond with pricing and availability."
      />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.form
          variants={fadeUp}
          className="space-y-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const body = [
              `Name: ${data.get("name")}`,
              `Company: ${data.get("company")}`,
              `Email: ${data.get("email")}`,
              `Requirement: ${data.get("requirement")}`,
            ].join("\n");
            window.location.href = `mailto:${SITE.email}?subject=Quote Request - Purelink Foods&body=${encodeURIComponent(body)}`;
          }}
        >
          {(["name", "company", "email"] as const).map((field) => (
            <div key={field}>
              <label htmlFor={field} className="mb-1.5 block text-sm font-medium text-text capitalize">
                {field === "email" ? "Email" : field}
              </label>
              <input
                id={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                required={field !== "company"}
                className="w-full rounded-xl border border-text/10 bg-cream/50 px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          ))}
          <div>
            <label htmlFor="requirement" className="mb-1.5 block text-sm font-medium text-text">
              Requirement
            </label>
            <textarea
              id="requirement"
              name="requirement"
              rows={4}
              required
              className="w-full resize-none rounded-xl border border-text/10 bg-cream/50 px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary py-3.5 text-sm font-medium text-white transition hover:bg-primary/90"
          >
            Send Inquiry
          </button>
        </motion.form>

        <motion.div variants={fadeUp} className="space-y-8">
          <div className="space-y-5">
            <ContactItem label="Phone" href={SITE.phoneHref} value={SITE.phone} />
            <ContactItem label="Email" href={`mailto:${SITE.email}`} value={SITE.email} />
            <ContactItem label="WhatsApp" href={SITE.whatsapp} value="Chat on WhatsApp" external />
            <div>
              <p className="text-sm font-medium text-primary">Location</p>
              <p className="mt-1 text-sm leading-relaxed text-text/70">
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-text p-6 text-center shadow-sm">
            <p className="mb-4 text-sm text-white/80">Scan to chat on WhatsApp</p>
            <Image
              src="/images/whatsapp-qr.png"
              alt="WhatsApp QR code for Purelink"
              width={200}
              height={200}
              className="mx-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function ContactItem({
  label,
  href,
  value,
  external,
}: {
  label: string;
  href: string;
  value: string;
  external?: boolean;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-primary">{label}</p>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="mt-1 inline-block text-sm text-text/80 transition hover:text-primary"
      >
        {value}
      </a>
    </div>
  );
}
