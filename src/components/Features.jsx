import { BookMarked, Code, Unlock, Heart, Smartphone, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './ui/TiltCard';
import AnimateIn from './ui/AnimateIn';

const features = [
  { icon: BookMarked, title: 'Structured Learning', desc: 'Seven carefully organized chapters from basics to advanced C++ concepts.', color: 'from-blue-500 to-blue-600' },
  { icon: Code, title: 'Real Code Examples', desc: 'Every topic includes multiple runnable code examples with expected output.', color: 'from-violet-500 to-purple-600' },
  { icon: Unlock, title: 'No Login Required', desc: 'Start learning instantly. No accounts, no passwords, no barriers.', color: 'from-emerald-500 to-green-600' },
  { icon: Heart, title: 'Completely Free', desc: 'All content is free forever. No paywalls, no premium tiers.', color: 'from-rose-500 to-pink-600' },
  { icon: Smartphone, title: 'Mobile Friendly', desc: 'Fully responsive design that works perfectly on any device.', color: 'from-amber-500 to-orange-600' },
  { icon: Users, title: 'For Everyone', desc: 'Designed for students, beginners, and anyone wanting to learn C++.', color: 'from-cyan-500 to-teal-600' },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <AnimateIn>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why choose us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Everything you need to learn C++
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              A thoughtfully crafted learning experience with no distractions.
            </p>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard>
                <div className="group glass-card glow-border-subtle p-6 rounded-2xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 h-full" id={`feature-${i}`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <f.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
