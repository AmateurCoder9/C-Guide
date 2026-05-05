import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-[2rem] overflow-hidden mt-4 group border border-black/5 shadow-sm bg-white/80 backdrop-blur-xl code-glow">
      <div className="bg-black/5 px-6 py-4 flex items-center justify-between border-b border-black/5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff3b30]" />
          <span className="w-3 h-3 rounded-full bg-[#ffcc00]" />
          <span className="w-3 h-3 rounded-full bg-[#34c759]" />
        </div>
        <button
          onClick={handleCopy}
          className="text-text-secondary hover:text-text transition-colors p-1"
          title="Copy code"
          data-interactive
        >
          {copied ? <Check size={18} className="text-[#34c759]" /> : <Copy size={18} />}
        </button>
      </div>
      <div className="relative">
        <pre className="p-6 text-sm font-mono text-text overflow-x-auto whitespace-pre-wrap leading-relaxed relative z-10">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
