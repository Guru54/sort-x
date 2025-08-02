import React from 'react';
import algorithmInfo from "../utils/algoinfo";

function Algorithm() {
  const algorithms = Object.values(algorithmInfo);

  return (
    <section 
      id="algorithms" 
      aria-labelledby="algorithms-heading"
      className="min-h-screen bg-red text-slate-800 px-4 py-12 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          id="algorithms-heading"
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          Sorting Algorithms
        </h2>

        {algorithms.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-xl text-slate-500">No algorithms available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {algorithms.map((algo) => (
              <article 
                key={algo.name}
                className="group p-6 bg-slate-50 rounded-xl shadow-sm border border-slate-200 
                          hover:shadow-lg hover:border-blue-200 transition-all duration-300
                          flex flex-col h-full"
              >
                <header className="mb-4">
                  <h3 className="text-xl font-semibold text-blue-700 group-hover:text-blue-800 transition-colors">
                    {algo.name}
                  </h3>
                </header>
                
                <p className="mb-4 text-slate-700 flex-grow">
                  {algo.description}
                </p>
                
                <ul className="space-y-2 text-sm text-slate-600 mt-auto">
                  <li className="flex">
                    <span className="font-medium w-32">Time Complexity:</span>
                    <span className="font-mono">{algo.complexity}</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Space Complexity:</span>
                    <span className="font-mono">{algo.space}</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Stable:</span>
                    <span>{algo.stable ? 'Yes' : 'No'}</span>
                  </li>
                  
                  {algo.codeLink && (
                    <li className="pt-2 mt-3 border-t border-slate-200">
                      <a
                        href={algo.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        aria-label={`View ${algo.name} implementation code`}
                      >
                        View Implementation
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  )}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Algorithm;