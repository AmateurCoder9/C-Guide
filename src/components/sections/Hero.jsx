import { ArrowRight, Code } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import AnimateIn from '../ui/AnimateIn';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.32, 0.72, 0, 1] },
});

export default function Hero({ onStartLearning, onBrowseChapters }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-surface">
      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
        <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto flex flex-col items-center">
          
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-text-secondary text-sm font-bold px-5 py-2 rounded-full mb-8 border border-white/30">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Visionary C++ Engine
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-text leading-[1.05] tracking-tight mb-8"
            style={{ letterSpacing: '-0.04em' }}
          >
            Design the <br/>
            <span className="gradient-text">
              Future of Code
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-xl sm:text-2xl text-text-secondary leading-relaxed mb-12 max-w-2xl font-medium"
          >
            An immersive, spatial study environment. Seven comprehensive chapters. Master memory, logic, and systems.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center gap-6">
            <MagneticButton
              onClick={onStartLearning}
              className="btn-primary gap-3 text-lg px-10 py-5 cursor-none w-full sm:w-auto"
              data-interactive
            >
              Begin Journey <ArrowRight size={22} />
            </MagneticButton>
            <MagneticButton
              onClick={onBrowseChapters}
              className="btn-secondary gap-3 text-lg px-10 py-5 cursor-none w-full sm:w-auto"
              data-interactive
            >
              <Code size={22} /> Curriculum Index
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-black/20 to-transparent" />
      </motion.div>
    </section>
  );
}
