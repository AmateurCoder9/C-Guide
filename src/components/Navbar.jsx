import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Chapters', href: '#chapters' },
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ onNavigateHome }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    setIsOpen(false);
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/60'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform">
              <Code2 size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              C++ <span className="text-primary">Academy</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary rounded-lg hover:bg-primary/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
