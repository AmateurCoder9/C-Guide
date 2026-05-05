import { BookOpen, Code2, Shield, Zap, Terminal, BrainCircuit } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import AnimateIn from './ui/AnimateIn';

const features = [
  { title: 'Core Syntax', description: 'Master data types, variables, and operators with precision.', icon: Code2 },
  { title: 'Control Flow', description: 'Command execution paths with advanced branching logic.', icon: Zap },
  { title: 'Functions', description: 'Modularize code. Learn overloading and recursion.', icon: Terminal },
  { title: 'Memory Access', description: 'Direct hardware manipulation via arrays and strings.', icon: Shield },
  { title: 'OOP Systems', description: 'Architect robust applications using classes and inheritance.', icon: BookOpen },
  { title: 'Logic Gates', description: 'Test your understanding with rigorous practice protocols.', icon: BrainCircuit },
];

export default function Features() {
  return (
    <section id="features" className="section-padding relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.2)] text-accent text-sm font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              System Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6 tracking-tight">
              Advanced <span className="gradient-text">Architecture</span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <AnimateIn key={idx} delay={idx * 0.1}>
              <TiltCard className="h-full">
                <div 
                  className="group relative h-full glass-card p-8 cursor-none overflow-hidden"
                  data-interactive
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-colors duration-500" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-[#131320] border border-white/10 flex items-center justify-center text-primary-light mb-6 group-hover:scale-110 group-hover:text-accent transition-all duration-300 shadow-inner relative z-10">
                    <feature.icon size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight relative z-10 group-hover:text-primary-light transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium relative z-10">
                    {feature.description}
                  </p>
                  
                  {/* Subtle animated border on hover */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-[15px] transition-colors duration-500 pointer-events-none" />
                </div>
              </TiltCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
