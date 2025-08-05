export default function Bar({ value, scale, state, getColor, getTextColor }) {
  return (
    <div
      className={`bg-gradient-to-t ${getColor(state)} to-white mx-1 rounded-t-md transition-all duration-300 ease-in-out hover:scale-105 flex items-end justify-center font-semibold ${getTextColor(state)}`}
      style={{
        width: "40px",
        height: `${value * scale}px`, // 🔥 Dynamic scaling here
        position: "relative",
        zIndex: 10,
      }}
    >
      {value}
    </div>
  );
}
