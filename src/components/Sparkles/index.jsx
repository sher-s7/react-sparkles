import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Sparkle from './Sparkle';

const Sparkles = ({
  sparkleCount,
  sparkleSize,
  color,
  flickerDuration,
  width,
  height,
  sprite,
  type,
  overflow,
  style,
}) => {
  const sparklesContainer = useRef();
  const [refExists, setRefExists] = useState(false);

  const getRandPos = (randInt, axis) => {
    return axis === 'y'
      ? `${randInt * sparklesContainer.current.clientHeight}px`
      : `${randInt * sparklesContainer.current.clientWidth}px`;
  };

  useEffect(() => {
    sparklesContainer.current ? setRefExists(true) : setRefExists(false);
  }, [sparklesContainer]);
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
        ...style,
      }}
    >
      {Array.from(Array(sparkleCount)).map((x, index) => (
        <Sparkle
          sprite={sprite}
          size={sparkleSize}
          color={color}
          flickerDuration={flickerDuration}
          key={index}
          type={type}
          position={{
            top:
              type === 'random' && refExists
                ? getRandPos(Math.random(), 'y')
                : 'auto',
            left:
              type === 'random' && refExists
                ? getRandPos(Math.random(), 'x')
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
  flickerDuration: 0.5,
  width: '200px',
  height: '200px',
  type: 'random',
  overflow: 'visible',
};

Sparkles.propTypes = {
  sparkleCount: PropTypes.number,
  sparkleSize: PropTypes.object,
  color: PropTypes.string,
  flickerDuration: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  sprite: PropTypes.string,
  type: PropTypes.string,
  overflow: PropTypes.string,
  style: PropTypes.object,
};
export default Sparkles;
