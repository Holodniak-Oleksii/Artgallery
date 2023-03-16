const Matrix = () => (
  <svg style={{ position: "absolute" }}>
    <filter id='filter-matrix'>
      <feGaussianBlur in='SourceGraphic' stdDeviation='10' />
      <feColorMatrix
        values={`
    1 0 0 0 0 
    0 1 0 0 0
    0 0 1 0 0
    0 0 0 20 -10
    `}
      />
    </filter>
  </svg>
);

export default Matrix;
