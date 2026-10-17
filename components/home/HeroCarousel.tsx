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
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">

            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
              style={{ borderColor: "#C59B27", color: "#C59B27", backgroundColor: "rgba(197,155,39,0.1)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#C59B27" }} />
              Global Textile Sourcing &amp; Manufacturing
            </motion.div>

            {/* Typewriter heading with min-height to prevent jitter */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl min-h-[130px] sm:min-h-[150px] lg:min-h-[180px]">
              {typed}
              <span className="cursor-blink ml-1 inline-block w-[3px] rounded-sm bg-[#C59B27]" style={{ height: "0.85em", verticalAlign: "middle" }} aria-hidden="true" />
            </h1>

            {/* Sub-copy */}
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
              className="mt-5 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Global sourcing, manufacturing, and supply chain excellence for luxury home
              textiles and precision garments.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:ak8757796@gmail.com" id="hero-contact-button"
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
