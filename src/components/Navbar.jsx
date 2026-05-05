import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Chapters', href: '#chapters' },
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ onNavigateHome }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Simple scroll spy
      const sections = ['#home', '#chapters', '#features', '#faq'];
      for (const section of sections.reverse()) {
        const el = document.querySelector(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    setIsOpen(false);
    setActive(href);
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav' : 'bg-transparent'
      }`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group"
            data-interactive
          >
            <div className="w-10 h-10 bg-[rgba(79,70,229,0.15)] border border-[rgba(129,140,248,0.3)] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <Code2 size={20} className="text-accent" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              C++ <span className="text-primary-light">Academy</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative px-4 py-2 text-sm font-bold text-slate-300 hover:text-white transition-colors"
                data-interactive
              >
                {active === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    style={{ borderRadius: 2 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            data-interactive
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden glass-nav ${
          isOpen ? 'max-h-64 opacity-100 border-t border-[rgba(129,140,248,0.1)]' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-4 py-3 text-sm font-bold rounded-xl transition-all ${
                active === link.href ? 'text-accent bg-[rgba(6,182,212,0.1)]' : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
