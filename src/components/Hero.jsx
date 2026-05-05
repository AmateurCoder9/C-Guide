import { lazy, Suspense } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import AnimateIn from './ui/AnimateIn';

const Scene3D = lazy(() => import('./three/Scene3D'));

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero({ onStartLearning, onBrowseChapters }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-200/20 to-transparent rounded-full blur-3xl" />

      {/* 3D particle background */}
      <Suspense fallback={null}>
        <Scene3D className="z-[1] opacity-60" />
      </Suspense>

      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Free &amp; Open Learning
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              Master{' '}
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                C++ Programming
              </span>{' '}
              from Scratch
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg"
            >
              A structured, 7-chapter journey through C++ fundamentals to advanced concepts.
              Clear explanations, real code examples, and zero barriers to entry.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
              <MagneticButton
                onClick={onStartLearning}
                className="btn-primary gap-2 text-base cursor-pointer"
              >
                Start Learning <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton
                onClick={onBrowseChapters}
                className="btn-secondary gap-2 text-base cursor-pointer"
              >
                <BookOpen size={18} /> Browse Chapters
              </MagneticButton>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="flex items-center gap-6 mt-10 text-sm text-slate-500">
              {['No signup required', '100% free', '7 chapters'].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: code preview with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-3xl blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="relative glass-card glow-border p-1 rounded-2xl">
                <div className="bg-[#0f172a] rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs text-slate-500 font-mono">main.cpp</span>
                  </div>
                  <pre className="p-5 text-sm font-mono leading-relaxed text-slate-300 overflow-x-auto">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to C++ Academy!" 
         << endl;

    // 7 chapters of structured
    // learning await you.

    int chapters = 7;
    for (int i = 1; i <= chapters; i++) {
        cout << "Chapter " << i 
             << " unlocked!" << endl;
    }

    return 0;
}`}</code>
                  </pre>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2.5 rounded-xl glow-border"
              >
                <span className="text-sm font-semibold text-slate-700">🚀 90+ Examples</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2.5 rounded-xl glow-border"
              >
                <span className="text-sm font-semibold text-slate-700">📘 7 Chapters</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
