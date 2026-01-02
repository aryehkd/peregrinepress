"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/about", label: "About Us" },
  { href: "/authors", label: "Authors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#FFFDE7] border-b shadow-sm">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 sm:gap-4"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo-transparent.png"
              alt="logo"
              width={128}
              height={128}
              className="h-12 w-auto sm:h-14 md:h-16 object-contain shrink-0"
              priority
            />

            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-lg sm:text-xl md:text-4xl text-gray-900">
                Peregrine Press
              </span>
              <span
                className="font-serif text-xs sm:text-sm md:text-base"
                style={{ marginTop: "2px", color: "#636B30" }}
              >
                African Voices in Translation
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-800 hover:text-yellow-700 transition text-xl font-serif whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${open ? "block" : "hidden"} pb-4`}>
          <div className="flex flex-col gap-2 rounded-lg border border-black/10 bg-white/40 p-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-lg text-gray-900 hover:text-yellow-700 transition py-1"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}