import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const updateNumber = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setDisplayValue(Math.floor(easeProgress * value));

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(updateNumber);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

const stats = [
  { label: 'Core Chapters', value: 7, suffix: '' },
  { label: 'Topics Covered', value: 30, suffix: '+' },
  { label: 'Code Examples', value: 90, suffix: '+' },
  { label: 'Cost', value: 0, suffix: '$' }
];

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-[#0d0d18] border-y border-[rgba(129,140,248,0.1)]" />
      
      {/* Glow Orbs */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-x divide-[rgba(255,255,255,0.05)]">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring" }}
              className="text-center px-4"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                {stat.suffix === '$' && <span className="text-accent">$</span>}
                <AnimatedNumber value={stat.value} />
                {stat.suffix !== '$' && <span className="text-primary-light">{stat.suffix}</span>}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
