import { ArrowRight, Terminal } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import AnimateIn from '../ui/AnimateIn';
import ProgressRing from '../ui/ProgressRing';

export default function ChapterCard({ chapter, index, onSelect, progress = 0 }) {
  return (
    <AnimateIn delay={index * 0.08} direction="up" distance={40}>
      <TiltCard className="h-full">
        <div 
          onClick={() => onSelect(chapter.id)}
          className="group relative h-full glass-card p-8 cursor-none flex flex-col shimmer-sweep transition-all duration-400"
          data-interactive
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-8 relative z-10">
            <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
              index % 2 === 0 
                ? 'bg-gradient-to-br from-[#8b7d4b] to-[#C2B280]' 
                : 'bg-gradient-to-br from-[#2d2a20] to-[#6e6754]'
            }`}>
              <Terminal size={28} />
            </div>
            <div className="flex items-center gap-3">
              {/* Activity Ring */}
              <ProgressRing progress={progress} size={44} />
              <div className="bg-white/10 border border-white/20 px-4 py-1.5 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-text-secondary tracking-widest uppercase">
                  CH 0{chapter.id}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 relative z-10">
            <h3 className="text-2xl font-bold text-text mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
              {chapter.title}
            </h3>
            <p className="text-text-secondary text-base leading-relaxed mb-6 font-medium">
              {chapter.description}
            </p>
          </div>

          {/* Footer (Topics pill tags) */}
          <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2 overflow-hidden max-w-[75%]">
              {chapter.topics.slice(0, 2).map((t, i) => (
                <span key={i} className="text-xs font-bold bg-white/10 border border-white/10 text-text-secondary px-3 py-1.5 rounded-full whitespace-nowrap">
                  {t.title.split(' ')[0]}
                </span>
              ))}
              {chapter.topics.length > 2 && (
                <span className="text-xs font-bold bg-white/5 text-text-secondary px-3 py-1.5 rounded-full">
                  +{chapter.topics.length - 2}
                </span>
              )}
            </div>
            
            <div className="w-10 h-10 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-text-secondary group-hover:bg-text group-hover:text-white transition-all duration-400 transform group-hover:translate-x-1">
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </TiltCard>
    </AnimateIn>
  );
}
