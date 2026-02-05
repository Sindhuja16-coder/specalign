import { GenerativePanel } from "@/components/generative/GenerativePanel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0B0C10] p-24 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-gradient-to-b from-zinc-800/30 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-800/30 lg:p-4">
          SpecAlign &nbsp;
          <code className="font-mono font-bold">Hackathon Demo</code>
        </p>
      </div>

      <div className="relative flex place-items-center my-10">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-cyan-400">
          SpecAlign Logic Auditor
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
        <h2 className="mb-3 text-2xl font-semibold text-center mb-8">
          Live Generative UI Demo
        </h2>
        
        {/* THIS IS THE FIXED COMPONENT WITH DATA */}
        <div className="w-full max-w-3xl mx-auto">
          <GenerativePanel 
            status="DRIFT_DETECTED"
            severity="CRITICAL"
            specRequirement="Payment processing must reject negative values to prevent refund fraud."
            codeImplementation="function processPayment(amount) { balance -= amount; }"
            suggestedFix="function processPayment(amount) { if (amount < 0) throw Error; balance -= amount; }"
            reasoning="The original code allows negative amounts, which would effectively add money to the user's wallet instead of subtracting it."
          />
        </div>
      </div>
    </main>
  );
}
