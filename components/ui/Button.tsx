import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90 shadow-sm",
  secondary: "bg-accent text-white hover:bg-accent/90 shadow-sm",
  outline: "border border-primary/30 text-primary hover:bg-primary/5",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
