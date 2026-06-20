import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/constants/site";

const CONTACT_LINKS = [
  { label: SITE.phone, href: SITE.phoneHref },
  { label: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Chat on WhatsApp", href: SITE.whatsapp, external: true },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-4 overflow-hidden bg-text text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(61,107,53,0.35),transparent)]" />
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="rounded-[2rem] bg-cream/95 p-6 shadow-sm ring-1 ring-black/5">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-[2rem] bg-white p-4 shadow-inner md:h-36 md:w-36">
                <Image
                  src="/images/logo.png"
                  alt="Purelink Foods"
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-base font-semibold uppercase tracking-[0.18em] text-primary">
                  Purelink Foods
                </p>
                <p className="mt-2 text-sm text-cream/70">Premium garlic supplier</p>
              </div>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-cream/70">{SITE.description}</p>
            <p className="mt-4 font-heading text-base font-medium italic text-cream/90">{SITE.tagline}</p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">Navigate</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-cream/80 transition-colors hover:text-white"
                  >
                    <span className="mr-2 h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">Contact</p>
            <ul className="space-y-3">
              {CONTACT_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...("external" in item && item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-cream/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
                Follow Us
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 bg-white/5 text-cream transition hover:border-cream/30 hover:bg-white/10"
                    aria-label={item.label}
                  >
                    <SocialIcon label={item.label} />
                  </a>
                ))}
              </div>
            </div>
            <address className="mt-5 not-italic text-sm leading-relaxed text-cream/60">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#products" className="text-xs text-cream/50 transition hover:text-cream">
              Products
            </Link>
            <Link href="#contact" className="text-xs text-cream/50 transition hover:text-cream">
              Get a Quote
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/90 text-white transition hover:bg-primary"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.528 5.855L0 24l6.335-1.662A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  switch (label) {
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm10 2c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.5a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm4.8-7.8a1.05 1.05 0 1 1-1.05-1.05A1.05 1.05 0 0 1 16.8 7.2z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.5v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.7V12h2.9l-.5 3h-2.4v7A10 10 0 0 0 22 12z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M20.45 20.45h-3.55V14.6c0-1.4-.5-2.3-1.8-2.3-1 0-1.6.7-1.9 1.3-.1.3-.1.7-.1 1.1v5.8H9.05s.1-9.4 0-10.4h3.55v1.5c-.01.02-.02.04-.03.06h.03v-.06c.5-.8 1.4-1.9 3.4-1.9 2.5 0 4.4 1.6 4.4 5.1v5.7zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zm1.77 13.02H3.57V10.05h3.54v10.4zM22 2H2.01A1.99 1.99 0 0 0 0 3.99v16.02A1.99 1.99 0 0 0 1.99 22h20.02A1.99 1.99 0 0 0 24 20.01V3.99A1.99 1.99 0 0 0 22 2z" />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M23.9 4.6c-.4-.4-1-.4-1.4 0l-8 8-8-8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l8 8-8 8c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l8-8 8 8c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-8-8 8-8c.4-.4.4-1 0-1.4z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M23.5 6.3a2.8 2.8 0 0 0-2-2C19 3.8 12 3.8 12 3.8s-7 0-9.5.5a2.8 2.8 0 0 0-2 2C0 8.8 0 12 0 12s0 3.2.5 5.7a2.8 2.8 0 0 0 2 2c2.5.5 9.5.5 9.5.5s7 0 9.5-.5a2.8 2.8 0 0 0 2-2c.5-2.5.5-5.7.5-5.7s0-3.2-.5-5.7zM9.6 15.4V8.6l6.3 3.4-6.3 3.4z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}
