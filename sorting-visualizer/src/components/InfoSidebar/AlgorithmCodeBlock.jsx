import { useState } from "react";

export default function AlgorithmCodeBlock({ code }) {
  const [showFullCode, setShowFullCode] = useState(false);

  return (
    <>
      {/* Code Block Section */}
      <div className="relative">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-slate-700">Algorithm Code</span>
          <button
            className="text-xs px-2 py-1 rounded bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium transition"
            onClick={() => setShowFullCode(true)}
          >
            Full Screen
          </button>
        </div>
        <pre className="bg-slate-900 text-green-200 text-xs rounded-lg p-3 max-h-40 overflow-auto font-mono shadow-inner">
          <code>
            {code}
          </code>
        </pre>
      </div>
      {/* Full Screen Modal */}
      {showFullCode && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-slate-900 rounded-xl p-6 max-w-2xl w-full mx-4 shadow-2xl relative">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded px-3 py-1 text-xs font-bold"
              onClick={() => setShowFullCode(false)}
            >
              Close
            </button>
            <h4 className="text-lg font-bold text-white mb-4">Algorithm Code</h4>
            <pre className="text-green-200 text-sm rounded-lg p-3 overflow-auto font-mono bg-slate-800 max-h-[70vh]">
              <code>
                {code}
              </code>
            </pre>
          </div>
        </div>
      )}
    </>
  );
}