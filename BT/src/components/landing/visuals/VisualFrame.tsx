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
        "overflow-hidden rounded-xl border border-border bg-card",
        className,
      )}
    >
      {children}
      {caption ? (
        <figcaption className="border-t border-border px-6 py-4 font-mono text-xs leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
