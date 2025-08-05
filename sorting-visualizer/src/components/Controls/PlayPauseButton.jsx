const PlayPauseButton = ({ isPaused, onPlay, onPause }) => (
  <button
    onClick={isPaused ? onPlay : onPause}
    className="p-2 text-white hover:bg-gray-700 rounded-full transition-colors"
    aria-label={isPaused ? 'Play' : 'Pause'}
  >
    {isPaused ? (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    ) : (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
      </svg>
    )}
  </button>
);

export default PlayPauseButton;