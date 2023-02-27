/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, useContext, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Html,
  Center,
  Bounds,
  useBounds,
} from "@react-three/drei";
import { Vector3 } from "three";
import { LoadGLTF } from "../load";
import { imageContext } from "../../../modules/create";


export const Preloader3D = ({ url, format }) => {
  switch (format) {
    case "glb":
    case "gltf":
      return <Scene url={url} />;
    default:
      return <div>Can not load</div>;
  }
};

const Scene = ({ url }) => {
  const { image, setImage } = useContext(imageContext);

  const Refresh = () => {
    const bounds = useBounds();
    useEffect(() => {
      bounds.refresh();
      bounds.clip();
      bounds.fit();
    }, [url]);
    return <></>;
  };

  const GetImage = () => {
    const { gl, scene, camera } = useThree();

    useEffect(() => {
      if (image.click) {
        gl.render(scene, camera);
        let image = gl.domElement.toDataURL("image/png", 1);
        setImage({click: false, image: image });
      }
    }, [image]);

    return <></>;
  };

  return (
    <Canvas style={{ pointerEvents: "visible" }} shadows>
      <OrbitControls makeDefault position={new Vector3(0, 0, 100)} />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={<Html center>Loading...</Html>}>
        <Bounds fit clip observe damping={6} margin={1.2}>
          <Center center>
            <LoadGLTF url={url} />
            <Refresh />
            <GetImage />
          </Center>
        </Bounds>
      </Suspense>
    </Canvas>
  );
};
