import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroObject() {
  const groupRef = useRef();
  const icosahedronRef = useRef();
  const torusRef = useRef();
  const sphereRef = useRef();
  const { pointer } = useThree();

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    
    // Rotate entire group slowly
    groupRef.current.rotation.y = time * 0.05;
    groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;

    // React to cursor (spring lerp toward mouse)
    const targetX = pointer.x * 0.3;
    const targetY = pointer.y * 0.3;
    
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
    groupRef.current.rotation.z += (pointer.x * 0.1 - groupRef.current.rotation.z) * 0.05;

    // Individual element rotations
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = time * 0.1;
      icosahedronRef.current.rotation.z = time * 0.15;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.15;
      torusRef.current.rotation.y = time * -0.1;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time * 2) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={groupRef}>
        {/* Core Soft Icosahedron - Frosted Glass */}
        <mesh ref={icosahedronRef} scale={1.8}>
          <icosahedronGeometry args={[1, 3]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={2}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color="#ffffff"
            transmission={1}
            roughness={0.1}
            ior={1.5}
          />
        </mesh>
        
        {/* Inner solid core - vibrant accent */}
        <mesh scale={0.8}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#ff3b30"
            emissive="#ff9500"
            emissiveIntensity={0.4}
            roughness={0.2}
          />
        </mesh>

        {/* Orbiting Torus - Soft matte white */}
        <mesh ref={torusRef} scale={2.4}>
          <torusGeometry args={[1, 0.04, 32, 100]} />
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>

        {/* Floating smooth spheres */}
        <mesh ref={sphereRef} position={[2.2, 1.2, 0]} scale={0.3}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            color="#0066cc" 
            roughness={0.1} 
            metalness={0.2} 
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        <mesh position={[-2, -1.8, 1]} scale={0.4}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.2} 
            metalness={0.1}
            clearcoat={1}
          />
        </mesh>
      </group>
    </Float>
  );
}
