import { useState } from 'react'
import Navbar from './components/Navbar'
import SortingPlayer from './components/SortingPlayer'
import Controls from './components/Controls'
import InputPanel from './components/InputPanel'
import StatsBar from './components/StatsBar'
import InfoSidebar from './components/InfoSidebar'
import { bubbleSort } from './utils/sorting'

function App() {
  const [array, setArray] = useState([5, 2, 9, 3, 1, 6].map(num => ({ value: num, state: '' })))
  const [algorithm, setAlgorithm] = useState('bubble')
  const [isSorting, setIsSorting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [speed, setSpeed] = useState(300)
  const [stats, setStats] = useState({
    swaps: 0,
    comparisons: 0,
    time: 0
  })

  const startSorting = async () => {
    setIsSorting(true)
    setIsPaused(false)
    setStats({ swaps: 0, comparisons: 0, time: 0 })
    
    await bubbleSort(
      array.map(item => item.value),
      (newArray) => !isPaused && setArray(newArray),
      (newStats) => !isPaused && setStats(newStats),
      speed
    )
    
    setIsSorting(false)
    setIsPaused(false)
  }

  const handlePause = () => setIsPaused(!isPaused)
  const reset = () => {
    setIsSorting(false)
    setIsPaused(false)
    setArray([5, 2, 9, 3, 1, 6].map(num => ({ value: num, state: '' })))
    setStats({ swaps: 0, comparisons: 0, time: 0 })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <SortingPlayer array={array} />
          <Controls 
            isSorting={isSorting}
            isPaused={isPaused}
            speed={speed}
            onPlay={startSorting}
            onPause={handlePause}
            onReset={reset}
            onSpeedChange={setSpeed}
          />
          <InputPanel 
            array={array}
            algorithm={algorithm}
            onArrayChange={(newArray) => setArray(newArray.map(num => ({ value: num, state: '' })))}
            onAlgorithmChange={setAlgorithm}
          />
          <StatsBar stats={stats} />
        </div>
        <InfoSidebar algorithm={algorithm} />
      </div>
    </div>
  )
}

export default App
