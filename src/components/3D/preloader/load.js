import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useLoader} from '@react-three/fiber'

export const LoadGLTF = ({url}) => {
  const gltf = useLoader(GLTFLoader, url)
  return <primitive object={gltf.scene} />
}
