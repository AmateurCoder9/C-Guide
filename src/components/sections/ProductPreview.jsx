import { motion } from 'framer-motion';
import AnimateIn from '../ui/AnimateIn';

export default function ProductPreview() {
  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="relative rounded-[2.5rem] glass-card p-2 sm:p-4 shadow-[0_30px_60px_rgba(0,0,0,0.08)] bg-white/40">
            {/* Inner wrapper */}
            <div className="relative bg-white/80 rounded-[2rem] overflow-hidden shadow-sm border border-black/5">
              
              {/* Browser/Window Header */}
              <div className="bg-black/5 px-6 py-4 flex items-center justify-between border-b border-black/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff3b30]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffcc00]" />
                  <span className="w-3 h-3 rounded-full bg-[#34c759]" />
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-block bg-white/80 px-4 py-1.5 rounded-full text-xs text-text-secondary font-semibold shadow-sm">
                    c-academy.app
                  </div>
                </div>
                <div className="w-16" /> {/* Spacer for balance */}
              </div>

              {/* Fake Content / Preview image */}
              <div className="relative aspect-video bg-[#fbfbfd] flex items-center justify-center p-8 overflow-hidden">
                <div className="w-full h-full border border-black/5 rounded-[1.5rem] flex items-center justify-center bg-white shadow-sm relative overflow-hidden">
                   
                   {/* Abstract UI representation */}
                   <div className="absolute inset-0 flex">
                     {/* Sidebar */}
                     <div className="w-1/4 h-full border-r border-black/5 p-4 hidden sm:flex flex-col gap-3">
                       <div className="h-6 w-24 bg-black/5 rounded-full mb-4" />
                       <div className="h-4 w-full bg-black/5 rounded-full" />
                       <div className="h-4 w-full bg-black/5 rounded-full" />
                       <div className="h-4 w-3/4 bg-black/5 rounded-full" />
                     </div>
                     {/* Main content */}
                     <div className="flex-1 p-8 flex flex-col gap-6">
                        <div className="h-8 w-1/2 bg-black/5 rounded-full" />
                        <div className="flex-1 rounded-[1rem] bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin mx-auto mb-4" />
                            <p className="text-primary font-bold text-sm tracking-widest uppercase">Initializing Core...</p>
                          </div>
                        </div>
                     </div>
                   </div>

                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
