import { motion } from 'framer-motion';
import AnimateIn from './ui/AnimateIn';

export default function ProductPreview() {
  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimateIn>
          <div className="relative rounded-2xl glass-card p-2 sm:p-4 conic-border">
            {/* Dark inner wrapper */}
            <div className="relative bg-[#07070c] rounded-xl overflow-hidden shadow-2xl border border-white/5">
              
              {/* Browser/Window Header */}
              <div className="bg-[#0d0d18] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-block bg-white/5 px-3 py-1 rounded-md text-xs text-slate-400 font-mono">
                    c-academy.sys/runtime
                  </div>
                </div>
                <div className="w-16" /> {/* Spacer for balance */}
              </div>

              {/* Fake Content / Preview image */}
              <div className="relative aspect-video bg-[#0a0a0f] scanlines flex items-center justify-center p-8">
                {/* We can use a stylized placeholder since it's a structural element */}
                <div className="w-full h-full border border-primary/20 rounded-lg flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.1)_0%,transparent_70%)]">
                   <div className="text-center">
                     <div className="w-16 h-16 rounded-full border-2 border-accent/50 border-t-accent animate-spin mx-auto mb-4 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                     <p className="text-accent font-mono text-sm tracking-widest uppercase animate-pulse">Initializing UI Environment...</p>
                   </div>
                </div>
                
                {/* Overlay gradients for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070c] via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
