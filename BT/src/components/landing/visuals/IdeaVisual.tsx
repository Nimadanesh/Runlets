import { VisualFrame } from "./VisualFrame";

const DOTS = [
  [36, 40], [70, 26], [110, 52], [52, 92], [96, 120], [30, 160],
  [64, 200], [110, 236], [36, 268], [150, 36], [196, 24], [250, 44],
  [300, 70], [330, 120], [348, 180], [330, 240], [296, 280], [240, 296],
  [160, 292], [96, 292],
];

/**
 * Idea visual — starfall into the ring.
 * Scattered sparks of AI-made things stream into the Runlets ring.
 */
export function IdeaVisual() {
  const cx = 200;
  const cy = 160;
  return (
    <VisualFrame caption="scattered sparks, one ring. runlets pulls them together.">
      <div className="relative h-[320px] overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(237,237,242,0.4), transparent)" }}
          aria-hidden
        />
        <svg viewBox="0 0 400 320" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <radialGradient id="ringChrome" cx="35%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#c9c9d4" />
              <stop offset="100%" stopColor="#6f6f7b" />
            </radialGradient>
            <filter id="ringGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>
          {DOTS.map(([x, y], i) => (
            <circle key={i} r={2.6} fill="#ffffff" opacity="0.9">
              <animateMotion
                dur={`${2.6 + (i % 5) * 0.5}s`}
                begin={`-${(i * 0.7) % 3}s`}
                repeatCount="indefinite"
                path={`M ${x} ${y} L ${cx} ${cy}`}
              />
              <animate attributeName="opacity" values="0.9;0.9;0" dur={`${2.6 + (i % 5) * 0.5}s`} begin={`-${(i * 0.7) % 3}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <circle cx={cx} cy={cy} r="46" fill="none" stroke="url(#ringChrome)" strokeWidth="10" filter="url(#ringGlow)" opacity="0.7" />
          <circle cx={cx} cy={cy} r="46" fill="none" stroke="url(#ringChrome)" strokeWidth="7" />
          <circle cx={cx} cy={cy} r="30" fill="#0d0d10" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <text x={cx} y={cy + 4} textAnchor="middle" fill="#ededf2" fontSize="11" fontFamily="monospace" letterSpacing="2">runlets</text>
        </svg>
      </div>
    </VisualFrame>
  );
}
