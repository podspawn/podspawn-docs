# podspawn-docs

Documentation site for [podspawn](https://github.com/podspawn/podspawn) -- one-command dev environments, locally or over SSH.

Built with [Fumadocs](https://fumadocs.dev) + Next.js. Live at [podspawn.dev](https://podspawn.dev).

## Development

```bash
bun install
bun run dev
```

Or use podspawn itself:

```bash
podspawn dev
# Node 22 + bun, port 3000 forwarded
```

Open http://localhost:3000.

## Structure

```
content/docs/
  getting-started/   # Installation, quick start, client setup
  dev-environments/  # podspawn dev, init, extending, reference, examples
  concepts/          # Architecture, session lifecycle, auth, networking
  configuration/     # Server, client, security, user overrides
  podfile/           # Podfile spec, packages, services, hooks, devcontainer
  cli/               # Server, client, and admin command reference
  guides/            # Tutorial, SSH, security, AI agents, IDE, operations
```

36 documentation pages across 7 sections + redesigned landing page.

## Features

- **Redesigned landing page** with shader gradient hero, animated terminal demo, interactive feature deep-dives
- **Rich docs components**: Steps, Tabs, Accordions, File trees, TypeTable, Mermaid diagrams
- **AI integration**: Ask AI chat panel, llms.txt/llms-full.txt endpoints, .mdx content API, page-level feedback
- **Mermaid diagrams** with orange accent theme for architecture flows, state machines, network topology
- **Full-text search** via Orama
- **Page actions**: Copy as Markdown, View on GitHub

## Deploy

```bash
bun run build
```

Deployed to Vercel via git push. Auto-deploys on merge to main.

## License

AGPL-3.0, same as podspawn.
