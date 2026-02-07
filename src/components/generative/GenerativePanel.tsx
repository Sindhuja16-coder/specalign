/* eslint-disable */
"use client";

import { useState } from "react";

export function GenerativePanel() {
  const [isFixed, setIsFixed] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className={`p-6 rounded-xl border shadow-2xl transition-all duration-500 ${
        isFixed ? "bg-green-950/30 border-green-500/50" : "bg-[#0B0C10] border-red-500"
      }`}>
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
          <h2 className={`text-xl font-bold tracking-wider ${isFixed ? "text-green-400" : "text-cyan-400"}`}>
            {isFixed ? "LOGIC ALIGNED" : "SPECALIGN AUDIT"}
          </h2>
          <span className={`px-3 py-1 rounded text-xs font-bold ${
            isFixed ? "bg-green-900/50 text-green-300 border border-green-500/30" : "bg-red-900/50 text-red-300 border border-red-500/30"
          }`}>
            {isFixed ? "SECURE" : "CRITICAL RISK"}
          </span>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          
          {/* LEFT SIDE: RED BOX */}
          <div className="p-4 rounded bg-red-900/10 border border-red-500/20">
            <h3 className="text-xs font-bold text-red-400 mb-2">THE CODE (VIOLATION)</h3>
            <div className="text-xs font-mono text-red-200 block bg-black/30 p-2 rounded border border-red-500/10">
              <div>const db = new LocalSQLiteConnection();</div>
              <br/>
              <div className="opacity-75">{'// VIOLATION: Local DB detected'}</div>
            </div>
          </div>

          {/* RIGHT SIDE: GREEN BOX */}
          <div className="p-4 rounded bg-green-900/10 border border-green-500/20">
            <h3 className="text-xs font-bold text-green-400 mb-2">THE SPEC</h3>
            <p className="text-sm text-green-200 italic">
              System must connect to a Production Cloud Database before deployment.
            </p>
          </div>

        </div>

        {/* BOTTOM: BLUE BOX */}
        <div className={`p-4 rounded-lg border transition-all duration-300 ${
          isFixed ? "bg-green-900/20 border-green-500/50" : "bg-gray-900/50 border-gray-800"
        }`}>
          <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">GENERATIVE FIX</p>
          
          <div className={`block text-xs mb-4 font-mono transition-colors duration-300 ${
            isFixed ? "text-green-300" : "text-cyan-200"
          }`}>
             <div>const db = new PostgresConnection(process.env.DATABASE_URL);</div>
             <div className="opacity-75">{'// FIXED: Cloud DB Connected'}</div>
          </div>

          <button
            onClick={() => setIsFixed(true)}
            disabled={isFixed}
            className={`w-full py-3 font-bold rounded transition-all duration-300 flex items-center justify-center gap-2 ${
              isFixed
                ? "bg-green-600 text-white cursor-default hover:bg-green-600"
                : "bg-cyan-900 hover:bg-cyan-800 text-white shadow-lg shadow-cyan-900/20"
            }`}
          >
            {isFixed ? (
              <span>FIX APPLIED SUCCESSFULLY</span>
            ) : (
              "[ APPLY FIX ]"
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
