export const SITE = {
  name: "Purelink Foods",
  tagline: "Fresh Produce. Processed to Perfection.",
  description:
    "Premium garlic supply and processing — carefully sourced, hygienically processed, and delivered with consistency.",
  url: "https://purelinkfoods.com",
  phone: "+91 78747 25050",
  phoneHref: "tel:+917874725050",
  whatsapp: "https://wa.me/917874725050",
  email: "purelinkfoods@gmail.com",
  address: {
    line1: "Ambica Commercial, Near A.J. High School",
    line2: "Vaso - 387380, District Kheda, Gujarat",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;
