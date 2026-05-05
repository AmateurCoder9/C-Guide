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
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
      }
      if (ringRef.current) {
        const size = hovering ? 48 : 28;
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
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#818cf8',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
          transition: 'background 0.2s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: hovering ? '2px solid rgba(34, 211, 238, 0.8)' : '1.5px solid rgba(129, 140, 248, 0.6)',
          background: hovering ? 'rgba(79, 70, 229, 0.15)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 99998,
          transition: 'width 0.3s ease, height 0.3s ease, border 0.3s ease, background 0.3s ease',
          boxShadow: hovering
            ? '0 0 20px rgba(34, 211, 238, 0.3)'
            : '0 0 8px rgba(129, 140, 248, 0.2)',
        }}
      />
    </>
  );
}
