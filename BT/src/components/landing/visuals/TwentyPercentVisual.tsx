import { VisualFrame } from "./VisualFrame";

/**
 * 20% visual — you make the first 20%; the network fills the rest.
 * Ghost segments fill in with a staggered pulse.
 */
export function TwentyPercentVisual() {
  return (
    <VisualFrame caption="your 20% is the seed. the other 80% is everyone else.">
      <div className="px-6 py-12 md:px-12">
        <div className="flex h-16 w-full gap-1.5 overflow-hidden rounded-xl">
          <div className="flex h-full w-[20%] items-center justify-center rounded-lg bg-primary">
            <span className="font-mono text-xs font-semibold text-primary-foreground">
              you · 20%
            </span>
          </div>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="v-pulse-soft h-full flex-1 rounded-lg border border-dashed border-border bg-secondary/60"
              style={{ animationDelay: `${i * 0.45}s` }}
            />
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between font-mono text-xs text-muted-foreground">
          <span>
            <span className="text-primary">■</span> you make the first 20%
          </span>
          <span>
            <span className="text-border">■</span> the network takes it further
          </span>
        </div>
      </div>
    </VisualFrame>
  );
}
