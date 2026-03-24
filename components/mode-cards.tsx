import { Zap, Box, Lock } from "lucide-react";
import type { ReactNode } from "react";

export function ModeCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      <ModeCard
        icon={<Zap className="size-5 text-fd-primary" />}
        title="podspawn dev"
        primary
        code={["podspawn dev", "podspawn down", "podspawn init"]}
        description="Auto-detect Podfile, build, mount your code, start services, drop into a shell. One command."
      />
      <ModeCard
        icon={<Box className="size-5 text-fd-primary" />}
        title="Named machines"
        code={["podspawn create backend", "podspawn shell backend", "podspawn stop backend"]}
        description="Long-lived containers that persist across sessions. Create once, attach from anywhere."
      />
      <ModeCard
        icon={<Lock className="size-5 text-fd-primary" />}
        title="SSH mode"
        code={["ssh alice@work.pod", "scp file alice@work.pod:", "rsync -e ssh . alice@work.pod:."]}
        description="Native sshd. Zero client install. SFTP, VS Code Remote, JetBrains Gateway all work."
      />
    </div>
  );
}

function ModeCard({
  icon,
  title,
  primary,
  code,
  description,
}: {
  icon: ReactNode;
  title: string;
  primary?: boolean;
  code: string[];
  description: string;
}) {
  return (
    <div
      className="group relative rounded-xl border border-fd-border bg-fd-card p-6 transition-all duration-200 hover:border-fd-primary/40 hover:shadow-[0_0_24px_-6px] hover:shadow-fd-primary/15"
    >
      {primary && (
        <span className="absolute -top-2.5 left-4 rounded-full bg-fd-primary px-2.5 py-0.5 text-[10px] font-semibold text-fd-primary-foreground uppercase tracking-wider">
          Start here
        </span>
      )}
      <div className="mb-3 inline-flex rounded-lg bg-fd-primary/10 p-2.5">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-semibold text-fd-foreground">{title}</h3>
      <div className="mb-4 space-y-1 font-mono text-xs">
        {code.map((line) => (
          <div key={line} className="text-fd-muted-foreground">
            <span className="text-green-400">$</span> {line}
          </div>
        ))}
      </div>
      <p className="text-sm text-fd-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
