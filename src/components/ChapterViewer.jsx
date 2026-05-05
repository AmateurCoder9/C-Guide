import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Code2, HelpCircle, Check, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden mt-4 group border border-white/5 shadow-2xl">
      <div className="bg-[#07070c] px-4 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <button
          onClick={handleCopy}
          className="text-slate-500 hover:text-white transition-colors p-1"
          title="Copy code"
          data-interactive
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      </div>
      <div className="relative scanlines bg-[#0a0a0f]">
        <pre className="p-5 text-sm font-mono text-cyan-200 overflow-x-auto whitespace-pre-wrap leading-relaxed relative z-10">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function QuestionCard({ q, index }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="relative perspective-1000">
      <motion.div
        layout
        className="glass-card p-6 border-l-2 border-l-amber-500 hover:border-l-accent transition-colors"
      >
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(245,158,11,0.15)] flex items-center justify-center text-amber-500 font-bold text-sm">
            {index + 1}
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-white mb-3">{q.question}</h4>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="text-sm text-accent hover:text-white font-medium flex items-center gap-1 transition-colors mb-4 cursor-none"
              data-interactive
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
              {showAnswer ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            <AnimatePresence>
              {showAnswer && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-[rgba(79,70,229,0.1)] border border-[rgba(79,70,229,0.2)] rounded-xl mt-2 text-slate-300 text-sm leading-relaxed">
                    {q.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

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
    <div className="min-h-screen pb-24 relative z-10">
      <div className="glass-nav sticky top-0 z-40 border-b border-white/5 shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold cursor-none"
            data-interactive
          >
            <ArrowLeft size={16} /> <span className="hidden sm:inline">Return to Index</span>
          </button>
          <div className="text-sm font-mono text-accent tracking-widest uppercase">
            CH 0{chapter.id}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">{chapter.title}</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">{chapter.description}</p>
        </motion.div>

        {chapter.topics.map((t, idx) => (
          <div key={idx} className="mb-12">
            <div 
              className="glass-card p-2 mb-6 cursor-none flex items-center justify-between hover:bg-[rgba(255,255,255,0.02)] transition-colors"
              onClick={() => setActiveTopic(idx)}
              data-interactive
            >
              <h2 className="text-xl font-bold text-white px-4 py-3 flex items-center gap-3">
                <span className="text-accent text-sm font-mono">{chapter.id}.{idx + 1}</span>
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
                  <div className="glass-card p-1 mb-6 flex rounded-xl border border-white/5 bg-[#0d0d18]">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold rounded-lg transition-all relative cursor-none ${
                            isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                          }`}
                          data-interactive
                        >
                          {isActive && (
                            <motion.div
                              layoutId={`tab-bg-${idx}`}
                              className="absolute inset-0 bg-[rgba(79,70,229,0.2)] rounded-lg border border-[rgba(79,70,229,0.4)]"
                              initial={false}
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          <Icon size={16} className="relative z-10" />
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
                          className="glass-card p-6 sm:p-8 border-l-2 border-l-primary"
                        >
                          <div className="prose prose-invert prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-300">
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
                              <div key={exIdx}>
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                  <span className="text-accent">{'>'}</span> {ex.title || `Example ${exIdx + 1}`}
                                </h4>
                                {ex.description && <p className="text-slate-400 text-sm mb-3">{ex.description}</p>}
                                <CodeBlock code={ex.code} />
                              </div>
                            ))
                          ) : (
                            <div className="text-center py-12 text-slate-500">No examples provided for this topic.</div>
                          )}
                        </motion.div>
                      )}

                      {activeTab === 'questions' && (
                        <motion.div
                          key="questions"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="space-y-4"
                        >
                          {t.questions && t.questions.length > 0 ? (
                            t.questions.map((q, qIdx) => (
                              <QuestionCard key={qIdx} q={q} index={qIdx} />
                            ))
                          ) : (
                            <div className="text-center py-12 text-slate-500">Practice questions are being generated...</div>
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
