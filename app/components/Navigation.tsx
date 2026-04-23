"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, Network } from 'lucide-react';

const navItems = [
  { href: '/',             label: 'Home',         icon: Home },
  { href: '/resume',       label: 'Resume',        icon: FileText },
  { href: '/architecture', label: 'Architecture',  icon: Network },
  // Playground hidden until the page is ready — add { href: '/playground', label: 'Playground', icon: FlaskConical } back here when done
] as const;

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="relative z-50 flex justify-center pt-8 pb-2 px-6">
      <nav className="flex items-center gap-1 rounded-2xl border border-slate-800/80 bg-slate-900 px-3 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
        {/* Nav links with icons */}
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
                active
                  ? 'bg-slate-800 text-slate-50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <Icon size={13} />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
