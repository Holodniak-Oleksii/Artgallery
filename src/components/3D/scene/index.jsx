/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense} from "react";
import { Canvas,  } from "@react-three/fiber";
import {
  OrbitControls,
  Html,
  Center,
  Bounds,
  useProgress
} from "@react-three/drei";
import { LoadGLTF } from "../load";


const Scene = ({ url }) => {
  const { progress } = useProgress()
  return (
    <Canvas style={{ pointerEvents: "visible" }} shadows>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={<Html center><p>{progress.toFixed(1) + '%'} </p></Html>}>
        <Bounds fit clip observe damping={6} margin={1.2}>
          <Center center>
            <LoadGLTF url={url} />
          </Center>
        </Bounds>
      </Suspense>
    </Canvas>
  );
};
export default Scene