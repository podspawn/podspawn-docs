"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type LineSegment = {
  text: string;
  color?: string;
};

type SceneLine = {
  segments: LineSegment[];
  typed?: boolean; // true = type char-by-char, false = appear instantly
  pause?: number; // ms to wait after this line
};

type Scene = {
  label: string;
  lines: SceneLine[];
};

const scenes: Scene[] = [
  {
    label: "persistent workspace",
    lines: [
      {
        segments: [
          { text: "$ ", color: "text-green-400" },
          { text: "ssh alice@backend.pod", color: "text-fd-foreground" },
        ],
        typed: true,
        pause: 600,
      },
      {
        segments: [
          {
            text: "Reattaching to podspawn-alice-backend...",
            color: "text-fd-muted-foreground opacity-60",
          },
        ],
        pause: 800,
      },
      {
        segments: [
          {
            text: "Starting postgres:16, redis:7 on podspawn-alice-backend-net...",
            color: "text-fd-muted-foreground opacity-60",
          },
        ],
        pause: 500,
      },
      {
        segments: [
          { text: "alice@backend", color: "text-blue-400" },
          { text: ":", color: "text-fd-foreground" },
          { text: "~/workspace", color: "text-fd-primary" },
          { text: "$ cat TODO.md", color: "text-fd-foreground" },
        ],
        typed: true,
        pause: 400,
      },
      {
        segments: [
          {
            text: "- finish auth refactor",
            color: "text-fd-muted-foreground",
          },
        ],
        pause: 300,
      },
      {
        segments: [
          {
            text: "- write integration tests",
            color: "text-fd-muted-foreground",
          },
        ],
        pause: 800,
      },
      {
        segments: [
          { text: "alice@backend", color: "text-blue-400" },
          { text: ":", color: "text-fd-foreground" },
          { text: "~/workspace", color: "text-fd-primary" },
          { text: "$ npm test", color: "text-fd-foreground" },
        ],
        typed: true,
        pause: 1200,
      },
      {
        segments: [
          { text: "Tests: 47 passed, 47 total", color: "text-green-400" },
        ],
        pause: 800,
      },
      {
        segments: [
          { text: "alice@backend", color: "text-blue-400" },
          { text: ":", color: "text-fd-foreground" },
          { text: "~/workspace", color: "text-fd-primary" },
          { text: "$ exit", color: "text-fd-foreground" },
        ],
        typed: true,
        pause: 400,
      },
      {
        segments: [
          {
            text: "Container still running (persistent mode).",
            color: "text-fd-muted-foreground opacity-60",
          },
        ],
        pause: 2000,
      },
    ],
  },
  {
    label: "ephemeral sandbox",
    lines: [
      {
        segments: [
          { text: "$ ", color: "text-green-400" },
          { text: "ssh agent@ci.pod", color: "text-fd-foreground" },
        ],
        typed: true,
        pause: 600,
      },
      {
        segments: [
          {
            text: "Creating container podspawn-agent-ci...",
            color: "text-fd-muted-foreground opacity-60",
          },
        ],
        pause: 800,
      },
      {
        segments: [
          { text: "agent@ci", color: "text-blue-400" },
          { text: ":", color: "text-fd-foreground" },
          { text: "~", color: "text-fd-primary" },
          { text: "$ pytest && exit", color: "text-fd-foreground" },
        ],
        typed: true,
        pause: 1400,
      },
      {
        segments: [
          { text: "23 passed", color: "text-green-400" },
          { text: " in 4.2s", color: "text-fd-muted-foreground" },
        ],
        pause: 600,
      },
      {
        segments: [
          {
            text: "Container destroyed.",
            color: "text-fd-muted-foreground opacity-60",
          },
        ],
        pause: 2500,
      },
    ],
  },
];

function flattenSegments(segments: LineSegment[]): string {
  return segments.map((s) => s.text).join("");
}

export function TerminalDemo() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "fading">(
    "typing"
  );
  const [opacity, setOpacity] = useState(1);
  const [completedLines, setCompletedLines] = useState<number[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const scene = scenes[sceneIndex];
  const currentLine = scene.lines[lineIndex];
  const fullText = currentLine ? flattenSegments(currentLine.segments) : "";
  const isTypedLine = currentLine?.typed ?? false;

  const switchToScene = useCallback((idx: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setPhase("fading");
    setOpacity(0);
    timerRef.current = setTimeout(() => {
      setSceneIndex(idx);
      setLineIndex(0);
      setCharIndex(0);
      setCompletedLines([]);
      timerRef.current = setTimeout(() => {
        setOpacity(1);
        setPhase("typing");
      }, 50);
    }, 400);
  }, []);

  const advanceLine = useCallback(() => {
    setCompletedLines((prev) => [...prev, lineIndex]);
    const nextLine = lineIndex + 1;

    if (nextLine >= scene.lines.length) {
      switchToScene((sceneIndex + 1) % scenes.length);
      return;
    }

    setLineIndex(nextLine);
    setCharIndex(0);
    setPhase("typing");
  }, [lineIndex, scene.lines.length, sceneIndex, switchToScene]);

  useEffect(() => {
    if (prefersReducedMotion.current) {
      // Show the final state of scene 0 statically
      setCompletedLines(scene.lines.map((_, i) => i));
      setLineIndex(scene.lines.length);
      return;
    }

    if (phase === "fading") return;

    if (phase === "pausing") {
      timerRef.current = setTimeout(advanceLine, currentLine?.pause ?? 400);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    // Typing phase
    if (!currentLine) return;

    if (!isTypedLine) {
      // Output line: appear instantly, then pause
      setPhase("pausing");
      return;
    }

    if (charIndex >= fullText.length) {
      // Finished typing this line
      setPhase("pausing");
      return;
    }

    timerRef.current = setTimeout(
      () => setCharIndex((c) => c + 1),
      28 + Math.random() * 16 // slight jitter
    );
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [
    phase,
    charIndex,
    fullText.length,
    isTypedLine,
    currentLine,
    advanceLine,
  ]);

  // Render a line with colored segments, respecting charIndex for typed lines
  function renderLine(
    line: SceneLine,
    idx: number,
    isActive: boolean,
    activeCharCount: number
  ) {
    const isCompleted = completedLines.includes(idx);
    const visible = isCompleted || isActive;
    if (!visible) return null;

    const showCursor = isActive && phase === "typing" && line.typed;
    let charsRemaining = isCompleted
      ? Infinity
      : activeCharCount;

    return (
      <div key={idx} className={idx > 0 ? "mt-1" : ""}>
        {line.segments.map((seg, si) => {
          if (charsRemaining <= 0 && !isCompleted)
            return null;
          const visibleChars = Math.min(seg.text.length, charsRemaining);
          const displayText = isCompleted
            ? seg.text
            : seg.text.slice(0, visibleChars);
          charsRemaining -= seg.text.length;

          return (
            <span key={si} className={seg.color || "text-fd-foreground"}>
              {displayText}
            </span>
          );
        })}
        {showCursor && (
          <span className="inline-block w-[0.55em] h-[1.1em] bg-fd-foreground/80 align-text-bottom animate-pulse ml-px" />
        )}
      </div>
    );
  }

  return (
    <div className="mt-16 overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-2xl">
      <div className="flex items-center justify-between border-b border-fd-border px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-red-500/80" />
          <div className="size-3 rounded-full bg-yellow-500/80" />
          <div className="size-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-fd-muted-foreground font-mono">
            terminal
          </span>
        </div>
        <div className="flex gap-1.5">
          {scenes.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => {
                if (i !== sceneIndex) switchToScene(i);
              }}
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors duration-300 cursor-pointer ${
                i === sceneIndex
                  ? "bg-fd-primary/15 text-fd-primary"
                  : "text-fd-muted-foreground/40 hover:text-fd-muted-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <div
        className="p-6 font-mono text-sm leading-relaxed min-h-[220px] transition-opacity duration-500"
        style={{ opacity }}
      >
        {scene.lines.map((line, idx) =>
          renderLine(line, idx, idx === lineIndex, charIndex)
        )}
      </div>
    </div>
  );
}
