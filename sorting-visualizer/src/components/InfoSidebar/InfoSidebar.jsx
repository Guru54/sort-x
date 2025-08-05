import { useState } from "react";
import getAlgorithmInfo from "../../utils/algoinfo";
import AlgorithmCodeBlock from "./AlgorithmCodeBlock";

export default function InfoSidebar({ algorithm }) {
  const info = getAlgorithmInfo(algorithm);
  const [showFullCode, setShowFullCode] = useState(false);
 

  return (
    <aside className="w-80 min-h-full  bg-slate-50 backdrop-blur-md shadow-xl border-l border-slate-200 rounded-l-2xl p-0 flex flex-col relative">
      <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-2" style={{ backgroundSize: "200% 200%" }} />
       <div className="p-6 flex-1 flex flex-col space-y-6">
        <h3 className="font-bold text-2xl mb-2 text-slate-800 drop-shadow">
          About {info.name}
        </h3>
       <div className="bg-gradient-to-br from-slate-100 to-slate-200/80 p-4 rounded-xl shadow-inner border border-slate-100 
            transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]">
       <h4 className="font-semibold mb-3 text-slate-700">Algorithm Complexity</h4>
  
       <div className="flex justify-between mb-1">
        <span className="text-slate-600">Time:</span>
       <span className="font-mono text-blue-700">{info.complexity}</span>
       </div>
  
        <div className="flex justify-between">
       <span className="text-slate-600">Space:</span>
       <span className="font-mono text-blue-700">{info.space}</span>
         </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-slate-700">How it works</h4>
          <p className="text-sm text-slate-700 leading-relaxed">{info.description}</p>
        </div>
        
        <AlgorithmCodeBlock code={info.code} />

        <div className="border-t border-slate-200 pt-4 mt-auto">
          <a 
            href={info.codeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-pink-600 font-medium transition-colors group"
          >
            <svg 
              className="w-5 h-5"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>View Code on GitHub</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

