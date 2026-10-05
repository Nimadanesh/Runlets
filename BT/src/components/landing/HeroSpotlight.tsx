"use client";

import { useCallback, useRef } from "react";

/**
 * HeroSpotlight — a soft light that follows the cursor across the hero,
 * like a flashlight over the dark surface.
 */
export function HeroSpotlight({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  return (
    <div ref={ref} onMouseMove={onMove} className="spotlight-wrap relative">
      <div className="spotlight" aria-hidden />
      {children}
    </div>
  );
}
