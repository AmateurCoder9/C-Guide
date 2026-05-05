import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Code2, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeBlock from '../ui/CodeBlock';
import QuestionCard from '../ui/QuestionCard';

export default function ChapterViewer({ chapter, onBack }) {
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeTab, setActiveTab] = useState('explanation');

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [chapter]);

  const topic = chapter.topics[activeTopic];

  const tabs = [
    { id: 'explanation', label: 'Explanation', icon: BookOpen },
    { id: 'examples', label: 'Examples', icon: Code2 },
    { id: 'questions', label: 'Questions', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen pb-32 relative z-10 pt-8">
      <div className="fixed top-24 left-4 sm:left-8 z-40">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-12 h-12 rounded-full glass-card text-text-secondary hover:text-text transition-colors shadow-sm cursor-none"
          data-interactive
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <div className="inline-block bg-black/5 px-4 py-1.5 rounded-full text-sm font-bold text-text-secondary mb-6 shadow-sm">
            CHAPTER 0{chapter.id}
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-text mb-6 tracking-tight" style={{ letterSpacing: '-0.03em' }}>
            {chapter.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium leading-relaxed">
            {chapter.description}
          </p>
        </motion.div>

        {chapter.topics.map((t, idx) => (
          <div key={idx} className="mb-12">
            <div 
              className={`glass-card p-4 mb-6 cursor-none transition-all duration-300 ${activeTopic === idx ? 'shadow-md border-primary/20' : 'hover:bg-white/40'}`}
              onClick={() => setActiveTopic(idx)}
              data-interactive
            >
              <h2 className="text-2xl font-bold text-text px-4 py-2 flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-base font-bold shadow-sm">
                  {idx + 1}
                </span>
                {t.title}
              </h2>
            </div>

            <AnimatePresence mode="wait">
              {activeTopic === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  {/* iOS Style Segmented Control */}
                  <div className="bg-black/5 p-1.5 mb-8 flex rounded-[1.5rem] w-full max-w-md mx-auto shadow-inner">
                    {tabs.map((tab) => {
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex-1 flex items-center justify-center py-2.5 px-4 text-sm font-semibold rounded-2xl transition-all relative cursor-none ${
                            isActive ? 'text-text' : 'text-text-secondary hover:text-text'
                          }`}
                          data-interactive
                        >
                          {isActive && (
                            <motion.div
                              layoutId={`tab-bg-${idx}`}
                              className="absolute inset-0 bg-white rounded-2xl shadow-sm"
                              initial={false}
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          <span className="relative z-10">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="min-h-[300px]">
                    <AnimatePresence mode="wait">
                      {activeTab === 'explanation' && (
                        <motion.div
                          key="explanation"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="glass-card p-8 sm:p-12"
                        >
                          <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-text-secondary prose-p:text-lg prose-p:font-medium">
                            {t.explanation.split('\n\n').map((para, pIdx) => (
                              <p key={pIdx}>{para}</p>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'examples' && (
                        <motion.div
                          key="examples"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="space-y-8"
                        >
                          {t.examples && t.examples.length > 0 ? (
                            t.examples.map((ex, exIdx) => (
                              <div key={exIdx} className="glass-card p-6 sm:p-8">
                                <h4 className="text-text font-bold text-lg mb-2 flex items-center gap-2">
                                  {ex.title || `Example ${exIdx + 1}`}
                                </h4>
                                {ex.description && <p className="text-text-secondary font-medium mb-6">{ex.description}</p>}
                                <CodeBlock code={ex.code} />
                              </div>
                            ))
                          ) : (
                            <div className="text-center py-16 text-text-muted font-medium">No examples provided for this topic.</div>
                          )}
                        </motion.div>
                      )}

                      {activeTab === 'questions' && (
                        <motion.div
                          key="questions"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="space-y-6"
                        >
                          {t.questions && t.questions.length > 0 ? (
                            t.questions.map((q, qIdx) => (
                              <QuestionCard key={qIdx} q={q} index={qIdx} />
                            ))
                          ) : (
                            <div className="text-center py-16 text-text-muted font-medium">Practice questions are being generated...</div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
