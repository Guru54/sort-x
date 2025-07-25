import { useCallback } from 'react';

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
    }
    setIsSorting(true);
    setIsPaused(false);
  }, [sliderIndex, steps, reset, setIsSorting, setIsPaused]);

  const handlePause = useCallback(() => {
    setIsPaused(true);
  }, [setIsPaused]);

  return { handlePlay, handlePause };
};