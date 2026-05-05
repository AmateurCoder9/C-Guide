import { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

const ParticleField = lazy(() => import('./ParticleField'));
const ShaderBackground = lazy(() => import('./ShaderBackground'));

function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
}

// Cursor-following light (soft blue)
function CursorLight() {
  const lightRef = useRef();
  useFrame((state) => {
    if (!lightRef.current) return;
    lightRef.current.position.x += (state.pointer.x * 8 - lightRef.current.position.x) * 0.1;
    lightRef.current.position.y += (state.pointer.y * 5 - lightRef.current.position.y) * 0.1;
  });
  return <pointLight ref={lightRef} color="#47a1ff" intensity={1} distance={15} />;
}

export default function Scene3D({ className = '', showParticles = true }) {
  const [canRender, setCanRender] = useState(false);
  const [dpr, setDpr] = useState(1);
  const mobile = isMobile();

  useEffect(() => {
    const timer = setTimeout(() => setCanRender(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!canRender) return null;

  return (
    <div className={`absolute inset-0 ${className}`} style={{ zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
        }}
        style={{ background: 'transparent' }}
      >
        <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(mobile ? 1 : 2)} />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        
        <ambientLight intensity={1.5} color="#ffffff" />
        <CursorLight />

        <Suspense fallback={null}>
          <ShaderBackground />
          {showParticles && (
            <ParticleField count={mobile ? 800 : 3000} />
          )}
          
          {!mobile && (
            <EffectComposer disableNormalPass multisampling={0}>
              <Bloom 
                luminanceThreshold={0.8} 
                mipmapBlur 
                intensity={0.4} 
              />
              <ChromaticAberration 
                blendFunction={BlendFunction.NORMAL} 
                offset={[0.001, 0.001]} 
              />
            </EffectComposer>
          )}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
