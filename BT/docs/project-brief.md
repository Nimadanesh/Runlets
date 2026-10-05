# Project Brief — Runlets Landing Page

> Source of truth for the Runlets landing page build.

## Overview

| Field | Value |
| ----- | ----- |
| **Project name** | `Runlets` |
| **One-liner** | Don't just show what you made. Start something. |
| **Status** | `design` → `build` (v0 in progress) |

## Goals

- **Primary goal:** A narrative landing page that explains what a Runlet is and converts visitors into explorers / creators.
- **Success looks like:** A visitor can state back the core idea ("I publish what I make with AI, others play with it and remix it") and clicks Explore or Create.
- **Out of scope (for now):** The Runlets product itself (accounts, publishing flow, remix engine). Landing page only. No backend.

## Audience

- **Primary users:** AI-era creators — teachers, writers, designers, vibe coders, tinkerers. Explicitly **not** developers-only.
- **Jobs to be done:** Understand the concept in <60s; feel "this is for someone like me"; take the next step (explore / create).
- **Context of use:** Desktop and mobile; exploratory, low-hurry reading.

## Brand & Voice

- **Brand name:** `Runlets`
- **Personality:** Quietly confident, warm, a spark of playfulness. Peer-to-peer, never salesy.
- **Tone of copy:** Direct, plain-spoken, inspiring. Short sentences. (Copy supplied in English by navid.)
- **Visual direction:** resend.com-anchored dark minimalism — typographic, hairline detail, one idea per viewport, a bespoke visual per section. `linear` recipe adapted: ember-amber accent instead of purple.
- **Logo / assets:** No logo asset yet — musi designs a minimal `runlets` wordmark as part of the build.

## Product Surface

### Pages / routes

| Route | Purpose | Priority |
| ----- | ------- | -------- |
| `/` | The full 13-section narrative landing page | `P0` |

### Key user flows

1. **Explore Runlets** — CTA → destination TBD (currently `#` placeholder)
2. **Create a Runlet** — CTA → destination TBD (currently `#` placeholder)

## Constraints

- **Technical:** Static landing page. Next.js 16 App Router, Tailwind v4, shadcn/ui primitives, Lucide icons. No backend, no auth.
- **Accessibility:** WCAG 2.2 AA target; keyboard-reachable CTAs; `prefers-reduced-motion` respected.
- **Performance:** Fast LCP; fonts via `next/font`; no heavy 3D libraries for v0.
- **Content:** English copy supplied by navid (13 sections, hierarchical). Treated as final unless he says otherwise.
- **Timeline:** v0 first for direction check → full build with bespoke per-section visuals after approval.

## Design System Link

Tokens, type, spacing, and component rules live in [`design-system.md`](./design-system.md).
Code conventions live in [`conventions.md`](./conventions.md).
Build process lives in [`workflows.md`](./workflows.md).

## Open Questions

- [ ] CTA destinations for "Explore Runlets" / "Create a Runlet" (product not live yet?)
- [ ] Runlets wordmark — musi designs; navid approves
- [ ] Deployment target (Vercel project + domain)

## Notes

- The 13-section content hierarchy (HERO → THE IDEA → THE PROBLEM → WHAT IS A RUNLET → HOW IT WORKS → THE CREATION LOOP → LINEAGE → SMALL IDEA → WHO IS IT FOR → NOT JUST FOR DEVELOPERS → THE NETWORK → THE BIG IDEA → FINAL CTA) is the page skeleton; section order follows the supplied content exactly.
- Per-section bespoke visuals are the core differentiator — each visual must be *about* its section's content (lineage graph, creation loop, remix chain…), never decoration.
