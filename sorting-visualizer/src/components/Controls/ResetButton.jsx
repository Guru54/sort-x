const ResetButton = ({ onReset }) => (
  <button
    onClick={onReset}
    className="p-2 text-white hover:bg-gray-700 rounded-full transition-colors"
    aria-label="Reset"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8z" />
    </svg>
  </button>
);

export default ResetButton;