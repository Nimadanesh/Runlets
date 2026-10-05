import { VisualFrame } from "./VisualFrame";

/**
 * Loop visual — the gyroscope.
 * Your creation at the core; the community orbits it, polishing every pass.
 */
export function LoopVisual() {
  const rings = [
    { size: 190, cls: "anim-spin-slow", border: "border-white/20", dots: 1 },
    { size: 270, cls: "anim-spin-rev", border: "border-white/12", dots: 2 },
    { size: 350, cls: "anim-spin-slower", border: "border-white/10", dots: 2 },
  ];
  return (
    <VisualFrame caption="the loop never stops. every orbit polishes the core.">
      <div className="relative flex h-[380px] items-center justify-center overflow-hidden">
        <div
          className="absolute h-64 w-64 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(237,237,242,0.45), transparent)" }}
          aria-hidden
        />
        {rings.map((r, ri) => (
          <div
            key={ri}
            className="absolute"
            style={{ width: r.size, height: r.size, transform: "rotateX(66deg)" }}
            aria-hidden
          >
            <div className={`${r.cls} absolute inset-0 rounded-full border ${r.border}`}>
              {Array.from({ length: r.dots }).map((_, di) => (
                <span
                  key={di}
                  className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-white"
                  style={{
                    boxShadow: "0 0 14px 5px rgba(237,237,242,0.5)",
                    transform: `translate(-50%, -50%) rotate(${di * 180}deg) translateY(-${r.size / 2}px)`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
        {/* core */}
        <div className="anim-float-y relative">
          <div className="chrome-surface h-24 w-24 rounded-full shadow-[0_0_70px_-8px_rgba(237,237,242,0.6)] ring-1 ring-white/50" />
          <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] tracking-[0.2em] text-white/60">
            your creation
          </p>
        </div>
      </div>
    </VisualFrame>
  );
}
