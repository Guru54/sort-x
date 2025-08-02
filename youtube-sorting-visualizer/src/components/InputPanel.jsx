import { useState, useEffect } from 'react'

export default function InputPanel({ array, algorithm, onArrayChange, onAlgorithmChange }) {
  const getArrayString = arr =>
    arr.map(item => (typeof item === 'object' ? item.value : item)).join(', ');

  const [inputValue, setInputValue] = useState(getArrayString(array));
  const [isValid, setIsValid] = useState(true);
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    setInputValue(getArrayString(array));
    setIsApplied(false);
  }, [array]);

  const validateInput = (value) => {
    const numbers = value.split(',')
      .map(item => item.trim())
      .filter(item => item !== '');
    return numbers.every(item => !isNaN(Number(item)));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(validateInput(value));
    setIsApplied(false);
  };

  const handleApply = () => {
    if (!isValid) return;
    
    const newArray = inputValue.split(',')
      .map(item => parseInt(item.trim()))
      .filter(item => !isNaN(item));
      
    if (newArray.length > 0) {
      onArrayChange(newArray);
      setIsApplied(true);
      setTimeout(() => setIsApplied(false), 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleApply();
    }
  };

  const presetArrays = {
    'Random 10': Array.from({length: 10}, () => Math.floor(Math.random() * 50) + 1),
    'Nearly Sorted': [1, 3, 2, 4, 6, 5, 7, 9, 8, 10],
    'Reversed': [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    'Few Unique': [5, 3, 5, 1, 3, 2, 5, 2, 1, 3]
  };

  const applyPreset = (preset) => {
    onArrayChange(presetArrays[preset]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Custom Array</label>
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="e.g. 5, 3, 8, 1, 2"
                className={`flex-1 border p-3 rounded-l-lg focus:outline-none focus:ring-2 ${
                  isValid ? 'focus:ring-blue-500 border-gray-300' : 'focus:ring-red-500 border-red-500'
                }`}
              />
              <button 
                onClick={handleApply}
                disabled={!isValid}
                className={`px-4 py-3 rounded-r-lg font-medium transition-colors ${
                  isValid 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isApplied ? '✓ Applied' : 'Apply'}
              </button>
            </div>
            {!isValid && (
              <p className="mt-1 text-sm text-red-600">Please enter valid numbers separated by commas</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Algorithm</label>
            <select
              value={algorithm}
              onChange={(e) => onAlgorithmChange(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="bubble">Bubble Sort</option>
              <option value="selection">Selection Sort</option>
              <option value="insertion">Insertion Sort</option>
              <option value="merge">Merge Sort</option>
              <option value="quick">Quick Sort</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Quick Presets</label>
          <div className="flex flex-wrap gap-2">
            {Object.keys(presetArrays).map(preset => (
              <button
                key={preset}
                onClick={() => applyPreset(preset)}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}