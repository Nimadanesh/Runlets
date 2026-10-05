import { VisualFrame } from "./VisualFrame";

function Scene({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-[#101014] p-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {index}
      </p>
      <div className="flex flex-1 items-center justify-center py-8">
        {children}
      </div>
      <p className="text-center font-mono text-xs text-muted-foreground">
        {title}
      </p>
    </div>
  );
}

/**
 * How-it-works visual — three mini scenes: the spark, the link going live,
 * a second pair of hands picking it up.
 */
export function StepsVisual() {
  return (
    <VisualFrame caption="make → publish → someone else takes it further.">
      <div className="grid gap-4 p-6 md:grid-cols-3">
        <Scene index="1 — make" title="a spark, an afternoon">
          <svg viewBox="0 0 120 80" className="h-24 w-auto" aria-hidden>
            <g stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round">
              <path d="M60 14c.8 8 3.4 10.6 11.4 11.4-8 1-10.6 3.4-11.4 11.4-.8-8-3.4-10.4-11.4-11.4 8-.8 10.6-3.4 11.4-11.4Z" fill="#FFFFFF" stroke="none" />
              <path d="M28 52c.5 5 2.2 6.7 7.2 7.2-5 .5-6.7 2.2-7.2 7.2-.5-5-2.2-6.7-7.2-7.2 5-.5 6.7-2.2 7.2-7.2Z" fill="#FFFFFF" stroke="none" opacity="0.7" />
              <path d="M92 50c.5 5 2.2 6.7 7.2 7.2-5 .5-6.7 2.2-7.2 7.2-.5-5-2.2-6.7-7.2-7.2 5-.5 6.7-2.2 7.2-7.2Z" fill="#FFFFFF" stroke="none" opacity="0.5" />
            </g>
          </svg>
        </Scene>
        <Scene index="2 — publish" title="a link, live">
          <svg viewBox="0 0 120 80" className="h-24 w-auto" aria-hidden>
            <circle cx="60" cy="40" r="26" fill="none" stroke="#3A3A42" strokeWidth="1.5" />
            <circle cx="60" cy="40" r="17" fill="none" stroke="#3A3A42" strokeWidth="1.5" />
            <rect x="48" y="28" width="24" height="24" rx="7" fill="#FFFFFF" />
            <path d="M60 34c.5 3.4 1.6 4.5 5 5-3.4.5-4.5 1.6-5 5-.5-3.4-1.6-4.5-5-5 3.4-.5 4.5-1.6 5-5Z" fill="#000000" />
            <circle cx="60" cy="40" r="34" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 6" opacity="0.5" className="v-dash" />
          </svg>
        </Scene>
        <Scene index="3 — remix" title="“what if…?”">
          <svg viewBox="0 0 120 80" className="h-24 w-auto" aria-hidden>
            <rect x="18" y="22" width="44" height="36" rx="8" fill="#101014" stroke="#3A3A42" strokeWidth="1.5" />
            <rect x="58" y="22" width="44" height="36" rx="8" fill="#0D0D0D" stroke="#FFFFFF" strokeWidth="1.5" />
            <path d="M62 40h14m0 0l-4-4m4 4l-4 4" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 34h20M26 42h14" stroke="#3A3A42" strokeWidth="2" strokeLinecap="round" />
            <path d="M66 34h20M66 42h14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          </svg>
        </Scene>
      </div>
    </VisualFrame>
  );
}
