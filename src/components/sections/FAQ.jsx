import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from '../ui/AnimateIn';

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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-text mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-secondary font-medium">Everything you need to know.</p>
          </div>
        </AnimateIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimateIn key={index} delay={index * 0.1}>
                <div 
                  className={`glass-card overflow-hidden transition-all duration-400 ${
                    isOpen ? 'shadow-md border-black/10 bg-white/80' : 'hover:bg-white/60'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left cursor-none"
                    data-interactive
                  >
                    <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-text' : 'text-text-secondary hover:text-text'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 ml-4 ${isOpen ? 'text-primary' : 'text-text-muted'}`}
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <div className="px-8 pb-6 text-text-secondary text-lg leading-relaxed font-medium">
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
