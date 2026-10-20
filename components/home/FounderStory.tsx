import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LeaderPhoto from "@/components/common/LeaderPhoto";

export default function FounderStory() {
  return (
    <section className="overflow-hidden py-16 sm:py-24" style={{ backgroundColor: "#FBF8F1" }}
      aria-labelledby="founder-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Left – portrait with geometric accent (kept blank until real CEO photo is added) */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Geometric background accent */}
            <div className="absolute -left-6 -top-6 h-64 w-64 rounded-full opacity-15"
              style={{ backgroundColor: "#C59B27" }} aria-hidden="true" />
            <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full opacity-10"
              style={{ backgroundColor: "#0B1B33" }} aria-hidden="true" />

            <div className="relative z-10 w-full max-w-[360px]">
              <LeaderPhoto showOverlay={false} className="h-[440px] sm:h-[480px] w-full" />
            </div>
          </div>

          {/* Right – narrative */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C59B27" }}>
              Our Story
            </p>
            <h2 id="founder-heading"
              className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl"
              style={{ color: "#0B1B33" }}>
              YOUR GLOBAL SOURCING PARTNER OF TEXTILES &amp; APPAREL
            </h2>
            <p className="text-sm leading-relaxed text-[#0B1B33]/60">
              Originating in Pakistan&rsquo;s primary textile hub, sourcing raw materials for an
              international clientele and expanding into a complete end-to-end supply chain solution.
            </p>

            <div className="space-y-4 border-l-2 pl-5" style={{ borderColor: "#C59B27" }}>
              <p className="text-sm leading-relaxed text-[#0B1B33]/70">
                &ldquo;The story of Fashion Home Sourcing began with a dedicated team and a simple
                commitment: prioritizing quality, reliability, and long-term partnerships.&rdquo;
              </p>
              <p className="text-sm leading-relaxed text-[#0B1B33]/70">
                &ldquo;With specialized departments and a customer-first approach, we tailor fabric
                sourcing solutions to meet the evolving demands of top global brands.&rdquo;
              </p>
            </div>

            <Link href="/about" id="founder-learn-more"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: "#C59B27" }}>
              Learn Our Story <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
