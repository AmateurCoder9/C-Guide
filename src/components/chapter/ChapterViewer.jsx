import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Code2, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../ui/CodeBlock';
import QuestionCard from '../ui/QuestionCard';

export default function ChapterViewer({ chapter, onBack }) {
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeTab, setActiveTab] = useState('explanation');
  const modalRef = useRef(null);

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTopic(null);
  }, [chapter]);

  // Scroll modal to top when topic changes
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTopic]);

  const openTopic = (idx) => {
    setActiveTopic(idx);
    setActiveTab('explanation');
  };

  const closeTopic = () => {
    setActiveTopic(null);
  };

  const goToNextTopic = () => {
    if (activeTopic !== null && activeTopic < chapter.topics.length - 1) {
      setActiveTopic(activeTopic + 1);
      setActiveTab('explanation');
    }
  };

  const goToPrevTopic = () => {
    if (activeTopic !== null && activeTopic > 0) {
      setActiveTopic(activeTopic - 1);
      setActiveTab('explanation');
    }
  };

  const tabs = [
    { id: 'explanation', label: 'Explanation', icon: BookOpen },
    { id: 'examples', label: 'Examples', icon: Code2 },
    { id: 'questions', label: 'Questions', icon: HelpCircle },
  ];

  const isFirstTopic = activeTopic === 0;
  const isLastTopic = activeTopic === chapter.topics.length - 1;

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
          <div className="mt-4 text-sm text-text-secondary font-medium">
            {chapter.topics.length} topics
          </div>
        </motion.div>

        <div className="grid gap-4">
          {chapter.topics.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-5 cursor-none hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all flex items-center justify-between group"
              onClick={() => openTopic(idx)}
              data-interactive
            >
              <div className="flex items-center gap-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-base font-bold shadow-sm flex-shrink-0">
                  {idx + 1}
                </span>
                <h2 className="text-lg font-bold text-text">{t.title}</h2>
              </div>
              <ChevronRight size={20} className="text-primary opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Topic Modal */}
      <AnimatePresence>
        {activeTopic !== null && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-50 bg-surface overflow-y-auto"
          >
            <div className="min-h-screen pb-40">
              {/* Sticky Header */}
              <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-black/5 px-4 py-3 flex items-center justify-between">
                <button
                  onClick={closeTopic}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-text-secondary hover:text-text transition-colors shadow-sm font-semibold cursor-none text-sm"
                  data-interactive
                >
                  <ArrowLeft size={18} /> Back
                </button>
                <div className="flex flex-col items-center">
                  <div className="text-xs font-bold text-text-secondary tracking-widest">
                    TOPIC {activeTopic + 1} / {chapter.topics.length}
                  </div>
                  {/* Progress bar */}
                  <div className="mt-1 w-32 h-1 bg-black/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${((activeTopic + 1) / chapter.topics.length) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={goToPrevTopic}
                    disabled={isFirstTopic}
                    className={`flex items-center justify-center w-9 h-9 rounded-full glass-card transition-all cursor-none ${isFirstTopic ? 'opacity-30' : 'hover:text-primary'}`}
                    data-interactive
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={goToNextTopic}
                    disabled={isLastTopic}
                    className={`flex items-center justify-center w-9 h-9 rounded-full glass-card transition-all cursor-none ${isLastTopic ? 'opacity-30' : 'hover:text-primary'}`}
                    data-interactive
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <motion.h1
                  key={activeTopic}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-4xl font-extrabold text-text mb-10 tracking-tight"
                >
                  {chapter.topics[activeTopic].title}
                </motion.h1>

                {/* iOS Style Segmented Control */}
                <div className="bg-black/5 p-1.5 mb-10 flex rounded-[1.5rem] w-full max-w-md mx-auto shadow-inner">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex items-center justify-center py-2.5 px-4 text-sm font-bold rounded-2xl transition-all relative cursor-none ${
                          isActive ? 'text-text' : 'text-text-secondary hover:text-text'
                        }`}
                        data-interactive
                      >
                        {isActive && (
                          <motion.div
                            layoutId="active-tab-modal"
                            className="absolute inset-0 bg-white rounded-2xl shadow-sm"
                            initial={false}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center gap-1.5">
                          <tab.icon size={16} /> {tab.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="min-h-[500px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'explanation' && (
                      <motion.div
                        key={`explanation-${activeTopic}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="glass-card p-8 sm:p-12 prose prose-slate max-w-none prose-headings:text-text prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-text-secondary prose-p:text-base prose-p:leading-relaxed prose-li:text-text-secondary prose-li:text-base prose-strong:text-text prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm"
                      >
                        <ReactMarkdown>
                          {chapter.topics[activeTopic].explanation}
                        </ReactMarkdown>
                      </motion.div>
                    )}

                    {activeTab === 'examples' && (
                      <motion.div
                        key={`examples-${activeTopic}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                      >
                        {chapter.topics[activeTopic].examples && chapter.topics[activeTopic].examples.length > 0 ? (
                          chapter.topics[activeTopic].examples.map((ex, exIdx) => (
                            <div key={exIdx} className="glass-card p-6 sm:p-8">
                              <div className="flex items-center gap-3 mb-3">
                                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                  Example {exIdx + 1}
                                </span>
                                <h4 className="text-text font-bold text-base">
                                  {ex.title || `Example ${exIdx + 1}`}
                                </h4>
                              </div>
                              {ex.description && <p className="text-text-secondary text-sm mb-5 leading-relaxed">{ex.description}</p>}
                              <CodeBlock code={ex.code} />
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-16 text-text-muted font-medium">No examples for this topic.</div>
                        )}
                      </motion.div>
                    )}

                    {activeTab === 'questions' && (
                      <motion.div
                        key={`questions-${activeTopic}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                        {chapter.topics[activeTopic].questions && chapter.topics[activeTopic].questions.length > 0 ? (
                          chapter.topics[activeTopic].questions.map((q, qIdx) => (
                            <QuestionCard key={qIdx} q={q} index={qIdx} />
                          ))
                        ) : (
                          <div className="text-center py-16 text-text-muted font-medium">No questions for this topic.</div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-16 flex items-center justify-between border-t border-black/5 pt-8">
                  <button
                    onClick={isFirstTopic ? closeTopic : goToPrevTopic}
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card text-text-secondary hover:text-text transition-all font-semibold cursor-none text-sm"
                    data-interactive
                  >
                    <ChevronLeft size={18} />
                    {isFirstTopic ? 'Back to Chapter' : chapter.topics[activeTopic - 1].title}
                  </button>

                  {!isLastTopic ? (
                    <button
                      onClick={goToNextTopic}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary text-white hover:bg-primary/90 transition-all font-semibold cursor-none text-sm shadow-md"
                      data-interactive
                    >
                      {chapter.topics[activeTopic + 1].title}
                      <ChevronRight size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={closeTopic}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary text-white hover:bg-primary/90 transition-all font-semibold cursor-none text-sm shadow-md"
                      data-interactive
                    >
                      Finish Chapter <ChevronRight size={18} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
