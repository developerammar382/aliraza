
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = ({ position = [0, 0, 0], size = 1, color = '#4fd1c5' }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });
  
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} />
    </mesh>
  );
};

const AnimatedTorus = ({ position = [0, 0, 0], size = 1, color = '#ff63c3' }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });
  
  return (
    <mesh ref={mesh} position={position}>
      <torusGeometry args={[size, size / 3, 16, 50]} />
      <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} />
    </mesh>
  );
};

const AnimatedBox = ({ position = [0, 0, 0], size = 1, color = '#4299e1' }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });
  
  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} />
    </mesh>
  );
};

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" />
        
        <Float floatIntensity={3} rotationIntensity={2} speed={2}>
          <AnimatedSphere position={[-2, 0, 0]} size={1} />
        </Float>
        
        <Float floatIntensity={2} rotationIntensity={1.5} speed={1.5}>
          <AnimatedTorus position={[2, 0, 0]} size={1} />
        </Float>
        
        <Float floatIntensity={1} rotationIntensity={1} speed={1}>
          <AnimatedBox position={[0, 0, -2]} size={1} />
        </Float>
        
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
