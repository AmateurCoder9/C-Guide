import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white/80 border-t border-black/5 py-12 relative z-10 backdrop-blur-xl mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-[1rem] flex items-center justify-center text-white shadow-sm">
            <Code2 size={20} />
          </div>
          <span className="text-xl font-bold text-text tracking-tight">C++ Academy</span>
        </div>
        
        <div className="flex items-center gap-8 mb-6 md:mb-0">
          <a href="#" className="text-text-secondary hover:text-text transition-colors cursor-none text-sm font-bold tracking-widest" data-interactive>
            GITHUB
          </a>
          <a href="#" className="text-text-secondary hover:text-primary transition-colors cursor-none text-sm font-bold tracking-widest" data-interactive>
            TWITTER
          </a>
        </div>
        
        <div className="text-text-muted text-sm font-semibold">
          &copy; {new Date().getFullYear()} CEUC-Explanations. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
