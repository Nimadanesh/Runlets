import { VisualFrame } from "./VisualFrame";

function Glyph({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
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
    label: "Play",
    glyph: (
      <Glyph>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8.5v7l6-3.5z" fill="currentColor" stroke="none" />
      </Glyph>
    ),
  },
  {
    label: "Remix",
    glyph: (
      <Glyph>
        <circle cx="9" cy="12" r="6" />
        <circle cx="15" cy="12" r="6" className="text-primary" />
      </Glyph>
    ),
  },
  {
    label: "Fork",
    glyph: (
      <Glyph>
        <path d="M12 3v6" />
        <path d="M12 9c-5 0-6 4-6 9" className="text-primary" />
        <path d="M12 9c5 0 6 4 6 9" />
        <circle cx="6" cy="20" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
      </Glyph>
    ),
  },
  {
    label: "Improve",
    glyph: (
      <Glyph>
        <path d="M12 4c.9 4.5 2.6 6.2 7.1 7.1-4.5.9-6.2 2.6-7.1 7.1-.9-4.5-2.6-6.2-7.1-7.1 4.5-.9 6.2-2.6 7.1-7.1Z" className="text-primary" />
      </Glyph>
    ),
  },
  {
    label: "Build on it",
    glyph: (
      <Glyph>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M12 16V8m0 0l-3.5 3.5M12 8l3.5 3.5" className="text-primary" />
      </Glyph>
    ),
  },
];

/**
 * What-is visual — the pipeline.
 * A creation visibly transforms as it moves Play → Remix → Fork → Improve → Build.
 */
export function PipelineVisual() {
  return (
    <VisualFrame caption="the same spark, five stages later — unrecognizable, and that's the point.">
      <div className="overflow-x-auto px-6 py-10">
        <div className="flex min-w-[640px] items-stretch justify-between gap-2">
          {stages.map((s, i) => (
            <div key={s.label} className="flex flex-1 items-center gap-2">
              <div className="flex flex-1 flex-col items-center gap-3 rounded-xl border border-border bg-[#101014] px-3 py-6 text-muted-foreground">
                {s.glyph}
                <p className="font-mono text-xs text-foreground">{s.label}</p>
              </div>
              {i < stages.length - 1 && (
                <svg
                  viewBox="0 0 16 24"
                  className="h-6 w-4 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M3 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}
