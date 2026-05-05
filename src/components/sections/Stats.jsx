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
  { label: 'Topics Covered', value: 43, suffix: '+' },
  { label: 'Code Examples', value: 60, suffix: '+' },
  { label: 'Cost', value: 0, suffix: '$' }
];

export default function Stats() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-white/5 border-y border-white/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.4 }}
              className="text-center px-4"
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text mb-4 tracking-tighter" style={{ letterSpacing: '-0.05em' }}>
                {stat.suffix === '$' && <span className="text-primary">$</span>}
                <AnimatedNumber value={stat.value} />
                {stat.suffix !== '$' && <span className="text-primary-light">{stat.suffix}</span>}
              </div>
              <div className="text-base font-bold text-text-secondary uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
