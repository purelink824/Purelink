export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export const softZoom = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
  },
};
