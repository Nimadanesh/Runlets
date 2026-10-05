"use client";

import { useEffect, useRef, useState } from "react";
import { VisualFrame } from "./VisualFrame";

/**
 * 20% visual — the crucible.
 * You pour the first 20% — liquid silver. The network is the ocean.
 */
export function TwentyPercentVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <VisualFrame caption="you pour the first 20%. the network brings the ocean.">
      <div ref={ref} className="flex flex-col items-center justify-center gap-10 px-6 py-12 md:flex-row md:gap-16">
        {/* the crucible */}
        <div className="flex flex-col items-center gap-4">
          <div className="glass-panel relative h-60 w-48 overflow-hidden rounded-b-[2.5rem] rounded-t-xl">
            {inView && (
              <div className="liquid-fill chrome-surface absolute inset-x-0 bottom-0 h-[22%]">
                <div className="liquid-shimmer" />
                <div className="absolute -top-1.5 inset-x-3 h-3 rounded-full bg-white/60 blur-[5px]" />
              </div>
            )}
            <span className="absolute right-3 top-3 font-mono text-[11px] text-white/40">20%</span>
          </div>
          <p className="font-mono text-[12px] tracking-[0.18em] text-white/70">you — the first 20%</p>
        </div>

        <span className="font-display text-3xl text-white/25">+</span>

        {/* the ocean */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex h-60 w-48 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "repeating-linear-gradient(115deg, transparent 0 14px, rgba(237,237,242,0.05) 14px 15px)",
              }}
              aria-hidden
            />
            <span className="chrome-text font-display text-6xl font-extrabold">80%</span>
          </div>
          <p className="max-w-[200px] text-center font-mono text-[12px] leading-relaxed tracking-[0.08em] text-white/55">
            the network — every remix, every fork
          </p>
        </div>
      </div>
    </VisualFrame>
  );
}
