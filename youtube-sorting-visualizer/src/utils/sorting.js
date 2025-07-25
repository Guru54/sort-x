import { bubbleSortSteps } from "./algorithms/bubbleSort";
import { selectionSortSteps } from "./algorithms/selectionSort";
import { insertionSortSteps } from "./algorithms/insertionSort";
import { mergeSortSteps } from "./algorithms/mergeSort";
import { quickSortSteps } from "./algorithms/quickSort";
export const getSortingAlgorithm = (algorithm) => {
  switch (algorithm) {
    case 'bubble':
      return bubbleSortSteps;
    case 'selection':
      return selectionSortSteps;
    case 'insertion':
      return insertionSortSteps;
    case 'merge':
      return mergeSortSteps;
    case 'quick':
      return quickSortSteps;
    default:
      return bubbleSortSteps;
  }
};
export {
  bubbleSortSteps,
  selectionSortSteps,
  insertionSortSteps,
  mergeSortSteps,
  quickSortSteps
};