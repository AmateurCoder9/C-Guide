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
          className="group relative h-full glass-card p-8 cursor-none flex flex-col shimmer-sweep transition-all duration-400"
          data-interactive
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-8 relative z-10">
            <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
              index % 2 === 0 
                ? 'bg-gradient-to-br from-[#0066cc] to-[#47a1ff]' 
                : 'bg-gradient-to-br from-[#ff3b30] to-[#ff9500]'
            }`}>
              <Terminal size={28} />
            </div>
            <div className="bg-black/5 border border-black/5 px-4 py-1.5 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-xs font-bold text-text-secondary tracking-widest uppercase">
                CH 0{chapter.id}
              </span>
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
                <span key={i} className="text-xs font-semibold bg-white/60 border border-black/5 text-text-secondary px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                  {t.title.split(' ')[0]}
                </span>
              ))}
              {chapter.topics.length > 2 && (
                <span className="text-xs font-semibold bg-black/5 text-text-secondary px-3 py-1.5 rounded-full">
                  +{chapter.topics.length - 2}
                </span>
              )}
            </div>
            
            <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-400 transform group-hover:translate-x-1 group-hover:shadow-md">
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </TiltCard>
    </AnimateIn>
  );
}
