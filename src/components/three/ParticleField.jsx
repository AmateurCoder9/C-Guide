import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField({ count = 3000 }) {
  const meshRef = useRef();
  const { pointer } = useThree();
  const mousePos = useRef(new THREE.Vector3(0, 0, 0));

  const { positions, velocities, basePositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 30;
      pos[i3 + 1] = (Math.random() - 0.5) * 30;
      pos[i3 + 2] = (Math.random() - 0.5) * 20 - 5;
      base[i3] = pos[i3];
      base[i3 + 1] = pos[i3 + 1];
      base[i3 + 2] = pos[i3 + 2];
      vel[i3] = 0;
      vel[i3 + 1] = 0;
      vel[i3 + 2] = 0;
    }
    return { positions: pos, velocities: vel, basePositions: base };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    const pos = meshRef.current.geometry.attributes.position.array;

    // Convert pointer to 3D space
    mousePos.current.x += (pointer.x * 8 - mousePos.current.x) * 0.08;
    mousePos.current.y += (pointer.y * 5 - mousePos.current.y) * 0.08;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Drift
      pos[i3] += Math.sin(time * 0.1 + i * 0.01) * 0.003;
      pos[i3 + 1] += Math.cos(time * 0.08 + i * 0.02) * 0.002;

      // Cursor repulsion
      const dx = pos[i3] - mousePos.current.x;
      const dy = pos[i3 + 1] - mousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 3.0) {
        const force = (3.0 - dist) * 0.008;
        velocities[i3] += (dx / dist) * force;
        velocities[i3 + 1] += (dy / dist) * force;
      }

      // Apply velocity + damping
      pos[i3] += velocities[i3];
      pos[i3 + 1] += velocities[i3 + 1];
      velocities[i3] *= 0.96;
      velocities[i3 + 1] *= 0.96;

      // Pull back to base position
      pos[i3] += (basePositions[i3] - pos[i3]) * 0.002;
      pos[i3 + 1] += (basePositions[i3 + 1] - pos[i3 + 1]) * 0.002;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#0066cc" // Apple blue for particles
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.NormalBlending} // Normal blending looks better on light bgs
      />
    </points>
  );
}
