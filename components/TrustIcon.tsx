import type { ReactNode } from "react";

type TrustIconProps = { icon: string; className?: string };

export function TrustIcon({ icon, className }: TrustIconProps) {
  const paths: Record<string, ReactNode> = {
    shield: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l8 4v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z" />
    ),
    check: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12l4 4L19 6" />
    ),
    truck: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8h11v8H3V8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4l3 3v3h-7v-6z" />
        <circle cx="7" cy="18" r="1.5" fill="currentColor" />
        <circle cx="17" cy="18" r="1.5" fill="currentColor" />
      </>
    ),
    leaf: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-4 6-4 12 0 18 4-6 4-12 0-18z M12 21V9" />
    ),
    package: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8l8-4 8 4-8 4-8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8v8l8 4 8-4V8" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden>
      {paths[icon] ?? paths.check}
    </svg>
  );
}
