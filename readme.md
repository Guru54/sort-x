# Sorting Algorithm Visualizer

<h2 align="center">
  Interactive Sorting Algorithm Visualization<br/>
  <a href="https://your-sorting-visualizer-url.com" target="_blank">Live Demo</a>
</h2>

<div align="center">
  <img alt="Demo" src="./screenshots/sorting-visualizer-demo.gif" />
</div>

<br/>

<center>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) &nbsp;
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

</center>

<h3 align="center">
    🔹
    <a href="https://github.com/your-username/sorting-visualizer/issues">Report Bug</a> &nbsp; &nbsp;
    🔹
    <a href="https://github.com/your-username/sorting-visualizer/issues">Request Feature</a>
</h3>

## TL;DR

This interactive visualization tool helps you understand how sorting algorithms work by animating each step of the sorting process. You can customize array size, sorting speed, and algorithm selection.

## Built With

This project was built using modern web technologies:

- **React.js** - Frontend library
- **React Hooks** - State management
- **CSS Modules** - Component styling
- **Algorithms** - Bubble Sort, Insertion Sort, Selection Sort, Quick Sort, Merge Sort
- **Vite** - Build tooling
- **Vercel** - Deployment

## Features

**📊 Real-time Visualization**  
Watch algorithms sort data with beautiful bar animations

**⚙️ Customizable Parameters**  
Adjust array size, sorting speed, and algorithm selection

**📈 Performance Metrics**  
Compare swaps, comparisons, and execution time

**📱 Fully Responsive**  
Works on desktop, tablet, and mobile devices

**🔁 Step-by-Step Control**  
Play, pause, or step through the sorting process

## Getting Started

Follow these instructions to set up the project locally.

### 🛠 Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/sorting-visualizer.git
```

2. Install dependencies:
```bash
cd sorting-visualizer
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at [http://localhost:5173](http://localhost:3000)

## Usage Instructions

1. **Customize your array**:
   - Use the slider to set array size (5-100 elements)
   - Generate new arrays with different distributions
   - Create custom arrays with specific values

2. **Select an algorithm**:
   - Choose from Bubble Sort, Insertion Sort, Selection Sort, Quick Sort, or Merge Sort
   - View algorithm description and complexity analysis

3. **Control visualization**:
   - Click ▶️ Play to start automatic sorting
   - Use ⏸️ Pause and ⏩ Step buttons for manual control
   - Adjust speed with the speed slider

4. **Analyze performance**:
   - Track comparisons and swaps in real-time
   - View execution time after sorting completes
   - Compare algorithm efficiency

## Project Structure

```
src/
├── assets/               # Static assets
├── components/           # Reusable components
│   ├── SortingVisualizer # Main visualization component
│   ├── Controls          # Playback controls
│   ├── InputPanel        # Array customization
│   ├── StatsBar          # Performance metrics
│   └── InfoSidebar       # Algorithm information
├── hooks/                # Custom hooks
│   ├── useSorting.js     # Sorting algorithm logic
│   └── useAnimation.js   # Visualization timing
├── utils/                # Utility functions
│   ├── sorting/          # Sorting algorithms
│   └── helpers.js        # Helper functions
├── styles/               # Global styles
└── App.js                # Main application component
```

### Show your support

Give a ⭐ if you find this project useful!

<a href="https://www.buymeacoffee.com/your-username" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="60px" width="217px">
</a>

## Contributing

Contributions are welcome! Please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.