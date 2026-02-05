import { ApiKeyCheck } from "@/components/ApiKeyCheck";
import { SpecAlignCard, type DiffLine } from "@/components/SpecAlignCard";
import { GenerativePanel } from "@/components/generative";
import Image from "next/image";

export default function Home() {
  const before: DiffLine[] = [
    { kind: "context", text: "export function canApplyFix(user: User) {" },
    { kind: "context", text: "  // Only admins can apply automated fixes." },
    { kind: "remove", text: "  return user.role === \"admin\";" },
    { kind: "context", text: "}" },
  ];

  const after: DiffLine[] = [
    { kind: "context", text: "export function canApplyFix(user: User) {" },
    { kind: "context", text: "  // Only admins can apply automated fixes." },
    {
      kind: "add",
      text: "  return user.role === \"admin\" || user.permissions.includes(\"specalign:apply\");",
    },
    { kind: "context", text: "}" },
  ];

  return (
    <div className="min-h-screen bg-background p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="mx-auto w-full max-w-5xl space-y-8">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="https://tambo.co" target="_blank" rel="noopener noreferrer">
              <Image
                src="/Octo-Icon.svg"
                alt="Tambo AI"
                width={44}
                height={44}
                priority
              />
            </a>
            <div>
              <h1 className="text-3xl font-semibold text-foreground">
                SpecAlign
              </h1>
              <p className="text-sm text-muted-foreground">
                Generative UI logic auditor (Tambo analytics template base)
              </p>
            </div>
          </div>

          <a
            href="https://tambo.co/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border bg-card px-4 py-2 text-sm text-card-foreground hover:bg-accent"
          >
            Tambo docs
          </a>
        </header>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold text-card-foreground">
            Dashboard
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Dark-mode first (black/cyan) starter UI.
          </p>

          <div className="mt-6 space-y-6">
            <SpecAlignCard
              filePath="src/auth/canApplyFix.ts"
              before={before}
              after={after}
            />

            <ApiKeyCheck>
              <a
                href="/chat"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground hover:opacity-90"
              >
                Open analytics canvas
              </a>
            </ApiKeyCheck>
          </div>
        </section>

        <GenerativePanel />
      </main>
    </div>
  );
}
