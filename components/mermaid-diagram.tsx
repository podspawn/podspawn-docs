"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

export function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState("");

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      themeVariables: {
        primaryColor: "#DF3F00",
        primaryTextColor: "#f5f5f5",
        primaryBorderColor: "#DF3F00",
        lineColor: "#666",
        secondaryColor: "#1e1e1e",
        tertiaryColor: "#2a2a2a",
        fontSize: "14px",
      },
      flowchart: {
        curve: "monotoneX",
        padding: 12,
      },
    });

    const id = `mermaid-${Math.random().toString(36).slice(2, 8)}`;
    mermaid.render(id, chart).then(({ svg: rendered }) => {
      setSvg(rendered);
    });
  }, [chart]);

  return (
    <div
      ref={ref}
      className="overflow-x-auto rounded-xl border border-fd-border bg-fd-card p-6 [&_svg]:mx-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
    >
      {!svg && (
        <div className="text-center text-fd-muted-foreground text-sm py-8">
          Loading diagram...
        </div>
      )}
    </div>
  );
}
