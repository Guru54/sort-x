const algorithmInfo = {
  bubble: {
    name: "Bubble Sort",
    complexity: "O(n²)",
    space: "O(1)",
    description: "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
    codeLink: "https://github.com/Guru54/Dsa/blob/main/sorting/bubble.cpp",
    code: `
void bubbleSort(int arr[], int n) {
  for (int i = 0; i < n-1; i++) {
    for (int j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        // swap arr[j] and arr[j+1]
        int temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}
    `.trim()
  },
  selection: {
    name: "Selection Sort",
    complexity: "O(n²)",
    space: "O(1)",
    description: "Selection sort divides the input list into two parts: a sorted sublist and an unsorted sublist.",
    codeLink: "https://github.com/Guru54/Dsa/blob/main/sorting/selection.cpp",
    code: `
void selectionSort(int arr[], int n) {
  for (int i = 0; i < n-1; i++) {
    int min_idx = i;
    for (int j = i+1; j < n; j++)
      if (arr[j] < arr[min_idx])
        min_idx = j;
    // Swap the found minimum element with the first element
    int temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
  }
}
    `.trim()
  },
  insertion: {
    name: "Insertion Sort",
    complexity: "O(n²)",
    space: "O(1)",
    description: "Insertion sort builds the final sorted array one item at a time by comparisons.",
    codeLink: "https://github.com/Guru54/Dsa/blob/main/sorting/insertion.cpp",
    code: `
void insertionSort(int arr[], int n) {
  for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i - 1;
    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}
    `.trim()
  },
  merge: {
    name: "Merge Sort",
    complexity: "O(n log n)",
    space: "O(n)",
    description: "Merge sort is a divide-and-conquer algorithm that divides the input array into two halves.",
    codeLink: "https://github.com/Guru54/Dsa/blob/main/sorting/merge.cpp",
    code: `
void merge(int arr[], int l, int m, int r) {
  int i, j, k;
  int n1 = m - l + 1;
  int n2 = r - m;

  /* create temp arrays */
  int L[n1], R[n2];

  /* Copy data to temp arrays */
  for (i = 0; i < n1; i++)
    L[i] = arr[l + i];
  for (j = 0; j < n2; j++)
    R[j] = arr[m + 1 + j];

  /* Merge the temp arrays */
  i = 0; // Initial index of first sub-array
  j = 0; // Initial index of second sub-array
  k = l; // Initial index of merged sub-array
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  /* Copy the remaining elements of L[], if there are any */
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  /* Copy the remaining elements of R[], if there are any */
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

void mergeSort(int arr[], int l, int r) {
  if (l < r) {
    // Find the middle point
    int m = l + (r - l) / 2;

    // Sort first and second halves
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    // Merge the sorted halves
    merge(arr, l, m, r);
  }
}
    `.trim()
  },
  quick: {
    name: "Quick Sort",
    complexity: "O(n log n) average, O(n²) worst",
    space: "O(log n)",
    description: "Quick sort selects a 'pivot' element and partitions the array around the pivot.",
    codeLink: "https://github.com/Guru54/Dsa/blob/main/sorting/quick.cpp",
    code: `
int partition (int arr[], int low, int high) {
  int pivot = arr[high]; // pivot
  int i = (low - 1); // Index of smaller element

  for (int j = low; j <= high - 1; j++) {
    // If current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++; // increment index of smaller element
      // swap arr[i] and arr[j]
      int temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  // swap arr[i+1] and arr[high] (or pivot)
  int temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return (i + 1);
}

void quickSort(int arr[], int low, int high) {
  if (low < high) {
    /* pi is partitioning index, arr[pi] is now at right place */
    int pi = partition(arr, low, high);

    // Recursively sort elements before partition and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
    `.trim()
  }
};

export default function getAlgorithmInfo(algorithm) {
  return algorithmInfo[algorithm] || algorithmInfo.bubble;
};