import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function QuestionCard({ q, index }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="relative">
      <motion.div
        layout
        className="glass-card p-6 sm:p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow"
      >
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0066cc]/10 flex items-center justify-center text-primary font-bold text-sm">
            {index + 1}
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-text mb-4 leading-snug">{q.question}</h4>
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="text-sm text-primary font-bold flex items-center gap-1 transition-opacity hover:opacity-70 mb-4 cursor-none"
              data-interactive
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
              {showAnswer ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <AnimatePresence>
              {showAnswer && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 bg-black/5 rounded-[1.5rem] mt-2 text-text-secondary text-base leading-relaxed font-medium">
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
