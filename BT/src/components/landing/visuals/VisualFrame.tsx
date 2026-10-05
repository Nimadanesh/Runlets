import { cn } from "@/lib/utils";

interface VisualFrameProps {
  children: React.ReactNode;
  caption?: string;
  className?: string;
}

/** Shared container for bespoke section visuals. */
export function VisualFrame({ children, caption, className }: VisualFrameProps) {
  return (
    <figure
      className={cn(
        "gloss gloss-deep group overflow-hidden rounded-xl border border-border bg-card transition-[box-shadow,border-color] duration-500 hover:border-white/25 hover:shadow-[0_0_90px_-24px_rgba(255,255,255,0.35)]",
        className,
      )}
    >
      <div className="sheen" aria-hidden />
      {children}
      {caption ? (
        <figcaption className="border-t border-border px-6 py-4 font-mono text-xs leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
