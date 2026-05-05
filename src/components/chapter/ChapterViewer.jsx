import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, BookOpen, Code2, HelpCircle, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../ui/CodeBlock';
import QuestionCard from '../ui/QuestionCard';

// Progress helpers
const getViewedTopics = (chapterId) => {
  try {
    const data = JSON.parse(localStorage.getItem('cpp-progress') || '{}');
    return data[chapterId] || [];
  } catch { return []; }
};

const markTopicViewed = (chapterId, topicIdx) => {
  try {
    const data = JSON.parse(localStorage.getItem('cpp-progress') || '{}');
    if (!data[chapterId]) data[chapterId] = [];
    if (!data[chapterId].includes(topicIdx)) {
      data[chapterId].push(topicIdx);
      localStorage.setItem('cpp-progress', JSON.stringify(data));
    }
  } catch {}
};

export default function ChapterViewer({ chapter, onBack }) {
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeTab, setActiveTab] = useState('explanation');
  const [viewedTopics, setViewedTopics] = useState([]);
  const modalRef = useRef(null);

  // Load progress
  useEffect(() => {
    setViewedTopics(getViewedTopics(chapter.id));
  }, [chapter]);

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTopic(null);
  }, [chapter]);

  // Scroll modal to top when topic changes + mark as viewed
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (activeTopic !== null) {
      markTopicViewed(chapter.id, activeTopic);
      setViewedTopics(getViewedTopics(chapter.id));
    }
  }, [activeTopic, chapter.id]);

  const openTopic = useCallback((idx) => {
    setActiveTopic(idx);
    setActiveTab('explanation');
  }, []);

  const closeTopic = useCallback(() => {
    setActiveTopic(null);
  }, []);

  const goToNextTopic = useCallback(() => {
    if (activeTopic !== null && activeTopic < chapter.topics.length - 1) {
      setActiveTopic(activeTopic + 1);
      setActiveTab('explanation');
    }
  }, [activeTopic, chapter.topics.length]);

  const goToPrevTopic = useCallback(() => {
    if (activeTopic !== null && activeTopic > 0) {
      setActiveTopic(activeTopic - 1);
      setActiveTab('explanation');
    }
  }, [activeTopic]);

  const tabs = [
    { id: 'explanation', label: 'Explain', icon: BookOpen },
    { id: 'examples', label: 'Examples', icon: Code2 },
    { id: 'questions', label: 'Questions', icon: HelpCircle },
  ];

  const isFirstTopic = activeTopic === 0;
  const isLastTopic = activeTopic === chapter.topics.length - 1;
  const completedCount = viewedTopics.length;
  const totalTopics = chapter.topics.length;
  const progressPercent = Math.round((completedCount / totalTopics) * 100);

  return (
    <div className="min-h-screen pb-32 relative z-10 pt-8">
      <div className="fixed top-24 left-4 sm:left-8 z-40">
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-12 h-12 rounded-full glass-card text-text-secondary hover:text-text transition-colors shadow-sm cursor-none"
          data-interactive
        >
          <ArrowLeft size={20} />
        </motion.button>
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
          {/* Mini progress indicator */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-black/5 shadow-sm">
            <div className="w-24 h-1.5 bg-black/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-[#34c759]"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
              />
            </div>
            <span className="text-xs font-bold text-text-secondary">
              {completedCount}/{totalTopics} completed
            </span>
          </div>
        </motion.div>

        <div className="grid gap-3">
          {chapter.topics.map((t, idx) => {
            const isViewed = viewedTopics.includes(idx);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.015, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="glass-card p-5 cursor-none hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all flex items-center justify-between group"
                onClick={() => openTopic(idx)}
                data-interactive
              >
                <div className="flex items-center gap-4">
                  <span className={`flex items-center justify-center w-10 h-10 rounded-xl text-base font-bold shadow-sm flex-shrink-0 transition-all duration-300 ${
                    isViewed 
                      ? 'bg-[#34c759]/15 text-[#34c759]' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {isViewed ? <CheckCircle2 size={20} /> : idx + 1}
                  </span>
                  <div>
                    <h2 className="text-base font-bold text-text">{t.title}</h2>
                    {t.description && (
                      <p className="text-xs text-text-muted mt-0.5 hidden sm:block">{t.description}</p>
                    )}
                  </div>
                </div>
                <ChevronRight size={18} className="text-primary opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full Screen Topic Modal */}
      <AnimatePresence>
        {activeTopic !== null && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-surface/95 backdrop-blur-xl overflow-y-auto"
          >
            {/* Slide-up content */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
              className="min-h-screen pb-40"
            >
              {/* Sticky Header — Heavy Blur */}
              <div className="sticky top-0 z-40 bg-white/70 backdrop-blur-2xl backdrop-saturate-200 border-b border-black/5 px-4 py-3 flex items-center justify-between">
                <motion.button
                  onClick={closeTopic}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-text-secondary hover:text-text transition-colors shadow-sm font-semibold cursor-none text-sm"
                  data-interactive
                >
                  <ArrowLeft size={18} /> Back
                </motion.button>

                {/* Dynamic Island style progress */}
                <motion.div
                  layout
                  className="flex items-center gap-3 bg-white/15 backdrop-blur-xl text-text px-4 py-2 rounded-full border border-white/20"
                >
                  <span className="text-[11px] font-bold tracking-wider">
                    {activeTopic + 1} / {chapter.topics.length}
                  </span>
                  <div className="w-16 h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-text rounded-full"
                      animate={{ width: `${((activeTopic + 1) / chapter.topics.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    />
                  </div>
                </motion.div>

                <div className="flex items-center gap-1.5">
                  <motion.button
                    onClick={goToPrevTopic}
                    disabled={isFirstTopic}
                    whileHover={!isFirstTopic ? { scale: 1.1 } : {}}
                    whileTap={!isFirstTopic ? { scale: 0.85 } : {}}
                    className={`flex items-center justify-center w-9 h-9 rounded-full glass-card transition-all cursor-none ${isFirstTopic ? 'opacity-30' : 'hover:text-primary active:bg-primary/10'}`}
                    data-interactive
                  >
                    <ChevronLeft size={18} />
                  </motion.button>
                  <motion.button
                    onClick={goToNextTopic}
                    disabled={isLastTopic}
                    whileHover={!isLastTopic ? { scale: 1.1 } : {}}
                    whileTap={!isLastTopic ? { scale: 0.85 } : {}}
                    className={`flex items-center justify-center w-9 h-9 rounded-full glass-card transition-all cursor-none ${isLastTopic ? 'opacity-30' : 'hover:text-primary active:bg-primary/10'}`}
                    data-interactive
                  >
                    <ChevronRight size={18} />
                  </motion.button>
                </div>
              </div>

              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <motion.h1
                  key={activeTopic}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  className="text-3xl sm:text-4xl font-extrabold text-text mb-10 tracking-tight"
                >
                  {chapter.topics[activeTopic].title}
                </motion.h1>

                {/* iOS Style Segmented Control */}
                <div className="bg-white/10 p-1 mb-10 flex rounded-2xl w-full max-w-md mx-auto border border-white/10">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <motion.button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 flex items-center justify-center py-2.5 px-3 text-[13px] font-bold rounded-[0.85rem] transition-colors relative cursor-none ${
                          isActive ? 'text-text' : 'text-text-muted hover:text-text-secondary'
                        }`}
                        data-interactive
                      >
                        {isActive && (
                          <motion.div
                            layoutId="active-tab-modal"
                            className="absolute inset-0 bg-white rounded-[0.85rem] shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]"
                            initial={false}
                            transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center gap-1.5">
                          <tab.icon size={14} /> {tab.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="min-h-[500px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'explanation' && (
                      <motion.div
                        key={`explanation-${activeTopic}`}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.45 }}
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
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.45 }}
                        className="space-y-8"
                      >
                        {chapter.topics[activeTopic].examples && chapter.topics[activeTopic].examples.length > 0 ? (
                          chapter.topics[activeTopic].examples.map((ex, exIdx) => (
                            <motion.div
                              key={exIdx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: exIdx * 0.1 }}
                              className="glass-card p-6 sm:p-8"
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                  Example {exIdx + 1}
                                </span>
                                <h4 className="text-text font-bold text-base">
                                  {ex.title || `Example ${exIdx + 1}`}
                                </h4>
                              </div>
                              {ex.description && <p className="text-text-secondary text-sm mb-5 leading-relaxed">{ex.description}</p>}
                              {ex.explanation && <p className="text-text-secondary text-sm mb-5 leading-relaxed italic">{ex.explanation}</p>}
                              <CodeBlock code={ex.code} />
                            </motion.div>
                          ))
                        ) : (
                          <div className="text-center py-16 text-text-muted font-medium">No examples for this topic.</div>
                        )}
                      </motion.div>
                    )}

                    {activeTab === 'questions' && (
                      <motion.div
                        key={`questions-${activeTopic}`}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.45 }}
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
                <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
                  <motion.button
                    onClick={isFirstTopic ? closeTopic : goToPrevTopic}
                    whileHover={{ x: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card text-text-secondary hover:text-text transition-all font-bold cursor-none text-sm max-w-[45%]"
                    data-interactive
                  >
                    <ChevronLeft size={18} className="flex-shrink-0" />
                    <span className="truncate">{isFirstTopic ? 'Back to Chapter' : chapter.topics[activeTopic - 1].title}</span>
                  </motion.button>

                  {!isLastTopic ? (
                    <motion.button
                      onClick={goToNextTopic}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-text text-white hover:opacity-90 transition-all font-bold cursor-none text-sm max-w-[45%]"
                      data-interactive
                    >
                      <span className="truncate">{chapter.topics[activeTopic + 1].title}</span>
                      <ChevronRight size={18} className="flex-shrink-0" />
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={closeTopic}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#2d2a20] text-white hover:opacity-90 transition-all font-bold cursor-none text-sm"
                      data-interactive
                    >
                      Finish Chapter <CheckCircle2 size={18} />
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
