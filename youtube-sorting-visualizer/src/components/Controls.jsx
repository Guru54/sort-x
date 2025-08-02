import { useState } from 'react';

const Controls = ({
  isSorting,
  isPaused,
  speed,
  onPlay,
  onPause,
  onReset,
  onSpeedChange,
  steps,
  sliderIndex,
  setSliderIndex,
}) => {
  const [showSpeedDropdown, setShowSpeedDropdown] = useState(false);
  const speedOptions = [0.5, 1, 1.5, 2, 3, 4];

  const handlePauseResume = () => {
    isPaused ? onPlay() : onPause();
  };

  const handleSpeedSelect = (multiplier) => {
    onSpeedChange(Math.round(1000 / multiplier));
    setShowSpeedDropdown(false);
  };

  const handleSliderChange = (e) => {
    setSliderIndex(Number(e.target.value));
  };

  return (
    <div className="bg-gray-800 p-3 pl-15 pr-15  shadow-lg">
      {/* Main Controls */}
      <div className="flex items-center justify-between space-x-4">
        {/* Play/Pause Button */}
        <button
          onClick={handlePauseResume}
          className="p-2 text-white hover:bg-gray-700 rounded-full transition-colors"
          aria-label={isPaused ? 'Play' : 'Pause'}
        >
          {isPaused ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>

        {/* Progress Slider with Blue Fill and Circle */}
        <div className="w-8 flex-1  relative">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Step {sliderIndex}</span>
            <span>{steps.length - 1}</span>
          </div>
          <div className="relative w-full h-2">
            {/* Background track */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-700 rounded-full"></div>
            {/* Blue progress fill */}
            <div 
              className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
              style={{
                width: `${(sliderIndex / (steps.length - 1 || 1)) * 100}%`
              }}
            ></div>
            {/* Circle thumb at the end of blue line */}
            <div
              className="absolute top-1/2 h-3 w-3 bg-blue-500 rounded-full transform -translate-y-1/2"
              style={{
                left: `${(sliderIndex / (steps.length - 1 || 1)) * 100}%`,
                marginLeft: '-0.25rem' // Adjust to center the circle
              }}
            ></div>
            {/* Interactive slider (invisible but covers the whole area) */}
            <input
              type="range"
              min="0"
              max={steps.length > 1 ? steps.length - 1 : 1}
              value={sliderIndex}
              onChange={handleSliderChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              disabled={isSorting && !isPaused}
            />
          </div>
        </div>

        {/* Speed Control */}
        <div className="relative">
          <button
            onClick={() => setShowSpeedDropdown(!showSpeedDropdown)}
            className="px-2 py-1 text-sm text-white hover:bg-gray-700 rounded-md transition-colors"
          >
            {Math.round(1000 / speed)}x
          </button>
          {showSpeedDropdown && (
            <div className="absolute bottom-full mb-2 right-0 bg-gray-800 rounded-md shadow-lg py-1 z-10">
              {speedOptions.map((multiplier) => (
                <button
                  key={multiplier}
                  onClick={() => handleSpeedSelect(multiplier)}
                  className={`px-3 py-1 text-sm w-full text-left ${
                    Math.round(1000 / speed) === multiplier
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {multiplier}x
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Reset Button */}
        <button
          onClick={onReset}
          className="p-2 text-white hover:bg-gray-700 rounded-full transition-colors"
          aria-label="Reset"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Controls;