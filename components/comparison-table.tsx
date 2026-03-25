import { Check, X, Minus } from "lucide-react";

type CellValue = "yes" | "no" | "partial" | string;

const rows: { feature: string; podspawn: CellValue; containerSSH: CellValue; coder: CellValue; codespaces: CellValue }[] = [
  { feature: "One-command setup", podspawn: "yes", containerSSH: "no", coder: "no", codespaces: "yes" },
  { feature: "Native sshd", podspawn: "yes", containerSSH: "no", coder: "no", codespaces: "no" },
  { feature: "Podfile composition", podspawn: "extends + merge", containerSSH: "no", coder: "no", codespaces: "features" },
  { feature: "Companion services", podspawn: "yes", containerSSH: "no", coder: "yes", codespaces: "yes" },
  { feature: "All SSH features", podspawn: "yes", containerSSH: "partial", coder: "yes", codespaces: "yes" },
  { feature: "Ephemeral + persistent", podspawn: "both", containerSSH: "ephemeral", coder: "persistent", codespaces: "persistent" },
  { feature: "Zero client install", podspawn: "yes", containerSSH: "yes", coder: "no", codespaces: "no" },
  { feature: "Self-hosted", podspawn: "yes", containerSSH: "yes", coder: "yes", codespaces: "no" },
  { feature: "Local mode", podspawn: "yes", containerSSH: "no", coder: "no", codespaces: "no" },
  { feature: "Open source", podspawn: "AGPL", containerSSH: "Apache", coder: "AGPL", codespaces: "no" },
];

function CellContent({ value, isPodspawn }: { value: CellValue; isPodspawn?: boolean }) {
  if (value === "yes") return <Check className={`size-4 mx-auto ${isPodspawn ? "text-fd-primary" : "text-green-500"}`} />;
  if (value === "no") return <X className="size-4 mx-auto text-fd-muted-foreground/40" />;
  if (value === "partial") return <Minus className="size-4 mx-auto text-yellow-500" />;
  return <span className={`text-xs ${isPodspawn ? "text-fd-primary font-medium" : "text-fd-muted-foreground"}`}>{value}</span>;
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-fd-border shadow-lg">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-fd-border bg-fd-card">
            <th className="py-4 pr-4 pl-5 text-sm font-medium text-fd-muted-foreground">Feature</th>
            <th className="py-4 px-5 text-sm font-semibold text-center text-fd-primary bg-gradient-to-b from-fd-primary/10 to-fd-primary/5">podspawn</th>
            <th className="py-3 px-4 text-sm font-medium text-center text-fd-muted-foreground">ContainerSSH</th>
            <th className="py-3 px-4 text-sm font-medium text-center text-fd-muted-foreground">Coder</th>
            <th className="py-3 px-4 text-sm font-medium text-center text-fd-muted-foreground">Codespaces</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-b border-fd-border last:border-0 transition-colors hover:bg-fd-accent/5">
              <td className="py-3.5 pr-4 pl-5 text-sm font-medium text-fd-foreground">{row.feature}</td>
              <td className="py-3.5 px-5 text-center bg-fd-primary/5"><CellContent value={row.podspawn} isPodspawn /></td>
              <td className="py-3.5 px-4 text-center"><CellContent value={row.containerSSH} /></td>
              <td className="py-3.5 px-4 text-center"><CellContent value={row.coder} /></td>
              <td className="py-3.5 px-4 text-center"><CellContent value={row.codespaces} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
