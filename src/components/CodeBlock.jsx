import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ code, output }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-white/10">
      <div className="flex items-center justify-between bg-[#1e293b] px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="bg-[#0f172a] text-[#e2e8f0] p-4 sm:p-5 overflow-x-auto text-sm leading-relaxed font-mono">
        <code>{code}</code>
      </pre>
      {output && (
        <div className="bg-[#1a1a2e] border-t border-white/10 px-4 py-3">
          <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Output</span>
          <pre className="text-sm text-slate-300 mt-1 font-mono whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
}
