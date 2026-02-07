import { GenerativePanel } from "@/components/generative/GenerativePanel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0B0C10] p-4 text-white">
      
      {/* HEADER TITLE */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-cyan-400 mb-4">
          SpecAlign Logic Auditor
        </h1>
        <h2 className="text-xl font-semibold text-gray-400">
          Live Generative UI Demo
        </h2>
      </div>

      {/* THE COMPONENT (No props, just the tag) */}
      <div className="w-full max-w-3xl mx-auto">
        <GenerativePanel />
      </div>

    </main>
  );
}
