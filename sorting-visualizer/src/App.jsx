import './App.css';
import { useRef } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import SortingPlayer from './components/SortingPlayer/SortingPlayer.jsx';
import Controls from './components/Controls/Controls.jsx';
import InputPanel from './components/InputPanel/InputPanel.jsx';
import StatsBar from './components/StatsBar/StatsBar.jsx';
import InfoSidebar from './components/InfoSidebar/InfoSidebar.jsx';
import About from './components/About/About.jsx';
import { useSortingVisualizer } from './hooks/useSortingVisualizer';
import { useSortingControls } from './hooks/useSortingControls';

function App() {
  const {
    array,
    steps,
    sliderIndex,
    algorithm,
    isSorting,
    isPaused,
    speed,
    stats,
    setAlgorithm,
    setSpeed,
    setSliderIndex,
    handleArrayChange,
    reset,
    setIsSorting,
    setIsPaused,
  } = useSortingVisualizer();

  const { handlePlay, handlePause } = useSortingControls({
    isSorting,
    isPaused,
    setIsSorting,
    setIsPaused,
    reset,
    steps,
    sliderIndex,
  });

  const aboutRef = useRef(null);

  return (
    <div className="app-container">
      <Navbar aboutRef={aboutRef} />
      
      <div className="main-content">
        <div className="main-left">
          <SortingPlayer array={array} algorithm={algorithm} />

          <Controls
            isSorting={isSorting}
            isPaused={isPaused}
            speed={speed}
            onPlay={handlePlay}
            onPause={handlePause}
            onReset={reset}
            onSpeedChange={setSpeed}
            steps={steps}
            sliderIndex={sliderIndex}
            setSliderIndex={setSliderIndex}
          />

          <InputPanel
            array={array.map(item => item.value)}
            algorithm={algorithm}
            onArrayChange={handleArrayChange}
            onAlgorithmChange={setAlgorithm}
          />

          <StatsBar stats={stats} />

          <div className="info-sidebar-mobile">
            <InfoSidebar algorithm={algorithm} />
          </div>
        </div>

        <div className="info-sidebar-desktop">
          <InfoSidebar algorithm={algorithm} />
        </div>
      </div>

      <div>
        <About refProp={aboutRef} />
      </div>
    </div>
  );
}

export default App;