import { VisualFrame } from "./VisualFrame";

const STAGES = [
  { label: "experiment", caption: "rough" },
  { label: "game", caption: "brushed" },
  { label: "tool", caption: "polished" },
  { label: "product", caption: "mirror" },
];

/**
 * Metamorphosis visual — rough to mirror.
 * What starts as a rock ends as a mirror. That's the remix effect.
 */
export function MetamorphosisVisual() {
  return (
    <VisualFrame caption="from rough rock to mirror. that is the remix effect.">
      <div className="flex items-center justify-center gap-3 px-4 py-12 md:gap-6">
        {STAGES.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3 md:gap-6">
            <div className="flex flex-col items-center gap-4">
              {i === 0 && (
                <svg viewBox="0 0 80 80" className="h-20 w-20 md:h-24 md:w-24" aria-hidden>
                  <polygon points="18,62 10,38 30,14 58,10 72,34 64,60 38,70" fill="#17171b" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
                  <polyline points="30,14 38,40 64,60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                </svg>
              )}
              {i === 1 && (
                <div
                  className="h-20 w-20 rounded-full ring-1 ring-white/20 md:h-24 md:w-24"
                  style={{ background: "repeating-conic-gradient(from 0deg, #3a3a42 0deg 7deg, #26262c 7deg 14deg)" }}
                  aria-hidden
                />
              )}
              {i === 2 && (
                <div className="chrome-surface-dark h-20 w-20 rounded-full ring-1 ring-white/30 md:h-24 md:w-24" aria-hidden />
              )}
              {i === 3 && (
                <div className="relative" aria-hidden>
                  <div className="chrome-surface h-20 w-20 rounded-full ring-1 ring-white/60 shadow-[0_0_70px_-8px_rgba(237,237,242,0.7)] md:h-24 md:w-24" />
                  <div className="absolute left-[18%] top-[12%] h-[46%] w-[10%] rotate-[24deg] rounded-full bg-white/80 blur-[3px]" />
                </div>
              )}
              <div className="text-center">
                <p className="font-mono text-[11px] tracking-[0.18em] text-white/75">{s.label}</p>
                <p className="font-mono text-[10px] text-white/35">{s.caption}</p>
              </div>
            </div>
            {i < STAGES.length - 1 && (
              <span className="mb-10 font-mono text-lg text-white/25" aria-hidden>→</span>
            )}
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
