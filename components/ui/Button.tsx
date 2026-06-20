import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const variants = {
  primary: {
    class: "text-white shadow-sm",
    style: { background: "var(--primary)" },
  },
  secondary: {
    class: "text-white shadow-sm",
    style: { background: "var(--accent)" },
  },
  outline: {
    class: "",
    style: {},
  },
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const v = variants[variant];
  return (
    <Link
      href={href}
      style={v.style}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300",
        v.class,
        className
      )}
    >
      {children}
    </Link>
  );
}
