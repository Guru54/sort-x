export const bubbleSort = async (array, setArray, setStats, speed) => {
  let swaps = 0
  let comparisons = 0
  const startTime = performance.now()
  const n = array.length
  const arr = [...array]

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      comparisons++
      setStats({
        swaps,
        comparisons,
        time: Math.round(performance.now() - startTime)
      })
      await new Promise(resolve => setTimeout(resolve, speed))

      // Highlight comparing elements, but keep already sorted elements as 'sorted'
      setArray(arr.map((val, idx) => ({
        value: val,
        state:
          idx >= n - 1 - i
            ? 'sorted'
            : (idx === j || idx === j + 1 ? 'compare' : '')
      })))

      await new Promise(resolve => setTimeout(resolve, speed))

      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swaps++

        setStats({
          swaps,
          comparisons,
          time: Math.round(performance.now() - startTime)
        })
        await new Promise(resolve => setTimeout(resolve, speed))

        // Highlight swapping elements, but keep already sorted elements as 'sorted'
        setArray(arr.map((val, idx) => ({
          value: val,
          state:
            idx >= n - 1 - i
              ? 'sorted'
              : (idx === j || idx === j + 1 ? 'swap' : '')
        })))

        await new Promise(resolve => setTimeout(resolve, speed))
      }
    }

    // Mark sorted element(s)
    setArray(arr.map((val, idx) => ({
      value: val,
      state: idx >= n - 1 - i ? 'sorted' : ''
    })))
    await new Promise(resolve => setTimeout(resolve, speed))
  }

  // Mark all as sorted at the end
  setArray(arr.map(val => ({
    value: val,
    state: 'sorted'
  })))

  return arr
}
