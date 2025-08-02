export const quickSortSteps = (originalArray) => {
  const steps = [];
  let array = [...originalArray];
  let comparisons = 0;
  let swaps = 0;
  const startTime = performance.now();

  // Helper to push a step
  const pushStep = (state, highlightedIndices = []) => {
    steps.push({
      array: array.map((val, idx) => ({
        value: val,
        state: state(idx),
      })),
      comparisons,
      swaps,
      time: performance.now() - startTime,
      highlightedIndices,
    });
  };

  // Initial state
  pushStep(() => '');

  // Recursive QuickSort function
  const quickSort = (start, end) => {
    if (start >= end) return;

    // Choose pivot (last element)
    const pivot = array[end];
    let i = start - 1;

    // Highlight pivot
    pushStep(
      (idx) => (idx === end ? 'pivot' : idx >= start && idx < end ? 'unsorted' : ''),
      [end]
    );

    for (let j = start; j < end; j++) {
      // Highlight elements being compared
      pushStep(
        (idx) =>
          idx === end
            ? 'pivot'
            : idx === j
            ? 'compare'
            : idx === i
            ? 'swap-candidate'
            : idx >= start && idx < end
            ? 'unsorted'
            : '',
        [j, i, end]
      );

      comparisons++;
      if (array[j] < pivot) {
        i++;
        // Swap elements
        [array[i], array[j]] = [array[j], array[i]];
        swaps++;
        pushStep(
          (idx) =>
            idx === end
              ? 'pivot'
              : idx === i || idx === j
              ? 'swapped'
              : idx >= start && idx < end
              ? 'unsorted'
              : '',
          [i, j, end]
        );
      }
    }

    // Place pivot in correct position
    [array[i + 1], array[end]] = [array[end], array[i + 1]];
    swaps++;
    pushStep(
      (idx) =>
        idx === i + 1
          ? 'sorted'
          : idx <= end && idx >= start
          ? 'partitioned'
          : '',
      [i + 1, end]
    );

    // Recursively sort left and right partitions
    quickSort(start, i);
    quickSort(i + 2, end);
  };

  quickSort(0, array.length - 1);

  // Final sorted state
  pushStep(() => 'sorted');

  return steps;
};