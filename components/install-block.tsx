"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function InstallBlock() {
  const [copied, setCopied] = useState(false);
  const command = "curl -sSfL https://podspawn.dev/up | bash";

  function handleCopy() {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-xl">
      <div className="flex items-center justify-between border-b border-fd-border px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-red-500/80" />
          <div className="size-3 rounded-full bg-yellow-500/80" />
          <div className="size-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-fd-muted-foreground font-mono">terminal</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="p-6 font-mono text-sm space-y-2">
        <div>
          <span className="text-green-400">$</span>{" "}
          <span className="text-fd-foreground">{command}</span>
        </div>
        <div>
          <span className="text-green-400">$</span>{" "}
          <span className="text-fd-foreground">cd your-project</span>
        </div>
        <div>
          <span className="text-green-400">$</span>{" "}
          <span className="text-fd-foreground">podspawn dev</span>
        </div>
        <div className="pt-1">
          <span className="text-blue-400">alice@project</span>
          <span className="text-fd-foreground">:</span>
          <span className="text-fd-primary">/workspace</span>
          <span className="text-fd-foreground">$ </span>
          <span className="inline-block w-2 h-4 bg-fd-foreground/80 animate-pulse align-text-bottom" />
        </div>
      </div>
    </div>
  );
}
