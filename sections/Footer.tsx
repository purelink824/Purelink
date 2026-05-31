import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/constants/site";

const CONTACT_LINKS = [
  { label: SITE.phone, href: SITE.phoneHref },
  { label: SITE.email, href: `mailto:${SITE.email}` },
  { label: "WhatsApp", href: SITE.whatsapp, external: true },
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
              className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-xs font-medium text-white transition hover:bg-primary"
            >
              <WhatsAppIcon />
              Chat with us
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
