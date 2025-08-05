import React, { useMemo } from "react";
import Particle from "../../utils/particles.jsx";
import Bar from "./Bar";

export default function SortingPlayer({ array, algorithm }) {
  const particlesMemo = useMemo(() => <Particle />, []);

  const getColor = (state) => {
    switch (state) {
      case "compare":
        return "bg-yellow-400";
      case "swap":
        return "bg-rose-500";
      case "sorted":
        return "bg-emerald-500";
      case "selected":
        return "bg-pink-400";
      default:
        return "bg-sky-500";
    }
  };

  const getTextColor = (state) => {
    switch (state) {
      case "compare":
      case "selected":
        return "text-black";
      case "swap":
      case "sorted":
      default:
        return "text-white";
    }
  };

  //  Dynamic scaling calculation
  const maxVal = Math.max(...array.map(item => item.value));
  const MAX_HEIGHT = 300; // px
  const scaleFactor = MAX_HEIGHT / maxVal;

  return (
    <div className="relative h-[50vh] overflow-hidden p-4 flex items-end justify-center bg-gradient-to-b from-slate-950 to-slate-900">
      {particlesMemo}
      {array.map((item, index) => (
        <Bar
          key={index}
          value={item.value}
          scale={scaleFactor} 
          state={item.state}
          getColor={getColor}
          getTextColor={getTextColor}
        />
      ))}
    </div>
  );
}
