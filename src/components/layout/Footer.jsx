import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 relative z-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#8b7d4b] to-[#C2B280] rounded-[1rem] flex items-center justify-center text-white">
            <Code2 size={20} />
          </div>
          <span className="text-xl font-bold text-text tracking-tight">C++ Academy</span>
        </div>
        
        <div className="space-y-2">
          <p className="text-text-secondary text-sm font-bold tracking-wide">
            Made exclusively for CHARUSAT course CEUC102
          </p>
          <p className="text-text-muted text-sm font-medium italic">
            I wish you all the very best.
          </p>
        </div>
      </div>
    </footer>
  );
}
