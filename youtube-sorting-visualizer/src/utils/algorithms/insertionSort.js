export const insertionSortSteps = (originalArray) => {
  const steps = [];
  let array = [...originalArray];
  let comparisons = 0;
  let swaps = 0;
  const startTime = performance.now();

  const n = array.length;

  // Step 1: Initial state
  steps.push({
    array: array.map((val) => ({ value: val, state: '' })),
    comparisons,
    swaps,
    time: 0,
    highlightedIndices: []
  });

  // Step 2: First element sorted
  steps.push({
    array: array.map((val, idx) => ({
      value: val,
      state: idx === 0 ? 'sorted' : ''
    })),
    comparisons,
    swaps,
    time: performance.now() - startTime,
    highlightedIndices: []
  });

  for (let i = 1; i < n; i++) {
    let j = i;
    const currentVal = array[i];

    // Step 3: Highlight current element
    steps.push({
      array: array.map((val, idx) => ({
        value: val,
        state: idx < i ? 'sorted' : idx === i ? 'selected' : ''
      })),
      comparisons,
      swaps,
      time: performance.now() - startTime,
      highlightedIndices: [i]
    });

    while (j > 0) {
      // Step 4: Always add comparison step (whether successful or not)
      comparisons++;
      steps.push({
        array: array.map((val, idx) => ({
          value: val,
          state:
            idx < i ? 'sorted' :
            idx === j || idx === j - 1 ? 'compare' :
            idx === i ? 'selected' : ''
        })),
        comparisons,
        swaps,
        time: performance.now() - startTime,
        highlightedIndices: [j, j - 1, i]
      });

      // Break if comparison fails
      if (array[j - 1] <= currentVal) break;

      // Step 5: Shift element
      array[j] = array[j - 1];
      swaps++;
      steps.push({
        array: array.map((val, idx) => ({
          value: val,
          state:
            idx < i ? 'sorted' :
            idx === j || idx === j - 1 ? 'swap' :
            idx === i ? 'selected' : ''
        })),
        comparisons,
        swaps,
        time: performance.now() - startTime,
        highlightedIndices: [j, j - 1]
      });

      j--;
    }

    // Place currentVal in correct position
    array[j] = currentVal;

    // Step 6: Mark sorted up to i
    steps.push({
      array: array.map((val, idx) => ({
        value: val,
        state: idx <= i ? 'sorted' : ''
      })),
      comparisons,
      swaps,
      time: performance.now() - startTime,
      highlightedIndices: []
    });
  }

  // Final step: All sorted
  steps.push({
    array: array.map((val) => ({
      value: val,
      state: 'sorted'
    })),
    comparisons,
    swaps,
    time: performance.now() - startTime,
    highlightedIndices: []
  });

  return steps;
};