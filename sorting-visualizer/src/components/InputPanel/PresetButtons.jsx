export default function PresetButtons({ presetArrays, applyPreset }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Quick Presets</label>
      <div className="flex flex-wrap gap-2">
        {Object.keys(presetArrays).map(preset => (
          <button
            key={preset}
            onClick={() => applyPreset(preset)}
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium transition-colors"
          >
            {preset}
          </button>
        ))}
      </div>
    </div>
  );
}