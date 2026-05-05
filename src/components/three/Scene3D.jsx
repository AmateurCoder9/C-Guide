import { Suspense, lazy, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';

const ParticleField = lazy(() => import('./ParticleField'));

function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
}

export default function Scene3D({ className = '', showParticles = true }) {
  const [canRender, setCanRender] = useState(false);
  const mobile = isMobile();

  useEffect(() => {
    // Defer 3D rendering to avoid blocking initial paint
    const timer = setTimeout(() => setCanRender(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!canRender) return null;

  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: 'none' }}>
      <Canvas
        dpr={mobile ? [1, 1.5] : [1, 2]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{
          antialias: !mobile,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
        }}
        style={{ background: 'transparent' }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Suspense fallback={null}>
          {showParticles && (
            <ParticleField count={mobile ? 80 : 200} />
          )}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
