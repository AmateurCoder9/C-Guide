import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import AnimateIn from './ui/AnimateIn';

export default function ChapterCard({ chapter, index, onSelect }) {
  return (
    <AnimateIn delay={index * 0.08} direction="up" distance={40}>
      <TiltCard className="h-full">
        <div 
          onClick={() => onSelect(chapter.id)}
          className="group relative h-full glass-card p-6 sm:p-8 cursor-none flex flex-col shimmer-sweep transition-all duration-300"
          data-interactive
        >
          {/* Internal Glow Overlay */}
          <div className="absolute inset-0 rounded-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_70%)]" />

          {/* Header */}
          <div className="flex items-start justify-between mb-6 relative z-10">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
              index % 2 === 0 
                ? 'bg-gradient-to-br from-primary to-accent' 
                : 'bg-gradient-to-br from-accent to-purple-600'
            }`}>
              <Terminal size={24} />
            </div>
            <div className="bg-[rgba(10,10,15,0.8)] border border-[rgba(129,140,248,0.2)] px-3 py-1 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase">
                CH 0{chapter.id}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 relative z-10">
            <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
              {chapter.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              {chapter.description}
            </p>
          </div>

          {/* Footer (Topics pill tags) */}
          <div className="mt-auto pt-6 border-t border-[rgba(129,140,248,0.1)] flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2 overflow-hidden max-w-[70%]">
              {chapter.topics.slice(0, 2).map((t, i) => (
                <span key={i} className="text-xs bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-slate-300 px-2 py-1 rounded-full whitespace-nowrap">
                  {t.title.split(' ')[0]}
                </span>
              ))}
              {chapter.topics.length > 2 && (
                <span className="text-xs bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-slate-400 px-2 py-1 rounded-full">
                  +{chapter.topics.length - 2}
                </span>
              )}
            </div>
            
            <div className="w-8 h-8 rounded-full bg-[rgba(79,70,229,0.1)] border border-[rgba(79,70,229,0.3)] flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 transform group-hover:translate-x-1">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </TiltCard>
    </AnimateIn>
  );
}
