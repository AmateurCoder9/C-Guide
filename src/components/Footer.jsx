import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#07070c] border-t border-[rgba(129,140,248,0.1)] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
            <Code2 size={16} className="text-accent" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">C++ Academy</span>
        </div>
        
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <a href="#" className="text-slate-500 hover:text-white transition-colors cursor-none text-sm font-bold" data-interactive>
            GITHUB
          </a>
          <a href="#" className="text-slate-500 hover:text-accent transition-colors cursor-none text-sm font-bold" data-interactive>
            TWITTER
          </a>
        </div>
        
        <div className="text-slate-500 text-sm font-mono">
          &copy; {new Date().getFullYear()} CEUC-Explanations. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
