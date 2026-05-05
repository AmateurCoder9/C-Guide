import { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, BookOpen, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpotlightSearch({ chapters, onSelectChapter, onSelectTopic }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // ⌘K / Ctrl+K to open
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Build searchable index
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const matches = [];

    chapters.forEach((chapter) => {
      // Match chapter titles
      if (chapter.title.toLowerCase().includes(q) || chapter.description.toLowerCase().includes(q)) {
        matches.push({
          type: 'chapter',
          chapterId: chapter.id,
          title: chapter.title,
          subtitle: chapter.description,
          topicIdx: null,
        });
      }
      // Match topic titles and descriptions
      chapter.topics.forEach((topic, topicIdx) => {
        if (
          topic.title.toLowerCase().includes(q) ||
          topic.description?.toLowerCase().includes(q) ||
          topic.explanation?.toLowerCase().includes(q)
        ) {
          matches.push({
            type: 'topic',
            chapterId: chapter.id,
            title: topic.title,
            subtitle: `Chapter ${chapter.id}: ${chapter.title}`,
            topicIdx,
          });
        }
      });
    });

    return matches.slice(0, 8); // Max 8 results
  }, [query, chapters]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, results, selectedIndex]);

  const handleSelect = (result) => {
    setIsOpen(false);
    if (result.type === 'chapter') {
      onSelectChapter(result.chapterId);
    } else {
      onSelectTopic(result.chapterId, result.topicIdx);
    }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 transition-all text-text-secondary text-sm font-semibold cursor-none"
        data-interactive
      >
        <Search size={14} />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-black/5 text-[10px] font-bold text-text-muted ml-1">
          ⌘K
        </kbd>
      </button>

      {/* Spotlight Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

            {/* Search Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              className="relative w-full max-w-xl bg-white/20 backdrop-blur-3xl rounded-[1.5rem] border border-white/30 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Input */}
              <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
                <Search size={20} className="text-text-muted flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search topics, chapters, concepts..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className="flex-1 bg-transparent text-lg font-medium text-text placeholder:text-text-muted outline-none"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="text-text-muted hover:text-text" data-interactive>
                    <X size={18} />
                  </button>
                )}
              </div>

              {/* Results */}
              {results.length > 0 && (
                <div className="max-h-80 overflow-y-auto py-2">
                  {results.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(result)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center gap-4 px-6 py-3.5 text-left transition-all cursor-none ${
                        idx === selectedIndex ? 'bg-white/20' : 'hover:bg-white/10'
                      }`}
                      data-interactive
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        result.type === 'chapter' ? 'bg-primary/15 text-primary' : 'bg-amber/15 text-amber'
                      }`}>
                        <BookOpen size={14} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-text truncate">{result.title}</div>
                        <div className="text-xs text-text-muted truncate">{result.subtitle}</div>
                      </div>
                      <ChevronRight size={14} className="text-text-muted flex-shrink-0" />
                    </button>
                  ))}
                </div>
              )}

              {/* Empty state */}
              {query && results.length === 0 && (
                <div className="py-12 text-center text-text-muted text-sm font-medium">
                  No results for "{query}"
                </div>
              )}

              {/* Hint */}
              {!query && (
                <div className="py-10 text-center text-text-muted text-sm font-medium">
                  Type to search across all chapters and topics
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-white/5">
                <div className="flex items-center gap-3 text-[11px] text-text-muted font-semibold">
                  <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-black/5 font-bold">↑↓</kbd> Navigate</span>
                  <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-black/5 font-bold">↵</kbd> Open</span>
                  <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-black/5 font-bold">Esc</kbd> Close</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
