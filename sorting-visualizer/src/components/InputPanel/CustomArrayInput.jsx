export default function CustomArrayInput({
  inputValue,
  isValid,
  isApplied,
  handleInputChange,
  handleKeyPress,
  handleApply,
}) {
  return (
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
  );
}