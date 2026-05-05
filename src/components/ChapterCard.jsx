import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const iconMap = {
  BookOpen: '📘',
  Database: '🗃️',
  GitBranch: '🔀',
  Code2: '⚡',
  LayoutGrid: '📊',
  Boxes: '🧩',
  Rocket: '🚀',
};

export default function ChapterCard({ chapter, index, onSelect }) {
  return (
    <ScrollReveal delay={index * 80}>
      <button
        onClick={() => onSelect(chapter.id)}
        className="group w-full text-left glass-card p-6 rounded-2xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border border-slate-100 hover:border-primary/20"
        id={`chapter-card-${chapter.id}`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${chapter.color} flex items-center justify-center text-xl shadow-lg`}>
            {iconMap[chapter.icon] || '📄'}
          </div>
          <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
            Ch. {chapter.id}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
          {chapter.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4">
          {chapter.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">
            {chapter.topics.length} topics
          </span>
          <span className="text-primary flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Explore <ArrowRight size={14} />
          </span>
        </div>
      </button>
    </ScrollReveal>
  );
}
