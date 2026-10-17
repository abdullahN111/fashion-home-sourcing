import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24"
      style={{ backgroundColor: "#2C221E" }}
      aria-labelledby="cta-heading"
    >
      {/* Warm glow accent */}
      <div
        className="absolute -left-20 bottom-0 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #8B5E3C 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="cta-heading"
          className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
        >
          Looking for Bulk Mill Sourcing or Custom Fabric Weaving?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-stone-400">
          Talk directly to our textile engineers. Get fast turnarounds on lab dips, physical
          swatches, and export pricing.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            id="cta-banner-btn"
            className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#8B5E3C" }}
          >
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
