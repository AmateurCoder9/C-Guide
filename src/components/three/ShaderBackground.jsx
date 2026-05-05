import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
varying vec2 vUv;

// Simplex 3D noise
vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0/7.0;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

void main() {
  vec2 uv = vUv;
  vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
  vec2 st = uv * aspect;
  
  // Mouse influence (gentle warp)
  vec2 mouse = uMouse * aspect;
  float dist = distance(st, mouse);
  float warp = smoothstep(1.2, 0.0, dist) * 0.05;
  st += warp * normalize(st - mouse);
  
  // Layered noise for soft pastel clouds
  float t = uTime * 0.05;
  float n1 = snoise(vec3(st * 1.0, t)) * 0.5 + 0.5;
  float n2 = snoise(vec3(st * 2.0 + 10.0, t * 1.1)) * 0.5 + 0.5;
  float n3 = snoise(vec3(st * 4.0 + 20.0, t * 0.8)) * 0.5 + 0.5;
  
  // iOS 26 Light Palette
  vec3 eggshell = vec3(0.96, 0.96, 0.98);
  vec3 softBlue = vec3(0.85, 0.92, 1.0);
  vec3 softPeach = vec3(1.0, 0.90, 0.85);
  vec3 pureWhite = vec3(1.0, 1.0, 1.0);
  
  vec3 col = mix(eggshell, pureWhite, n1 * 0.8);
  col = mix(col, softBlue, n2 * 0.4);
  col = mix(col, softPeach, pow(n3, 2.0) * 0.2);
  
  // Cursor soft glow
  float cursorGlow = smoothstep(0.8, 0.0, dist) * 0.15;
  col += vec3(0.0, 0.2, 0.8) * cursorGlow;
  
  // Subtle bright vignette to keep edges clean
  float vig = smoothstep(0.0, 1.5, length(uv - 0.5));
  col = mix(col, pureWhite, vig * 0.3);
  
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function ShaderBackground() {
  const meshRef = useRef();
  const { size } = useThree();
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
  }), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material;
    mat.uniforms.uTime.value = state.clock.elapsedTime;

    // Smooth mouse lerp
    const pointer = state.pointer;
    mouse.current.x += ((pointer.x * 0.5 + 0.5) - mouse.current.x) * 0.05;
    mouse.current.y += ((pointer.y * 0.5 + 0.5) - mouse.current.y) * 0.05;
    mat.uniforms.uMouse.value.copy(mouse.current);
    mat.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
}
