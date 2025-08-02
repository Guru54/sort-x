export const bubbleSortSteps = (originalArray) => {
  const steps = [];
  let array = [...originalArray];
  let swaps = 0;
  let comparisons = 0;
  const startTime = performance.now();
  const n = array.length;

  // Initial step
  steps.push({
    array: array.map((val) => ({ value: val, state: '' })),
    swaps,
    comparisons,
    time: 0,
    highlightedIndices: []
  });

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;

      // Compare step (preserve sorted elements)
      steps.push({
        array: array.map((val, idx) => ({
          value: val,
          state:
            idx >= n - i ? 'sorted' :
            (idx === j || idx === j + 1) ? 'compare' : ''
        })),
        swaps,
        comparisons,
        time: performance.now() - startTime,
        highlightedIndices: [j, j + 1]
      });

      // Swap if needed
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swaps++;

        // Swap step (preserve sorted elements)
        steps.push({
          array: array.map((val, idx) => ({
            value: val,
            state:
              idx >= n - i ? 'sorted' :
              (idx === j || idx === j + 1) ? 'swap' : ''
          })),
          swaps,
          comparisons,
          time: performance.now() - startTime,
          highlightedIndices: [j, j + 1]
        });
      }
    }

    // Mark the last element of this pass as sorted
    steps.push({
      array: array.map((val, idx) => ({
        value: val,
        state: idx >= n - i - 1 ? 'sorted' : ''
      })),
      swaps,
      comparisons,
      time: performance.now() - startTime,
      highlightedIndices: []
    });
  }

  // Final pass: all sorted
  steps.push({
    array: array.map((val) => ({
      value: val,
      state: 'sorted'
    })),
    swaps,
    comparisons,
    time: performance.now() - startTime,
    highlightedIndices: []
  });

  return steps;
};


