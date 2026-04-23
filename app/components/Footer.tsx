import { LiveAwsCoreStatus } from './LiveAwsCoreStatus';

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col items-center gap-3">
        <LiveAwsCoreStatus />
        <p className="text-slate-700 text-[10px] uppercase tracking-widest">
          © 2026 Casey Capozzi
        </p>
      </div>
    </footer>
  );
}
