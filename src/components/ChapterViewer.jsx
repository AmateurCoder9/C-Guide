import { ArrowLeft, BookOpen } from 'lucide-react';
import Accordion from './Accordion';
import CodeBlock from './CodeBlock';

export default function ChapterViewer({ chapter, onBack }) {
  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Chapters
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${chapter.color} flex items-center justify-center shadow-lg`}>
              <BookOpen size={20} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-primary-light bg-primary/20 px-3 py-1 rounded-full">
              Chapter {chapter.id}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {chapter.title}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">{chapter.description}</p>
          <div className="mt-6 text-sm text-slate-500">
            {chapter.topics.length} topics · {chapter.topics.reduce((acc, t) => acc + t.examples.length, 0)} code examples
          </div>
        </div>
      </div>

      {/* Topics */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="space-y-4">
          {chapter.topics.map((topic, idx) => (
            <Accordion
              key={topic.id}
              title={`${topic.id} — ${topic.title}`}
              defaultOpen={idx === 0}
              id={`topic-${topic.id}`}
            >
              {/* Explanation */}
              <div className="prose prose-slate prose-sm max-w-none mb-5">
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {topic.explanation}
                </p>
              </div>

              {/* Examples */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Examples
                </h4>
                {topic.examples.map((example, eIdx) => (
                  <div key={eIdx}>
                    <p className="text-sm font-semibold text-slate-700 mb-1">
                      {example.title}
                    </p>
                    <CodeBlock code={example.code} output={example.output} />
                  </div>
                ))}
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
