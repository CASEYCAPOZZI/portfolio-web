export function DevBanner() {
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="w-full bg-amber-400/10 border-b border-amber-400/30 px-4 py-1.5 flex items-center justify-center gap-2 text-[11px] font-mono font-semibold text-amber-300 tracking-wide">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
      DEVELOPMENT — localhost
    </div>
  );
}
