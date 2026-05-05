import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters } from './data/chapters';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProductPreview from './components/ProductPreview';
import ChapterCard from './components/ChapterCard';
import ChapterViewer from './components/ChapterViewer';
import AnimateIn from './components/ui/AnimateIn';
import CustomCursor from './components/CustomCursor';

function App() {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleSelectChapter = (chapterId) => {
    const chapter = chapters.find((c) => c.id === chapterId);
    setSelectedChapter(chapter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedChapter(null);
    // Scroll to chapters section after returning
    setTimeout(() => {
      const el = document.getElementById('chapters');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleNavigateHome = (href) => {
    if (selectedChapter) {
      setSelectedChapter(null);
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
  };

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
      <CustomCursor />
      <Navbar onNavigateHome={handleNavigateHome} />

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
                      key={chapter.id}
                      chapter={chapter}
                      index={idx}
                      onSelect={handleSelectChapter}
                    />
                  ))}
                </div>
              </div>
            </section>

            <Features />
            <ProductPreview />
            <Stats />
            <FAQ />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
