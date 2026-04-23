import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowUpRight, Network, Hammer } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

type SkillTier = 'current' | 'growing';

const skills: { label: string; tier: SkillTier }[] = [
  { label: 'Java',         tier: 'current' },
  { label: 'Spring Boot',  tier: 'current' },
  { label: 'AWS',          tier: 'current' },
  { label: 'GitLab CI/CD', tier: 'current' },
  { label: 'REST Assured',  tier: 'current' },
  { label: 'Karate',       tier: 'current' },
  { label: 'Python',       tier: 'growing' },
  { label: 'Docker',       tier: 'growing' },
  { label: 'Next.js',      tier: 'growing' },
  { label: 'PostgreSQL',   tier: 'growing' },
  { label: 'TypeScript',   tier: 'growing' },
];

const tierMeta: Record<SkillTier, { label: string; className: string }> = {
  current: { label: 'Current Focus', className: 'border-blue-500/40 bg-blue-500/10 text-blue-200' },
  growing: { label: 'Growing',       className: 'border-slate-600/60 bg-slate-800/60 text-slate-300' },
};

const tierOrder: SkillTier[] = ['current', 'growing'];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-20">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="pt-6 pb-12">
        <div className="flex items-center gap-4">
          <Image
            src="/profile.png"
            alt="Casey Capozzi"
            width={64}
            height={64}
            className="rounded-full border-2 border-slate-800/80 shrink-0"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-50">
            <span className="bg-linear-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Casey Capozzi
            </span>
          </h1>
        </div>

        {/* Title / role line */}
        <p className="mt-3 text-sm font-mono text-slate-500 tracking-wide">
          Senior Engineer · American Family Insurance
        </p>

        {/* Bio */}
        <p className="mt-5 text-[15px] md:text-base text-slate-300 leading-relaxed max-w-2xl">
          Nearly a decade into enterprise Java and I still enjoy the craft. I currently do test
          automation at AmFam using REST Assured, Karate, and Playwright — and this site is my
          live lab for experimenting with Next.js, cloud architecture, and AWS infrastructure
          (ECS, Amplify, ALB, and Route 53). When I&apos;m not at a desk, I&apos;m hunting, fishing,
          or at the family cabin in northern Wisconsin.
        </p>

        {/* Currently block */}
        <div className="mt-5 border-l-2 border-emerald-500/40 pl-4 max-w-2xl">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400/80">Currently</span>
          </div>
          <p className="text-[14px] text-slate-400 leading-relaxed">
            On the Rate Platform Microservices team at AmFam — moving from QE (REST Assured, Karate,
            Playwright) into backend development with Spring Boot and Python.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/architecture"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-900/80"
          >
            <Network size={14} className="text-slate-400" /> Architecture <ArrowUpRight size={14} />
          </Link>
          <a
            href="/api/docs"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-200/90 hover:bg-emerald-500/15"
          >
            API docs <ArrowUpRight size={14} />
          </a>
          <a
            href="https://github.com/CASEYCAPOZZI"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-900/80"
          >
            <FaGithub size={14} /> GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      {/* ── TECH STACK ───────────────────────────────────────── */}
      <section className="border-t border-slate-800/70 pt-10">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Tech Stack</h2>
        <div className="space-y-5">
          {tierOrder.map((tier) => {
            const meta = tierMeta[tier];
            const group = skills.filter((s) => s.tier === tier);
            return (
              <div key={tier} className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 w-24 shrink-0">
                  {meta.label}
                </span>
                {group.map((s) => (
                  <span
                    key={s.label}
                    className={`px-3 py-1 rounded-lg border text-xs font-semibold ${meta.className}`}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PERSONAL PROJECTS ────────────────────────────────── */}
      <section className="border-t border-slate-800/70 pt-10 mt-10">
        <div className="flex items-center gap-2 mb-6">
          <Hammer size={14} className="text-slate-400" />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Personal Projects</h2>
        </div>
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
          <p className="text-[15px] text-slate-400 leading-relaxed">
            A few things are taking shape behind the scenes.{' '}
            <span className="text-slate-200 font-semibold">Check back soon</span> — progress updates
            will surface here as they&apos;re ready to share.
          </p>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section className="border-t border-slate-800/70 mt-10 pt-10">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Get in Touch</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:capozzicasey@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900/80 transition-colors"
          >
            <Mail size={15} className="text-slate-400" /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/casey-capozzi-188b2a128/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:text-[#0A66C2] hover:bg-slate-900/80 transition-colors"
          >
            <FaLinkedinIn size={15} /> LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
}
