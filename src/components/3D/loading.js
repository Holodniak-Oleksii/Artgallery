import { Html, useProgress } from '@react-three/drei';
import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  z-index: 6;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 7;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 10px;
  }
`;

const Loading = ({ setProgress }) => {
  const { progress, active } = useProgress();

  useEffect(() => {
    if (typeof setProgress === 'function') {
      setProgress(!active);
    }
  }, [active]);

  return (
    <Html center>
      <Container>
        <span>{progress.toFixed(0)}</span> <div className={'spinner'} />
      </Container>
    </Html>
  );
};
export default Loading;
