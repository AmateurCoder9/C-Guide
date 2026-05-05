import { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

const ParticleField = lazy(() => import('./ParticleField'));
const ShaderBackground = lazy(() => import('./ShaderBackground'));

function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
}

// Cursor-following light
function CursorLight() {
  const lightRef = useRef();
  useFrame((state) => {
    if (!lightRef.current) return;
    lightRef.current.position.x += (state.pointer.x * 8 - lightRef.current.position.x) * 0.1;
    lightRef.current.position.y += (state.pointer.y * 5 - lightRef.current.position.y) * 0.1;
  });
  return <pointLight ref={lightRef} color="#06b6d4" intensity={2} distance={15} />;
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
          antialias: false, // Disabled for postprocessing
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
        
        <ambientLight intensity={0.2} color="#1a0533" />
        <CursorLight />

        <Suspense fallback={null}>
          <ShaderBackground />
          {showParticles && (
            <ParticleField count={mobile ? 800 : 4000} />
          )}
          
          {!mobile && (
            <EffectComposer disableNormalPass multisampling={0}>
              <Bloom 
                luminanceThreshold={0.4} 
                mipmapBlur 
                intensity={1.8} 
              />
              <ChromaticAberration 
                blendFunction={BlendFunction.NORMAL} 
                offset={[0.003, 0.003]} 
              />
              <Vignette 
                eskil={false} 
                offset={0.1} 
                darkness={0.6} 
              />
            </EffectComposer>
          )}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
