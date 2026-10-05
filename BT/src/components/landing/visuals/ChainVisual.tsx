import { VisualFrame } from "./VisualFrame";

const STAGES = [
  { label: "idea", cls: "bg-[#17171b] ring-white/15", glow: false },
  { label: "play", cls: "chrome-surface-dark ring-white/20", glow: false },
  { label: "remix", cls: "ring-white/30", glow: false, style: { background: "linear-gradient(135deg, #6a6a75, #2c2c33 60%, #54545e)" } },
  { label: "fork", cls: "chrome-surface ring-white/40", glow: false },
  { label: "product", cls: "chrome-surface ring-white/60", glow: true },
];

/**
 * Chain visual — the polishing relay.
 * Five hands, five passes: from rough rock to mirror.
 */
export function ChainVisual() {
  return (
    <VisualFrame caption="every hand polishes. rough in, mirror out.">
      <div className="relative px-6 py-14 md:px-14">
        {/* light thread */}
        <div className="absolute left-10 right-10 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent md:left-16 md:right-16" aria-hidden />
        <div className="relative flex items-center justify-between">
          {STAGES.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-4">
              <div
                className={`h-16 w-16 rounded-full ring-1 md:h-20 md:w-20 ${s.cls} ${
                  s.glow ? "shadow-[0_0_60px_-6px_rgba(237,237,242,0.65)]" : "shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
                }`}
                style={s.style}
              />
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/55">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}
