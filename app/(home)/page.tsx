import Link from 'next/link';
import {
  Terminal,
  Shield,
  Zap,
  Box,
  GitBranch,
  Users,
  ArrowRight,
  Monitor,
  Cloud,
  Lock,
} from 'lucide-react';

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary/50">
      <div className="mb-3 inline-flex rounded-lg bg-fd-primary/10 p-2.5">
        <Icon className="size-5 text-fd-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-fd-foreground">{title}</h3>
      <p className="text-sm text-fd-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function ComparisonRow({
  feature,
  podspawn,
  containerSSH,
  coder,
  codespaces,
}: {
  feature: string;
  podspawn: string;
  containerSSH: string;
  coder: string;
  codespaces: string;
}) {
  return (
    <tr className="border-b border-fd-border">
      <td className="py-3 pr-4 text-sm font-medium text-fd-foreground">{feature}</td>
      <td className="py-3 px-4 text-sm text-center text-fd-primary font-medium">{podspawn}</td>
      <td className="py-3 px-4 text-sm text-center text-fd-muted-foreground">{containerSSH}</td>
      <td className="py-3 px-4 text-sm text-center text-fd-muted-foreground">{coder}</td>
      <td className="py-3 px-4 text-sm text-center text-fd-muted-foreground">{codespaces}</td>
    </tr>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-fd-border">
        <div className="absolute inset-0 bg-gradient-to-b from-fd-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-4 py-1.5 text-sm text-fd-muted-foreground">
              <span className="inline-block size-2 rounded-full bg-green-500 animate-pulse" />
              Open source, AGPL-3.0 licensed
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-fd-foreground sm:text-5xl lg:text-6xl">
              SSH in, get a container.
              <br />
              <span className="text-fd-primary">Exit, it&apos;s gone.</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-fd-muted-foreground leading-relaxed">
              Podspawn hooks into your existing sshd to spawn ephemeral Docker
              containers on SSH connection. No custom daemon, no port 2222, no
              key exchange code. Two lines of sshd_config. Every SSH feature works.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
              >
                Get Started
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="https://github.com/podspawn/podspawn"
                className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-6 py-3 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
              >
                <GitBranch className="size-4" />
                View on GitHub
              </Link>
            </div>
          </div>

          {/* Terminal preview */}
          <div className="mt-16 overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-2xl">
            <div className="flex items-center gap-2 border-b border-fd-border px-4 py-3">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-fd-muted-foreground font-mono">terminal</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="text-fd-muted-foreground">
                <span className="text-green-400">$</span> ssh alice@backend.pod
              </div>
              <div className="mt-1 text-fd-muted-foreground opacity-60">
                Creating container podspawn-alice-backend...
              </div>
              <div className="mt-1 text-fd-muted-foreground opacity-60">
                Starting postgres:16, redis:7 on podspawn-alice-backend-net...
              </div>
              <div className="mt-3 text-fd-foreground">
                <span className="text-blue-400">alice@backend</span>:<span className="text-fd-primary">~/workspace</span>$ npm test
              </div>
              <div className="mt-1 text-green-400">Tests: 47 passed, 47 total</div>
              <div className="mt-3 text-fd-foreground">
                <span className="text-blue-400">alice@backend</span>:<span className="text-fd-primary">~/workspace</span>$ exit
              </div>
              <div className="mt-1 text-fd-muted-foreground opacity-60">
                Grace period: 60s. Container preserved for reconnect.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground">
            Why podspawn?
          </h2>
          <p className="mx-auto max-w-2xl text-fd-muted-foreground">
            Every competitor builds or embeds a custom SSH server. Podspawn
            doesn&apos;t. It hooks into native sshd and lets OpenSSH handle the protocol.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Terminal}
            title="Native sshd"
            description="Two lines of sshd_config. No custom daemon, no replacement SSH server. Your existing sshd does the heavy lifting."
          />
          <FeatureCard
            icon={Zap}
            title="Sub-second startup"
            description="Cached images start in under 500ms. Pre-built Podfile images mean developers never wait for npm install."
          />
          <FeatureCard
            icon={Shield}
            title="Hardened by default"
            description="cap-drop ALL, no-new-privileges, PID limits, per-user network isolation. gVisor runtime support for untrusted workloads."
          />
          <FeatureCard
            icon={Box}
            title="Podfile environments"
            description="Declarative YAML spec for dev environments: packages, services, dotfiles, hooks. Commit it, everyone gets the same setup."
          />
          <FeatureCard
            icon={Users}
            title="Multi-tenant"
            description="Per-user bridge networks, reference-counted connections, grace period lifecycle. Multiple users on shared infrastructure."
          />
          <FeatureCard
            icon={Monitor}
            title="Every SSH feature"
            description="SFTP, scp, rsync, port forwarding, agent forwarding, VS Code Remote, JetBrains Gateway. All work out of the box."
          />
          <FeatureCard
            icon={Cloud}
            title="AI agent ready"
            description="Disposable environments for Claude Code, Cursor, Codex. SSH in, run tests against real postgres, push, exit. Container self-destructs."
          />
          <FeatureCard
            icon={Lock}
            title="Audit everything"
            description="Structured JSON-lines audit log for every connect, disconnect, command, and container lifecycle event."
          />
          <FeatureCard
            icon={GitBranch}
            title="devcontainer.json"
            description="Already have a .devcontainer? Podspawn reads it as a fallback. Podfiles are a superset with companion services and dotfiles."
          />
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="border-y border-fd-border bg-fd-card/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-fd-foreground">
              How it works
            </h2>
            <p className="mx-auto max-w-2xl text-fd-muted-foreground">
              Zero lines of SSH protocol code. OpenSSH handles the connection,
              podspawn handles containers.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card p-8 font-mono text-sm">
            <pre className="overflow-x-auto text-fd-muted-foreground leading-relaxed">
{`ssh alice@work.pod
  |
  v
~/.ssh/config matches *.pod
  |
  v
ProxyCommand: podspawn connect alice work.pod 22
  |
  v
sshd calls: podspawn auth-keys alice
  |
  +-- alice in /etc/podspawn/keys/alice?
  |   YES -> return keys with command="podspawn spawn --user alice"
  |   NO  -> return nothing, sshd falls through to normal auth
  |
  v
podspawn spawn detects session type:
  |-- empty         -> interactive shell
  |-- sftp-server   -> SFTP subsystem
  |-- scp ...       -> scp transfer
  +-- anything else -> remote command
  |
  v
Container created/reattached, I/O piped, exit code propagated
  |
  v
User exits -> grace period -> container destroyed`}
            </pre>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground">
            Comparison
          </h2>
          <p className="mx-auto max-w-2xl text-fd-muted-foreground">
            Podspawn is not competing with Docker Desktop or WSL. It competes with
            Codespaces, Coder, and DevPod -- remote dev environment platforms.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-fd-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-fd-border bg-fd-card">
                <th className="py-3 pr-4 pl-4 text-sm font-medium text-fd-muted-foreground">Feature</th>
                <th className="py-3 px-4 text-sm font-medium text-center text-fd-primary">podspawn</th>
                <th className="py-3 px-4 text-sm font-medium text-center text-fd-muted-foreground">ContainerSSH</th>
                <th className="py-3 px-4 text-sm font-medium text-center text-fd-muted-foreground">Coder</th>
                <th className="py-3 px-4 text-sm font-medium text-center text-fd-muted-foreground">Codespaces</th>
              </tr>
            </thead>
            <tbody>
              <ComparisonRow feature="Native sshd" podspawn="Yes" containerSSH="No" coder="No" codespaces="N/A" />
              <ComparisonRow feature="SSH-triggered" podspawn="Yes" containerSSH="Yes" coder="No" codespaces="No" />
              <ComparisonRow feature="All SSH features" podspawn="Yes" containerSSH="Partial" coder="Yes" codespaces="Yes" />
              <ComparisonRow feature="Declarative env spec" podspawn="Podfile" containerSSH="No" coder="Partial" codespaces="No" />
              <ComparisonRow feature="Companion services" podspawn="Yes" containerSSH="No" coder="Yes" codespaces="Yes" />
              <ComparisonRow feature="True ephemeral" podspawn="Yes" containerSSH="Yes" coder="No" codespaces="No" />
              <ComparisonRow feature="Zero client install" podspawn="Yes" containerSSH="Yes" coder="No" codespaces="No" />
              <ComparisonRow feature="Self-hosted" podspawn="Easy" containerSSH="Hard" coder="Hard" codespaces="No" />
              <ComparisonRow feature="Open source" podspawn="AGPL" containerSSH="Apache" coder="AGPL" codespaces="No" />
            </tbody>
          </table>
        </div>
      </section>

      {/* Install CTA */}
      <section className="border-t border-fd-border bg-fd-card/50">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="mb-4 text-3xl font-bold text-fd-foreground">
            30 seconds to SSH containers
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-fd-muted-foreground">
            Install the binary, run server-setup, add a user. That&apos;s it.
          </p>
          <div className="mx-auto max-w-lg overflow-hidden rounded-xl border border-fd-border bg-fd-card">
            <div className="flex items-center gap-2 border-b border-fd-border px-4 py-3">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
            </div>
            <div className="p-6 text-left font-mono text-sm">
              <div><span className="text-green-400">$</span> <span className="text-fd-foreground">curl -sSf https://podspawn.dev/install.sh | sh</span></div>
              <div className="mt-2"><span className="text-green-400">$</span> <span className="text-fd-foreground">sudo podspawn server-setup</span></div>
              <div className="mt-2"><span className="text-green-400">$</span> <span className="text-fd-foreground">sudo podspawn add-user alice --github alice</span></div>
              <div className="mt-4 text-fd-muted-foreground"># On the client:</div>
              <div className="mt-1"><span className="text-green-400">$</span> <span className="text-fd-foreground">ssh alice@yourserver.com</span></div>
              <div className="mt-1 text-blue-400">alice@container:~$</div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-8 py-3 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
            >
              Read the docs
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-fd-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-fd-muted-foreground">
          Built with care. AGPL-3.0 licensed. Not affiliated with Docker, Inc.
        </div>
      </footer>
    </div>
  );
}
