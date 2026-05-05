import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Chapters', href: '#chapters' },
];

export default function Navbar({ onNavigateHome, searchSlot }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
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
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Dynamic Island style pill */}
      <motion.nav
        layout
        className={`pointer-events-auto dynamic-island flex flex-col items-center overflow-hidden ${
          scrolled ? 'glass-nav rounded-[2rem]' : 'bg-transparent'
        }`}
        style={{
          width: isOpen ? '90%' : 'auto',
          maxWidth: isOpen ? '400px' : '800px',
        }}
      >
        <div className="flex items-center justify-between h-16 px-2 w-full">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group px-4 py-2 rounded-full hover:bg-black/5 transition-colors"
            data-interactive
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white shadow-sm">
              <Code2 size={16} />
            </div>
            <span className={`font-bold tracking-tight text-text ${scrolled || isOpen ? 'block' : 'hidden md:block'}`}>
              C++ Academy
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text transition-colors rounded-full z-10"
                data-interactive
              >
                {active === link.href && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-black/5 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
            {searchSlot && <div className="ml-2">{searchSlot}</div>}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-full text-text hover:bg-black/5 transition-colors"
            data-interactive
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu expanded state */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full"
            >
              <div className="px-4 pb-6 pt-2 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-6 py-4 text-base font-semibold rounded-2xl transition-all ${
                      active === link.href ? 'bg-black/5 text-text' : 'text-text-secondary hover:bg-black/5 hover:text-text'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
