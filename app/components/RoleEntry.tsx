"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type Props = {
  company: string;
  title: string;
  dates: string;
  summary: string;
  bullets: string[];
};

export function RoleEntry({ company, title, dates, summary, bullets }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-slate-700 ring-2 ring-slate-950" />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
        <div>
          <h2 className="text-base font-bold text-slate-100">{title}</h2>
          <p className="text-sm text-blue-300/80">{company}</p>
        </div>
        <span className="text-xs font-mono text-slate-500 shrink-0">{dates}</span>
      </div>

      {/* Mobile: summary + toggle */}
      <div className="sm:hidden">
        <p className="text-[14px] text-slate-400 leading-relaxed italic">{summary}</p>

        {expanded && (
          <ul className="mt-3 space-y-2.5">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-[14px] text-slate-300 leading-relaxed">
                <span className="mt-[8px] w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors"
        >
          {expanded ? (
            <><ChevronUp size={13} /> Show less</>
          ) : (
            <><ChevronDown size={13} /> View details</>
          )}
        </button>
      </div>

      {/* Desktop: full bullet list */}
      <ul className="hidden sm:block space-y-2.5">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-[15px] text-slate-300 leading-relaxed">
            <span className="mt-[9px] w-1 h-1 rounded-full bg-slate-600 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
