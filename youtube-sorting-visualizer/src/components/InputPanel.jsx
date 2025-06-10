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
