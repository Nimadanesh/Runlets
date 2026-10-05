import { VisualFrame } from "./VisualFrame";

const PEOPLE = [
  { label: "teacher", path: "M12 4 L20 20 L4 20 Z" },
  { label: "writer", path: "M5 5 H19 V15 H5 Z M5 15 L12 20 L19 15" },
  { label: "designer", path: "M12 3 A9 9 0 1 0 12 21 A9 9 0 1 0 12 3 M12 8 L12 16 M8 12 L16 12" },
  { label: "vibe coder", path: "M9 4 L4 12 L9 20 M15 4 L20 12 L15 20" },
  { label: "tinkerer", path: "M12 2 V22 M2 12 H22 M5 5 L19 19 M19 5 L5 19" },
  { label: "dreamer", path: "M12 3 C17 8 17 16 12 21 C7 16 7 8 12 3 Z" },
];

/**
 * Personas visual — the silver guild.
 * Six makers, six holographic medallions. No developers required.
 */
export function PersonasVisual() {
  return (
    <VisualFrame caption="the guild: teachers, writers, designers, vibe coders, tinkerers, dreamers.">
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 px-6 py-12 md:grid-cols-6 md:px-10">
        {PEOPLE.map((p) => (
          <div key={p.label} className="group flex flex-col items-center gap-3">
            <div className="holo-rim rounded-full p-[3px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[20deg]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0d0d10] md:h-20 md:w-20">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-white/85" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d={p.path} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <span className="font-mono text-[11px] tracking-[0.14em] text-white/55">{p.label}</span>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
