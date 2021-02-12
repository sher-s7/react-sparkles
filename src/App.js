import Sparkles from './components/Sparkles';
import './styles/styles.css';
import scratch from './sparkle.png';

function App() {
  return (
    <div
      className="App"
      style={{ background: '#111', width: '100vw', height: '100vh' }}
    >
      <Sparkles
        borderRadius="50%"
        border='5px solid black'
        sparkleCount={1220}
        flickerSpeed={1}
        type="vertical"
        width="200px"
        height="200px"
        sparkleSize={{ width: 7, height: 7 }}
        color='red'
        overflow='hidden'
      />
    </div>
  );
}

export default App;
