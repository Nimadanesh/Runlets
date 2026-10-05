import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Don&apos;t just show what you made. Start something.
          </p>
        </div>
        <nav
          className="flex gap-12 text-sm text-muted-foreground"
          aria-label="Footer"
        >
          <div className="flex flex-col gap-3">
            <a href="#explore" className="transition-colors hover:text-foreground">
              Explore
            </a>
            <a href="#create" className="transition-colors hover:text-foreground">
              Create
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#idea" className="transition-colors hover:text-foreground">
              Manifesto
            </a>
            <a href="#network" className="transition-colors hover:text-foreground">
              Network
            </a>
          </div>
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 runlets.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            the next version might be yours.
          </p>
        </div>
      </div>
    </footer>
  );
}
