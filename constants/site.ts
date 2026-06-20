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

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/purelinkfoods/" },
  { label: "Facebook", href: " https://www.facebook.com/profile.php?id=61591147162961" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/purelink-foods-47a674417/" },
  { label: "X", href: " https://x.com/purelinkfoods" },
  { label: "YouTube", href: "https://youtube.com/@purelinkfoods?si=dn2WmCQHtMivaGVW" },
] as const;
