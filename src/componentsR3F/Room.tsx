import { FC } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

//model

const Room: FC = () => {
  const gltf = useLoader(GLTFLoader, './models/model.gltf')

  return (
    <>
      <primitive object={gltf.scene} receiveShadow castShadow scale={[1, 1, 1]} />
    </>
  )
}

export default Room
