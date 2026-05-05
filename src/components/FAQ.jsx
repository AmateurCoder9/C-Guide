import Accordion from './Accordion';
import ScrollReveal from './ScrollReveal';

const faqData = [
  { q: 'Do I need any prior programming experience?', a: 'No! This platform starts from the very basics of C++. Chapter 1 covers the fundamentals including program structure, input/output, and basic syntax. Each concept builds upon the previous one.' },
  { q: 'Is this completely free?', a: 'Yes, 100% free. There are no hidden costs, premium tiers, or paywalls. All 7 chapters with every topic and code example are fully accessible to everyone.' },
  { q: 'Do I need to create an account?', a: 'No account or signup is required. Simply visit the site and start learning. We believe in removing all barriers to education.' },
  { q: 'What topics are covered?', a: 'The curriculum covers 7 chapters: Introduction to C++, Data Types & Operators, Control Flow, Functions, Arrays & Strings, Object-Oriented Programming, and Advanced C++ (pointers, file handling, STL, exceptions).' },
  { q: 'Can I use this on my phone?', a: 'Absolutely. The entire platform is fully responsive and optimized for mobile, tablet, and desktop devices. Learn C++ anywhere, anytime.' },
  { q: 'Are the code examples tested?', a: 'Yes, every code example includes expected output and has been verified to compile and run correctly with standard C++ compilers (g++, clang++).' },
  { q: 'Is this suitable for exam preparation?', a: 'Yes. The structured chapter format with concise explanations makes it ideal for engineering students preparing for C++ exams and practicals.' },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Support</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-lg">
              Everything you need to know about the platform.
            </p>
          </div>
        </ScrollReveal>
        <div className="space-y-3">
          {faqData.map((item, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <Accordion title={item.q} id={`faq-${i}`}>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </Accordion>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
