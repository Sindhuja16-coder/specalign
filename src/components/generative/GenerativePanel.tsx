import { GenerativePanel } from "@/components/generative/GenerativePanel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0B0C10] p-4 text-white">
      
      {/* Header Section */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-10">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-gradient-to-b from-zinc-800/30 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          SpecAlign&nbsp;
          <code className="font-mono font-bold">Hackathon Demo</code>
        </p>
      </div>

      {/* Title */}
      <div className="relative flex place-items-center mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-cyan-400">
          SpecAlign Logic Auditor
        </h1>
      </div>

      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold mb-8">Live Generative UI Demo</h2>
      </div>

      {/* THE FIX IS HERE: No props inside the brackets! */}
      <div className="w-full max-w-3xl mx-auto">
        <GenerativePanel />
      </div>

    </main>
  );
}
