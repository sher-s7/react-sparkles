import React from 'react';

const Sparkle = ({ position, sprite, color, size, flickerSpeed, type }) =>
  !sprite ? (
    <div
      className="flicker-sparkle"
      style={{
        position: type === 'random' ? 'absolute' : 'relative',
        width: size.width,
        height: size.height,
        background: color ? color : '#f4ea6e',
        transform: `rotate(${Math.random() * 360}deg) ${type === 'random' ? 'translate(-50%, -50%)' : null}`,
        animation: `flicker ${(Math.random() + flickerSpeed).toFixed(2)}s ease alternate infinite`,
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
        animation: `flicker ${(Math.random() + flickerSpeed).toFixed(2)}s ease alternate infinite`,
        animationDelay: `${Math.random().toFixed(2)}s`,
        top: position.top,
        left: position.left,
      }}
    />
  );

export default Sparkle;
