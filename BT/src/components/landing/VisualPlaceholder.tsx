import { cn } from "@/lib/utils";

interface VisualPlaceholderProps {
  label: string;
  description?: string;
  className?: string;
}

/**
 * v0-only placeholder marking where a bespoke per-section visual will live.
 * Replaced by real visuals in the full build.
 */
export function VisualPlaceholder({
  label,
  description,
  className,
}: VisualPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex min-h-64 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-card px-8 py-16 text-center",
        className,
      )}
    >
      <p className="font-mono text-sm text-primary">[visual: {label}]</p>
      {description ? (
        <p className="max-w-md font-mono text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
