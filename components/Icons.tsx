import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Check = (p: IconProps) => (
  <svg {...base} {...p}><path d="M20 6 9 17l-5-5" /></svg>
);
export const Star = (p: IconProps) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
  </svg>
);
export const Clock = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Globe = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></svg>
);
export const Users = (p: IconProps) => (
  <svg {...base} {...p}><path d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" /><circle cx="9.5" cy="8" r="3.5" /><path d="M20 19v-1a4 4 0 0 0-3-3.85M15.5 4.5a3.5 3.5 0 0 1 0 7" /></svg>
);
export const BookOpen = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 6.5C10.5 5 8 4.5 4 4.5v13c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-13c-4 0-6.5.5-8 2zM12 6.5v13" /></svg>
);
export const GraduationCap = (p: IconProps) => (
  <svg {...base} {...p}><path d="M22 9 12 4 2 9l10 5 10-5z" /><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v5" /></svg>
);
export const Calendar = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v3M16 3v3" /></svg>
);
export const Menu = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p: IconProps) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Phone = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l-1 4-2 2A16 16 0 0 1 3 6z" /></svg>
);
export const Mail = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const ChevronDown = (p: IconProps) => (
  <svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
);
export const ShieldCheck = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const Heart = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 20s-7-4.4-9.3-8.3C1 8.5 2.6 5 6 5c2 0 3.2 1.2 4 2.3C10.8 6.2 12 5 14 5c3.4 0 5 3.5 3.3 6.7C19 15.6 12 20 12 20z" /></svg>
);
export const Sparkle = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M18.4 5.6l-4.2 4.2M9.8 14.2l-4.2 4.2" /></svg>
);
export const Target = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
);
export const Compass = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></svg>
);
export const WhatsApp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M.06 24l1.7-6.2A11.86 11.86 0 0 1 .14 11.9 11.9 11.9 0 0 1 12 0a11.82 11.82 0 0 1 8.4 3.5 11.82 11.82 0 0 1 3.48 8.4c0 6.55-5.33 11.88-11.88 11.88a11.9 11.9 0 0 1-5.68-1.45L.06 24zM6.6 20.13l.36.21a9.86 9.86 0 0 0 5.03 1.38h.01c5.45 0 9.88-4.43 9.88-9.88a9.81 9.81 0 0 0-2.89-6.98A9.81 9.81 0 0 0 12 1.98c-5.45 0-9.88 4.43-9.88 9.88a9.85 9.85 0 0 0 1.51 5.26l.24.38-1.01 3.68 3.74-.98zM17.5 14.3c-.07-.12-.27-.2-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07a8.12 8.12 0 0 1-2.39-1.47 8.96 8.96 0 0 1-1.65-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42z" />
  </svg>
);
