export function OrganicBlob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3D6B35" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8B6B4A" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <path
        fill="url(#blobGrad)"
        d="M45,100 C45,55 75,25 115,35 C155,45 175,75 165,110 C155,145 120,165 85,155 C50,145 45,125 45,100Z"
      />
    </svg>
  );
}
