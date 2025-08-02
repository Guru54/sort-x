export const mergeSortSteps = (originalArray) => {
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

  // Merge function
  const merge = (start, mid, end) => {
    const left = array.slice(start, mid + 1);
    const right = array.slice(mid + 1, end + 1);
    let i = 0,
      j = 0,
      k = start;

    while (i < left.length && j < right.length) {
      // Highlight elements being compared
      pushStep(
        (idx) =>
          idx === start + i || idx === mid + 1 + j
            ? 'compare'
            : idx >= start && idx <= end
            ? 'unsorted'
            : '',
        [start + i, mid + 1 + j]
      );

      comparisons++;
      if (left[i] <= right[j]) {
        array[k] = left[i];
        i++;
      } else {
        array[k] = right[j];
        j++;
      }
      swaps++;
      k++;

      // Show merge step
      pushStep(
        (idx) =>
          idx >= start && idx < k
            ? 'sorted'
            : idx >= k && idx <= end
            ? 'unsorted'
            : '',
        [k - 1]
      );
    }

    // Remaining elements in left or right
    while (i < left.length) {
      array[k] = left[i];
      i++;
      k++;
      swaps++;
      pushStep(
        (idx) =>
          idx >= start && idx < k
            ? 'sorted'
            : idx >= k && idx <= end
            ? 'unsorted'
            : '',
        [k - 1]
      );
    }

    while (j < right.length) {
      array[k] = right[j];
      j++;
      k++;
      swaps++;
      pushStep(
        (idx) =>
          idx >= start && idx < k
            ? 'sorted'
            : idx >= k && idx <= end
            ? 'unsorted'
            : '',
        [k - 1]
      );
    }
  };

  // Recursive MergeSort function
  const mergeSort = (start, end) => {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);

    // Highlight split
    pushStep(
      (idx) =>
        idx >= start && idx <= end ? 'unsorted' : '',
      [mid]
    );

    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    merge(start, mid, end);
  };

  mergeSort(0, array.length - 1);

  // Final sorted state
  pushStep(() => 'sorted');

  return steps;
};