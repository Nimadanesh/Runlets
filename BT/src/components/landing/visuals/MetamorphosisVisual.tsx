import { VisualFrame } from "./VisualFrame";

function Glyph({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-16 w-16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const stages = [
  {
    label: "experiment",
    note: "rough, weird, alive",
    glyph: (
      <Glyph>
        <path d="M32 10c10 3 17 10 16 21-1 12-11 18-20 16-8-2-13-10-10-19 3-8 7-15 14-18Z" strokeDasharray="5 4" />
      </Glyph>
    ),
  },
  {
    label: "game",
    note: "now it's playable",
    glyph: (
      <Glyph>
        <rect x="12" y="12" width="40" height="40" rx="10" />
        <path d="M27 24v16l13-8z" fill="currentColor" stroke="none" className="text-primary" />
      </Glyph>
    ),
  },
  {
    label: "tool",
    note: "now it's useful",
    glyph: (
      <Glyph>
        <rect x="12" y="12" width="40" height="40" rx="10" />
        <path d="M22 32h20M32 22v20" className="text-primary" />
      </Glyph>
    ),
  },
  {
    label: "product",
    note: "now it's real",
    glyph: (
      <Glyph>
        <rect x="12" y="12" width="40" height="40" rx="10" fill="#FFB224" stroke="none" opacity="0.16" />
        <rect x="12" y="12" width="40" height="40" rx="10" className="text-primary" />
        <path d="M32 22c.8 6 2.8 8 8.8 8.8-6 .8-8 2.8-8.8 8.8-.8-6-2.8-8-8.8-8.8 6-.8 8-2.8 8.8-8.8Z" fill="#FFB224" stroke="none" />
      </Glyph>
    ),
  },
];

/**
 * Big-idea visual — metamorphosis.
 * One shape resolving through four states, same amber DNA throughout.
 */
export function MetamorphosisVisual() {
  return (
    <VisualFrame caption="same DNA, four states — nobody planned the last one.">
      <div className="overflow-x-auto px-6 py-10">
        <div className="flex min-w-[680px] items-stretch justify-between gap-2">
          {stages.map((s, i) => (
            <div key={s.label} className="flex flex-1 items-center gap-2">
              <div className="flex flex-1 flex-col items-center gap-4 rounded-xl border border-border bg-[#101014] px-4 py-8 text-muted-foreground">
                {s.glyph}
                <div className="text-center">
                  <p className="font-mono text-xs text-foreground">{s.label}</p>
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground">
                    {s.note}
                  </p>
                </div>
              </div>
              {i < stages.length - 1 && (
                <div className="flex shrink-0 flex-col items-center gap-1">
                  <svg viewBox="0 0 16 24" className="h-6 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M3 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    can become
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}
