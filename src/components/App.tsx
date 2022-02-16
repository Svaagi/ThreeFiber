import { FC, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Room from './Room'
import Page from './Page';


const App: FC = () => {
  const xPostion = -150
  const yPosition = 150
  const zPositon = 150
  const cam1 = [xPostion, yPosition, zPositon]

  return (
    <div>
    <Page />
    <div style={{ width: "100vw", height: "100vh",position: 'fixed', zIndex: -1, top:0, left:0 }}>
      <Canvas camera={{ position: [cam1[0], cam1[1], cam1[2]] }}>
        <Suspense fallback={null}>
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <Room />
        </Suspense>
      </Canvas>
    </div>

    </div>
  )
}

export default App
