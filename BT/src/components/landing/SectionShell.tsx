import { cn } from "@/lib/utils";

interface SectionShellProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionShell({
  index,
  eyebrow,
  title,
  id,
  children,
  className,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("border-t border-border", className)}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {index} — {eyebrow}
        </p>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
