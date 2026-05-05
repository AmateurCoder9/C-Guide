import { Suspense, lazy, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, Environment } from '@react-three/drei';

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
        
        {/* Soft, airy studio lighting */}
        <ambientLight intensity={1.2} color="#ffffff" />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#e0e0e0" />
        <pointLight position={[0, 5, 5]} intensity={1} color="#0066cc" />
        
        <Environment preset="city" />

        <Suspense fallback={null}>
          <HeroObject />
        </Suspense>
      </Canvas>
    </div>
  );
}
