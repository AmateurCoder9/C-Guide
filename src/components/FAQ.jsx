import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from './ui/AnimateIn';

const faqs = [
  {
    question: "Do I need any prior programming experience?",
    answer: "No. The system is designed to take you from zero knowledge to advanced memory manipulation. We start with basic syntax and scale up."
  },
  {
    question: "Is this completely free?",
    answer: "Yes. No paywalls, no subscriptions, no premium tiers. The knowledge is fully accessible."
  },
  {
    question: "Do I need to create an account?",
    answer: "No authentication required. Access the index and start learning immediately. We don't track your progress; you do."
  },
  {
    question: "What topics are covered?",
    answer: "Core syntax, control flow, functions, memory access (arrays/pointers), and OOP systems. 7 comprehensive modules."
  },
  {
    question: "Can I use this on my phone?",
    answer: "The interface is fully responsive, though coding practice is recommended on a workstation."
  },
  {
    question: "Are the code examples tested?",
    answer: "All code blocks are verified against standard C++ compilers (GCC/Clang) and include expected output."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding relative z-10">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">
              SYSTEM LOGS
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimateIn key={index} delay={index * 0.1}>
                <div 
                  className={`glass-card overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-primary shadow-[0_0_20px_rgba(79,70,229,0.2)]' : 'hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-none"
                    data-interactive
                  >
                    <span className={`font-bold transition-colors ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 ml-4 ${isOpen ? 'text-accent' : 'text-slate-500'}`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-slate-400 leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
