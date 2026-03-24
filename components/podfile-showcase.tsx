import { Check, Circle } from "lucide-react";

export function PodfileShowcase() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Left: Podfile YAML */}
      <div className="rounded-xl border border-fd-border bg-fd-card overflow-hidden">
        <div className="flex items-center gap-2 border-b border-fd-border px-4 py-3 text-xs text-fd-muted-foreground font-mono">
          <div className="size-3 rounded-full bg-red-500/80" />
          <div className="size-3 rounded-full bg-yellow-500/80" />
          <div className="size-3 rounded-full bg-green-500/80" />
          <span className="ml-2">podfile.yaml</span>
        </div>
        <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
          <code>
            <span className="text-fd-muted-foreground"># Inherit common dev tools</span>{"\n"}
            <span className="text-blue-400">extends</span>: <span className="text-green-400">ubuntu-dev</span>{"\n\n"}
            <span className="text-blue-400">packages</span>:{"\n"}
            {"  "}- <span className="text-fd-foreground">go@1.25</span>{"\n"}
            {"  "}- <span className="text-fd-foreground">nodejs@22</span>{"\n\n"}
            <span className="text-blue-400">services</span>:{"\n"}
            {"  "}- <span className="text-blue-400">name</span>: <span className="text-fd-foreground">postgres</span>{"\n"}
            {"    "}<span className="text-blue-400">image</span>: <span className="text-fd-foreground">postgres:16</span>{"\n"}
            {"    "}<span className="text-blue-400">env</span>: {"{"} <span className="text-blue-400">POSTGRES_PASSWORD</span>: <span className="text-fd-foreground">devpass</span> {"}"}{"\n\n"}
            <span className="text-blue-400">on_create</span>: <span className="text-fd-muted-foreground">|</span>{"\n"}
            {"  "}<span className="text-fd-foreground">go mod download</span>{"\n"}
            {"  "}<span className="text-fd-foreground">npm install</span>
          </code>
        </pre>
      </div>

      {/* Right: Environment visualization */}
      <div className="rounded-xl border border-fd-border bg-fd-card p-6 flex flex-col justify-center">
        <h4 className="text-sm font-medium text-fd-muted-foreground mb-4 uppercase tracking-wider">
          What you get
        </h4>
        <div className="space-y-3">
          <EnvItem icon="check" text="Ubuntu 24.04 + git, ripgrep, fzf, neovim, jq" />
          <EnvItem icon="check" text="Go 1.25 (official tarball)" />
          <EnvItem icon="check" text="Node.js 22 (NodeSource PPA)" />
          <EnvItem icon="check" text="Dependencies pre-downloaded" />
          <div className="my-4 border-t border-fd-border" />
          <EnvItem icon="service" text="postgres:16 on localhost:5432" />
          <div className="my-4 border-t border-fd-border" />
          <EnvItem icon="check" text="Code bind-mounted at /workspace" />
          <EnvItem icon="check" text="Passwordless sudo, UID 1000" />
        </div>
      </div>
    </div>
  );
}

function EnvItem({ icon, text }: { icon: "check" | "service"; text: string }) {
  return (
    <div className="flex items-center gap-3">
      {icon === "check" ? (
        <Check className="size-4 text-green-500 shrink-0" />
      ) : (
        <Circle className="size-4 text-fd-primary shrink-0 fill-fd-primary/20" />
      )}
      <span className="text-sm text-fd-foreground">{text}</span>
    </div>
  );
}
