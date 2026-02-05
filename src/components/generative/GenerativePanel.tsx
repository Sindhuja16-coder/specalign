export function GenerativePanel() {
  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="text-xl font-semibold text-card-foreground">
        Generative UI
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Place SpecAlign generative components and workflows in
        {" "}
        <code className="rounded bg-muted px-1 py-0.5">src/components/generative</code>.
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        This panel is intentionally lightweight for now; it serves as the
        starting point for your audit / review UI.
      </p>
    </section>
  );
}
