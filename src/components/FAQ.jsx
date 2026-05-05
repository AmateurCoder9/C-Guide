import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from './ui/AnimateIn';

const faqData = [
  { q: 'Do I need any prior programming experience?', a: 'No! This platform starts from the very basics of C++. Chapter 1 covers the fundamentals including program structure, input/output, and basic syntax. Each concept builds upon the previous one.' },
  { q: 'Is this completely free?', a: 'Yes, 100% free. There are no hidden costs, premium tiers, or paywalls. All 7 chapters with every topic and code example are fully accessible to everyone.' },
  { q: 'Do I need to create an account?', a: 'No account or signup is required. Simply visit the site and start learning. We believe in removing all barriers to education.' },
  { q: 'What topics are covered?', a: 'The curriculum covers 7 chapters: Introduction to C++, Data Types & Operators, Control Flow, Functions, Arrays & Strings, Object-Oriented Programming, and Advanced C++ (pointers, file handling, STL, exceptions).' },
  { q: 'Can I use this on my phone?', a: 'Absolutely. The entire platform is fully responsive and optimized for mobile, tablet, and desktop devices. Learn C++ anywhere, anytime.' },
  { q: 'Are the code examples tested?', a: 'Yes, every code example includes expected output and has been verified to compile and run correctly with standard C++ compilers (g++, clang++).' },
  { q: 'Is this suitable for exam preparation?', a: 'Yes. The structured chapter format with concise explanations makes it ideal for engineering students preparing for C++ exams and practicals.' },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-primary/30 bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800 text-sm sm:text-base pr-4">{item.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} className="text-slate-400 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2 border-t border-slate-100">
              <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Support</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-lg">
              Everything you need to know about the platform.
            </p>
          </div>
        </AnimateIn>
        <div className="space-y-3">
          {faqData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <FAQItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
