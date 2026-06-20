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
          id="contact-form"
          className="space-y-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const name = String(data.get("name") || "");
            const company = String(data.get("company") || "");
            const senderEmail = String(data.get("email") || "");
            const message = String(data.get("requirement") || "");

            const lines = [
              `Name: ${name}`,
              company ? `Company: ${company}` : null,
              `Email: ${senderEmail}`,
              "",
              message,
            ].filter(Boolean);

            const body = lines.join("\n");

            const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent(
              "Quote Request - Purelink Foods"
            )}&body=${encodeURIComponent(body)}`;

            // Try a few methods to reliably open the user's mail client
            try {
              console.log("Opening mailto:", mailtoHref);
              // prefer window.open (some browsers block location changes to mailto)
              const opened = window.open(mailtoHref);
              if (!opened) {
                // fallback: create a temporary anchor and click it
                const a = document.createElement("a");
                a.href = mailtoHref;
                a.style.display = "none";
                document.body.appendChild(a);
                a.click();
                setTimeout(() => a.remove(), 100);
              }
            } catch (err) {
              // last resort: set location
              window.location.href = mailtoHref;
            }
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
            type="button"
            onClick={(e) => {
              e.preventDefault();
              const form = document.getElementById("contact-form") as HTMLFormElement | null;
              if (!form) return;
              const data = new FormData(form);
              const name = String(data.get("name") || "");
              const company = String(data.get("company") || "");
              const senderEmail = String(data.get("email") || "");
              const message = String(data.get("requirement") || "");

              const lines = [
                `Name: ${name}`,
                company ? `Company: ${company}` : null,
                `Email: ${senderEmail}`,
                "",
                message,
              ].filter(Boolean);

              const body = lines.join("\n");

              const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent(
                "Quote Request - Purelink Foods"
              )}&body=${encodeURIComponent(body)}`;

              try {
                const opened = window.open(mailtoHref);
                if (!opened) {
                  const a = document.createElement("a");
                  a.href = mailtoHref;
                  a.style.display = "none";
                  document.body.appendChild(a);
                  a.click();
                  setTimeout(() => a.remove(), 100);
                }
              } catch (err) {
                window.location.href = mailtoHref;
              }
            }}
            style={{ background: 'var(--primary)' }}
            className="w-full rounded-full py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-95"
          >
            Send Inquiry
          </button>
        </motion.form>

        <motion.div variants={fadeUp} className="space-y-8">
          <div className="space-y-5">
            <ContactItem label="Phone" href={SITE.phoneHref} value={SITE.phone} />
            <ContactItem label="Email" href={`mailto:${SITE.email}`} value={SITE.email} />
            <div>
              <p className="text-sm font-medium text-[var(--primary)]">Location</p>
              <p className="mt-1 text-sm leading-relaxed text-text/70">
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-text p-6 text-center shadow-sm">
            <Image
              src="/images/whatsapp-qr.png"
              alt="WhatsApp QR code for Purelink"
              width={200}
              height={200}
              style={{ width: 'auto', height: 'auto' }}
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
