import { FC, Suspense } from 'react'
import { useThree } from '@react-three/fiber'
import Room from './Room'


const ThreeD: FC = () => { 
  let check = true;
  const { camera } = useThree();
  camera.position.set(-150,150,150);
  camera.rotation.set(0,-0.73,0)

  //checking if camera is in left or right position

  const setCameraRight = () => {
    if (check) {
      camera.position.set(-150,150,150)
      camera.rotation.set(0,-0.73,0)
      check = false
    }
    else {
      camera.position.set(0,100,0)
      camera.rotation.set(0,0,0)
     
      check = true
    }
  }

  //3D scene
  return (
    <mesh onClick={setCameraRight}>
      <Suspense fallback={null}>
        <pointLight position={[10, 10, 10]} />
        <Room />   
      </Suspense>
    </mesh>
  )
}


export default ThreeD
