import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

function Canvas3D({isRotating}) {
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    let frameId;

    const animate = () => {
      if (isRotating) {
        setRotation([0, rotation[1] + 0.005, 0]); // Ajusta el valor para la velocidad de rotación
        frameId = requestAnimationFrame(animate);
      }
    };

    if (isRotating) {
      frameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isRotating, rotation]);

  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 9 }}
      style={{
        backgroundColor: '#111a21',
        borderRadius: '50%',
        maxHeight: '100vh',
      }}
    >
      <ambientLight intensity={1.15} />
      <ambientLight intensity={0.3} />
      <directionalLight intensity={0.7} />
      <Suspense fallback={null}>
        <Model position={[0.025, -0.9, 0]} rotation={rotation} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default Canvas3D;