const algorithmInfo = {
  bubble: {
    name: "Bubble Sort",
    complexity: "O(n²)",
    space: "O(1)",
    description: "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
    codeLink: "https://github.com/example/bubble-sort"
  },
  selection: {
    name: "Selection Sort",
    complexity: "O(n²)",
    space: "O(1)",
    description: "Selection sort divides the input list into two parts: a sorted sublist and an unsorted sublist.",
    codeLink: "https://github.com/example/selection-sort"
  },
  insertion: {
    name: "Insertion Sort",
    complexity: "O(n²)",
    space: "O(1)",
    description: "Insertion sort builds the final sorted array one item at a time by comparisons.",
    codeLink: "https://github.com/example/insertion-sort"
  },
  merge: {
    name: "Merge Sort",
    complexity: "O(n log n)",
    space: "O(n)",
    description: "Merge sort is a divide-and-conquer algorithm that divides the input array into two halves.",
    codeLink: "https://github.com/example/merge-sort"
  },
  quick: {
    name: "Quick Sort",
    complexity: "O(n log n) average, O(n²) worst",
    space: "O(log n)",
    description: "Quick sort selects a 'pivot' element and partitions the array around the pivot.",
    codeLink: "https://github.com/example/quick-sort"
  }
}

export default function InfoSidebar({ algorithm }) {
  const info = algorithmInfo[algorithm] || algorithmInfo.bubble

  return (
    <div className="w-80 bg-white border-l overflow-y-auto p-4">
      <h3 className="font-bold text-lg mb-4">About {info.name}</h3>
      
      <div className="space-y-4">
        <div className="bg-gray-100 p-3 rounded">
          <h4 className="font-medium mb-2">Algorithm Complexity</h4>
          <div className="flex justify-between">
            <span>Time:</span>
            <span className="font-mono">{info.complexity}</span>
          </div>
          <div className="flex justify-between">
            <span>Space:</span>
            <span className="font-mono">{info.space}</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">How it works</h4>
          <p className="text-sm">{info.description}</p>
        </div>
        
        <div className="border-t pt-3">
          <a 
            href={info.codeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            View Code on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
