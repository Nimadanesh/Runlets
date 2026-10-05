import { VisualFrame } from "./VisualFrame";

const stages = [
  "IDEA",
  "CREATE",
  "PUBLISH",
  "PLAY",
  "REMIX",
  "IMPROVE",
  "SHARE",
  "REMIX AGAIN",
];

const R = 150;
const C = 200;

/**
 * Loop visual — the creation loop as a living orbit.
 * A pulse travels the circle; every lap can spawn another loop.
 */
export function LoopVisual() {
  return (
    <VisualFrame caption="every lap around the loop can start another loop.">
      <div className="flex items-center justify-center px-6 py-10">
        <svg
          viewBox="0 0 400 400"
          className="h-auto w-full max-w-[440px]"
          role="img"
          aria-label="Circular loop: idea, create, publish, play, remix, improve, share, remix again"
        >
          {/* orbit */}
          <circle
            cx={C}
            cy={C}
            r={R}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1.5"
          />
          {/* traveling pulse */}
          <circle
            cx={C}
            cy={C}
            r={R}
            fill="none"
            stroke="#FFB224"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="46 897"
            className="v-orbit"
            opacity="0.95"
          />
          {/* nodes */}
          {stages.map((s, i) => {
            const a = (i / stages.length) * Math.PI * 2 - Math.PI / 2;
            const x = C + R * Math.cos(a);
            const y = C + R * Math.sin(a);
            const hot = s === "REMIX AGAIN";
            return (
              <g key={s}>
                <circle
                  cx={x}
                  cy={y}
                  r={hot ? 10 : 7}
                  fill={hot ? "#FFB224" : "#101014"}
                  stroke={hot ? "#FFB224" : "rgba(255,255,255,0.2)"}
                  strokeWidth="1.5"
                />
                <text
                  x={x}
                  y={y - 20}
                  textAnchor="middle"
                  fill={hot ? "#FFB224" : "#A1A1AA"}
                  fontSize="10.5"
                  fontFamily="JetBrains Mono, monospace"
                  letterSpacing="1"
                >
                  {s}
                </text>
              </g>
            );
          })}
          {/* center */}
          <text
            x={C}
            y={C - 6}
            textAnchor="middle"
            fill="#F5F4F0"
            fontSize="17"
            fontFamily="Space Grotesk, sans-serif"
            fontWeight="600"
          >
            the loop
          </text>
          <text
            x={C}
            y={C + 18}
            textAnchor="middle"
            fill="#6E6E76"
            fontSize="11"
            fontFamily="JetBrains Mono, monospace"
          >
            make · share · remix · repeat
          </text>
        </svg>
      </div>
    </VisualFrame>
  );
}
