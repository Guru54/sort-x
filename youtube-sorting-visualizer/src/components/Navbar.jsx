export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sorting Visualizer</h1>
        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-300">About</button>
          <button className="hover:text-gray-300">Algorithms</button>
          <a 
            href="https://github.com/yourusername/sorting-visualizer" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 px-4 py-1 rounded-full hover:bg-red-700"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
