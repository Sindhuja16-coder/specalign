import { AlertTriangle, GitCompare, Wand2 } from "lucide-react";

export type DiffLineKind = "context" | "remove" | "add";

export type DiffLine = {
  kind: DiffLineKind;
  text: string;
};

export type SpecAlignCardProps = {
  filePath: string;
  before: DiffLine[];
  after: DiffLine[];
};

function DiffPanel({ title, lines }: { title: string; lines: DiffLine[] }) {
  return (
    <section className="overflow-hidden rounded-md border border-border bg-background/40">
      <header className="border-b border-border px-3 py-2">
        <div className="text-xs font-semibold tracking-wide text-muted-foreground">
          {title}
        </div>
      </header>

      <pre className="overflow-x-auto p-3 text-[12px] leading-5 [font-family:var(--font-geist-mono)]">
        {lines.map((line, idx) => {
          const toneClasses =
            line.kind === "add"
              ? "bg-emerald-500/10 text-emerald-200"
              : line.kind === "remove"
                ? "bg-rose-500/10 text-rose-200"
                : "text-muted-foreground";

          const prefix =
            line.kind === "add" ? "+" : line.kind === "remove" ? "-" : " ";

          return (
            <div
              key={`${idx}-${line.kind}`}
              className={`whitespace-pre rounded px-1 ${toneClasses}`}
            >
              {prefix} {line.text}
            </div>
          );
        })}
      </pre>
    </section>
  );
}

export function SpecAlignCard({ filePath, before, after }: SpecAlignCardProps) {
  return (
    <div className="w-full rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="rounded-md border border-primary/20 bg-primary/10 p-2 text-primary">
            <GitCompare className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <div className="text-xs font-medium tracking-wide text-muted-foreground">
              Code Diff
            </div>
            <div className="truncate text-sm font-semibold text-card-foreground">
              {filePath}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <span className="inline-flex items-center gap-1 rounded-full border border-destructive/40 bg-destructive/20 px-2.5 py-1 text-xs font-semibold text-destructive-foreground">
            <AlertTriangle className="h-4 w-4" />
            Critical Risk
          </span>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <Wand2 className="h-4 w-4" />
            Apply Fix
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <DiffPanel title="Before" lines={before} />
        <DiffPanel title="After" lines={after} />
      </div>
    </div>
  );
}
