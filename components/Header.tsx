"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-0.5 text-sm font-medium text-op-paars transition-colors hover:text-op-blauw ${
                  active
                    ? "border-op-blauw text-op-blauw"
                    : "border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-lg bg-op-blauw px-5 py-2.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-op-blauw-dark hover:shadow-md active:scale-100 md:inline-flex md:items-center"
          >
            Maak afspraak
          </Link>

          <button
            type="button"
            className="rounded-lg p-2 text-op-paars transition-colors hover:bg-op-surface md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-op-surface hover:text-op-blauw ${
                    active
                      ? "text-op-blauw underline decoration-op-blauw underline-offset-4"
                      : "text-op-paars"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-3 border-t border-border pt-3">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-lg bg-op-blauw px-5 py-3 text-sm font-extrabold uppercase tracking-wider text-white transition-all duration-200 hover:bg-op-blauw-dark"
              >
                Maak afspraak
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
