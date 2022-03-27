import { FC, Suspense } from 'react'
import { useThree } from '@react-three/fiber'
import Room from './Room'


const ThreeD: FC = () => { 
  let check = true;
  const { camera } = useThree();
  camera.position.set(-150,150,150)
  camera.rotation.set(0,-0.73,0)

  //checking if camera is in left or right position

  const setCameraRight = () => {
    if (check) {
      camera.position.set(-150,150,150)
      camera.rotation.set(0,-0.73,0)
      check = false
    }
    else {
      camera.position.set(32,104,-80)
      camera.rotation.set(0,0,0)
     
      check = true
    }
  }

  //3D scene
  return (
    
      <Suspense fallback={null}>
        <pointLight color='#ffffe0' intensity={0.5} castShadow position={[-20,170,-90]} />
        <pointLight color='#ffffe0' intensity={0.2} castShadow  position={[200,10,-50]} />
        <Room />
        <mesh onClick={setCameraRight} position={[-100, 150, 150]}>
          <boxGeometry args={[10,10,10]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Suspense>
    
  )
}


export default ThreeD