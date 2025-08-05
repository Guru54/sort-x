export default function StatsBar({ stats }) {
  return (
    <div className="bg-white p-3 border-t flex flex-wrap gap-4 items-center">
      <div className="flex items-center space-x-2">
        <span className="font-medium">Swaps:</span>
        <span className="bg-gray-200 px-2 py-1 rounded">{stats.swaps}</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="font-medium">Comparisons:</span>
        <span className="bg-gray-200 px-2 py-1 rounded">{stats.comparisons}</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="font-medium">Time:</span>
        <span className="bg-gray-200 px-2 py-1 rounded">{stats.time}ms</span>
      </div>


    </div>
  )
}
