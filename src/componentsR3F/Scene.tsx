import { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeD from './ThreeD';
import { useNavigate } from 'react-router-dom';

//canvas for 3D

const Scene: FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100vw", height: "100vh",position: 'fixed', zIndex: -1, top:0, left:0 }}>
      <Canvas shadows>
        <ThreeD navigate={navigate}/>
      </Canvas>
    </div>
  )
}

export default Scene;