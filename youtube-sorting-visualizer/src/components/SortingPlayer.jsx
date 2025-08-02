import React, { useMemo } from "react";
import Particle from "../utils/particles.jsx";

export default function SortingPlayer({ array , algorithm}) {
  const particlesMemo = useMemo(() => <Particle />, []);

  // Background color based on state
  const getColor = (state) => {
    switch (state) {
      case "compare":
        return "bg-yellow-400"; // Attention
      case "swap":
        return "bg-rose-500";   // Swap action
      case "sorted":
        return "bg-emerald-500"; // Sorted
      case "selected":
        return "bg-pink-400";   // Selection minimum
      default:
        return "bg-sky-500";    // Default normal
    }
  };

  // Text color based on background brightness
  const getTextColor = (state) => {
    switch (state) {
      case "compare":
      case "selected":
        return "text-black";   // Light backgrounds
      case "swap":
      case "sorted":
      default:
        return "text-white";   // Darker backgrounds
    }
  };

  return (
    <div className="relative h-[50vh] overflow-hidden p-4 flex items-end justify-center bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Particles stay inside only this box */}
      {particlesMemo}

      {array.map((item, index) => (
        <div
          key={index}
          className={`bg-gradient-to-t ${getColor(item.state)} to-white mx-1 rounded-t-md transition-all duration-300 ease-in-out hover:scale-105 flex items-end justify-center font-semibold ${getTextColor(item.state)}`}
          style={{
            width: "40px",
            height: `${item.value * 7}px`,
            position: "relative",
            zIndex: 10,
          }}
        >
          {item.value}
        </div>
      ))}
    </div>
  );
}   