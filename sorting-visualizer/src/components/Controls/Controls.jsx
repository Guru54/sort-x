import { useState } from 'react';
import PlayPauseButton from './PlayPauseButton';
import ProgressSlider from './ProgressSlider';
import SpeedControl from './SpeedControl';
import ResetButton from './ResetButton';

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

  return (
    <div className="bg-gray-800 p-3 pl-15 pr-15 shadow-lg">
      <div className="flex items-center justify-between space-x-4">
        <PlayPauseButton isPaused={isPaused} onPlay={onPlay} onPause={onPause} />
        <ProgressSlider
          steps={steps}
          sliderIndex={sliderIndex}
          setSliderIndex={setSliderIndex}
          isSorting={isSorting}
          isPaused={isPaused}
        />
        <SpeedControl
          speed={speed}
          onSpeedChange={onSpeedChange}
          showSpeedDropdown={showSpeedDropdown}
          setShowSpeedDropdown={setShowSpeedDropdown}
        />
        <ResetButton onReset={onReset} />
      </div>
    </div>
  );
};

export default Controls;