import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="area">
      <ul className="circles">
        {[...Array(12)].map((x, i) => (
          <li key={i} />
        ))}
      </ul>
    </div>
  );
};

export default AnimatedBackground;
