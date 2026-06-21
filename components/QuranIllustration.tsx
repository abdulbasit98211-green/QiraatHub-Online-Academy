export function QuranIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 440"
      className={className}
      role="img"
      aria-label="An open Quran resting on a wooden stand"
      fill="none"
    >
      <defs>
        <linearGradient id="pageGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F2F8F4" />
        </linearGradient>
        <linearGradient id="standGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E7C5A" />
          <stop offset="1" stopColor="#0B6347" />
        </linearGradient>
        <linearGradient id="haloGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C9A227" stopOpacity="0.35" />
          <stop offset="1" stopColor="#C9A227" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0" stopColor="#16A07A" stopOpacity="0.22" />
          <stop offset="1" stopColor="#16A07A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx="240" cy="190" r="200" fill="url(#glow)" />

      {/* Decorative arch (mihrab silhouette) */}
      <path
        d="M120 200 Q120 70 240 60 Q360 70 360 200"
        stroke="#C9A227"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      <path
        d="M150 200 Q150 100 240 92 Q330 100 330 200"
        stroke="#0E7C5A"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />

      {/* Halo behind book */}
      <ellipse cx="240" cy="150" rx="120" ry="40" fill="url(#haloGrad)" />

      {/* Book pages */}
      <g>
        <path
          d="M240 150 C200 132 150 130 110 142 L110 250 C150 238 200 240 240 258 Z"
          fill="url(#pageGrad)"
          stroke="#D9E6DE"
          strokeWidth="1.5"
        />
        <path
          d="M240 150 C280 132 330 130 370 142 L370 250 C330 238 280 240 240 258 Z"
          fill="url(#pageGrad)"
          stroke="#D9E6DE"
          strokeWidth="1.5"
        />
        {/* Spine */}
        <path d="M240 150 L240 258" stroke="#C9A227" strokeWidth="2" />

        {/* Text lines */}
        {[170, 186, 202, 218].map((y) => (
          <g key={y}>
            <line x1="128" y1={y} x2="218" y2={y - 6} stroke="#0B1F3A" strokeOpacity="0.18" strokeWidth="3" strokeLinecap="round" />
            <line x1="262" y1={y - 6} x2="352" y2={y} stroke="#0B1F3A" strokeOpacity="0.18" strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
      </g>

      {/* Rehl stand */}
      <path
        d="M150 270 L240 300 L330 270 L330 286 L240 318 L150 286 Z"
        fill="url(#standGrad)"
      />
      <path d="M196 296 L196 360 L284 360 L284 296" stroke="#0B6347" strokeWidth="10" strokeLinecap="round" />
      <path d="M196 360 L160 392 M284 360 L320 392" stroke="#0B6347" strokeWidth="10" strokeLinecap="round" />
      <line x1="150" y1="392" x2="330" y2="392" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" />

      {/* Eight-point star ornament above */}
      <g transform="translate(240 40)" stroke="#C9A227" strokeWidth="2" fill="none">
        <path d="M0 -16 L4 -4 L16 0 L4 4 L0 16 L-4 4 L-16 0 L-4 -4 Z" />
      </g>
    </svg>
  );
}
