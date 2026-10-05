import { VisualFrame } from "./VisualFrame";

function rand(seed: number) {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

const STARS = Array.from({ length: 42 }, (_, i) => ({
  x: rand(i * 7 + 1) * 400,
  y: rand(i * 13 + 5) * 340,
  r: 0.8 + rand(i * 3 + 9) * 1.6,
  delay: rand(i * 5 + 2) * 3.4,
}));

const NEIGHBORS = [15, 60, 105, 150, 200, 250, 300, 340].map((deg, i) => {
  const a = (deg * Math.PI) / 180;
  const d = 74 + (i % 3) * 18;
  return { x: 200 + Math.cos(a) * d, y: 170 + Math.sin(a) * d * 0.82 };
});

/**
 * Network visual — the star chart.
 * Every creation is a star. Runlets is the bright one they all orbit.
 */
export function NetworkVisual() {
  return (
    <VisualFrame caption="a sky full of made things — runlets is the bright star.">
      <div className="relative h-[340px] overflow-hidden">
        <svg viewBox="0 0 400 340" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <filter id="starGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          {STARS.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#ffffff" className="twinkle" style={{ animationDelay: `${s.delay}s` }} />
          ))}
          {/* constellation lines */}
          {NEIGHBORS.map((n, i) => (
            <line key={i} x1="200" y1="170" x2={n.x} y2={n.y} stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
          ))}
          {NEIGHBORS.map((n, i) => (
            <circle key={`n${i}`} cx={n.x} cy={n.y} r="3.4" fill="#ededf2" opacity="0.85" />
          ))}
          {/* the bright star */}
          <circle cx="200" cy="170" r="26" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <circle cx="200" cy="170" r="46" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <circle cx="200" cy="170" r="14" fill="#ffffff" filter="url(#starGlow)" />
          <circle cx="200" cy="170" r="7" fill="#ffffff" />
          <rect x="197.5" y="138" width="5" height="64" fill="#ffffff" opacity="0.5" filter="url(#starGlow)" />
          <rect x="168" y="167.5" width="64" height="5" fill="#ffffff" opacity="0.5" filter="url(#starGlow)" />
          <text x="200" y="232" textAnchor="middle" fill="#ededf2" fontSize="12" fontFamily="monospace" letterSpacing="4">runlets</text>
        </svg>
      </div>
    </VisualFrame>
  );
}
