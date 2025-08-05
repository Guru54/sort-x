const speedOptions = [0.5, 1, 1.5, 2, 3, 4];

const SpeedControl = ({
  speed,
  onSpeedChange,
  showSpeedDropdown,
  setShowSpeedDropdown,
}) => {
  const handleSpeedSelect = (multiplier) => {
    onSpeedChange(Math.round(1000 / multiplier));
    setShowSpeedDropdown(false);
  };

  return (
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
  );
};

export default SpeedControl;