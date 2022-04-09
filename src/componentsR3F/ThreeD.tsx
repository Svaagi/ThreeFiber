import { FC, Suspense } from 'react'
import { useThree } from '@react-three/fiber'
import Room from './Room'
import { useNavigate } from 'react-router';


const ThreeD: FC = () => { 
  let check = 0;
  const { camera } = useThree();
  camera.position.set(-150,150,150)
  camera.rotation.set(0,-0.73,0)

  //route buttons
  const navigate = useNavigate();

  function rAboutus() {
    navigate('/aboutus')
  }
  function rProjects() {
    navigate('/projects')
  }
  //checking camera position

  const setCameraMain = () => {
    if (check === 1) {
      camera.position.set(32,104,-30)
      camera.rotation.set(0,0,0)
      check = 2
    }
    else {
      camera.position.set(-150,150,150)
      camera.rotation.set(0,-0.73,0)
     
      check = 1
    }
  }
  const setCameraComputer = () => {
    if (check === 2) {
      camera.position.set(-150,150,150)
      camera.rotation.set(0,-0.73,0)
      check = 1
    }
    else {
      camera.position.set(32,104,-30)
      camera.rotation.set(0,0,0)
     
      check = 2
    }
  }
  const setCameraBooks = () => {
    if (check === 3) {
      camera.position.set(-150,150,150)
      camera.rotation.set(0,-0.73,0)
      check = 1
    }
    else {
      camera.position.set(-60, 150, -30)
      camera.rotation.set(0,0,0)
     
      check = 3
    }
  }

  //3D scene
  return (
    
      <Suspense fallback={null}>
        <pointLight color='#ffffe0' intensity={0.5} castShadow position={[-20,170,-90]} />
        <pointLight color='#ffffe0' intensity={0.2} castShadow  position={[200,10,-50]} />
        <pointLight color='#ffffe0' intensity={0.1} castShadow  position={[-150,150,150]} />
        <Room />
        <mesh onClick={setCameraMain} position={[-100, 150, 150]}>
          <boxGeometry args={[5,5,5]} />
          <meshStandardMaterial color="green" />
        </mesh>
        <mesh onClick={setCameraComputer} position={[32, 130, -100]}>
          <boxGeometry args={[10,10,10]} />
          <meshStandardMaterial color="green" />
        </mesh>
        <mesh onClick={setCameraBooks} position={[-60, 130, -130]}>
          <boxGeometry args={[10,10,10]} />
          <meshStandardMaterial color="green" />
        </mesh>
        <mesh onClick={rAboutus} position={[32, 104, -105]}>
          <boxGeometry args={[10,10,10]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <mesh onClick={rProjects}  position={[-60, 150, -130]}>
          <boxGeometry args={[10,10,10]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Suspense>
    
  )
}


export default ThreeD