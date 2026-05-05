import { Monitor, BookOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ProductPreview() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <ScrollReveal>
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Product Preview</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-5">
                Clean, focused learning experience
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Each topic is presented with a concise explanation followed by practical code examples.
                The accordion layout lets you focus on one topic at a time without distraction.
              </p>
              <div className="space-y-4">
                {[
                  { icon: BookOpen, text: 'Structured chapters with sequential topics' },
                  { icon: Monitor, text: 'Code blocks with copy button and output preview' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon size={16} className="text-primary" />
                    </div>
                    <p className="text-slate-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: mockup */}
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 to-cyan-400/10 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-2xl p-1">
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  {/* Fake browser bar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="ml-3 flex-1 bg-slate-200 rounded-md h-5 max-w-xs" />
                  </div>
                  {/* Fake content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg" />
                      <div className="h-3 bg-slate-200 rounded-full w-32" />
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full w-full" />
                    <div className="h-3 bg-slate-100 rounded-full w-4/5" />
                    <div className="h-3 bg-slate-100 rounded-full w-3/5" />
                    <div className="mt-4 bg-[#0f172a] rounded-lg p-4">
                      <div className="h-2.5 bg-slate-700 rounded w-3/4 mb-2" />
                      <div className="h-2.5 bg-slate-700 rounded w-1/2 mb-2" />
                      <div className="h-2.5 bg-blue-400/30 rounded w-2/3 mb-2" />
                      <div className="h-2.5 bg-slate-700 rounded w-4/5" />
                    </div>
                    <div className="mt-3 bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                      <div className="h-2.5 bg-emerald-200 rounded w-16 mb-2" />
                      <div className="h-2.5 bg-emerald-100 rounded w-2/3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
