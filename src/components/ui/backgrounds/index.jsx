import React from 'react';

const AnimatedBackground = () => {
  return (
    <div class="area">
      <ul class="circles">
        {[...Array(12)].map((x, i) => (
          <li key={i} />
        ))}
      </ul>
    </div>
  );
};

export default AnimatedBackground;
