"use client";
import { useEffect, useState } from 'react';
import { Mail, MapPin, Briefcase, Code2, Terminal, Info, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import NextLink from 'next/link';
import Image from 'next/image';

type ApiStatus = {
  status?: string;
  environment?: string;
} | null;

function isApiOnline(apiStatus: ApiStatus) {
  const s = apiStatus?.status?.toLowerCase() ?? '';
  return s.includes('up') || s.includes('online') || s.includes('ok') || s.includes('running');
}

export default function Home() {
  const [apiStatus, setApiStatus] = useState<ApiStatus>(null);
  const [apiStatusLoading, setApiStatusLoading] = useState(true);

  useEffect(() => {
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => setApiStatus(data))
      .catch(() => setApiStatus({ status: 'Offline' }))
      .finally(() => setApiStatusLoading(false));
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/35 selection:text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_10%,rgba(59,130,246,0.20),transparent_55%),radial-gradient(60%_50%_at_90%_0%,rgba(16,185,129,0.12),transparent_55%),linear-gradient(180deg,rgba(0,0,0,0.20),rgba(0,0,0,0.85))]"
        aria-hidden
      />

      {/* --- NAVIGATION --- */}
      <nav className="relative max-w-3xl mx-auto py-10 px-6 flex justify-between items-center">
        <NextLink
          href="/"
          className="flex items-center gap-3 font-extrabold tracking-tight text-lg text-slate-100 hover:text-white"
          aria-label="Home"
        >
          <Image
            src="/profile.png"
            alt="Casey Capozzi"
            width={32}
            height={32}
            className="rounded-full border border-slate-800/80"
            priority
          />
          caseycapozzi.com
        </NextLink>
        <div className="flex gap-5 items-center">
          <a
            href="https://www.linkedin.com/in/casey-capozzi-188b2a128/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-400 hover:text-[#0A66C2] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://github.com/CASEYCAPOZZI"
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:capozzicasey@gmail.com"
            className="text-slate-400 hover:text-emerald-300 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </nav>

      {/* --- HERO / BIO --- */}
      <header className="relative max-w-3xl mx-auto py-16 px-6">
        <div className="flex items-center gap-2 text-slate-400 mb-5">
          <MapPin size={14} />
          <span className="text-xs font-semibold uppercase tracking-widest">Eau Claire, Wisconsin</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-50">
          <span className="bg-linear-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Casey Capozzi
          </span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-slate-300 leading-relaxed">
          Senior Software Engineer at{' '}
          <span className="text-slate-50 font-semibold">American Family Enterprise</span>. I build cloud-native
          services, testing frameworks, and automation that keep systems dependable.
        </p>
        <p className="mt-4 text-[15px] text-slate-400 leading-relaxed">
          This site is also my <span className="text-emerald-300/90 font-semibold">exploration lab</span>—a living
          project where I experiment with Next.js, UI systems, and deployment workflows end-to-end.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/api/docs"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-500/25 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-200/90 hover:bg-blue-500/15"
          >
            API docs (Swagger) <ArrowUpRight size={14} />
          </a>
          <a
            href="mailto:capozzicasey@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-200/90 hover:bg-emerald-500/15"
          >
            Contact <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      {/* --- PROFESSIONAL EXPERIENCE --- */}
      <section className="relative max-w-3xl mx-auto py-8 px-6">
        <div className="flex items-center gap-2 mb-8 text-slate-400">
          <Briefcase size={14} />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Career Highlights</h2>
        </div>
        
        <div className="space-y-12">
          {/* AmFam */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-slate-100">Senior Engineer // American Family</h3>
              <span className="text-xs font-mono text-slate-500">2022 — Present</span>
            </div>
            <p className="text-slate-300 text-[15px] leading-relaxed">
              Leading the design of comprehensive API test suites using Rest Assured and Karate. 
              Architecting GitLab CI/CD pipelines and utilizing Python/Bash scripting to automate 
              enterprise-level regression testing across interconnected applications.
            </p>
          </div>

          {/* Menards */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-slate-100">Developer II // Menards Inc.</h3>
              <span className="text-xs font-mono text-slate-500">2018 — 2022</span>
            </div>
            <p className="text-slate-300 text-[15px] leading-relaxed">
              Led the redesign of the enterprise Time and Attendance system. Developed core Java web 
              applications and optimized complex Oracle SQL reporting for high-volume business operations.
            </p>
          </div>
        </div>
      </section>

      {/* --- TECH STACK (Summary) --- */}
      <section className="relative max-w-3xl mx-auto py-12 px-6">
        <div className="flex items-center gap-2 mb-6 text-slate-400">
          <Code2 size={14} />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Primary Stack</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Java', 'Spring', 'MySQL/Oracle', 'AWS', 'Docker', 'Python', 'Next.js'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-900/70 border border-slate-800 rounded-lg text-xs font-semibold text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* --- CURRENT EXPLORATIONS --- */}
      <section className="relative max-w-3xl mx-auto py-12 px-6 border-t border-slate-800/70">
        <div className="flex items-center gap-2 mb-8 text-slate-400">
          <Terminal size={14} />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]">Personal Build Space</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h4 className="font-bold text-slate-100">WI Outdoor Monitor</h4>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
              Unified platform for hunting/fishing conditions and WI DNR regulatory tracking.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h4 className="font-bold text-slate-100">Reloading & Ballistics</h4>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
              Digital toolkit for precision cartridge reloading and rifle profile management.
            </p>
          </div>
        </div>
      </section>

      {/* --- SYSTEM STATUS --- */}
      <section className="relative max-w-3xl mx-auto py-12 px-6">
        <div className="py-6 border-t border-slate-800/70 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${
                apiStatusLoading
                  ? 'bg-slate-500 animate-pulse'
                  : isApiOnline(apiStatus)
                    ? 'bg-emerald-400'
                    : 'bg-rose-400'
              }`}
            />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Live AWS Core:{' '}
              {apiStatusLoading ? 'Checking...' : isApiOnline(apiStatus) ? 'Active' : 'Offline'}
            </span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            us-east-2 // ohio{apiStatus?.environment ? ` // ${apiStatus.environment}` : ''}
          </span>
        </div>
      </section>

      {/* --- FOOTER & DISCLAIMER --- */}
      <footer className="relative max-w-3xl mx-auto py-20 px-6 text-center">
        <div className="mb-10 text-slate-400 group">
          <p className="text-xs">Direct Contact:</p>
          <a
            href="mailto:capozzicasey@gmail.com"
            className="text-sm font-semibold text-slate-200 hover:text-blue-300 transition-colors"
          >
            capozzicasey@gmail.com
          </a>
        </div>
        
        <div className="flex items-start gap-2 justify-center max-w-lg mx-auto bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <Info size={14} className="text-slate-500 mt-0.5 shrink-0" />
          <p className="text-slate-400 text-[11px] leading-relaxed text-left">
            <strong>Disclaimer:</strong> This website is a personal project and is not affiliated with, endorsed by, or representative of American Family Insurance.
          </p>
        </div>
        <p className="mt-8 text-slate-600 text-[10px] uppercase tracking-widest">© 2026 Casey Capozzi // Eau Claire, WI</p>
      </footer>
    </div>
  );
}