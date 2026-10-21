"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0B1B33]/10 backdrop-blur-md"
      style={{ backgroundColor: "rgba(251,248,241,0.92)" }}>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Fashion Home Sourcing"
            width={150}
            height={50}
            style={{ height: 40, width: "auto" }}
            className="object-contain"
            unoptimized
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[#0B1B33]/70 transition-colors hover:bg-[#0B1B33]/5 hover:text-[#0B1B33]">
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact" id="header-cta"
            className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 active:scale-95"
            style={{ backgroundColor: "#C59B27" }}>
            Request a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button id="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded={open}
          onClick={() => setOpen(p => !p)}
          className="md:hidden rounded-md p-2 text-[#0B1B33]/70 hover:bg-[#0B1B33]/5 transition-colors">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!open}>
        <nav className="flex flex-col gap-1 border-t border-[#0B1B33]/10 px-4 py-4"
          style={{ backgroundColor: "#FBF8F1" }}
          aria-label="Mobile navigation">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-[#0B1B33]/80 hover:bg-[#0B1B33]/5 hover:text-[#0B1B33] transition-colors">
              {label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
            style={{ backgroundColor: "#C59B27" }}>
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
