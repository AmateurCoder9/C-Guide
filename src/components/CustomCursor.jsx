import { useEffect, useRef, useState } from 'react';

function isMobile() {
  return typeof window !== 'undefined' && window.innerWidth < 768;
}

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (isMobile()) return;

    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const handleOver = (e) => {
      const el = e.target;
      if (
        el.tagName === 'BUTTON' || el.tagName === 'A' ||
        el.closest('button') || el.closest('a') ||
        el.closest('[data-interactive]')
      ) {
        setHovering(true);
      }
    };

    const handleOut = (e) => {
      const el = e.target;
      if (
        el.tagName === 'BUTTON' || el.tagName === 'A' ||
        el.closest('button') || el.closest('a') ||
        el.closest('[data-interactive]')
      ) {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    let raf;
    const tick = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15; // Faster spring for iOS feel
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        const size = hovering ? 56 : 32;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(raf);
    };
  }, [hovering]);

  if (isMobile()) return null;

  return (
    <>
      {/* Center dot - iOS black */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#1d1d1f',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'background 0.2s',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}
      />
      {/* Outer ring - soft glass */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: hovering ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid rgba(0, 0, 0, 0.1)',
          background: hovering ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
          backdropFilter: hovering ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: hovering ? 'blur(8px)' : 'none',
          pointerEvents: 'none',
          zIndex: 99998,
          transition: 'width 0.4s cubic-bezier(0.32, 0.72, 0, 1), height 0.4s cubic-bezier(0.32, 0.72, 0, 1), background 0.3s ease, backdrop-filter 0.3s ease',
          boxShadow: hovering
            ? '0 8px 32px rgba(0, 0, 0, 0.08)'
            : 'none',
        }}
      />
    </>
  );
}
