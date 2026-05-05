import { ArrowRight, Compass, Zap, Repeat, Box, Cpu, Layers, Database } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import AnimateIn from '../ui/AnimateIn';
import ProgressRing from '../ui/ProgressRing';

const abstractIcons = [Compass, Zap, Repeat, Box, Cpu, Layers, Database];

export default function ChapterCard({ chapter, index, onSelect, progress = 0 }) {
  const Icon = abstractIcons[index % abstractIcons.length];

  return (
    <AnimateIn delay={index * 0.08} direction="up" distance={40}>
      <TiltCard className="h-full">
        <div 
          onClick={() => onSelect(chapter.id)}
          className="group relative h-full glass-card p-8 cursor-none flex flex-col shimmer-sweep transition-all duration-500"
          data-interactive
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-10 relative z-10">
            <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 ${
              index % 2 === 0 
                ? 'bg-gradient-to-br from-[#8b7d4b] to-[#C2B280]' 
                : 'bg-gradient-to-br from-[#2d2a20] to-[#6e6754]'
            }`}>
              <Icon size={28} strokeWidth={1.5} />
            </div>
            <div className="flex items-center gap-4">
              <ProgressRing progress={progress} size={48} />
              <div className="bg-white/10 border border-white/20 px-5 py-2 rounded-2xl flex flex-col items-center justify-center">
                <span className="text-[10px] font-black text-text-muted tracking-[0.2em] uppercase leading-none mb-1">
                  Module
                </span>
                <span className="text-sm font-black text-text-secondary leading-none">
                  0{chapter.id}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 relative z-10">
            <h3 className="text-2xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
              {chapter.title}
            </h3>
            <p className="text-text-secondary text-base leading-relaxed mb-8 font-medium opacity-80">
              {chapter.description}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2 overflow-hidden max-w-[75%]">
              {chapter.topics.slice(0, 1).map((t, i) => (
                <span key={i} className="text-[11px] font-black bg-white/10 border border-white/10 text-text-muted px-4 py-2 rounded-xl whitespace-nowrap tracking-wider uppercase">
                  {t.title.split(' ')[0]}
                </span>
              ))}
              {chapter.topics.length > 1 && (
                <span className="text-[11px] font-black bg-white/5 text-text-muted px-3 py-2 rounded-xl tracking-wider">
                  +{chapter.topics.length - 1}
                </span>
              )}
            </div>
            
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-text-secondary group-hover:bg-text group-hover:text-white transition-all duration-500 transform group-hover:translate-x-1">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </TiltCard>
    </AnimateIn>
  );
}
