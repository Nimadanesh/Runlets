# Design System — Runlets

> Per-project design tokens and component rules.
> Tokens implemented in `src/app/globals.css` (Tailwind v4 `@theme` + CSS vars).
> Fonts loaded in `src/app/layout.tsx` via `next/font/google`.

## Brand Summary

- **Direction:** resend.com-anchored dark minimalism. `linear` recipe adapted — warm near-black ground, hairline detail, restrained single accent. Accent is **ember amber** (not Linear purple): the "spark" of starting something.
- **Light / dark:** dark only
- **Density:** comfortable — one idea per viewport, generous whitespace

## Color

Dark-first: `:root` carries the dark values. No light theme.

| Token | Dark | Usage |
| ----- | ---- | ----- |
| `background` | `#08090A` | Page background (warm near-black) |
| `foreground` | `#F5F4F0` | Primary text (warm white) |
| `primary` | `#FFB224` | Primary actions (ember amber) |
| `primary-foreground` | `#1A1206` | Text on primary |
| `secondary` | `#16161C` | Secondary surfaces |
| `secondary-foreground` | `#F5F4F0` | Text on secondary |
| `muted` | `#101014` | Subtle backgrounds |
| `muted-foreground` | `#A1A1AA` | Secondary text |
| `accent` | `#FFB224` | Highlights (use on <5% of pixels) |
| `accent-foreground` | `#1A1206` | Text on accent |
| `destructive` | `oklch(0.704 0.191 22.216)` | Errors / danger |
| `border` | `rgba(255,255,255,0.08)` | Hairline borders |
| `input` | `rgba(255,255,255,0.12)` | Input borders |
| `ring` | `#FFB224` | Focus rings |

### Brand palette (raw)

- **Ground:** `#08090A` · **Surface 1:** `#101014` · **Surface 2:** `#16161C` · **Raised:** `#1E1F25`
- **Text:** `#F5F4F0` · **Secondary text:** `#A1A1AA` · **Muted text:** `#6E6E76`
- **Brand primary (ember amber):** `#FFB224` — the only saturated color on the page
- **Hairline:** `rgba(255,255,255,0.08)` — 1px dividers between every section/panel

## Typography

| Role | Family | Size / line-height | Weight | Notes |
| ---- | ------ | ------------------ | ------ | ----- |
| Display | `Space Grotesk` | `clamp(2.75rem, 6vw, 4.5rem)` / 1.05, `-0.02em` | 600 | Hero / marketing headlines |
| Heading | `Space Grotesk` | h2 `clamp(2rem, 4vw, 3rem)`, h3 `1.5rem` | 600 | Section titles |
| Body | `Inter` | `15–16px` / 1.6 | 400–500 | Default copy |
| Label | `JetBrains Mono` | `12–13px`, uppercase, `0.08em` tracking | 500 | Section eyebrows (`01 — HERO`), chips |
| Mono | `JetBrains Mono` | `13–14px` | 400–500 | Code / inline literals |

**Loading:** `next/font/google` in `src/app/layout.tsx` — `Space_Grotesk` (display), `Inter` (body), `JetBrains_Mono` (labels/mono).

## Spacing & Layout

- **Base unit:** `4px`
- **Scale:** `4, 8, 12, 16, 24, 40, 64, 96, 128`
- **Content max-width:** `72rem` (1152px), centered
- **Page padding:** `24px` mobile / `40px` desktop
- **Section vertical rhythm:** `py-24` (96px) mobile / `py-32` (128px) desktop
- **Grid:** 12-col on desktop; single column stacks on mobile

## Radius, Shadow, Motion

| Token | Value | Usage |
| ----- | ----- | ----- |
| Radius | `8px` sm / `12px` md / `16px` lg (base `--radius: 0.75rem`) | buttons, cards, inputs — never above 16px |
| Shadow | `0 1px 2px rgba(0,0,0,0.3)` on raised surfaces | barely-there elevation — **no glow, no colored shadows** |
| Motion duration | `150ms` hover / `400ms` reveals | default transitions |
| Motion easing | `cubic-bezier(0.22, 1, 0.36, 1)` (quint ease-out) | snappy, never bouncy |

**Motion principles:** subtle and deliberate; scroll-triggered reveals for sections; one signature interactive moment per key section (v0: static placeholders; motion lands in the full build). Respect `prefers-reduced-motion`.

## Breakpoints

| Name | Width | Notes |
| ---- | ----- | ----- |
| Mobile | ~390px | default (mobile-first) |
| Tablet | ~768px | two-col grids collapse gracefully |
| Desktop | ~1440px | full 12-col, max-width container |

## Iconography

- **Library:** Lucide React
- **Default size:** `20px`
- **Stroke:** `1.5`

## Components

### Button

- Variants: `default` (amber bg, dark text), `secondary` (surface-2 bg), `outline` (hairline border), `ghost`
- Sizes: `sm`, `default`, `lg`
- States: default, hover (150ms ease-out), focus-visible (amber ring), active, disabled
- Notes: CTAs are sentence-case ("Explore Runlets"), never 2018-style "GET STARTED FREE"

### Card (v0 placeholder pattern)

- Structure: hairline `1px` border, `12px` radius, surface-1 bg; dashed border + mono label for `[visual: …]` placeholders
- Variants: `default`, `placeholder` (v0 only)

### Navigation

- Pattern: minimal top bar — wordmark left, two CTAs right
- Mobile behavior: wordmark + single primary CTA (no hamburger for v0)

### Feedback

- Toast / dialog / empty / skeleton: n/a for v0 (static landing)

### Additional components

| Component | Path | Variants | Notes |
| --------- | ---- | -------- | ----- |
| `Logo` | `src/components/landing/Logo.tsx` | `default` | Brand lockup: recreated SVG mark (`public/images/runlets-mark.svg`, ember-amber) + `runlets` wordmark in Space Grotesk Bold |
| `SectionShell` | `src/components/landing/SectionShell.tsx` | `default` | Eyebrow (`01 — HERO`) + title + children; hairline top divider; scroll-reveal |
| `VisualFrame` | `src/components/landing/visuals/VisualFrame.tsx` | `default` | Shared container for bespoke visuals + mono caption |
| `Reveal` | `src/components/landing/Reveal.tsx` | `default` | IntersectionObserver fade-up; `data-reveal` + noscript fallback |

## Content Guidelines

- **Voice:** direct, plain-spoken, inspiring (see brief)
- **Placeholder policy:** explicit `[visual: description]` markers in v0 — never fake imagery, never lorem ipsum
- **Image style:** abstract dark product visuals, hairline UI, amber accent only; no stock photography of people; no purple/blue gradients

## Do / Don't

| Do | Don't |
| -- | ----- |
| Use semantic tokens from this doc | Hard-code one-off hex in components |
| Spec states before building | Ship default-only UI |
| Match spacing scale | Magic numbers outside the scale |
| One saturated color (amber) only | Add a second accent "to balance things out" |
| Let each section's visual explain its content | Decorative visuals that could belong to any section |
