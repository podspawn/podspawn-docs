import type { ReactNode } from "react";

export function FeatureRow({
  title,
  description,
  visual,
  reverse,
}: {
  title: string;
  description: string;
  visual: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid gap-8 lg:gap-16 items-center lg:grid-cols-2 ${
        reverse ? "lg:[&>:first-child]:order-2" : ""
      }`}
    >
      <div>
        <h3 className="mb-4 text-2xl font-bold text-fd-foreground lg:text-3xl">
          {title}
        </h3>
        <p className="text-fd-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div>{visual}</div>
    </div>
  );
}
