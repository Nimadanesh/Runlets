import { VisualFrame } from "./VisualFrame";

const cards = [
  { left: "6%", top: "12%", rotate: "-rotate-6", delay: "0s", label: "lesson" },
  { left: "22%", top: "58%", rotate: "rotate-3", delay: "1.1s", label: "story" },
  { left: "42%", top: "8%", rotate: "rotate-6", delay: "2s", label: "tool" },
  { left: "58%", top: "62%", rotate: "-rotate-3", delay: "0.5s", label: "game" },
  { left: "74%", top: "14%", rotate: "rotate-2", delay: "1.7s", label: "toy" },
  { left: "84%", top: "56%", rotate: "-rotate-6", delay: "2.4s", label: "demo" },
];

/**
 * Idea visual — scattered creations converge toward a single warm point.
 */
export function IdeaVisual() {
  return (
    <VisualFrame caption="scattered creations, drifting — until they find somewhere to go.">
      <div className="relative h-[320px] overflow-hidden md:h-[360px]">
        {/* converging dotted paths */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          {[
            "M12 22 C 30 30, 38 40, 50 50",
            "M28 68 C 36 62, 42 56, 50 50",
            "M48 16 C 49 28, 49 38, 50 50",
            "M64 72 C 60 64, 55 57, 50 50",
            "M80 24 C 70 32, 60 40, 50 50",
            "M90 66 C 76 60, 62 55, 50 50",
          ].map((d) => (
            <path
              key={d}
              d={d}
              fill="none"
              stroke="#A1A1AA"
              strokeWidth="1"
              strokeDasharray="2 4"
              opacity="0.4"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
        {/* the warm point */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="v-pulse-soft h-16 w-16 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, #FFB224 0%, rgba(255,178,36,0.25) 55%, transparent 72%)",
            }}
            aria-hidden
          />
          <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            runlets
          </p>
        </div>
        {/* drifting creations */}
        {cards.map((c) => (
          <div
            key={c.label}
            className={`v-float absolute w-24 ${c.rotate}`}
            style={{ left: c.left, top: c.top, animationDelay: c.delay }}
          >
            <div className="rounded-lg border border-border bg-[#101014] p-2.5">
              <div className="h-1.5 w-3/4 rounded-full bg-border" />
              <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-border" />
              <p className="mt-2 font-mono text-[10px] text-muted-foreground">
                {c.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
