"use client";

import { useState } from "react";

type NavItem = { href: string; label: string };

// Phone/tablet slide-down menu. The inline nav links only appear from lg up
// (six items in Latvian overflow a tablet), so this is how everyone narrower
// reaches the sections.
export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-deep bg-cream/70 text-ink backdrop-blur"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open ? (
        <>
          <div
            className="fixed inset-0 z-40 bg-night/20"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <nav className="fixed right-4 left-4 top-20 z-50 flex flex-col rounded-2xl border border-sand-deep bg-cream p-2 shadow-xl">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-display text-lg text-ink transition-colors hover:bg-sand"
              >
                {it.label}
              </a>
            ))}
          </nav>
        </>
      ) : null}
    </div>
  );
}
