import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField({ count = 200, color = '#2563eb' }) {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      scales[i] = Math.random() * 0.5 + 0.1;
      speeds[i] = Math.random() * 0.3 + 0.1;
    }
    return { positions, scales, speeds };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;
    const pos = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3 + 1] += Math.sin(time * particles.speeds[i] + i) * 0.002;
      pos[i3] += Math.cos(time * particles.speeds[i] * 0.5 + i) * 0.001;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.02;

    // Subtle light movement
    if (light.current) {
      light.current.position.x = Math.sin(time * 0.3) * 5;
      light.current.position.y = Math.cos(time * 0.2) * 3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight ref={light} color={color} intensity={1.5} distance={20} />
      <pointLight position={[-5, 3, -5]} color="#06b6d4" intensity={0.8} distance={15} />

      <points ref={mesh} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particles.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color={color}
          transparent
          opacity={0.6}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}
