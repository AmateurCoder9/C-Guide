import { lazy, Suspense } from 'react';
import { ArrowRight, Code } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import AnimateIn from './ui/AnimateIn';

const Scene3D = lazy(() => import('./three/Scene3D'));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero({ onStartLearning, onBrowseChapters }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Scene */}
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center bg-surface">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-accent rounded-full animate-spin" />
        </div>
      }>
        <Scene3D className="z-[1]" />
      </Suspense>

      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div style={{ y, opacity }}>
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-[rgba(79,70,229,0.1)] text-accent text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-[rgba(129,140,248,0.2)]">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Advanced Study Protocol
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              Decode <br/>
              <span className="gradient-text">
                C++ Systems
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg font-medium"
            >
              A brutalist, high-performance study environment. 7 chapters. Zero distractions. Master the machine.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
              <MagneticButton
                onClick={onStartLearning}
                className="btn-primary gap-2 text-base cursor-none"
                data-interactive
              >
                Initialize Protocol <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton
                onClick={onBrowseChapters}
                className="btn-secondary gap-2 text-base cursor-none"
                data-interactive
              >
                <Code size={18} /> Access Index
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right: code preview with neon glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative perspective-1000"
          >
            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
            <div className="relative glass-card conic-border p-[1px] rounded-2xl transform-gpu rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-700">
              <div className="bg-[#07070c] rounded-xl overflow-hidden scanlines h-full relative z-10">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-slate-500 font-mono tracking-widest uppercase">sys_core.cpp</span>
                </div>
                <pre className="p-6 text-sm font-mono leading-relaxed text-slate-300 overflow-x-auto">
                  <code>{`<span class="text-pink-500">#include</span> <span class="text-green-400">&lt;iostream&gt;</span>
<span class="text-pink-500">using namespace</span> std;

<span class="text-accent">int</span> <span class="text-blue-400">main</span>() {
    <span class="text-slate-500">// Initialize sequence</span>
    cout << <span class="text-amber-400">"Protocol Active"</span> << endl;

    <span class="text-accent">int</span> modules = <span class="text-purple-400">7</span>;
    <span class="text-pink-500">for</span> (<span class="text-accent">int</span> i = <span class="text-purple-400">1</span>; i <= modules; i++) {
        <span class="text-blue-400">load_memory_bank</span>(i);
    }

    <span class="text-pink-500">return</span> <span class="text-purple-400">0</span>;
}`}</code>
                </pre>
              </div>
            </div>
            
            {/* Holographic floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 glass-card px-5 py-3 rounded-xl border border-accent/30 shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-md"
            >
              <span className="text-sm font-bold text-white tracking-widest uppercase"><span className="text-accent mr-2">⚡</span> 90+ Examples</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
