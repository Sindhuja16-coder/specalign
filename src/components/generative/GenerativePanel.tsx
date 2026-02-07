"use client"; // This line makes the button interactive!

import { type TamboComponent } from "@tambo-ai/react";
import { z } from "zod";
import { useState } from "react";

export const specAlignSchema = z.object({
  status: z.enum(["DRIFT_DETECTED", "ALIGNED"]),
  severity: z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]),
  specRequirement: z.string().describe("The original rule from Jira"),
  codeImplementation: z.string().describe("The code that breaks the rule"),
  suggestedFix: z.string().describe("The corrected code"),
  reasoning: z.string().describe("Why this is a violation")
});

export function GenerativePanel({ severity, specRequirement, codeImplementation, suggestedFix }: z.infer<typeof specAlignSchema>) {
  // STATE: This remembers if the button was clicked
  const [applied, setApplied] = useState(false);

  const borderColor = severity === "CRITICAL" ? "border-red-500" : "border-yellow-400";
  
  return (
    <div className={`p-6 rounded-xl bg-[#0B0C10] border ${borderColor} text-white shadow-2xl`}>
      <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
        <h2 className="text-xl font-light tracking-widest text-cyan-400">SPECALIGN AUDIT</h2>
        <span className="px-3 py-1 text-xs font-mono bg-gray-900 border border-gray-700 rounded text-gray-400">{severity} RISK</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded bg-green-900/10 border border-green-500/20">
          <h3 className="text-xs font-bold text-green-400 mb-2">THE SPEC</h3>
          <p className="text-sm text-gray-300">&quot;{specRequirement}&quot;</p>
        </div>
        <div className="p-4 rounded bg-red-900/10 border border-red-500/20">
          <h3 className="text-xs font-bold text-red-400 mb-2">THE CODE</h3>
          <code className="text-xs font-mono text-red-200 block bg-black/30 p-2 rounded">{codeImplementation}</code>
        </div>
      </div>
      <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
         <p className="text-xs text-gray-500 mb-2">GENERATIVE FIX</p>
         <code className="block text-xs text-cyan-200 mb-4 font-mono">{suggestedFix}</code>
         
         {/* INTERACTIVE BUTTON */}
         <button 
           onClick={() => setApplied(true)}
           disabled={applied}
           className={`w-full py-3 font-bold rounded transition-all duration-300 ${
             applied 
               ? "bg-green-600 text-white cursor-default" 
               : "bg-cyan-900 hover:bg-cyan-800 text-white"
           }`}
         >
           {applied ? "✅ FIX APPLIED TO REPO" : "[ APPLY FIX ]"}
         </button>
      </div>
    </div>
  );
}

export const specAlignConfig: TamboComponent = {
  name: "GenerativePanel",
  description: "Visualizes logic drift.",
  component: GenerativePanel,
  propsSchema: specAlignSchema,
};
