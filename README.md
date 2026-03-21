# podspawn-docs

Documentation site for [podspawn](https://github.com/podspawn/podspawn) -- SSH dev container workspaces via native sshd.

Built with [Fumadocs](https://fumadocs.dev) + Next.js.

## Development

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Structure

```
content/docs/
  getting-started/   # Installation, quick start, client setup
  concepts/          # Architecture, session lifecycle, auth, networking
  configuration/     # Server, client, security, user overrides
  podfile/           # Podfile spec, packages, services, hooks, devcontainer
  cli/               # Server, client, and admin command reference
  guides/            # SSH features, security, AI agents, IDE integration
```

24 documentation pages + landing page.

## Deploy

```bash
bun run build
```

Static export in `.next/` -- deploy to Vercel, Cloudflare Pages, or any static host.

## License

AGPL-3.0, same as podspawn.
