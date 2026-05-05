import { BookOpen, Code2, Shield, Zap, Terminal, BrainCircuit } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import AnimateIn from '../ui/AnimateIn';

const features = [
  { title: 'Core Syntax', description: 'Master data types, variables, and operators with precision.', icon: Code2, color: '#0066cc' },
  { title: 'Control Flow', description: 'Command execution paths with advanced branching logic.', icon: Zap, color: '#ff9500' },
  { title: 'Functions', description: 'Modularize code. Learn overloading and recursion.', icon: Terminal, color: '#34c759' },
  { title: 'Memory Access', description: 'Direct hardware manipulation via arrays and strings.', icon: Shield, color: '#ff3b30' },
  { title: 'OOP Systems', description: 'Architect robust applications using classes and inheritance.', icon: BookOpen, color: '#af52de' },
  { title: 'Logic Gates', description: 'Test your understanding with rigorous practice protocols.', icon: BrainCircuit, color: '#5856d6' },
];

export default function Features() {
  return (
    <section id="features" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto relative">
        <AnimateIn>
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-text mb-6 tracking-tight" style={{ letterSpacing: '-0.03em' }}>
              Built for <span className="gradient-text">Clarity</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">
              Everything you need to master C++, designed with obsessive attention to detail and user experience.
            </p>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <AnimateIn key={idx} delay={idx * 0.1}>
              <TiltCard className="h-full">
                <div 
                  className="group relative h-full glass-card p-8 cursor-none overflow-hidden hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500"
                  data-interactive
                >
                  <div className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-white mb-8 shadow-sm transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: feature.color }}>
                    <feature.icon size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text mb-3 tracking-tight relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed font-medium relative z-10">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
