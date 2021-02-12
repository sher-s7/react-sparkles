import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Sparkle from './Sparkle';

const Sparkles = ({
  sparkleCount,
  sparkleSize,
  color,
  flickerSpeed,
  width,
  height,
  sprite,
  type,
  overflow,
  ...props
}) => {
  const sparklesContainer = useRef();
  return (
    <div
      ref={sparklesContainer}
      
      style={{
        width: width,
        height: height,
        position: 'relative',
        display: type === 'random' ? 'block' : 'flex',
        flexDirection: type === 'vertical' ? 'column' : 'row',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        pointerEvents: 'none',
        overflow,
        ...props
      }}
    >
      {Array.from(Array(sparkleCount)).map((x, index) => (
        <Sparkle
          sprite={sprite}
          size={sparkleSize}
          color={color}
          flickerSpeed={flickerSpeed}
          key={index}
          type={type}
          position={{
            top:
              type === 'random'
                ? `${Math.random() * sparklesContainer.current.clientHeight}px`
                : 'auto',
            left:
              type === 'random'
                ? `${Math.random() * sparklesContainer.current.clientWidth}px`
                : 'auto',
          }}
        />
      ))}
    </div>
  );
};

Sparkles.defaultProps = {
  sparkleCount: 1,
  sparkleSize: { width: '20px', height: '20px' },
  color: '#f4ea6e',
  flickerSpeed: 0.5,
  width: '200px',
  height: '200px',
  type: 'random',
  overflow: 'visible'
};

Sparkles.propTypes = {
  sparkleCount: PropTypes.number,
  sparkleSize: PropTypes.object,
  color: PropTypes.string,
  flickerSpeed: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  sprite: PropTypes.string,
  type: PropTypes.string,
  overflow: PropTypes.string
};
export default Sparkles;
