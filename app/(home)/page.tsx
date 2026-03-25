import Link from "next/link";
import {
  ArrowRight,
  GitBranch,
  Shield,
  Network,
  Layers,
  Monitor,
} from "lucide-react";
import { TerminalDemo } from "@/components/terminal-demo";
import { HeroGradient } from "@/components/hero-gradient";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/reveal";
import { PodfileShowcase } from "@/components/podfile-showcase";
import { ModeCards } from "@/components/mode-cards";
import { FeatureRow } from "@/components/feature-row";
import { ComparisonTable } from "@/components/comparison-table";
import { InstallBlock } from "@/components/install-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "podspawn -- One command. Full dev environment.",
  },
  description:
    "Clone a repo, run podspawn dev, get packages, services, and a shell. Locally or over SSH. Open source.",
  alternates: {
    canonical: "https://podspawn.dev",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "podspawn",
                url: "https://podspawn.dev",
                description:
                  "One-command dev environments. Clone a repo, run podspawn dev, get everything.",
              },
              {
                "@type": "SoftwareApplication",
                name: "podspawn",
                applicationCategory: "DeveloperApplication",
                operatingSystem: "Linux, macOS, Windows",
                url: "https://podspawn.dev",
                license:
                  "https://www.gnu.org/licenses/agpl-3.0.en.html",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
              },
            ],
          }),
        }}
      />

      {/* ─── Hero ─── */}
      <section className="relative">
        <HeroGradient />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/80 backdrop-blur px-4 py-1.5 text-sm text-fd-muted-foreground">
              <span className="inline-block size-2 rounded-full bg-green-500 animate-pulse" />
              Open source, AGPL-3.0 licensed
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-fd-foreground sm:text-6xl lg:text-7xl">
              One command.
              <br />
              <span className="text-fd-primary">Full dev environment.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mb-8 max-w-2xl text-lg text-fd-muted-foreground leading-relaxed">
              Clone a repo with a <code className="text-fd-foreground font-mono text-base">podfile.yaml</code>,
              run <code className="text-fd-foreground font-mono text-base">podspawn dev</code>,
              get packages, services, and a shell. Locally or over SSH.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/docs/dev-environments/quickstart"
                className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
              >
                Get Started
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="https://github.com/podspawn/podspawn"
                className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card/80 backdrop-blur px-6 py-3 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
              >
                <GitBranch className="size-4" />
                GitHub
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-fd-primary/8 blur-2xl" aria-hidden />
              <TerminalDemo />
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-8 flex items-center gap-3 rounded-lg border border-fd-border bg-fd-card/60 backdrop-blur px-4 py-2.5 max-w-fit font-mono text-sm">
              <span className="text-green-400">$</span>
              <span className="text-fd-foreground">curl -sSfL https://podspawn.dev/up | bash</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Podfile Showcase ─── */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-fd-foreground lg:text-4xl">
              Define once, reproduce anywhere.
            </h2>
            <p className="mx-auto max-w-2xl text-fd-muted-foreground">
              Commit a <code className="font-mono text-fd-foreground">podfile.yaml</code> to your repo.
              Every contributor, CI runner, and AI agent gets the exact same environment.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <PodfileShowcase />
        </Reveal>
      </section>

      {/* ─── Three Modes ─── */}
      <section className="bg-gradient-to-b from-fd-card/30 via-fd-card/15 to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <Reveal>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground lg:text-4xl">
                Local, remote, or both.
              </h2>
              <p className="mx-auto max-w-2xl text-fd-muted-foreground">
                Three ways to use the same tool. Same Podfile, same containers, same workflow.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ModeCards />
          </Reveal>
        </div>
      </section>

      {/* ─── Feature Deep-Dives ─── */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:py-32 space-y-24 lg:space-y-32">
        <Reveal>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-fd-foreground lg:text-4xl">
              Built for real development.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <FeatureRow
            title="Composable Podfiles"
            description="extends: ubuntu-dev inherits a base with git, ripgrep, fzf, neovim, jq. Your Podfile adds what's specific to your project. Deep merge with bang-replace syntax for full control. Multi-level chains supported."
            visual={
              <div className="rounded-xl border border-fd-border bg-fd-card overflow-hidden">
                <div className="border-b border-fd-border px-4 py-2.5 text-xs font-mono text-fd-muted-foreground flex items-center gap-2">
                  <Layers className="size-3.5 text-fd-primary" />
                  extends + deep merge
                </div>
                <div className="p-5 font-mono text-sm space-y-4">
                  <div className="rounded-lg bg-fd-background/50 p-4 space-y-1">
                    <div className="text-[10px] uppercase tracking-wider text-fd-muted-foreground mb-2">base: ubuntu-dev</div>
                    <div><span className="text-blue-400">packages</span>: [<span className="text-fd-muted-foreground">git, curl, ripgrep, fzf, neovim, jq, make</span>]</div>
                    <div><span className="text-blue-400">shell</span>: <span className="text-fd-muted-foreground">/bin/bash</span></div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 text-fd-primary text-xs">
                      <span className="h-px w-8 bg-fd-primary/30" />
                      extends
                      <span className="h-px w-8 bg-fd-primary/30" />
                    </div>
                  </div>
                  <div className="rounded-lg bg-fd-background/50 p-4 space-y-1">
                    <div className="text-[10px] uppercase tracking-wider text-fd-muted-foreground mb-2">your podfile.yaml</div>
                    <div><span className="text-blue-400">packages</span>: [<span className="text-fd-primary font-medium">go@1.25</span>]</div>
                    <div><span className="text-blue-400">services</span>: [<span className="text-fd-primary font-medium">postgres:16</span>]</div>
                    <div><span className="text-blue-400">on_create</span>: <span className="text-fd-primary font-medium">go mod download</span></div>
                  </div>
                  <div className="flex justify-center">
                    <span className="text-green-400 text-lg">=</span>
                  </div>
                  <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4 space-y-1">
                    <div className="text-[10px] uppercase tracking-wider text-green-400 mb-2">merged result</div>
                    <div><span className="text-green-400">packages</span>: [git, curl, ripgrep, fzf, neovim, jq, make, <span className="text-fd-primary font-bold">go@1.25</span>]</div>
                    <div><span className="text-green-400">services</span>: [<span className="text-fd-primary font-bold">postgres:16</span>]</div>
                    <div><span className="text-green-400">on_create</span>: <span className="text-fd-primary font-bold">go mod download</span></div>
                  </div>
                </div>
              </div>
            }
          />
        </Reveal>

        <Reveal>
          <FeatureRow
            reverse
            title="Companion services"
            description="Postgres, Redis, or any Docker image as sidecar containers on a shared bridge network. Access them by name -- postgres:5432 resolves inside your container. Services start with podspawn dev and stop with podspawn down."
            visual={
              <div className="rounded-xl border border-fd-border bg-fd-card p-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-lg border-2 border-fd-primary/50 bg-fd-primary/10 px-6 py-4 text-center">
                    <div className="text-xs text-fd-muted-foreground mb-1">your dev container</div>
                    <div className="font-mono text-sm text-fd-primary font-medium">myapp-a3f8</div>
                    <div className="text-xs text-fd-muted-foreground mt-1">ubuntu:24.04 + go@1.25</div>
                  </div>
                  <div className="w-px h-6 bg-fd-primary/30" />
                  <div className="flex items-center gap-3 rounded-full bg-fd-primary/10 px-4 py-1.5">
                    <Network className="size-4 text-fd-primary" />
                    <span className="text-xs text-fd-primary font-medium">podspawn-alice-net</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="w-px h-6 bg-fd-border" />
                    <div className="w-px h-6 bg-fd-border" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg border border-fd-border bg-fd-card px-5 py-3 text-center">
                      <div className="text-xs text-fd-muted-foreground mb-1">postgres</div>
                      <div className="font-mono text-xs text-fd-foreground">:5432</div>
                    </div>
                    <div className="rounded-lg border border-fd-border bg-fd-card px-5 py-3 text-center">
                      <div className="text-xs text-fd-muted-foreground mb-1">redis</div>
                      <div className="font-mono text-xs text-fd-foreground">:6379</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-fd-muted-foreground text-center">
                    Access by name: <code className="text-fd-foreground">postgres:5432</code> resolves via Docker DNS
                  </div>
                </div>
              </div>
            }
          />
        </Reveal>

        <Reveal>
          <FeatureRow
            title="Hardened by default"
            description="Security isn't an afterthought. Every container drops all capabilities, enables no-new-privileges, and enforces PID limits. Per-user bridge networks isolate traffic. Optional gVisor runtime for untrusted workloads."
            visual={
              <div className="rounded-xl border border-fd-border bg-fd-card overflow-hidden">
                <div className="border-b border-fd-border px-4 py-2.5 text-xs font-mono text-fd-muted-foreground flex items-center gap-2">
                  <Shield className="size-3.5 text-green-500" />
                  security defaults
                </div>
                <div className="grid grid-cols-2 gap-px bg-fd-border">
                  {[
                    { label: "cap-drop ALL", desc: "No kernel capabilities" },
                    { label: "no-new-privileges", desc: "No privilege escalation" },
                    { label: "PID limits", desc: "Fork bomb protection" },
                    { label: "per-user networks", desc: "Traffic isolation" },
                    { label: "gVisor runtime", desc: "Sandboxed syscalls" },
                    { label: "audit logging", desc: "JSON-lines events" },
                  ].map(({ label, desc }) => (
                    <div key={label} className="bg-fd-card p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="size-3.5 text-green-500 shrink-0" />
                        <span className="text-sm font-medium text-fd-foreground">{label}</span>
                      </div>
                      <span className="text-xs text-fd-muted-foreground">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
        </Reveal>

        <Reveal>
          <FeatureRow
            reverse
            title="Every SSH feature works"
            description="SFTP, scp, rsync, port forwarding, agent forwarding. VS Code Remote, JetBrains Gateway, Cursor. Because podspawn hooks into native sshd, not a custom SSH server. OpenSSH handles the protocol."
            visual={
              <div className="rounded-xl border border-fd-border bg-fd-card overflow-hidden">
                <div className="border-b border-fd-border px-4 py-2.5 text-xs font-mono text-fd-muted-foreground flex items-center gap-2">
                  <Monitor className="size-3.5 text-fd-primary" />
                  native sshd = everything works
                </div>
                <div className="grid grid-cols-3 gap-px bg-fd-border">
                  {[
                    { name: "SFTP", desc: "File browser" },
                    { name: "scp", desc: "File copy" },
                    { name: "rsync", desc: "Incremental sync" },
                    { name: "Port fwd", desc: "-L / -R tunnels" },
                    { name: "Agent fwd", desc: "SSH keys pass-through" },
                    { name: "VS Code", desc: "Remote extension" },
                    { name: "JetBrains", desc: "Gateway" },
                    { name: "Cursor", desc: "AI editor" },
                    { name: "Any client", desc: "OpenSSH compatible" },
                  ].map(({ name, desc }) => (
                    <div key={name} className="bg-fd-card p-3.5 text-center">
                      <div className="text-sm font-medium text-fd-foreground">{name}</div>
                      <div className="text-[10px] text-fd-muted-foreground mt-0.5">{desc}</div>
                    </div>
                  )
                )}
                </div>
              </div>
            }
          />
        </Reveal>
      </section>

      {/* ─── Comparison ─── */}
      <section className="bg-gradient-to-b from-fd-card/20 via-fd-card/10 to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <Reveal>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-fd-foreground lg:text-4xl">
                How it compares
              </h2>
              <p className="mx-auto max-w-2xl text-fd-muted-foreground">
                Podspawn competes with Codespaces, Coder, and ContainerSSH. Not Docker Desktop or WSL.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ComparisonTable />
          </Reveal>
        </div>
      </section>

      {/* ─── Install CTA ─── */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="mb-4 text-3xl font-bold text-fd-foreground lg:text-4xl">
              Try it in 30 seconds
            </h2>
            <p className="mx-auto max-w-xl text-fd-muted-foreground">
              Install the binary, enter your project, run <code className="font-mono text-fd-foreground">podspawn dev</code>.
              No Podfile yet? <code className="font-mono text-fd-foreground">podspawn init</code> scaffolds one.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <InstallBlock />
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-8 py-3 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
            >
              Read the docs
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="https://github.com/podspawn/podspawn"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-8 py-3 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
            >
              <GitBranch className="size-4" />
              GitHub
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ─── Footer ─── */}
      <footer className="mt-8">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-fd-muted-foreground">
          Built with care. AGPL-3.0 licensed. Not affiliated with Docker, Inc.
        </div>
      </footer>
    </div>
  );
}

function ServiceBox({ name, primary }: { name: string; primary?: boolean }) {
  return (
    <div
      className={`rounded-lg border px-4 py-2.5 text-sm font-mono ${
        primary
          ? "border-fd-primary/50 bg-fd-primary/10 text-fd-primary"
          : "border-fd-border bg-fd-card text-fd-muted-foreground"
      }`}
    >
      {name}
    </div>
  );
}
