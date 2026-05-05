import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters } from './data/chapters';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';
import ChapterCard from './components/chapter/ChapterCard';
import ChapterViewer from './components/chapter/ChapterViewer';
import AnimateIn from './components/ui/AnimateIn';
import SpotlightSearch from './components/ui/SpotlightSearch';

const AuraBackground = lazy(() => import('./components/3d/AuraBackground'));

// Progress helper
const getChapterProgress = (chapterId, totalTopics) => {
  try {
    const data = JSON.parse(localStorage.getItem('cpp-progress') || '{}');
    const viewed = data[chapterId] || [];
    return Math.round((viewed.length / totalTopics) * 100);
  } catch { return 0; }
};

function App() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [progressKey, setProgressKey] = useState(0); // Force re-render on progress change

  const handleSelectChapter = useCallback((chapterId) => {
    const chapter = chapters.find((c) => c.id === chapterId);
    setSelectedChapter(chapter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectTopic = useCallback((chapterId, topicIdx) => {
    const chapter = chapters.find((c) => c.id === chapterId);
    setSelectedChapter(chapter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // We'll let ChapterViewer handle opening the topic via a prop
  }, []);

  const handleBack = useCallback(() => {
    setSelectedChapter(null);
    setProgressKey((k) => k + 1); // Refresh progress rings
    setTimeout(() => {
      const el = document.getElementById('chapters');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  const handleNavigateHome = useCallback((href) => {
    if (selectedChapter) {
      setSelectedChapter(null);
      setProgressKey((k) => k + 1);
      if (href !== '#home') {
        setTimeout(() => {
          const id = href.replace('#', '');
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const id = href.replace('#', '');
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedChapter]);

  const handleStartLearning = () => handleSelectChapter(1);

  const handleBrowseChapters = () => {
    const el = document.getElementById('chapters');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Update page title based on view
  useEffect(() => {
    document.title = selectedChapter
      ? `${selectedChapter.title} — C++ Academy`
      : 'C++ Academy — Learn C++ Programming for Free';
  }, [selectedChapter]);

  return (
    <>
      <Navbar
        onNavigateHome={handleNavigateHome}
        searchSlot={
          <SpotlightSearch
            chapters={chapters}
            onSelectChapter={handleSelectChapter}
            onSelectTopic={handleSelectTopic}
          />
        }
      />

      {/* 3D Background — Lazy loaded */}
      <Suspense fallback={null}>
        <AuraBackground />
      </Suspense>

      <AnimatePresence mode="wait">
        {selectedChapter ? (
          <motion.div
            key="chapter-view"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pt-16"
          >
            <ChapterViewer chapter={selectedChapter} onBack={handleBack} />
          </motion.div>
        ) : (
          <motion.div
            key="home-view"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Hero
              onStartLearning={handleStartLearning}
              onBrowseChapters={handleBrowseChapters}
            />

            {/* Chapters Section */}
            <section id="chapters" className="section-padding bg-surface">
              <div className="max-w-7xl mx-auto">
                <AnimateIn>
                  <div className="text-center mb-14">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      Curriculum
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
                      7 Structured Chapters
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                      From basics to advanced concepts — each chapter builds on the last.
                    </p>
                  </div>
                </AnimateIn>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chapters.map((chapter, idx) => (
                    <ChapterCard
                      key={`${chapter.id}-${progressKey}`}
                      chapter={chapter}
                      index={idx}
                      onSelect={handleSelectChapter}
                      progress={getChapterProgress(chapter.id, chapter.topics.length)}
                    />
                  ))}
                </div>
              </div>
            </section>

          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
