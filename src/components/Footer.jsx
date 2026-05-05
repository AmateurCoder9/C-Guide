import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                C++ <span className="text-primary-light">Academy</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              A free, open-access C++ learning platform with structured chapters and real code examples.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#chapters" className="hover:text-white transition-colors">Chapters</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Chapters</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="hover:text-white transition-colors cursor-default">Intro to C++</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Data Types &amp; Operators</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Control Flow</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">OOP Concepts</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://cplusplus.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">cplusplus.com</a></li>
              <li><a href="https://en.cppreference.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">cppreference.com</a></li>
              <li><a href="https://isocpp.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ISO C++</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} C++ Academy. Free and open for everyone.</p>
        </div>
      </div>
    </footer>
  );
}
