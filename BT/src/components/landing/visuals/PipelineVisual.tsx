import { VisualFrame } from "./VisualFrame";

const STAGES = ["play", "remix", "fork", "improve", "build"];

/**
 * Pipeline visual — the chrome pipeline.
 * A glass tube; orbs of light flow through the five stations.
 */
export function PipelineVisual() {
  return (
    <VisualFrame caption="five stations, one flow. every pass polishes.">
      <div className="relative px-6 py-12 md:px-12">
        {/* tube */}
        <div className="glass-panel relative h-20 overflow-hidden rounded-full">
          <div
            className="absolute inset-x-6 top-2 h-4 rounded-full opacity-60"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.35), transparent)" }}
            aria-hidden
          />
          {/* flowing orbs */}
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute inset-y-0 left-0 right-0"
              style={{ animation: `shimmer-x ${4 + i * 1.3}s linear ${-i * 1.7}s infinite` }}
              aria-hidden
            >
              <span
                className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white"
                style={{ boxShadow: "0 0 22px 8px rgba(237,237,242,0.55)" }}
              />
            </span>
          ))}
        </div>
        {/* stations */}
        <div className="relative mt-2 flex justify-between">
          {STAGES.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-3" style={{ width: "18%" }}>
              <span
                className={`h-3.5 w-3.5 rounded-full ${
                  i === STAGES.length - 1
                    ? "bg-white shadow-[0_0_16px_5px_rgba(255,255,255,0.5)]"
                    : "border border-white/40 bg-white/10"
                }`}
              />
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/55">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}
