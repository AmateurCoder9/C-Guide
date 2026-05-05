import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import AnimateIn from './ui/AnimateIn';

const stats = [
  { value: 7, label: 'Chapters', suffix: '', prefix: '' },
  { value: 35, label: 'Topics', suffix: '+', prefix: '' },
  { value: 100, label: 'Code Examples', suffix: '+', prefix: '' },
  { value: 0, label: 'Cost', suffix: '', prefix: '₹' },
];

function AnimatedNumber({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <AnimateIn>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary-light uppercase tracking-wider">By the numbers</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
              Built for serious learners
            </h2>
          </div>
        </AnimateIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:border-primary/30" id={`stat-${i}`}>
                <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary-light to-cyan-400 bg-clip-text text-transparent mb-2">
                  <AnimatedNumber value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p className="text-slate-400 font-medium text-sm">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
