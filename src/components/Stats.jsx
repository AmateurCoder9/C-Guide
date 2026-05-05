import ScrollReveal from './ScrollReveal';

const stats = [
  { value: '7', label: 'Chapters', suffix: '' },
  { value: '35', label: 'Topics', suffix: '+' },
  { value: '100', label: 'Code Examples', suffix: '+' },
  { value: '0', label: 'Cost', suffix: '₹' },
];

export default function Stats() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary-light uppercase tracking-wider">By the numbers</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
              Built for serious learners
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all" id={`stat-${i}`}>
                <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary-light to-cyan-400 bg-clip-text text-transparent mb-2">
                  {s.suffix === '₹' ? `${s.suffix}${s.value}` : `${s.value}${s.suffix}`}
                </div>
                <p className="text-slate-400 font-medium text-sm">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
