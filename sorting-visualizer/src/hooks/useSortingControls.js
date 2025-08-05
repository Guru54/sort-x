import { useCallback, useEffect } from 'react';

export const useSortingControls = ({
  isSorting,
  isPaused,
  setIsSorting,
  setIsPaused,
  reset,
  steps,
  sliderIndex,
}) => {
  const handlePlay = useCallback(() => {
    if (sliderIndex >= steps.length - 1) {
      reset();
      setIsPaused(true);
    }
    setIsSorting(true);
    setIsPaused(false);
  }, [sliderIndex, steps, reset, setIsSorting, setIsPaused]);

  const handlePause = useCallback(() => {
    setIsPaused(true);
  }, [setIsPaused]);

  // 👇 Auto pause when steps complete
  useEffect(() => {
    if (sliderIndex >= steps.length - 1 && steps.length > 0) {
      setIsPaused(true);
      setIsSorting(false); // Optional: also stop sorting mode
    }
  }, [sliderIndex, steps.length, setIsPaused, setIsSorting]);

  return { handlePlay, handlePause };
};
