"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Box, Menu, MessageSquare, Phone, Search, ShoppingCart, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/75 backdrop-blur-xl border-b border-white/10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 text-sm md:text-base font-semibold uppercase tracking-[0.24em]">
            <span className="flex h-12 w-12 items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-white shadow-sm">
              <Box className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Srinuvasulu</p>
              <p className="text-sm md:text-lg font-bold">Safety Nets</p>
            </div>
          </Link>

          <div className="hidden lg:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search"
                className="w-full rounded-full border border-white/15 bg-white/10 py-3 pl-12 pr-4 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:9908233314"
              className="hidden md:inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
               9908233314
            </a>
            <a
              href="https://wa.me/9491008380"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-white/20"
            >
              <MessageSquare className="h-5 w-5" />
               9491008380
            </a>
            <button
              type="button"
              className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 border-t border-white/10 pt-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-white/10 bg-black/90"
          >
            <div className="space-y-4 px-6 py-5">
              <div className="flex flex-wrap gap-2">
                <a
                  href="tel:8790518724"
                  className="flex min-w-[calc(50%-0.5rem)] flex-1 items-center justify-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-center text-[10px] font-semibold uppercase tracking-[0.18em] transition hover:bg-white/10"
                >
                  <Phone className="h-3 w-3" />
                  8790518724
                </a>
                <a
                  href="https://wa.me/9491008380"
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-w-[calc(50%-0.5rem)] flex-1 items-center justify-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-center text-[10px] font-semibold uppercase tracking-[0.18em] transition hover:bg-white/10"
                >
                  <MessageSquare className="h-3 w-3" />
                  9491008380
                </a>
              </div>

              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full rounded-full border border-white/15 bg-white/10 py-3 pl-12 pr-4 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/signup"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
