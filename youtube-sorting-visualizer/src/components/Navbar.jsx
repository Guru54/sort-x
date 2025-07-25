import { useState } from "react";
import './Navbar.css';

export default function Navbar({ aboutRef }) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className=" bg-gray-900 shadow-md backdrop-blur text-white p-4 sticky top-0 z-11 ddd">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span role="img" aria-label="chart">📊</span>
          Sorting Visualizer
        </h1>
        {/* Hamburger for mobile */}
        <button
          className="flex-col justify-center items-center w-8 h-8 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        {/* Nav links */}
        <div className={`nav-links${open ? " open" : ""}`}>
           <button
            onClick={() => {
              aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="nav-link"
          >
            About
          </button>
          <button className="nav-link">
            Algorithms
          </button>
          <a 
            href="https://github.com/yourusername/sorting-visualizer" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 px-4 py-1 rounded-full hover:bg-red-700"
            style={{ color: "#fff" }}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  
     
    </>
  );
}