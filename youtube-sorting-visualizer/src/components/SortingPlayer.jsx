export default function SortingPlayer({ array }) {
  const getColor = (state) => {
    switch(state) {
      case 'compare': return 'bg-yellow-500'
      case 'swap': return 'bg-red-500'
      case 'sorted': return 'bg-green-500'
      default: return 'bg-blue-500'
    }
  }

  return (
    <div className="bg-black p-4 flex items-end justify-center h-[50vh] ">
      {array.map((item, index) => (
        <div 
          key={index}
          className={`${getColor(item.state)} mx-1 flex items-end justify-center text-white`}
          style={{ 
            width: '40px', 
            height: `${item.value * 7}px`,
            transition: 'all 0.3s ease'
          }}
        >
          {item.value}
        </div>
      ))}
    </div>
  )
}
