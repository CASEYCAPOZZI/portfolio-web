"use client";

import { useEffect, useState } from 'react';
import { Terminal, Activity, ArrowUpRight, RefreshCw } from 'lucide-react';

type ApiStatus = {
  status?: string;
  environment?: string;
  timestamp?: string;
} | null;

function isApiOnline(apiStatus: ApiStatus) {
  const s = apiStatus?.status?.toLowerCase() ?? '';
  return s.includes('up') || s.includes('online') || s.includes('ok') || s.includes('running');
}

async function fetchStatus() {
  const res = await fetch('/api/status', { cache: 'no-store' });
  if (!res.ok) throw new Error('status fetch failed');
  return (await res.json()) as ApiStatus;
}

export default function PlaygroundPage() {
  const [apiStatus, setApiStatus] = useState<ApiStatus>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function refresh() {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchStatus();
      setApiStatus(data);
    } catch {
      setApiStatus({ status: 'Offline' });
      setError('Unable to reach the API (local or production).');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void refresh();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 pb-20">
      <header className="pt-6 pb-10">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal size={14} />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Playground</span>
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-slate-50">
          Developer dashboard.
        </h1>
        <p className="mt-4 text-slate-300 leading-relaxed max-w-2xl">
          A space for interactive API checks and experiments. This page uses a same-origin proxy to
          avoid CORS, and prefers your local API on `localhost:8080` when available.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="status-scanlines relative overflow-hidden rounded-2xl bg-slate-950/60 border border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="relative z-10 p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-slate-300">
                <Activity size={16} className="text-blue-300/80" />
                <h2 className="text-sm font-bold tracking-wide">Live Health Check</h2>
              </div>
              <button
                onClick={() => void refresh()}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900/60 border border-slate-800 hover:bg-slate-900/80"
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                Refresh
              </button>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    loading ? 'bg-slate-500 animate-pulse' : isApiOnline(apiStatus) ? 'bg-emerald-400' : 'bg-rose-400'
                  }`}
                />
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Live AWS Core
                  </p>
                  <p className="text-sm font-semibold text-slate-100">
                    {loading ? 'Checking…' : isApiOnline(apiStatus) ? 'Active' : 'Offline'}
                  </p>
                </div>
              </div>

              <a
                href="/api/docs"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-500/25 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-200/90 hover:bg-blue-500/15"
              >
                Swagger <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="mt-6 rounded-xl bg-black/30 border border-slate-800 p-4 font-mono text-[12px] text-slate-300">
              <div className="text-slate-500">$ curl /api/status</div>
              <div className="mt-2 whitespace-pre-wrap wrap-break-word">
                {error ? (
                  <span className="text-rose-200">{error}</span>
                ) : apiStatus ? (
                  JSON.stringify(apiStatus, null, 2)
                ) : (
                  <span className="text-slate-500">No data yet.</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] p-6">
          <h2 className="text-sm font-bold tracking-wide text-slate-200">What’s next</h2>
          <ul className="mt-4 space-y-2 text-[15px] text-slate-300 leading-relaxed list-disc pl-5">
            <li>Add authenticated admin utilities (private) for future experiments.</li>
            <li>Expose additional diagnostics endpoints and surface them here.</li>
            <li>Integrate simple latency sampling and uptime snapshots.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

