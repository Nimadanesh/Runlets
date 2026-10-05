export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`font-mono text-lg font-medium tracking-tight text-foreground ${className}`}
      aria-label="Runlets home"
    >
      runlets<span className="text-primary">.</span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark />
        <nav className="flex items-center gap-3" aria-label="Primary">
          <a
            href="#explore"
            className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            Explore Runlets
          </a>
          <a
            href="#create"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors duration-150 hover:brightness-110"
          >
            Create a Runlet
          </a>
        </nav>
      </div>
    </header>
  );
}
