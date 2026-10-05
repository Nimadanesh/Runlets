import { VisualFrame } from "./VisualFrame";

const STEPS = [
  { n: "01", title: "make", back: "Start with AI. A game, a tool, a story — anything you can dream up." },
  { n: "02", title: "publish", back: "Put it on Runlets. It becomes a living thing others can touch." },
  { n: "03", title: "remix", back: "Anyone can play, fork and improve it. Hover to flip — like the idea does." },
];

/**
 * Steps visual — the medallions.
 * Three chrome coins. Hover to flip each one, like the idea itself flips hands.
 */
export function StepsVisual() {
  return (
    <VisualFrame caption="three strikes of the mint. hover to flip.">
      <div className="flex items-stretch justify-center gap-5 px-6 py-12 md:gap-10">
        {STEPS.map((s) => (
          <div key={s.n} className="coin h-44 w-44 md:h-52 md:w-52">
            <div className="coin-inner">
              {/* front */}
              <div className="coin-face">
                <div className="chrome-surface flex h-full w-full flex-col items-center justify-center rounded-full shadow-[0_0_60px_-12px_rgba(237,237,242,0.45)] ring-1 ring-white/40">
                  <span className="font-mono text-xs tracking-[0.3em] text-black/50">{s.n}</span>
                  <span className="font-display mt-1 text-2xl font-bold text-black/80 md:text-3xl">{s.title}</span>
                </div>
              </div>
              {/* back */}
              <div className="coin-face coin-back">
                <div className="glass-panel flex h-full w-full items-center justify-center rounded-full p-6 text-center">
                  <p className="text-[13px] leading-relaxed text-white/75">{s.back}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
