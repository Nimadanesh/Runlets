"use client";

import { useEffect, useRef } from "react";
import { VisualFrame } from "./VisualFrame";

const SIZE = 200;
const HALF = SIZE / 2;

const FACE_TRANSFORMS = [
  `translateZ(${HALF}px)`,
  `rotateY(180deg) translateZ(${HALF}px)`,
  `rotateY(90deg) translateZ(${HALF}px)`,
  `rotateY(-90deg) translateZ(${HALF}px)`,
  `rotateX(90deg) translateZ(${HALF}px)`,
  `rotateX(-90deg) translateZ(${HALF}px)`,
];

const FACES = [
  { title: "your creation", sub: "the seed", hot: true },
  { title: "remix — @sara", sub: "she played with it", hot: false },
  { title: "fork — @kenji", sub: "he took it further", hot: false },
  { title: "remix — @maya", sub: "she made it hers", hot: false },
  { title: "runlets", sub: "spark", hot: true },
  { title: "ship it", sub: "somewhere new", hot: false },
];

function Spark() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10 text-white" fill="currentColor" aria-hidden>
      <path d="M12 2c.7 6.5 2.5 8.3 9 9-6.5.7-8.3 2.5-9 9-.7-6.5-2.5-8.3-9-9 6.5-.7 8.3-2.5 9-9Z" />
    </svg>
  );
}

function FaceCard({ title, sub, hot }: { title: string; sub: string; hot: boolean }) {
  return (
    <div
      className={`flex h-full w-full flex-col justify-between rounded-2xl border p-4 ${
        hot ? "border-white/40 bg-white/[0.14]" : "border-white/15 bg-white/[0.05]"
      }`}
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className={`h-1.5 w-1.5 rounded-full ${hot ? "bg-white" : "bg-white/25"}`} />
      </div>
      {sub === "spark" ? (
        <div className="flex flex-1 items-center justify-center">
          <Spark />
        </div>
      ) : (
        <div className="space-y-2">
          <div className={`h-2 rounded-full ${hot ? "bg-white/80" : "bg-white/30"}`} style={{ width: "82%" }} />
          <div className="h-2 rounded-full bg-white/20" style={{ width: "58%" }} />
          <div className="h-2 rounded-full bg-white/15" style={{ width: "70%" }} />
        </div>
      )}
      <div>
        <p className="font-mono text-[11px] font-medium text-white">{title}</p>
        {sub !== "spark" && <p className="font-mono text-[10px] text-white/45">{sub}</p>}
      </div>
    </div>
  );
}

/**
 * Hero visual — the Remix Cube.
 * A chrome cube of living creations: auto-spins, drag to spin it yourself.
 * Resend has its spinning cube; this one is made of remixes.
 */
export function HeroVisual() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const rot = useRef({ x: -16, y: 28 });
  const vel = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    let prev = performance.now();
    const loop = (t: number) => {
      const dt = Math.min(64, t - prev);
      prev = t;
      if (!dragging.current) {
        if (Math.abs(vel.current.x) + Math.abs(vel.current.y) > 0.02) {
          rot.current.x = Math.max(-75, Math.min(75, rot.current.x + vel.current.y * dt * 0.02));
          rot.current.y += vel.current.x * dt * 0.02;
          vel.current.x *= 0.955;
          vel.current.y *= 0.955;
        } else {
          rot.current.y = (rot.current.y + dt * 0.016) % 360;
        }
      }
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${rot.current.x}deg) rotateY(${rot.current.y}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <VisualFrame caption="every face is a version. spin it — the thread is the product.">
      <div
        className="relative h-[460px] cursor-grab touch-none select-none overflow-hidden active:cursor-grabbing md:h-[540px]"
        onPointerDown={(e) => {
          dragging.current = true;
          last.current = { x: e.clientX, y: e.clientY };
          vel.current = { x: 0, y: 0 };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!dragging.current) return;
          const dx = e.clientX - last.current.x;
          const dy = e.clientY - last.current.y;
          last.current = { x: e.clientX, y: e.clientY };
          rot.current.x = Math.max(-75, Math.min(75, rot.current.x - dy * 0.4));
          rot.current.y += dx * 0.4;
          vel.current = { x: dx * 0.4, y: -dy * 0.4 };
        }}
        onPointerUp={() => { dragging.current = false; }}
        onPointerCancel={() => { dragging.current = false; }}
      >
        {/* floor glow */}
        <div
          className="absolute left-1/2 top-[68%] h-40 w-[420px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(237,237,242,0.5), transparent)" }}
          aria-hidden
        />
        {/* orbit ring */}
        <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 md:h-[400px] md:w-[400px]" aria-hidden>
          <div className="absolute inset-0" style={{ transform: "rotateX(72deg)" }}>
            <div className="anim-spin-slow absolute inset-0 rounded-full border border-white/15">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_6px_rgba(255,255,255,0.55)]" />
            </div>
          </div>
        </div>
        {/* the cube */}
        <div
          className="absolute left-1/2 top-1/2"
          style={{ perspective: "1100px", transform: "translate(-50%, -52%)" }}
        >
          <div className="anim-float-y">
            <div
              ref={cubeRef}
              className="relative"
              style={{
                width: SIZE,
                height: SIZE,
                transformStyle: "preserve-3d",
                transform: "rotateX(-16deg) rotateY(28deg)",
              }}
            >
              {FACES.map((f, i) => (
                <div
                  key={f.title}
                  className="absolute inset-0"
                  style={{ transform: FACE_TRANSFORMS[i] }}
                >
                  <FaceCard title={f.title} sub={f.sub} hot={f.hot} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* hint */}
        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.2em] text-white/35">
          — drag to spin —
        </p>
      </div>
    </VisualFrame>
  );
}
