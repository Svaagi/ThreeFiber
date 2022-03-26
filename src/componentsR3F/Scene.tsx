import { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeD from './ThreeD';

//canvas for 3D

const Scene: FC = () => { 
  return (
    <div style={{ width: "100vw", height: "100vh",position: 'fixed', zIndex: -1, top:0, left:0 }}>
      <Canvas>
        <ThreeD />
      </Canvas>
    </div>
  )
}

export default Scene;