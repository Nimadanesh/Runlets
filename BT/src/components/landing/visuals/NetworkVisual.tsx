import { VisualFrame } from "./VisualFrame";

// Nodes are creations (not people). Edges are remixes.
const NODES: Array<[number, number, boolean]> = [
  // [x, y, highlighted]
  [120, 90, true],
  [250, 50, false],
  [380, 80, false],
  [520, 60, true],
  [660, 110, false],
  [90, 220, false],
  [230, 180, false],
  [360, 210, true],
  [500, 180, false],
  [640, 230, false],
  [170, 320, false],
  [330, 300, false],
  [480, 320, true],
  [620, 330, false],
];

const EDGES: Array<[number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
  [5, 6], [6, 7], [7, 8], [8, 9],
  [5, 10], [6, 11], [7, 11], [8, 12], [9, 13],
  [10, 11], [11, 12], [12, 13],
  [1, 7], [3, 7], [7, 12],
];

/**
 * Network visual — a constellation where nodes are creations, not people.
 * Amber nodes are the ones taking off right now.
 */
export function NetworkVisual() {
  return (
    <VisualFrame caption="every node is a creation. every edge is a remix. watch it densify.">
      <svg
        viewBox="0 0 740 390"
        className="block h-auto w-full"
        role="img"
        aria-label="Network of creations connected by remix edges"
      >
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
            stroke={
              NODES[a][2] || NODES[b][2]
                ? "rgba(255,178,36,0.45)"
                : "rgba(255,255,255,0.10)"
            }
            strokeWidth="1.5"
          />
        ))}
        {NODES.map(([x, y, hot], i) => (
          <g key={i}>
            {hot && (
              <circle
                cx={x}
                cy={y}
                r="16"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
                opacity="0.5"
                className="v-pulse-soft"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            )}
            <rect
              x={x - 9}
              y={y - 9}
              width="18"
              height="18"
              rx="5"
              fill={hot ? "#FFFFFF" : "#16161C"}
              stroke={hot ? "#FFFFFF" : "rgba(255,255,255,0.2)"}
              strokeWidth="1.5"
            />
            {hot && (
              <path
                d={`M${x} ${y - 4}c.4 2.4 1.1 3.1 3.5 3.5-2.4.4-3.1 1.1-3.5 3.5-.4-2.4-1.1-3.1-3.5-3.5 2.4-.4 3.1-1.1 3.5-3.5Z`}
                fill="#000000"
              />
            )}
          </g>
        ))}
      </svg>
    </VisualFrame>
  );
}
