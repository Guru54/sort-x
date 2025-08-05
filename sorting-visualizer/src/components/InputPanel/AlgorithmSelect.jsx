export default function AlgorithmSelect({ algorithm, onAlgorithmChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Algorithm</label>
      <select
        value={algorithm}
        onChange={(e) => onAlgorithmChange(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="bubble">Bubble Sort</option>
        <option value="selection">Selection Sort</option>
        <option value="insertion">Insertion Sort</option>
        <option value="merge">Merge Sort</option>
        <option value="quick">Quick Sort</option>
      </select>
    </div>
  );
}