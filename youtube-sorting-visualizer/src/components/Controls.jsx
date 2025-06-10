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
