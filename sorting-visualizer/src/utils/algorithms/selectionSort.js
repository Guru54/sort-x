export const selectionSortSteps = (originalArray) => {
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
    let minIndex = i;

    // Start of outer loop: Highlight minIndex as current minimum candidate
    steps.push({
      array: array.map((val, idx) => ({
        value: val,
        state:
          idx < i ? 'sorted' :
          idx === minIndex ? 'selected' : ''
      })),
      swaps,
      comparisons,
      time: performance.now() - startTime,
      highlightedIndices: [minIndex]
    });

    for (let j = i + 1; j < n; j++) {
      comparisons++;

      // Highlight minIndex (current min) and j (element being compared)
      steps.push({
        array: array.map((val, idx) => ({
          value: val,
          state:
            idx < i ? 'sorted' :
            idx === minIndex ? 'selected' :
            idx === j ? 'compare' : ''
        })),
        swaps,
        comparisons,
        time: performance.now() - startTime,
        highlightedIndices: [minIndex, j]
      });

      if (array[j] < array[minIndex]) {
        minIndex = j;

        // Update minIndex and highlight the new minimum candidate
        steps.push({
          array: array.map((val, idx) => ({
            value: val,
            state:
              idx < i ? 'sorted' :
              idx === minIndex ? 'selected' : ''
          })),
          swaps,
          comparisons,
          time: performance.now() - startTime,
          highlightedIndices: [minIndex]
        });
      }
    }

    if (minIndex !== i) {
      // Swap elements and highlight the swap
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      swaps++;

      steps.push({
        array: array.map((val, idx) => ({
          value: val,
          state:
            idx < i ? 'sorted' :
            idx === i || idx === minIndex ? 'swap' : ''
        })),
        swaps,
        comparisons,
        time: performance.now() - startTime,
        highlightedIndices: [i, minIndex]
      });
    }

    // Mark i-th position as sorted
    steps.push({
      array: array.map((val, idx) => ({
        value: val,
        state: idx <= i ? 'sorted' : ''
      })),
      swaps,
      comparisons,
      time: performance.now() - startTime,
      highlightedIndices: []
    });
  }

  // Final step: All elements sorted
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