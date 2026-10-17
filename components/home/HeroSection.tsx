import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#2C221E]">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)",
        }}
        aria-hidden="true"
      />

      {/* Warm gradient accent */}
      <div
        className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #8B5E3C 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-600 bg-stone-800/60 px-4 py-1.5 text-xs font-medium tracking-wide text-stone-300 backdrop-blur-sm">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#8B5E3C" }}
            />
            Global Textile Sourcing &amp; Precision Manufacturing
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Responsibly Building a{" "}
            <span
              className="inline"
              style={{
                backgroundImage: "linear-gradient(135deg, #C48A60, #8B5E3C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sustainable Textile Future
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-400 sm:text-lg">
            We engineer premium yarns, high-performance woven fabrics, workwear, and luxury home
            textiles for world-class fashion brands, industrial fleets, and hospitality chains.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              id="hero-primary-cta"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#8B5E3C" }}
            >
              Request a Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              id="hero-secondary-cta"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-600 px-6 py-3 text-sm font-semibold text-stone-200 transition-all duration-200 hover:border-stone-400 hover:bg-stone-800/50"
            >
              Explore Products
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
