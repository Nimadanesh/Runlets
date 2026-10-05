import { VisualFrame } from "./VisualFrame";

function Glyph({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-12 w-12"
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

const personas = [
  {
    role: "Teacher",
    glyph: (
      <Glyph>
        <rect x="8" y="8" width="32" height="32" rx="8" />
        <path d="M20 17v14l12-7z" fill="currentColor" stroke="none" className="text-primary" />
      </Glyph>
    ),
  },
  {
    role: "Writer",
    glyph: (
      <Glyph>
        <path d="M10 14h28M10 22h28M10 30h18" />
        <path d="M10 38h10" className="text-primary" />
      </Glyph>
    ),
  },
  {
    role: "Designer",
    glyph: (
      <Glyph>
        <path d="M10 38C18 30 26 26 38 10" />
        <circle cx="38" cy="10" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="10" cy="38" r="2.5" className="text-primary" fill="currentColor" stroke="none" />
      </Glyph>
    ),
  },
  {
    role: "Vibe coder",
    glyph: (
      <Glyph>
        <rect x="8" y="10" width="32" height="28" rx="6" />
        <path d="M17 20l-4 4 4 4M31 20l4 4-4 4" className="text-primary" />
      </Glyph>
    ),
  },
  {
    role: "Tinkerer",
    glyph: (
      <Glyph>
        <path d="M24 8c8 2 14 8 13 17-1 10-9 15-17 13-7-2-11-9-8-16 2-6 6-12 12-14Z" />
        <circle cx="29" cy="24" r="2" fill="currentColor" stroke="none" className="text-primary" />
      </Glyph>
    ),
  },
  {
    role: "Creator",
    glyph: (
      <Glyph>
        <path d="M24 10c1.4 8.6 4 11.2 12.6 12.6-8.6 1.4-11.2 4-12.6 12.6-1.4-8.6-4-11.2-12.6-12.6 8.6-1.4 11.2-4 12.6-12.6Z" className="text-primary" />
      </Glyph>
    ),
  },
];

/**
 * Personas visual — six makers, six abstract glyphs of what each one makes.
 */
export function PersonasVisual() {
  return (
    <VisualFrame caption="six kinds of makers — one shared starting line.">
      <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3">
        {personas.map((p) => (
          <div
            key={p.role}
            className="flex flex-col items-center gap-4 bg-card px-4 py-10 text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            {p.glyph}
            <p className="font-mono text-xs uppercase tracking-[0.18em]">
              {p.role}
            </p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
