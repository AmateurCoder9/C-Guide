import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// --- Lightweight wireframe shape ---
function WireShape({ position, scale, speed, rotAxis, geometry }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.rotation.x = rotAxis[0] * t;
    ref.current.rotation.y = rotAxis[1] * t;
    ref.current.rotation.z = rotAxis[2] * t;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {geometry}
      <meshBasicMaterial
        color="#2d2a20"
        wireframe
        transparent
        opacity={0.06}
        depthWrite={false}
      />
    </mesh>
  );
}

// --- Soft floating orb ---
function SoftOrb({ position, size, color, speed, offset }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = position[0] + Math.sin(t * 0.7) * 0.8;
    ref.current.position.y = position[1] + Math.cos(t * 0.5) * 0.6;
  });

  return (
    <mesh ref={ref} position={position} scale={size}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.08}
        depthWrite={false}
      />
    </mesh>
  );
}

// --- Thin ring ---
function FloatingRing({ position, scale, speed, axis }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.rotation.x = axis[0] * t;
    ref.current.rotation.y = axis[1] * t;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusGeometry args={[1, 0.02, 16, 64]} />
      <meshBasicMaterial
        color="#2d2a20"
        transparent
        opacity={0.08}
        depthWrite={false}
      />
    </mesh>
  );
}

// --- Scattered dots (instanced for performance) ---
function ScatteredDots({ count = 60 }) {
  const meshRef = useRef();

  const { positions, scales } = useMemo(() => {
    const pos = [];
    const sc = [];
    for (let i = 0; i < count; i++) {
      pos.push(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15 - 5
      );
      sc.push(0.02 + Math.random() * 0.04);
    }
    return { positions: pos, scales: sc };
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const x = positions[i * 3] + Math.sin(t * 0.2 + i) * 0.3;
      const y = positions[i * 3 + 1] + Math.cos(t * 0.15 + i * 0.5) * 0.2;
      const z = positions[i * 3 + 2];
      dummy.position.set(x, y, z);
      dummy.scale.setScalar(scales[i]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#2d2a20" transparent opacity={0.12} depthWrite={false} />
    </instancedMesh>
  );
}

// --- Scene ---
function Scene() {
  return (
    <>
      {/* Minimal ambient */}
      <ambientLight intensity={0.5} />

      {/* Wireframe shapes — spread across the whole viewport */}
      <WireShape position={[-8, 4, -6]} scale={2.5} speed={0.08} rotAxis={[0.3, 0.5, 0.1]} geometry={<icosahedronGeometry args={[1, 0]} />} />
      <WireShape position={[9, -3, -8]} scale={3} speed={0.06} rotAxis={[0.2, 0.3, 0.4]} geometry={<octahedronGeometry args={[1, 0]} />} />
      <WireShape position={[-5, -5, -4]} scale={1.8} speed={0.1} rotAxis={[0.5, 0.2, 0.3]} geometry={<dodecahedronGeometry args={[1, 0]} />} />
      <WireShape position={[6, 5, -10]} scale={2.2} speed={0.07} rotAxis={[0.1, 0.4, 0.2]} geometry={<tetrahedronGeometry args={[1, 0]} />} />
      <WireShape position={[0, -7, -5]} scale={2} speed={0.09} rotAxis={[0.4, 0.1, 0.5]} geometry={<icosahedronGeometry args={[1, 1]} />} />
      <WireShape position={[-10, 0, -7]} scale={1.5} speed={0.12} rotAxis={[0.2, 0.6, 0.1]} geometry={<octahedronGeometry args={[1, 0]} />} />
      <WireShape position={[12, 2, -9]} scale={2.8} speed={0.05} rotAxis={[0.3, 0.2, 0.3]} geometry={<dodecahedronGeometry args={[1, 0]} />} />
      <WireShape position={[-3, 7, -6]} scale={1.6} speed={0.11} rotAxis={[0.6, 0.3, 0.2]} geometry={<tetrahedronGeometry args={[1, 0]} />} />

      {/* Thin floating rings */}
      <FloatingRing position={[-7, -2, -5]} scale={2} speed={0.15} axis={[0.5, 0.3]} />
      <FloatingRing position={[8, 3, -7]} scale={3} speed={0.1} axis={[0.3, 0.5]} />
      <FloatingRing position={[2, -6, -4]} scale={1.5} speed={0.18} axis={[0.4, 0.2]} />
      <FloatingRing position={[-11, 5, -8]} scale={2.5} speed={0.08} axis={[0.2, 0.4]} />

      {/* Soft aura orbs — very faint, large, spread out */}
      <SoftOrb position={[-6, 3, -12]} size={5} color="#a19365" speed={0.2} offset={0} />
      <SoftOrb position={[7, -4, -14]} size={6} color="#C2B280" speed={0.15} offset={2} />
      <SoftOrb position={[0, 6, -10]} size={4} color="#d4c7a1" speed={0.25} offset={4} />
      <SoftOrb position={[-9, -3, -11]} size={5.5} color="#8b7d4b" speed={0.18} offset={1} />
      <SoftOrb position={[10, 1, -13]} size={4.5} color="#C2B280" speed={0.22} offset={3} />

      {/* Instanced scattered dots */}
      <ScatteredDots count={50} />
    </>
  );
}

// --- Exported Component ---
export default function AuraBackground() {
  return (
    <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
        }}
        style={{ background: 'transparent' }}
        frameloop="always"
      >
        <Scene />
      </Canvas>
    </div>
  );
}
