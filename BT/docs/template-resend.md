# Template variant: `template-resend`

Resend-style take on the Runlets landing — same content, same 12 bespoke
visuals, re-skinned in resend's visual language.

## What changes vs `main`

- **Palette:** pure-black ground `#000000`, monochrome. Single accent is
  white (`--primary: #FFFFFF`, `--primary-foreground: #000000`) — resend-style
  white buttons on black.
- **Gloss:** `.gloss` / `.gloss-deep` treatments — soft top-light wash +
  inset 1px highlight on every `VisualFrame`, for the "dark and glossy" feel.
- **Light rays:** `SiteRays` — CSS-only light wash + angled beams falling
  from the top of the page, fading into black (resend's signature hero light).
- **Logo:** monochrome mark `public/images/runlets-mark-mono.svg`
  (white→gray gradient tile, black spark) used by `Logo` in this branch.
- **Visuals:** all hardcoded ember-amber hexes (`#FFB224` etc.) remapped to
  white/black; token-driven classes (`text-primary`, `bg-primary`) adapt
  automatically.

## What stays the same

- All 13 sections, all copy, all 12 bespoke visual components and their
  motion, the scroll-reveal system, fonts (Space Grotesk / Inter /
  JetBrains Mono), spacing, radius, and `npm run check` green.

## Branch

`template-resend` — branched from `main` at v1 (`fac60a6`).
