"use client";

import { useState } from "react";
import Link from "next/link";
import { Flame, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-data";
import { Container } from "@/components/ui/container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-[0.14em] uppercase"
        >
          <Flame className="size-4 text-ember" aria-hidden />
          Fire<span className="text-ember">Watch</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 font-mono text-[0.8rem] text-ink-muted transition-colors hover:bg-card-warm hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#request"
            className="ml-3 rounded-full bg-ember px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ember-deep"
          >
            Request a briefing
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <nav
          className="border-t border-line bg-page md:hidden"
          aria-label="Mobile"
        >
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-sm text-ink-muted hover:bg-card-warm hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
