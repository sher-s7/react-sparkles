import React from 'react';

const Sparkle = ({ position, sprite, color, size, flickerDuration, type }) =>
  !sprite ? (
    <div
      className="flicker-sparkle"
      style={{
        position: type === 'random' ? 'absolute' : 'relative',
        width: size.width,
        height: size.height,
        background: color ? color : '#f4ea6e',
        transform: `rotate(${Math.random() * 360}deg) ${type === 'random' ? 'translate(-50%, -50%)' : null}`,
        animationName: 'flicker',
        animationDuration: `${(Math.random() + flickerDuration).toFixed(2)}s`,
        animationTimingFunction: 'ease',
        animationDirection: 'alternate',
        animationIterationCount: 'infinite',
        animationDelay: `${Math.random().toFixed(2)}s`,
        top: position.top,
        left: position.left,
      }}
    />
  ) : (
    <img
      src={sprite}
      alt="sprite"
      className="flicker-sparkle"
      style={{
        position: type === 'random' ? 'absolute' : 'relative',
        width: size.width,
        height: size.height,
        transform: `rotate(${Math.random() * 360}deg) ${type === 'random' ? 'translate(-50%, -50%)' : ''}`,
        animationName: 'flicker',
        animationDuration: `${(Math.random() + flickerDuration).toFixed(2)}s`,
        animationTimingFunction: 'ease',
        animationDirection: 'alternate',
        animationIterationCount: 'infinite',
        animationDelay: `${Math.random().toFixed(2)}s`,
        top: position.top,
        left: position.left,
      }}
    />
  );

export default Sparkle;
