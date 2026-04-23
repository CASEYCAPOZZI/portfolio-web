"use client";

import { useEffect, useState } from 'react';

type ApiStatus = {
  status?: string;
  environment?: string;
} | null;

function isApiOnline(apiStatus: ApiStatus) {
  const s = apiStatus?.status?.toLowerCase() ?? '';
  return s.includes('up') || s.includes('online') || s.includes('ok') || s.includes('running');
}

export function LiveAwsCoreStatus() {
  const [apiStatus, setApiStatus] = useState<ApiStatus>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => setApiStatus(data))
      .catch(() => setApiStatus({ status: 'Offline' }))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex items-center gap-2 justify-center">
      <div
        className={`w-1.5 h-1.5 rounded-full ${
          loading ? 'bg-slate-600 animate-pulse' : isApiOnline(apiStatus) ? 'bg-emerald-500/70' : 'bg-rose-500/70'
        }`}
      />
      <span className="text-[10px] text-slate-600 font-mono">
        AWS Core: {loading ? '...' : isApiOnline(apiStatus) ? 'Active' : 'Offline'}
        {apiStatus?.environment ? ` · ${apiStatus.environment}` : ''}
        {' · us-east-2'}
      </span>
    </div>
  );
}
