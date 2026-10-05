import { VisualFrame } from "./VisualFrame";

/**
 * Problem visual — the gap.
 * Two cliffs ("I had an idea." / "I built a product.") with a single
 * amber bridge between them.
 */
export function GapVisual() {
  return (
    <VisualFrame caption="between having the idea and shipping the product — a gap. runlets lives in it.">
      <svg
        viewBox="0 0 800 320"
        className="block h-auto w-full"
        role="img"
        aria-label="Two cliffs with a bridge labeled runlets spanning the gap between them"
      >
        {/* left cliff */}
        <path
          d="M0 130 L110 130 L140 96 L190 118 L250 78 L310 118 L330 130 L330 320 L0 320 Z"
          fill="#16161C"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        {/* right cliff */}
        <path
          d="M800 130 L690 130 L660 96 L610 118 L550 78 L490 118 L470 130 L470 320 L800 320 Z"
          fill="#16161C"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        {/* the drop */}
        <g stroke="#3A3A42" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7">
          <line x1="400" y1="170" x2="400" y2="300" />
        </g>
        {/* bridge */}
        <g>
          <rect
            x="295"
            y="128"
            width="210"
            height="34"
            rx="17"
            fill="#FFB224"
          />
          <rect x="318" y="162" width="10" height="60" fill="#8a5c10" opacity="0.6" />
          <rect x="472" y="162" width="10" height="60" fill="#8a5c10" opacity="0.6" />
          <text
            x="400"
            y="150"
            textAnchor="middle"
            fill="#1A1206"
            fontSize="15"
            fontFamily="JetBrains Mono, monospace"
            fontWeight="600"
            letterSpacing="2"
          >
            runlets
          </text>
        </g>
        {/* labels */}
        <text
          x="150"
          y="60"
          textAnchor="middle"
          fill="#F5F4F0"
          fontSize="17"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="600"
        >
          “I had an idea.”
        </text>
        <text
          x="650"
          y="60"
          textAnchor="middle"
          fill="#F5F4F0"
          fontSize="17"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="600"
        >
          “I built a product.”
        </text>
        <text
          x="400"
          y="280"
          textAnchor="middle"
          fill="#6E6E76"
          fontSize="12"
          fontFamily="JetBrains Mono, monospace"
          letterSpacing="3"
        >
          THE GAP
        </text>
      </svg>
    </VisualFrame>
  );
}
