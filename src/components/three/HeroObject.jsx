import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroObject() {
  const groupRef = useRef();
  const icosahedronRef = useRef();
  const torusRef = useRef();
  const octahedronRef = useRef();
  const { pointer } = useThree();

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    
    // Rotate entire group slowly
    groupRef.current.rotation.y = time * 0.1;
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;

    // React to cursor (spring lerp toward mouse)
    const targetX = pointer.x * 0.5;
    const targetY = pointer.y * 0.5;
    
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
    groupRef.current.rotation.z += (pointer.x * 0.2 - groupRef.current.rotation.z) * 0.05;

    // Individual element rotations
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = time * 0.15;
      icosahedronRef.current.rotation.z = time * 0.1;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * -0.15;
    }
    if (octahedronRef.current) {
      octahedronRef.current.rotation.y = time * 0.3;
      octahedronRef.current.rotation.z = time * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
      <group ref={groupRef}>
        {/* Core Icosahedron */}
        <mesh ref={icosahedronRef} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#1a0533"
            roughness={0.1}
            metalness={0.9}
            distort={0.4}
            speed={2}
            transparent
            opacity={0.8}
            envMapIntensity={2}
          />
        </mesh>
        
        {/* Inner glow core */}
        <mesh scale={1.2}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#06b6d4"
            transparent
            opacity={0.2}
            emissive="#4f46e5"
            emissiveIntensity={0.8}
          />
        </mesh>

        {/* Orbiting Torus */}
        <mesh ref={torusRef} scale={2.5}>
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color="#22d3ee" 
            emissive="#06b6d4" 
            emissiveIntensity={0.5} 
            transparent 
            opacity={0.5} 
            wireframe
          />
        </mesh>

        {/* Floating Octahedrons */}
        <mesh ref={octahedronRef} position={[2.5, 1.5, 0]} scale={0.4}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial 
            color="#4f46e5" 
            roughness={0.2} 
            metalness={0.8} 
            envMapIntensity={1}
          />
        </mesh>
        
        <mesh position={[-2, -2, 1]} scale={0.3}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial 
            color="#f59e0b" 
            emissive="#f59e0b"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
            wireframe
          />
        </mesh>
      </group>
    </Float>
  );
}
