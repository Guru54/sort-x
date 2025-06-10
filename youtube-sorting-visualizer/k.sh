#!/bin/bash

# Sorting Visualizer Setup Script
# Run with: bash setup-sorting-visualizer.sh

# Exit on error
set -e


# Create folder structure
echo "📂 Creating folder structure..."
mkdir -p src/components src/utils

# Create all component files
echo "💻 Creating component files..."

# Create App.jsx
cat > src/App.jsx << 'EOL'
import { useState } from 'react'
import Navbar from './components/Navbar'
import SortingPlayer from './components/SortingPlayer'
import Controls from './components/Controls'
import InputPanel from './components/InputPanel'
import StatsBar from './components/StatsBar'
import InfoSidebar from './components/InfoSidebar'
import { bubbleSort } from './utils/sorting'

function App() {
  const [array, setArray] = useState([5, 2, 9, 3, 1, 6].map(num => ({ value: num, state: '' })))
  const [algorithm, setAlgorithm] = useState('bubble')
  const [isSorting, setIsSorting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [speed, setSpeed] = useState(300)
  const [stats, setStats] = useState({
    swaps: 0,
    comparisons: 0,
    time: 0
  })

  const startSorting = async () => {
    setIsSorting(true)
    setIsPaused(false)
    setStats({ swaps: 0, comparisons: 0, time: 0 })
    
    await bubbleSort(
      array.map(item => item.value),
      (newArray) => !isPaused && setArray(newArray),
      (newStats) => !isPaused && setStats(newStats),
      speed
    )
    
    setIsSorting(false)
    setIsPaused(false)
  }

  const handlePause = () => setIsPaused(!isPaused)
  const reset = () => {
    setIsSorting(false)
    setIsPaused(false)
    setArray([5, 2, 9, 3, 1, 6].map(num => ({ value: num, state: '' })))
    setStats({ swaps: 0, comparisons: 0, time: 0 })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <SortingPlayer array={array} />
          <Controls 
            isSorting={isSorting}
            isPaused={isPaused}
            speed={speed}
            onPlay={startSorting}
            onPause={handlePause}
            onReset={reset}
            onSpeedChange={setSpeed}
          />
          <InputPanel 
            array={array}
            algorithm={algorithm}
            onArrayChange={(newArray) => setArray(newArray.map(num => ({ value: num, state: '' })))}
            onAlgorithmChange={setAlgorithm}
          />
          <StatsBar stats={stats} />
        </div>
        <InfoSidebar algorithm={algorithm} />
      </div>
    </div>
  )
}

export default App
EOL

# Create Navbar component
cat > src/components/Navbar.jsx << 'EOL'
export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sorting Visualizer</h1>
        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-300">About</button>
          <button className="hover:text-gray-300">Algorithms</button>
          <a 
            href="https://github.com/yourusername/sorting-visualizer" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 px-4 py-1 rounded-full hover:bg-red-700"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
EOL

# Create SortingPlayer component
cat > src/components/SortingPlayer.jsx << 'EOL'
export default function SortingPlayer({ array }) {
  const getColor = (state) => {
    switch(state) {
      case 'compare': return 'bg-yellow-500'
      case 'swap': return 'bg-red-500'
      case 'sorted': return 'bg-green-500'
      default: return 'bg-blue-500'
    }
  }

  return (
    <div className="bg-black p-4 flex items-end justify-center h-64">
      {array.map((item, index) => (
        <div 
          key={index}
          className={`${getColor(item.state)} mx-1 flex items-end justify-center text-white`}
          style={{ 
            width: '40px', 
            height: `${item.value * 20}px`,
            transition: 'all 0.3s ease'
          }}
        >
          {item.value}
        </div>
      ))}
    </div>
  )
}
EOL

# Create Controls component
cat > src/components/Controls.jsx << 'EOL'
export default function Controls({
  isSorting,
  isPaused,
  speed,
  onPlay,
  onPause,
  onReset,
  onSpeedChange
}) {
  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex space-x-4">
        {!isSorting ? (
          <button 
            onClick={onPlay}
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
          >
            ▶ Start Sorting
          </button>
        ) : (
          <button 
            onClick={onPause}
            className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700"
          >
            {isPaused ? '▶ Resume' : '⏸ Pause'}
          </button>
        )}
        
        <button 
          onClick={onReset}
          className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700"
        >
          ↻ Reset
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-white">Speed:</span>
        <input 
          type="range" 
          min="50" 
          max="1000" 
          value={speed} 
          onChange={(e) => onSpeedChange(parseInt(e.target.value))}
          className="w-32"
        />
        <span className="text-white">{speed}ms</span>
      </div>
    </div>
  )
}
EOL

# Create InputPanel component
cat > src/components/InputPanel.jsx << 'EOL'
import { useState } from 'react'

export default function InputPanel({ array, algorithm, onArrayChange, onAlgorithmChange }) {
  const [inputValue, setInputValue] = useState(array.map(item => item.value).join(', '))
  
  const handleApply = () => {
    const newArray = inputValue.split(',')
      .map(item => parseInt(item.trim()))
      .filter(item => !isNaN(item))
    if (newArray.length > 0) {
      onArrayChange(newArray)
    }
  }

  return (
    <div className="bg-white p-4 shadow">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium mb-1">Custom Array</label>
          <div className="flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter numbers separated by commas"
              className="flex-1 border p-2 rounded-l"
            />
            <button 
              onClick={handleApply}
              className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium mb-1">Algorithm</label>
          <select
            value={algorithm}
            onChange={(e) => onAlgorithmChange(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="merge">Merge Sort</option>
            <option value="quick">Quick Sort</option>
          </select>
        </div>
      </div>
    </div>
  )
}
EOL

# Create StatsBar component
cat > src/components/StatsBar.jsx << 'EOL'
export default function StatsBar({ stats }) {
  return (
    <div className="bg-white p-3 border-t flex flex-wrap gap-4 items-center">
      <div className="flex items-center space-x-2">
        <span className="font-medium">Swaps:</span>
        <span className="bg-gray-200 px-2 py-1 rounded">{stats.swaps}</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="font-medium">Comparisons:</span>
        <span className="bg-gray-200 px-2 py-1 rounded">{stats.comparisons}</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="font-medium">Time:</span>
        <span className="bg-gray-200 px-2 py-1 rounded">{stats.time}ms</span>
      </div>
    </div>
  )
}
EOL

# Create InfoSidebar component
cat > src/components/InfoSidebar.jsx << 'EOL'
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
EOL

# Create sorting utility
cat > src/utils/sorting.js << 'EOL'
export const bubbleSort = async (array, setArray, setStats, speed) => {
  let swaps = 0
  let comparisons = 0
  const startTime = performance.now()
  const n = array.length
  const arr = [...array]

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      comparisons++
      setStats({
        swaps,
        comparisons,
        time: Math.round(performance.now() - startTime)
      })

      // Highlight comparing elements
      setArray(arr.map((val, idx) => ({
        value: val,
        state: idx === j || idx === j + 1 ? 'compare' : ''
      })))

      await new Promise(resolve => setTimeout(resolve, speed))

      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swaps++

        setStats({
          swaps,
          comparisons,
          time: Math.round(performance.now() - startTime)
        })

        // Highlight swapping elements
        setArray(arr.map((val, idx) => ({
          value: val,
          state: idx === j || idx === j + 1 ? 'swap' : ''
        })))

        await new Promise(resolve => setTimeout(resolve, speed))
      }
    }

    // Mark sorted element
    setArray(arr.map((val, idx) => ({
      value: val,
      state: idx >= n - 1 - i ? 'sorted' : ''
    })))
  }

  return arr
}
EOL

# Update tailwind.config.js
cat > tailwind.config.js << 'EOL'
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Update index.css
cat > src/index.css << 'EOL'
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
EOL

# Clean up default files
echo "🧹 Cleaning up default files..."
rm src/App.css
rm -f src/assets/react.svg

# Update main.jsx
cat > src/main.jsx << 'EOL'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
EOL

echo "🎉 Project setup complete!"
echo "👉 Run the project with:"
echo "cd youtube-sorting-visualizer && npm run dev"