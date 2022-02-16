import { FC } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Room: FC = () => {
  const gltf = useLoader(GLTFLoader, './models/model.gltf')

  return (
    <>
      <primitive object={gltf.scene} scale={[1, 1, 1]} />
    </>
  )
}

export default Room
