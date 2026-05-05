import { Suspense, lazy, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';

const HeroObject = lazy(() => import('./HeroObject'));

function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

export default function HeroScene() {
  const [ready, setReady] = useState(false);
  const mobile = isMobile();

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(t);
  }, []);

  if (!ready || mobile) return null;

  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.5} color="#1a0533" />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#4f46e5" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#06b6d4" />
        <Suspense fallback={null}>
          <HeroObject />
        </Suspense>
      </Canvas>
    </div>
  );
}
