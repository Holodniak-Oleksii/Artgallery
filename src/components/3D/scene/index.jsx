/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center, Bounds } from '@react-three/drei';
import { LoadGLTF } from '../load';
import Loading from '../loading';

const Scene = ({ url, setProgress }) => {
  return (
    <Canvas shadows>
      <OrbitControls makeDefault />
      <ambientLight intensity={1.3} />
      <directionalLight
        intensity={0.4}
        castShadow
      />
      <Suspense fallback={<Loading setProgress={setProgress} />}>
        <Bounds
          fit
          clip
          // observe
          damping={6}
          margin={1.2}
        >
          <Center center>
            <LoadGLTF url={url} />
          </Center>
        </Bounds>
      </Suspense>
    </Canvas>
  );
};
export default Scene;
