import Sparkles from './components/Sparkles';
import './styles/styles.css';
import Star from './star.svg';
import { useState } from 'react';

function App() {
  const [orientation, setOrientation] = useState('random');
  const [numSparkles, setNumSparkles] = useState(1);
  const [useSprite, setUseSprite] = useState(true);
  const [speed, setSpeed] = useState(0);
  const [size, setSize] = useState(10);
  const handleChange = (e) => {
    setNumSparkles(parseInt(e.target.value));
  };
  return (
    <div
      className="App"
      style={{
        background: '#000',
        width: '100vw',
        height: '100vh',
        color: 'white',
        fontSize: '40px',
      }}
    >
      <Sparkles
        sparkleCount={numSparkles}
        flickerDuration={speed}
        type={orientation}
        width="300px"
        height="300px"
        sparkleSize={{ width: size, height: size }}
        color="goldenrod"
        overflow="hidden"
        sprite={useSprite && Star}
      />
      <form>
        <input
          type="radio"
          value="random"
          id="random"
          name="orientation"
          defaultChecked
          onClick={() => setOrientation('random')}
        />
        <label
          style={{
            color: orientation === 'random' ? 'green' : 'white',
          }}
          htmlFor="random"
        >
          random
        </label>
        <input
          type="radio"
          value="vertical"
          id="vertical"
          name="orientation"
          onClick={() => setOrientation('vertical')}
        />
        <label
          style={{
            color: orientation === 'vertical' ? 'green' : 'white',
          }}
          htmlFor="vertical"
        >
          vertical
        </label>
        <input
          type="radio"
          id="horizontal"
          value="horizontal"
          name="orientation"
          onClick={() => setOrientation('horizontal')}
        />
        <label
          style={{
            color: orientation === 'horizontal' ? 'green' : 'white',
          }}
          htmlFor="horizontal"
        >
          horizontal
        </label>
        <div style={{ height: '20px' }} />
        <label
          htmlFor="numSparkles"
          style={{
            marginRight: '50px',
            width: '350px',
            display: 'inline-block',
          }}
        >
          Sparkle Count: <span style={{ color: 'green' }}>{numSparkles}</span>
        </label>
        <input
          type="range"
          name="numSparkles"
          id="numSparkles"
          min={0}
          max={2000}
          onChange={handleChange}
        />
        <div style={{ height: '20px' }} />
        <label
          htmlFor="speed"
          style={{
            marginRight: '50px',
            width: '350px',
            display: 'inline-block',
          }}
        >
          Flicker Duration: <span style={{ color: 'green' }}>{speed}</span>
        </label>
        <input
          type="range"
          name="speed"
          id="speed"
          min={0.1}
          max={5}
          value={speed}
          step={0.1}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
        />
        <div style={{ height: '20px' }} />

        <label
          htmlFor="speed"
          style={{
            marginRight: '50px',
            width: '350px',
            display: 'inline-block',
          }}
        >
          Sparkle Size: <span style={{ color: 'green' }}>{size}</span>
        </label>
        <input
          type="range"
          name="speed"
          id="speed"
          min={1}
          max={100}
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value))}
        />
      </form>
      <button onClick={() => setUseSprite(!useSprite)}>Toggle sprite</button>
    </div>
  );
}

export default App;
