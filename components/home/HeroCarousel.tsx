"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ChevronRight } from "lucide-react";

const SLIDES = [
  { src: "/assets/hero-slide1.jpg", alt: "Luxury folded towel stacks and navy bedspreads" },
  { src: "/assets/hero-slide2.jpg", alt: "High-density textile weaving looms and fabric rolls" },
  { src: "/assets/hero-slide3.jpg", alt: "Hospitality bedroom linens and institutional home textiles" },
];

const FULL_TEXT = "Responsibly Building a Sustainable Textile Future";
const TYPEWRITER_SPEED = 55; // ms per char
const SLIDE_INTERVAL = 5000; // ms per slide

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [typed, setTyped]     = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Continuous looping typewriter
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typed === FULL_TEXT) {
      // Pause at full text before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && typed === "") {
      // Pause at empty before re-typing
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    } else {
      // Typing or deleting step
      const delay = isDeleting ? 25 : 55;
      timeout = setTimeout(() => {
        setTyped(prev =>
          isDeleting
            ? FULL_TEXT.substring(0, prev.length - 1)
            : FULL_TEXT.substring(0, prev.length + 1)
        );
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [typed, isDeleting]);

  // Auto-advance slides
  const nextSlide = useCallback(() => setCurrent(c => (c + 1) % SLIDES.length), []);
  useEffect(() => {
    const id = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [nextSlide]);

  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden" aria-label="Hero carousel">

      {/* ── Slides ── */}
      <AnimatePresence initial={false}>
        <motion.div key={current}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0">
          <Image
            src={SLIDES[current].src}
            alt={SLIDES[current].alt}
            fill className="object-cover"
            unoptimized priority={current === 0}
          />
          {/* Dark + Navy gradient overlay */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(11,27,51,0.85) 0%, rgba(11,27,51,0.55) 55%, rgba(11,27,51,0.25) 100%)" }} />
        </motion.div>
      </AnimatePresence>

      {/* ── Content ── */}
      <div className="relative z-10 flex h-full items-center py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">

            {/* Left Content Column */}
            <div className="lg:col-span-8 max-w-2xl">

              {/* Brand Logo for Mobile (shows above text on mobile/tablet) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-5 flex lg:hidden items-center gap-3.5"
              >
                <div
                  className="relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 overflow-hidden rounded-full p-1.5 shadow-2xl backdrop-blur-md"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.96)",
                    border: "2px solid #C59B27",
                    boxShadow: "0 8px 30px rgba(197, 155, 39, 0.35)",
                  }}
                >
                  <Image
                    src="/assets/logo.png"
                    alt="Fashion Home Sourcing"
                    fill
                    className="object-contain p-1"
                    unoptimized
                    priority
                  />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-widest" style={{ color: "#C59B27" }}>
                    Official Sourcing Partner
                  </span>
                  <span className="block text-base font-bold text-white tracking-wide">
                    Fashion Home Sourcing
                  </span>
                </div>
              </motion.div>

              {/* Badge */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
                style={{ borderColor: "#C59B27", color: "#C59B27", backgroundColor: "rgba(197,155,39,0.15)" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#C59B27" }} />
                Global Textile Sourcing &amp; Manufacturing
              </motion.div>

              {/* Typewriter heading with min-height to prevent jitter */}
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl min-h-[110px] sm:min-h-[140px] lg:min-h-[170px]">
                {typed}
                <span className="cursor-blink ml-1 inline-block w-[3px] rounded-sm bg-[#C59B27]" style={{ height: "0.85em", verticalAlign: "middle" }} aria-hidden="true" />
              </h1>

              {/* Sub-copy */}
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
                className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Global sourcing, manufacturing, and supply chain excellence for luxury home
                textiles and precision garments.
              </motion.p>

              {/* CTAs */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:marketing@fashionhomesourcing.net" id="hero-contact-button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
                  style={{ backgroundColor: "#C59B27" }}>
                  <Mail size={16} /> Contact
                </a>
                <Link href="/products" id="hero-our-products"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#C59B27] hover:bg-[#C59B27]/20"
                  style={{ borderColor: "rgba(255,255,255,0.5)" }}>
                  Our Products <ChevronRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Grand Brand Showcase Plaque on Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex lg:col-span-4 justify-center items-center"
            >
              <div className="relative group text-center">
                {/* Golden ambient halo */}
                <div
                  className="absolute -inset-4 rounded-full opacity-40 blur-2xl transition-all duration-700 group-hover:opacity-70"
                  style={{
                    background: "radial-gradient(circle, #C59B27 0%, rgba(197,155,39,0.2) 65%, transparent 85%)",
                  }}
                />

                {/* Grand Circular Emblem */}
                <div
                  className="relative flex items-center justify-center rounded-full p-4 transition-transform duration-500 group-hover:scale-105 shadow-2xl"
                  style={{
                    width: 280,
                    height: 280,
                    backgroundColor: "rgba(255, 255, 255, 0.97)",
                    border: "3.5px solid #C59B27",
                    boxShadow: "0 25px 60px rgba(0, 0, 0, 0.6), 0 0 45px rgba(197, 155, 39, 0.4)",
                  }}
                >
                  <div className="relative h-60 w-60 overflow-hidden">
                    <Image
                      src="/assets/logo.png"
                      alt="Fashion Home Sourcing Brand Logo"
                      fill
                      className="object-contain"
                      unoptimized
                      priority
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <span
                    className="inline-block rounded-full px-4 py-1 text-[11px] font-bold tracking-widest uppercase text-white shadow-md backdrop-blur-md"
                    style={{
                      backgroundColor: "rgba(11, 27, 51, 0.85)",
                      border: "1px solid rgba(197, 155, 39, 0.5)",
                    }}
                  >
                    Est. Pakistan &bull; Worldwide Export
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Pagination dots ── */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2.5" role="tablist" aria-label="Carousel navigation">
        {SLIDES.map((_, i) => (
          <button key={i} role="tab" aria-selected={i === current} aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className="h-2 rounded-full transition-all duration-300 focus:outline-none"
            style={{
              width: i === current ? 28 : 8,
              backgroundColor: i === current ? "#C59B27" : "rgba(255,255,255,0.4)",
            }} />
        ))}
      </div>
    </section>
  );
}
