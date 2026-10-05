import { VisualFrame } from "./VisualFrame";

const stages = [
  {
    who: "a teacher",
    what: "3 × 4 = ?",
    detail: ["answer box"],
  },
  {
    who: "someone",
    what: "3 × 4 = ?",
    detail: ["answer box", "score: 12"],
  },
  {
    who: "another teacher",
    what: "3 × 4 = ?",
    detail: ["big buttons", "score: 12", "ages 6–8"],
  },
  {
    who: "a designer",
    what: "3 × 4 = ?",
    detail: ["big buttons", "score + streak", "warm theme"],
  },
  {
    who: "a developer",
    what: "3 × 4 = ?",
    detail: ["levels", "multiplayer", "dashboard"],
  },
];

/**
 * Small-idea visual — one artifact, five pairs of hands.
 * The same little game, visibly growing richer down the chain.
 */
export function ChainVisual() {
  return (
    <VisualFrame caption="the same multiplication game — five pairs of hands later.">
      <div className="mx-auto max-w-md px-6 py-10">
        <div className="relative">
          <div
            className="absolute bottom-6 left-1/2 top-6 w-px -translate-x-1/2 bg-border"
            aria-hidden
          />
          <div
            className="absolute left-1/2 top-6 w-px -translate-x-1/2 bg-primary"
            style={{ height: "calc(100% - 3rem)" }}
            aria-hidden
          />
          <div className="relative space-y-5">
            {stages.map((s, i) => (
              <div
                key={s.who}
                className="relative rounded-xl border border-border bg-[#101014] p-4"
                style={{ marginLeft: `${i * 10}px`, marginRight: `${(stages.length - 1 - i) * 10}px` }}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-sm font-semibold text-foreground">
                    {s.what}
                  </p>
                  <p className="shrink-0 font-mono text-[10px] text-muted-foreground">
                    {s.who}
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.detail.map((d) => (
                    <span
                      key={d}
                      className={`rounded-full px-2.5 py-1 font-mono text-[10px] ${
                        i === stages.length - 1
                          ? "bg-primary/15 text-primary"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}
