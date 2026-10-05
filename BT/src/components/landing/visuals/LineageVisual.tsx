"use client";

import { useState } from "react";
import { VisualFrame } from "./VisualFrame";

interface Node {
  id: string;
  title: string;
  author: string;
  x: number;
  y: number;
  parent: string | null;
}

const NODES: Node[] = [
  { id: "n0", title: "multiplication game", author: "@teacher-ali", x: 30, y: 172, parent: null },
  { id: "n1", title: "smoother v2", author: "@sara", x: 300, y: 52, parent: "n0" },
  { id: "n2", title: "junior version", author: "@mrs-karimi", x: 300, y: 172, parent: "n0" },
  { id: "n3", title: "dark mode", author: "@kenji", x: 300, y: 292, parent: "n0" },
  { id: "n4", title: "classroom edition", author: "@sara", x: 570, y: 22, parent: "n1" },
  { id: "n5", title: "with sounds", author: "@dev-reza", x: 570, y: 142, parent: "n2" },
];

const W = 170;
const H = 60;

function ancestors(id: string): string[] {
  const chain: string[] = [id];
  let cur = NODES.find((n) => n.id === id);
  while (cur?.parent) {
    chain.push(cur.parent);
    cur = NODES.find((n) => n.id === cur!.parent);
  }
  return chain;
}

/**
 * Lineage visual — a creation's family tree.
 * Hover any node to light up its whole ancestry: nobody disappears
 * from the story.
 */
export function LineageVisual() {
  const [hovered, setHovered] = useState<string | null>(null);
  const hot = hovered ? new Set(ancestors(hovered)) : null;

  const edgePath = (a: Node, b: Node) => {
    const x1 = a.x + W;
    const y1 = a.y + H / 2;
    const x2 = b.x;
    const y2 = b.y + H / 2;
    const mx = (x1 + x2) / 2;
    return `M${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
  };

  return (
    <VisualFrame caption="hover a remix — its whole ancestry lights up. nobody disappears from the story.">
      <div className="overflow-x-auto px-4 py-8">
        <svg
          viewBox="0 0 770 380"
          className="h-auto min-w-[640px] w-full"
          role="img"
          aria-label="Family tree of a runlet: original and its remixes with authors"
        >
          {NODES.filter((n) => n.parent).map((n) => {
            const p = NODES.find((m) => m.id === n.parent)!;
            const lit = hot && hot.has(n.id) && hot.has(p.id);
            return (
              <path
                key={n.id}
                d={edgePath(p, n)}
                fill="none"
                stroke={lit ? "#FFB224" : "rgba(255,255,255,0.14)"}
                strokeWidth={lit ? 2.5 : 1.5}
                className="transition-all duration-200"
              />
            );
          })}
          {NODES.map((n) => {
            const lit = !hot || hot.has(n.id);
            const isRoot = n.parent === null;
            return (
              <g
                key={n.id}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer"
                opacity={lit ? 1 : 0.35}
              >
                <rect
                  x={n.x}
                  y={n.y}
                  width={W}
                  height={H}
                  rx={10}
                  fill={isRoot ? "#141007" : "#101014"}
                  stroke={hot?.has(n.id) && hovered === n.id ? "#FFB224" : lit && isRoot ? "#FFB224" : "rgba(255,255,255,0.12)"}
                  strokeWidth="1.5"
                  className="transition-all duration-200"
                />
                {isRoot && (
                  <circle cx={n.x + 16} cy={n.y + H / 2} r={4} fill="#FFB224" />
                )}
                <text
                  x={n.x + (isRoot ? 28 : 14)}
                  y={n.y + 25}
                  fill="#F5F4F0"
                  fontSize="12.5"
                  fontFamily="Space Grotesk, sans-serif"
                  fontWeight="600"
                >
                  {n.title}
                </text>
                <text
                  x={n.x + (isRoot ? 28 : 14)}
                  y={n.y + 44}
                  fill="#A1A1AA"
                  fontSize="10.5"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {n.author}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </VisualFrame>
  );
}
