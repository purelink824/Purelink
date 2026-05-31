import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SITE } from "@/constants/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Premium Garlic Supply`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "garlic supplier",
    "peeled garlic",
    "bulk garlic",
    "garlic processing",
    "Gujarat garlic supply",
    "Purelink Foods",
  ],
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
