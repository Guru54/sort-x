import { useState, useEffect, useCallback } from 'react';
import { getSortingAlgorithm } from '../utils/sorting';

export const useSortingVisualizer = (initialArray = [6, 20, 13, 27, 10, 24, 15]) => {
  const [originalArray, setOriginalArray] = useState(initialArray);
  const [array, setArray] = useState(originalArray.map(num => ({ value: num, state: '' })));
  const [steps, setSteps] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [algorithm, setAlgorithm] = useState('bubble');
  const [isSorting, setIsSorting] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [speed, setSpeed] = useState(300);
  const [stats, setStats] = useState({ swaps: 0, comparisons: 0, time: 0 });

  // Reset the visualization
  const reset = useCallback(() => {
    setIsSorting(false);
    setIsPaused(true);
    const initial = originalArray.map(num => ({ value: num, state: '' }));
    setArray(initial);
    setStats({ swaps: 0, comparisons: 0, time: 0 });
    const sortingAlgorithm = getSortingAlgorithm(algorithm);
    const stepList = sortingAlgorithm(originalArray);
    setSteps(stepList);
    setSliderIndex(0);
  }, [algorithm, originalArray]);

  // Handle array changes
  const handleArrayChange = useCallback((newArray) => {
    setOriginalArray(newArray);
    const arr = newArray.map(num => ({ value: num, state: '' }));
    setArray(arr);
    const sortingAlgorithm = getSortingAlgorithm(algorithm);
    const stepList = sortingAlgorithm(newArray);
    setSteps(stepList);
    setSliderIndex(0);
    setStats({ swaps: 0, comparisons: 0, time: 0 });
  }, [algorithm]);

  // Auto-play effect
  useEffect(() => {
    if (!isSorting || isPaused || steps.length === 0) return;
    
    const timer = setTimeout(() => {
      if (sliderIndex < steps.length - 1) {
        setSliderIndex(prev => prev + 1);
        const currentStep = steps[sliderIndex];
        setStats({
          swaps: currentStep.swaps || 0,
          comparisons: currentStep.comparisons || 0,
          time: currentStep.time || 0,
        });
      } else {
        setIsSorting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [isSorting, isPaused, sliderIndex, steps, speed]);

  // Sync array with slider
  useEffect(() => {
    if (steps.length > 0 && sliderIndex >= 0 && sliderIndex < steps.length) {
      setArray(steps[sliderIndex].array || steps[sliderIndex]);
    }
  }, [sliderIndex, steps]);

  // Validate slider index
  useEffect(() => {
    if (steps.length > 0) {
      setSliderIndex(prevIndex => Math.min(prevIndex, steps.length - 1));
    } else {
      setSliderIndex(0);
    }
  }, [steps]);

  // Initialize on mount/algorithm change
  useEffect(() => {
    reset();
  }, [algorithm, reset]);

  return {
    array,
    steps,
    sliderIndex,
    algorithm,
    isSorting,
    isPaused,
    speed,
    stats,
    setAlgorithm,
    setSpeed,
    setSliderIndex,
    handleArrayChange,
    reset,
    setIsSorting,
    setIsPaused,
  };
};