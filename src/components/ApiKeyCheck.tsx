"use client";

import { useState } from "react";

interface ApiKeyCheckProps {
  children: React.ReactNode;
}

const ApiKeyMissingAlert = () => (
  <div className="mb-4 rounded-lg border border-primary/30 bg-accent p-6 text-foreground">
    <p className="mb-3">To get started, you need to initialize Tambo:</p>
    <div className="mb-3 flex items-center gap-2 rounded bg-muted p-3">
      <code className="text-sm flex-grow">npx tambo init</code>
      <CopyButton text="npx tambo init" />
    </div>
    <p className="text-sm">
      Or visit{" "}
      <a
        href="https://tambo.co/cli-auth"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-yellow-900"
      >
        tambo.co/cli-auth
      </a>{" "}
      to get your API key and set it in{" "}
      <code className="bg-yellow-100 px-2 py-1 rounded">.env.local</code>
    </p>
  </div>
);

const CopyButton = ({ text }: { text: string }) => {
  const [showCopied, setShowCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="group relative rounded bg-muted p-2 text-muted-foreground transition-colors hover:text-foreground"
      title="Copy to clipboard"
    >
      {showCopied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
        {showCopied ? "Copied!" : "Copy"}
      </span>
    </button>
  );
};

export function ApiKeyCheck({ children }: ApiKeyCheckProps) {
  // Compute API key status directly from the environment variable
  // This is safe because NEXT_PUBLIC_* variables are inlined at build time
  const isApiKeyMissing = !process.env.NEXT_PUBLIC_TAMBO_API_KEY;

  return (
    <div className="flex items-start gap-4">
      <div className="flex-grow">
        <div className="flex items-center gap-1">
          <div className="min-w-6">
            {isApiKeyMissing ? "×" : "✓"}
          </div>
          <p>
            {isApiKeyMissing
              ? "Tambo not initialized"
              : "Tambo initialized"}
          </p>
        </div>
        {isApiKeyMissing && <ApiKeyMissingAlert />}
        {!isApiKeyMissing && children}
      </div>
    </div>
  );
}
