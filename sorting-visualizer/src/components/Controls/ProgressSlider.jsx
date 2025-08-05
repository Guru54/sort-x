const ProgressSlider = ({
  steps,
  sliderIndex,
  setSliderIndex,
  isSorting,
  isPaused,
}) => {
  const handleSliderChange = (e) => setSliderIndex(Number(e.target.value));
  return (
    <div className="w-8 flex-1 relative">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>Step {sliderIndex}</span>
        <span>{steps.length - 1}</span>
      </div>
      <div className="relative w-full h-2">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-700 rounded-full"></div>
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
          style={{
            width: `${(sliderIndex / (steps.length - 1 || 1)) * 100}%`,
          }}
        ></div>
        <div
          className="absolute top-1/2 h-3 w-3 bg-blue-500 rounded-full transform -translate-y-1/2"
          style={{
            left: `${(sliderIndex / (steps.length - 1 || 1)) * 100}%`,
            marginLeft: '-0.25rem',
          }}
        ></div>
        <input
          type="range"
          min="0"
          max={steps.length > 1 ? steps.length - 1 : 1}
          value={sliderIndex}
          onChange={handleSliderChange}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
           disabled={steps.length <= 1}
        />
      </div>
    </div>
  );
};

export default ProgressSlider;