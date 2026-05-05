import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ title, children, defaultOpen = false, id }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-primary/30" id={id}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-slate-50 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800 text-sm sm:text-base pr-4">{title}</span>
        <ChevronDown
          size={20}
          className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-2 bg-slate-50/50 border-t border-slate-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
