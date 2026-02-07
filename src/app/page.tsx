import { GenerativePanel } from "@/components/generative/GenerativePanel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0B0C10] p-4 text-white">
      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold mb-8 text-cyan-400">Live Generative UI Demo</h2>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <GenerativePanel />
      </div>
    </main>
  );
}
