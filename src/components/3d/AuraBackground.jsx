import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

// --- Glass Prism Shape ---
function GlassPrism({ position, rotation, scale, speed = 0.3, geometry = 'torus' }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = rotation[0] + t * 0.5;
    meshRef.current.rotation.y = rotation[1] + t * 0.3;
    meshRef.current.rotation.z = rotation[2] + t * 0.2;
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case 'torus':
        return <torusGeometry args={[1, 0.4, 32, 64]} />;
      case 'sphere':
        return <sphereGeometry args={[1, 64, 64]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'torusKnot':
        return <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />;
      default:
        return <sphereGeometry args={[1, 64, 64]} />;
    }
  }, [geometry]);

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geo}
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.5}
          chromaticAberration={0.15}
          anisotropy={0.2}
          distortion={0.3}
          distortionScale={0.5}
          temporalDistortion={0.1}
          ior={1.5}
          color="#d4c7a1"
          attenuationColor="#C2B280"
          attenuationDistance={0.6}
          roughness={0.1}
          transmission={0.95}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

// --- Soft Aura Orb ---
function AuraOrb({ position, color, size = 2, speed = 0.5 }) {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.position.x = position[0] + Math.sin(t * 0.7) * 0.5;
    meshRef.current.position.y = position[1] + Math.cos(t * 0.5) * 0.4;
    meshRef.current.position.z = position[2] + Math.sin(t * 0.3) * 0.3;

    if (materialRef.current) {
      materialRef.current.opacity = 0.15 + Math.sin(t) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={size}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial
        ref={materialRef}
        color={color}
        transparent
        opacity={0.15}
        depthWrite={false}
      />
    </mesh>
  );
}

// --- Mouse-reactive camera ---
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mouse.current.y * 0.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  // Listen for mouse move
  useMemo(() => {
    const handler = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return null;
}

// --- Main Scene ---
function Scene() {
  return (
    <>
      <CameraRig />

      {/* Warm ambient light */}
      <ambientLight intensity={0.8} color="#f0ebd8" />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <directionalLight position={[-3, -3, 2]} intensity={0.3} color="#d4c7a1" />

      {/* Glass Prisms — scattered around */}
      <GlassPrism position={[-4, 2, -3]} rotation={[0.5, 0.3, 0]} scale={0.8} speed={0.2} geometry="torus" />
      <GlassPrism position={[4, -1, -4]} rotation={[0.2, 0.8, 0.1]} scale={0.6} speed={0.25} geometry="octahedron" />
      <GlassPrism position={[0, 3, -5]} rotation={[0.1, 0.5, 0.3]} scale={0.7} speed={0.15} geometry="icosahedron" />
      <GlassPrism position={[-3, -2, -2]} rotation={[0.8, 0.2, 0.5]} scale={0.5} speed={0.3} geometry="sphere" />
      <GlassPrism position={[3, 1.5, -6]} rotation={[0.3, 0.6, 0.2]} scale={0.9} speed={0.18} geometry="torusKnot" />

      {/* Aura Orbs — background glow */}
      <AuraOrb position={[-3, 1, -8]} color="#C2B280" size={4} speed={0.3} />
      <AuraOrb position={[4, -2, -10]} color="#d4c7a1" size={5} speed={0.2} />
      <AuraOrb position={[0, 3, -12]} color="#a19365" size={6} speed={0.15} />
      <AuraOrb position={[-5, -1, -6]} color="#E6DFC7" size={3.5} speed={0.4} />
      <AuraOrb position={[2, 0, -9]} color="#8b7d4b" size={4.5} speed={0.25} />
    </>
  );
}

// --- Exported Component ---
export default function AuraBackground() {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
