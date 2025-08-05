import { useState } from "react";
import './Navbar.css';
import NavLinks from "./NavLinks";

export default function Navbar({ aboutRef }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md backdrop-blur text-white p-4 sticky top-0 z-11">
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
        <NavLinks aboutRef={aboutRef} open={open} />
      </div>
    </nav>
  );
}