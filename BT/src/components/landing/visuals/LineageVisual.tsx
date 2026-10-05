"use client";

import { useState } from "react";
import { VisualFrame } from "./VisualFrame";

type Node = { id: string; x: number; y: number; label: string; parent: string | null };

const NODES: Node[] = [
  { id: "root", x: 200, y: 180, label: "you", parent: null },
  { id: "a", x: 200, y: 88, label: "@sara", parent: "root" },
  { id: "b", x: 280, y: 226, label: "@kenji", parent: "root" },
  { id: "c", x: 120, y: 226, label: "@maya", parent: "root" },
  { id: "a1", x: 104, y: 42, label: "@leo", parent: "a" },
  { id: "a2", x: 296, y: 42, label: "@nia", parent: "a" },
  { id: "b1", x: 367, y: 165, label: "@omar", parent: "b" },
  { id: "b2", x: 271, y: 332, label: "@iva", parent: "b" },
  { id: "c1", x: 129, y: 332, label: "@rex", parent: "c" },
  { id: "c2", x: 33, y: 165, label: "@zoe", parent: "c" },
];

const BY_ID = Object.fromEntries(NODES.map((n) => [n.id, n]));

function ancestors(id: string): Set<string> {
  const s = new Set<string>([id]);
  let cur = BY_ID[id];
  while (cur?.parent) {
    s.add(cur.parent);
    cur = BY_ID[cur.parent];
  }
  return s;
}

/**
 * Lineage visual — the silver bloodline.
 * A radial pedigree: hover any descendant and its whole bloodline lights up.
 */
export function LineageVisual() {
  const [active, setActive] = useState<string | null>(null);
  const lit = active ? ancestors(active) : new Set<string>(["root"]);

  const edge = (n: Node) => {
    const p = BY_ID[n.parent!];
    const mx = (p.x + n.x) / 2;
    const my = (p.y + n.y) / 2;
    return `M ${p.x} ${p.y} Q ${mx} ${my} ${n.x} ${n.y}`;
  };

  return (
    <VisualFrame caption="hover a descendant — its whole bloodline lights up.">
      <div className="relative h-[360px]">
        <svg viewBox="0 0 400 360" className="absolute inset-0 h-full w-full" role="img" aria-label="Remix bloodline">
          <defs>
            <radialGradient id="coreChrome" cx="35%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#d5d5de" />
              <stop offset="100%" stopColor="#7d7d8a" />
            </radialGradient>
            <filter id="bloodGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          {NODES.filter((n) => n.parent).map((n) => {
            const isLit = lit.has(n.id) && lit.has(n.parent!);
            return (
              <path
                key={n.id}
                d={edge(n)}
                fill="none"
                stroke={isLit ? "#ffffff" : "rgba(255,255,255,0.14)"}
                strokeWidth={isLit ? 2.4 : 1.2}
                filter={isLit ? "url(#bloodGlow)" : undefined}
                style={{ transition: "stroke 0.35s" }}
              />
            );
          })}
          {NODES.map((n) => {
            const isLit = lit.has(n.id);
            const isRoot = n.id === "root";
            return (
              <g
                key={n.id}
                onMouseEnter={() => setActive(n.id)}
                onMouseLeave={() => setActive(null)}
                className="cursor-pointer"
              >
                <circle cx={n.x} cy={n.y} r={isRoot ? 17 : isLit ? 12 : 9} fill={isRoot ? "url(#coreChrome)" : isLit ? "#ffffff" : "#17171b"}
                  stroke="rgba(255,255,255,0.35)" strokeWidth="1"
                  filter={isLit ? "url(#bloodGlow)" : undefined}
                  style={{ transition: "all 0.35s" }} />
                {/* generous hover target */}
                <circle cx={n.x} cy={n.y} r="22" fill="transparent" />
                <text x={n.x} y={n.y + (isRoot ? 32 : 26)} textAnchor="middle" fill={isLit ? "#ffffff" : "#9a9aa5"} fontSize="10" fontFamily="monospace">
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </VisualFrame>
  );
}
