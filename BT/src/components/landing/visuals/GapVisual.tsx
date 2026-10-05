import { VisualFrame } from "./VisualFrame";

/**
 * Gap visual — the silver span.
 * Two cliffs: idea, product. A beam of light is the bridge Runlets builds.
 */
export function GapVisual() {
  return (
    <VisualFrame caption="the gap is real. runlets is the span.">
      <div className="relative h-[300px] overflow-hidden">
        <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="beamCore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="55%" stopColor="#d9d9e1" />
              <stop offset="100%" stopColor="#8f8f9b" />
            </linearGradient>
            <filter id="beamGlow" x="-30%" y="-120%" width="160%" height="340%">
              <feGaussianBlur stdDeviation="9" />
            </filter>
          </defs>

          {/* cliffs */}
          <path d="M0 300 L0 190 L34 150 L70 190 L78 300 Z" fill="#101014" stroke="rgba(255,255,255,0.14)" />
          <path d="M400 300 L400 190 L366 150 L330 190 L322 300 Z" fill="#101014" stroke="rgba(255,255,255,0.14)" />
          <text x="39" y="252" textAnchor="middle" fill="#9a9aa5" fontSize="12" fontFamily="monospace" letterSpacing="3">idea</text>
          <text x="361" y="252" textAnchor="middle" fill="#9a9aa5" fontSize="12" fontFamily="monospace" letterSpacing="3">product</text>

          {/* the span */}
          <rect x="60" y="176" width="280" height="30" rx="15" fill="url(#beam)" filter="url(#beamGlow)" opacity="0.8" />
          <rect x="60" y="182" width="280" height="18" rx="9" fill="url(#beamCore)" />
          <text x="200" y="196" textAnchor="middle" fill="#0a0a0c" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="4">runlets</text>

          {/* light crossing */}
          {[0, 1, 2].map((i) => (
            <circle key={i} r="4" fill="#ffffff" filter="url(#beamGlow)">
              <animateMotion dur={`${3 + i}s`} begin={`-${i * 1.1}s`} repeatCount="indefinite" path="M 70 191 L 330 191" />
            </circle>
          ))}

          {/* posts */}
          <rect x="72" y="206" width="6" height="52" fill="#3a3a42" />
          <rect x="322" y="206" width="6" height="52" fill="#3a3a42" />
        </svg>
      </div>
    </VisualFrame>
  );
}
