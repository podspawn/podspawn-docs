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
            <TerminalDemo />
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
              <div className="rounded-xl border border-fd-border bg-fd-card p-6 font-mono text-sm space-y-3">
                <div className="text-fd-muted-foreground"># base: ubuntu-dev</div>
                <div><span className="text-blue-400">packages</span>: [git, curl, ripgrep, fzf, neovim, jq]</div>
                <div className="flex items-center gap-2 my-4">
                  <Layers className="size-4 text-fd-primary" />
                  <span className="text-fd-primary text-xs font-medium">extends + merges</span>
                </div>
                <div className="text-fd-muted-foreground"># your podfile.yaml</div>
                <div><span className="text-blue-400">packages</span>: [go@1.25]</div>
                <div className="flex items-center gap-2 my-4">
                  <span className="text-green-400">=</span>
                  <span className="text-xs text-fd-muted-foreground">result</span>
                </div>
                <div><span className="text-green-400">packages</span>: [git, curl, ripgrep, fzf, neovim, jq, <span className="text-fd-primary">go@1.25</span>]</div>
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
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-4">
                    <ServiceBox name="your container" primary />
                  </div>
                  <Network className="size-5 text-fd-primary" />
                  <div className="text-xs text-fd-muted-foreground">bridge network</div>
                  <div className="flex items-center gap-4">
                    <ServiceBox name="postgres:5432" />
                    <ServiceBox name="redis:6379" />
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
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: "cap-drop ALL" },
                  { icon: Shield, label: "no-new-privileges" },
                  { icon: Shield, label: "PID limits" },
                  { icon: Shield, label: "per-user networks" },
                  { icon: Shield, label: "gVisor support" },
                  { icon: Shield, label: "audit logging" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-lg border border-fd-border bg-fd-card p-3"
                  >
                    <Icon className="size-4 text-green-500 shrink-0" />
                    <span className="text-sm text-fd-foreground">{label}</span>
                  </div>
                ))}
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
              <div className="grid grid-cols-3 gap-3">
                {["SFTP", "scp", "rsync", "Port fwd", "Agent fwd", "VS Code", "JetBrains", "Cursor", "Any client"].map(
                  (name) => (
                    <div
                      key={name}
                      className="flex items-center justify-center rounded-lg border border-fd-border bg-fd-card px-3 py-3 text-sm text-fd-foreground"
                    >
                      <Monitor className="size-3.5 mr-1.5 text-fd-primary" />
                      {name}
                    </div>
                  )
                )}
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
