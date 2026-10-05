import { SectionShell } from "./SectionShell";
import { ChainVisual } from "./visuals/ChainVisual";
import { GapVisual } from "./visuals/GapVisual";
import { HeroVisual } from "./visuals/HeroVisual";
import { IdeaVisual } from "./visuals/IdeaVisual";
import { LineageVisual } from "./visuals/LineageVisual";
import { LoopVisual } from "./visuals/LoopVisual";
import { MetamorphosisVisual } from "./visuals/MetamorphosisVisual";
import { NetworkVisual } from "./visuals/NetworkVisual";
import { PersonasVisual } from "./visuals/PersonasVisual";
import { PipelineVisual } from "./visuals/PipelineVisual";
import { StepsVisual } from "./visuals/StepsVisual";
import { TwentyPercentVisual } from "./visuals/TwentyPercentVisual";

/* ---------------------------------- 01 ---------------------------------- */

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-6 pb-24 pt-28 md:pb-32 md:pt-40">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          runlets — the open network for AI-made things
        </p>
        <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl text-balance">
          Don&apos;t just show what you made.{" "}
          <span className="chrome-text chrome-text-glow">Start something.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Create with AI. Put it out there. Let other people play with it,
          remix it, and take it somewhere new.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#explore"
            className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all duration-150 hover:brightness-110"
          >
            Explore Runlets
          </a>
          <a
            href="#create"
            className="rounded-lg border border-border bg-secondary px-6 py-3 text-base font-medium text-foreground transition-colors duration-150 hover:border-ring/60"
          >
            Create a Runlet
          </a>
        </div>
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          No need to be a developer.
        </p>
        <div className="mt-16 w-full">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- 02 ---------------------------------- */

export function IdeaSection() {
  const makers = [
    ["A teacher", "builds an interactive lesson."],
    ["A writer", "brings an idea to life."],
    ["A designer", "turns a concept into something playable."],
    ["A tinkerer", "makes something weird and wonderful in an afternoon."],
  ];
  return (
    <SectionShell
      index="02"
      eyebrow="The Idea"
      id="idea"
      title="The creation has a life after its creator."
    >
      <p className="max-w-2xl text-lg text-muted-foreground">
        AI has made creating easier than ever.
      </p>
      <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {makers.map(([who, what]) => (
          <li key={who} className="bg-card p-6">
            <p className="font-display text-lg font-semibold text-foreground">
              {who}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{what}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
        Most of these creations never go anywhere.
      </p>
      <p className="mt-4 font-display text-2xl font-semibold text-foreground">
        Runlets gives them <span className="text-primary">somewhere to go.</span>
      </p>
      <div className="mt-12">
        <IdeaVisual />
      </div>
    </SectionShell>
  );
}

/* ---------------------------------- 03 ---------------------------------- */

const deadEnds: Array<[string, string]> = [
  ["ChatGPT / Claude", "Your creation stays inside a conversation."],
  ["GitHub", "Built for people who already know how to build."],
  ["X / TikTok", "Great for attention. Not for building on the thing itself."],
  ["Discord", "Great for communities. Not a creation layer."],
  ["Product Hunt", "Great when you've already built a product."],
];

export function ProblemSection() {
  return (
    <SectionShell
      index="03"
      eyebrow="The Problem"
      title="You can make it. But what happens next?"
    >
      <p className="max-w-2xl text-lg text-muted-foreground">
        Today, the internet gives you plenty of places to{" "}
        <span className="text-foreground">show</span> what you made. But showing
        isn&apos;t the same as building.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {deadEnds.map(([name, note]) => (
          <li
            key={name}
            className="rounded-xl border border-border bg-card p-6"
          >
            <p className="font-mono text-sm font-medium text-foreground">
              {name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {note}
            </p>
          </li>
        ))}
        <li className="rounded-xl border border-primary/40 bg-card p-6">
          <p className="font-mono text-sm font-medium text-primary">Runlets</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            Lives in the gap — a place to publish, play, and build on the thing
            itself.
          </p>
        </li>
      </ul>
      <div className="mt-12">
        <GapVisual />
      </div>
    </SectionShell>
  );
}

/* ---------------------------------- 04 ---------------------------------- */

const pipeline = ["Play", "Remix", "Fork", "Improve", "Build on it"];

export function WhatIsSection() {
  return (
    <SectionShell
      index="04"
      eyebrow="What is a Runlet?"
      title="A Runlet is a starting point."
    >
      <div className="max-w-2xl space-y-4 text-lg text-muted-foreground">
        <p>Make something with AI.</p>
        <p>Publish it.</p>
        <p>Give people a URL they can open instantly.</p>
        <p className="text-foreground">Then let them take it further.</p>
      </div>
      <div className="mt-12">
        <PipelineVisual />
      </div>
      <ol className="mt-8 flex flex-wrap gap-3">
        {pipeline.map((step) => (
          <li
            key={step}
            className="rounded-full border border-border bg-secondary px-5 py-2 font-mono text-sm text-foreground"
          >
            {step}
          </li>
        ))}
      </ol>
      <p className="mt-10 max-w-2xl font-display text-2xl font-semibold text-foreground">
        You don&apos;t need to finish everything. You just need to{" "}
        <span className="text-primary">start something.</span>
      </p>
    </SectionShell>
  );
}

/* ---------------------------------- 05 ---------------------------------- */

const steps: Array<[string, string, string]> = [
  [
    "1 — Make something",
    "Start with an idea. Use Claude, ChatGPT, Gemini, your favorite AI tool — whatever works for you.",
    "It can be a game, tool, experiment, lesson, story, experience, or something nobody has a name for yet.",
  ],
  [
    "2 — Put it out there",
    "Publish your creation as a Runlet. Give it a home. Give it a link.",
    "Let people experience the actual thing — not just a screenshot of it.",
  ],
  [
    "3 — Let someone else take it further",
    "Someone finds it. They play with it. They think: “What if…?” They remix it.",
    "And suddenly your idea isn't yours alone anymore. It's a starting point.",
  ],
];

export function HowItWorksSection() {
  return (
    <SectionShell
      index="05"
      eyebrow="How it works"
      title="Three steps. No finish line required."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map(([title, body, foot]) => (
          <div
            key={title}
            className="flex flex-col rounded-xl border border-border bg-card p-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {title}
            </p>
            <p className="mt-4 leading-relaxed text-foreground">{body}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {foot}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <StepsVisual />
      </div>
    </SectionShell>
  );
}

/* ---------------------------------- 06 ---------------------------------- */

const loop = [
  "IDEA",
  "CREATE",
  "PUBLISH",
  "PLAY",
  "REMIX",
  "IMPROVE",
  "SHARE",
  "REMIX AGAIN",
];

export function LoopSection() {
  return (
    <SectionShell
      index="06"
      eyebrow="The creation loop"
      title="Make. Share. Remix. Repeat."
    >
      <p className="max-w-2xl text-lg text-muted-foreground">
        Every creation can become the beginning of another creation.
      </p>
      <div className="mt-12">
        <LoopVisual />
      </div>
      <ol className="mt-8 flex flex-wrap items-center gap-2">
        {loop.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span
              className={
                s === "REMIX AGAIN"
                  ? "rounded-md bg-primary px-3 py-1.5 font-mono text-xs font-medium text-primary-foreground"
                  : "rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-muted-foreground"
              }
            >
              {s}
            </span>
            {i < loop.length - 1 && (
              <span className="font-mono text-xs text-muted-foreground">→</span>
            )}
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}

/* ---------------------------------- 07 ---------------------------------- */

export function LineageSection() {
  const credits = [
    "Who started it.",
    "Who remixed it.",
    "Who changed it.",
    "Who made it better.",
    "Where it went next.",
  ];
  return (
    <SectionShell
      index="07"
      eyebrow="Lineage"
      title="Where did this come from?"
    >
      <p className="max-w-2xl text-lg text-muted-foreground">
        Runlets keeps the story of how things evolve.
      </p>
      <ul className="mt-8 space-y-3">
        {credits.map((c) => (
          <li key={c} className="flex items-center gap-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            <span className="text-lg text-foreground">{c}</span>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <LineageVisual />
      </div>
      <p className="mt-10 max-w-2xl font-display text-2xl font-semibold text-foreground">
        Every creation has a lineage.{" "}
        <span className="text-muted-foreground">
          So when something takes off, the people who started the journey
          don&apos;t disappear from the story.
        </span>
      </p>
    </SectionShell>
  );
}

/* ---------------------------------- 08 ---------------------------------- */

const chain = [
  ["A teacher", "makes a simple interactive multiplication game."],
  ["Someone", "improves the experience."],
  ["Another teacher", "adapts it for younger students."],
  ["A designer", "gives it a better interface."],
  ["A developer", "turns it into something bigger."],
];

export function SmallIdeaSection() {
  return (
    <SectionShell
      index="08"
      eyebrow="Small idea → something bigger"
      title="You don't have to build the whole thing."
    >
      <div className="mt-4 max-w-2xl">
        {chain.map(([who, what], i) => (
          <div key={who + i} className="flex gap-6">
            <div className="flex flex-col items-center">
              <span
                className={`mt-2 h-3 w-3 rounded-full ${i === 0 || i === chain.length - 1 ? "bg-primary" : "bg-border"}`}
                aria-hidden
              />
              {i < chain.length - 1 && (
                <span className="w-px flex-1 bg-border" aria-hidden />
              )}
            </div>
            <div className="pb-10">
              <p className="font-display text-lg font-semibold text-foreground">
                {who} <span className="font-normal text-muted-foreground">{what}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <ChainVisual />
      </div>
      <p className="mt-10 font-display text-2xl font-semibold text-foreground">
        One idea. Many creators.{" "}
        <span className="text-primary">Infinite directions.</span>
      </p>
    </SectionShell>
  );
}

/* ---------------------------------- 09 ---------------------------------- */

const personas: Array<[string, string]> = [
  ["Teacher", "Build an interactive lesson."],
  ["Writer", "Turn an idea, character, or story into something people can experience."],
  ["Designer", "Turn a concept into an interactive prototype."],
  ["Vibe coder", "Build something without needing to become a full product engineer."],
  ["Tinkerer", "Make something weird. See what happens."],
  ["Creator", "Take an idea further than you could alone."],
];

export function WhoSection() {
  return (
    <SectionShell
      index="09"
      eyebrow="Who is Runlets for?"
      id="explore"
      title="For people who make things with AI."
    >
      <p className="max-w-2xl text-lg text-muted-foreground">
        You don&apos;t have to be a developer. You might be a:
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {personas.map(([role, blurb]) => (
          <li
            key={role}
            className="group rounded-xl border border-border bg-card p-6 transition-colors duration-150 hover:border-ring/50"
          >
            <p className="font-display text-lg font-semibold text-foreground">
              {role}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {blurb}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <PersonasVisual />
      </div>
    </SectionShell>
  );
}

/* ---------------------------------- 10 ---------------------------------- */

export function NotOnlyDevsSection() {
  return (
    <SectionShell
      index="10"
      eyebrow="Not just for developers"
      title="AI changed who gets to create."
    >
      <div className="max-w-2xl space-y-4 text-lg text-muted-foreground">
        <p>
          You don&apos;t need years of technical experience to make something
          interesting anymore.
        </p>
        <p>
          But the places where we share and build things haven&apos;t caught up.
        </p>
        <p className="text-foreground">
          Runlets is built for the people who can create{" "}
          <span className="text-primary">before</span> they can build
          traditionally.
        </p>
      </div>
      <div className="mt-12">
        <TwentyPercentVisual />
      </div>
      <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        <div className="bg-card p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            You
          </p>
          <p className="mt-3 font-display text-3xl font-semibold text-foreground">
            Make the first <span className="text-primary">20%.</span>
          </p>
        </div>
        <div className="bg-card p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            The network
          </p>
          <p className="mt-3 font-display text-3xl font-semibold text-foreground">
            Helps take it further.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------------------------- 11 ---------------------------------- */

export function NetworkSection() {
  return (
    <SectionShell
      index="11"
      eyebrow="The Runlets network"
      id="network"
      title={
        <>
          The network isn&apos;t built around people.{" "}
          <span className="text-muted-foreground">
            It&apos;s built around creations.
          </span>
        </>
      }
    >
      <div className="max-w-2xl space-y-4 text-lg text-muted-foreground">
        <p>Every Runlet is a potential starting point.</p>
        <p>Every remix creates another possibility.</p>
        <p>Every creator adds another connection.</p>
      </div>
      <div className="mt-12">
        <NetworkVisual />
      </div>
      <div className="mt-10 space-y-2 text-lg text-muted-foreground">
        <p>The more things people make, the more there is to discover.</p>
        <p>The more there is to discover, the more there is to remix.</p>
        <p className="text-foreground">
          And the more people remix, the more things get made.
        </p>
        <p className="pt-2 font-display text-2xl font-semibold text-primary">
          That&apos;s the loop.
        </p>
      </div>
    </SectionShell>
  );
}

/* ---------------------------------- 12 ---------------------------------- */

const metamorphosis = ["experiment", "game", "tool", "product"];

export function BigIdeaSection() {
  return (
    <SectionShell
      index="12"
      eyebrow="The big idea"
      title="Become the open network for things people create with AI."
    >
      <div className="max-w-2xl space-y-4 text-lg text-muted-foreground">
        <p>A place where creations don&apos;t have to end when their creator stops.</p>
      </div>
      <ol className="mt-10 flex flex-wrap items-center gap-3">
        <li className="font-mono text-sm text-muted-foreground">
          Where an <span className="text-foreground">experiment</span>
        </li>
        {metamorphosis.slice(1).map((m) => (
          <li key={m} className="flex items-center gap-3">
            <span className="font-mono text-sm text-primary">→</span>
            <span className="font-mono text-sm text-muted-foreground">
              can become a <span className="text-foreground">{m}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        And a simple idea can become something nobody expected.
      </p>
      <div className="mt-12">
        <MetamorphosisVisual />
      </div>
      <p className="mt-12 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Don&apos;t just show what you made.{" "}
        <span className="chrome-text chrome-text-glow">Start something.</span>
      </p>
    </SectionShell>
  );
}

/* ---------------------------------- 13 ---------------------------------- */

export function FinalCtaSection() {
  return (
    <section id="create" className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center md:py-40">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          13 — Final call
        </p>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl text-balance">
          Have something worth starting?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Make your first Runlet.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#create"
            className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-150 hover:brightness-110"
          >
            Create a Runlet
          </a>
          <a
            href="#explore"
            className="rounded-lg border border-border bg-secondary px-8 py-4 text-base font-medium text-foreground transition-colors duration-150 hover:border-ring/60"
          >
            Explore Runlets
          </a>
        </div>
        <p className="mt-8 font-mono text-xs text-muted-foreground">
          The next version might be yours.
        </p>
      </div>
    </section>
  );
}
