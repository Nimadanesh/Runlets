import { VisualFrame } from "./VisualFrame";

function MiniWindow({
  title,
  bars = 3,
  tint = false,
}: {
  title: string;
  bars?: number;
  tint?: boolean;
}) {
  return (
    <div
      className={`w-full rounded-lg border p-3 ${
        tint ? "border-primary/40 bg-[#141007]" : "border-border bg-[#101014]"
      }`}
    >
      <div className="flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span
          className={`h-1.5 w-1.5 rounded-full ${tint ? "bg-primary" : "bg-border"}`}
        />
      </div>
      <div className="mt-2.5 space-y-1.5">
        {Array.from({ length: bars }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full ${
              i === 0 && tint ? "bg-primary/70" : "bg-border"
            }`}
            style={{ width: `${88 - i * 22}%` }}
          />
        ))}
      </div>
      <p className="mt-2.5 font-mono text-[10px] leading-tight text-muted-foreground">
        {title}
      </p>
    </div>
  );
}

/**
 * Hero visual — the remix chain.
 * One creation on the left; amber threads branch right into remixed variants.
 */
export function HeroVisual() {
  const variants = [
    { title: "remix — by @sara", bars: 4, delay: "0s", rotate: "-rotate-2" },
    { title: "remix — by @kenji", bars: 3, delay: "1.4s", rotate: "rotate-1" },
    { title: "fork — by @maya", bars: 5, delay: "2.6s", rotate: "-rotate-1" },
  ];
  return (
    <VisualFrame caption="one creation in — many versions out. the thread is the product.">
      <div className="relative h-[380px] overflow-hidden md:h-[440px]">
        {/* ambient warmth behind the origin */}
        <div
          className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(closest-side, #FFB224 0%, transparent 70%)",
          }}
          aria-hidden
        />
        {/* threads */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M22 50 C 42 50, 55 18, 80 18"
            fill="none"
            stroke="#FFB224"
            strokeWidth="1.6"
            strokeDasharray="5 5"
            className="v-dash"
            vectorEffect="non-scaling-stroke"
            opacity="0.65"
          />
          <path
            d="M22 50 C 45 50, 55 50, 80 50"
            fill="none"
            stroke="#FFB224"
            strokeWidth="1.6"
            strokeDasharray="5 5"
            className="v-dash"
            vectorEffect="non-scaling-stroke"
            opacity="0.9"
          />
          <path
            d="M22 50 C 42 50, 55 82, 80 82"
            fill="none"
            stroke="#FFB224"
            strokeWidth="1.6"
            strokeDasharray="5 5"
            className="v-dash"
            vectorEffect="non-scaling-stroke"
            opacity="0.65"
          />
        </svg>
        {/* origin card */}
        <div className="absolute left-6 top-1/2 w-40 -translate-y-1/2 md:left-12 md:w-48">
          <div className="v-float" style={{ animationDelay: "0.6s" }}>
            <MiniWindow title="your creation" bars={3} tint />
          </div>
        </div>
        {/* remixed variants */}
        <div className="absolute inset-y-8 right-6 flex w-36 flex-col justify-between md:right-12 md:w-44">
          {variants.map((v) => (
            <div
              key={v.title}
              className={`v-float ${v.rotate}`}
              style={{ animationDelay: v.delay }}
            >
              <MiniWindow title={v.title} bars={v.bars} />
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}
