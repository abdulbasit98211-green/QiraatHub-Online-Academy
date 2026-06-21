type PatternProps = {
  className?: string;
  color?: string;
  opacity?: number;
};

/**
 * Subtle eight-point-star (Khatam) girih tessellation — the brand's
 * signature decorative motif. Rendered as a tiling SVG pattern so it can
 * sit faintly behind heroes, dividers and cards.
 */
export function IslamicPattern({
  className = "",
  color = "currentColor",
  opacity = 1,
}: PatternProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="100%"
      height="100%"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id="girih"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(0)"
        >
          <g
            fill="none"
            stroke={color}
            strokeWidth="1"
            strokeLinejoin="round"
          >
            {/* Eight-point star formed by two overlapping squares */}
            <path d="M40 8 L52 28 L72 40 L52 52 L40 72 L28 52 L8 40 L28 28 Z" />
            <rect x="22" y="22" width="36" height="36" />
            <rect
              x="22"
              y="22"
              width="36"
              height="36"
              transform="rotate(45 40 40)"
            />
            {/* Connecting lines to neighbouring tiles */}
            <path d="M40 0 L40 8 M40 72 L40 80 M0 40 L8 40 M72 40 L80 40" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#girih)" />
    </svg>
  );
}

/** A single decorative star, e.g. for eyebrows and dividers. */
export function StarGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 2 L15 9 L22 12 L15 15 L12 22 L9 15 L2 12 L9 9 Z" />
    </svg>
  );
}

/** Thin ornamental divider with a centred star. */
export function OrnamentDivider({
  className = "",
  align = "center",
}: {
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`flex items-center gap-3 text-gold-500 ${
        align === "left" ? "justify-start" : "justify-center"
      } ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/70" />
      <StarGlyph className="h-4 w-4" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/70" />
    </div>
  );
}
