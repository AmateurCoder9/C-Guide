import { useState } from 'react';
import { ArrowLeft, BookOpen, FileText, Code, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Accordion from './Accordion';
import CodeBlock from './CodeBlock';

const tabs = [
  { id: 'explanation', label: 'Explanation', icon: FileText },
  { id: 'examples', label: 'Examples', icon: Code },
  { id: 'questions', label: 'Questions', icon: HelpCircle },
];

function TopicContent({ topic }) {
  const [activeTab, setActiveTab] = useState('explanation');

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-1 mb-5 bg-slate-100 p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all flex-1 justify-center ${
              activeTab === tab.id
                ? 'text-primary'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId={`tab-bg-${topic.id}`}
                className="absolute inset-0 bg-white rounded-lg shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <tab.icon size={14} />
              <span className="hidden sm:inline">{tab.label}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'explanation' && (
            <div className="prose prose-slate prose-sm max-w-none">
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {topic.explanation}
              </p>
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="space-y-4">
              {topic.examples.map((example, eIdx) => (
                <div key={eIdx}>
                  <p className="text-sm font-semibold text-slate-700 mb-1">
                    {example.title}
                  </p>
                  <CodeBlock code={example.code} output={example.output} />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'questions' && (
            <div className="space-y-4">
              {(topic.questions || generateQuestions(topic)).map((q, qIdx) => (
                <QuestionCard key={qIdx} question={q} index={qIdx} />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function QuestionCard({ question, index }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <div className="px-4 py-3">
        <div className="flex items-start gap-3">
          <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
            {index + 1}
          </span>
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-800">{question.q}</p>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="text-xs text-primary font-semibold mt-2 hover:underline"
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
            <AnimatePresence>
              {showAnswer && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-slate-600 mt-2 pt-2 border-t border-slate-100 leading-relaxed">
                    {question.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// Auto-generate practice questions if not present in data
function generateQuestions(topic) {
  const title = topic.title;
  const genericQuestions = [
    { q: `What is the primary purpose of ${title} in C++?`, a: `${title} provides a fundamental mechanism in C++ programming. ${topic.explanation.split('.').slice(0, 2).join('.')}.` },
    { q: `Write a simple program demonstrating ${title}.`, a: `Refer to the Examples tab for working code demonstrations of ${title}. Practice by modifying the values and observing the output changes.` },
    { q: `What are common mistakes when using ${title}?`, a: `Common pitfalls include incorrect syntax, forgetting edge cases, and not understanding scope rules. Always test with different inputs and review compiler warnings.` },
  ];
  return genericQuestions;
}

export default function ChapterViewer({ chapter, onBack }) {
  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
          <motion.button
            onClick={onBack}
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Chapters
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${chapter.color} flex items-center justify-center shadow-lg`}>
                <BookOpen size={20} className="text-white" />
              </div>
              <span className="text-sm font-semibold text-primary-light bg-primary/20 px-3 py-1 rounded-full">
                Chapter {chapter.id}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              {chapter.title}
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">{chapter.description}</p>
            <div className="mt-6 text-sm text-slate-500">
              {chapter.topics.length} topics · {chapter.topics.reduce((acc, t) => acc + t.examples.length, 0)} code examples
            </div>
          </motion.div>
        </div>
      </div>

      {/* Topics */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="space-y-4">
          {chapter.topics.map((topic, idx) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Accordion
                title={`${topic.id} — ${topic.title}`}
                defaultOpen={idx === 0}
                id={`topic-${topic.id}`}
              >
                <TopicContent topic={topic} />
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
