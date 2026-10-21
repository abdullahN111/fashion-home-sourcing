import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Leaf,
  FlaskConical,
  Award,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Mail,
  Microscope,
  Palette,
  Ruler,
  ClipboardCheck,
} from "lucide-react";
import LeaderPhoto from "@/components/common/LeaderPhoto";

export const metadata: Metadata = {
  title: "About Us | Fashion Home Sourcing",
  description:
    "Decades of textile heritage engineered for modern industry. Based in Karachi, Pakistan, supplying global brands with high-yield fabric sourcing and precision production.",
};

const qualitySteps = [
  {
    step: "01",
    title: "Raw Yarn & Tensile Strength Evaluation",
    description:
      "Rigorous fiber screening verifying micronaire, staple length, tensile resistance, and yarn evenness (Uster standards) before looms are mounted.",
    icon: Microscope,
    tag: "Fiber Integrity",
  },
  {
    step: "02",
    title: "Dye Fastness & Spectrophotometer Color-Matching",
    description:
      "Advanced digital spectrophotometer color-matching under D65, TL84, and Incandescent A light sources, testing wash, rub, and perspiration fastness.",
    icon: Palette,
    tag: "Delta-E Precision",
  },
  {
    step: "03",
    title: "Weft & Warp Shrinkage Control",
    description:
      "Standardized industrial wash-cycle testing to calculate warp and weft dimensional stability, skewness, and GSM consistency after laundering.",
    icon: Ruler,
    tag: "Dimensional Stability",
  },
  {
    step: "04",
    title: "Final 4-Point System Fabric Inspection",
    description:
      "Comprehensive roll-by-roll inspection under ASTM D5430 4-point grading system, ensuring zero critical defects before container dispatch.",
    icon: ClipboardCheck,
    tag: "Pre-Dispatch Guarantee",
  },
];

const impactStats = [
  { value: "30+", label: "Years of Heritage", detail: "Active in Pakistan's primary textile hub" },
  { value: "50+", label: "Certified Partner Mills", detail: "Weaving, dyeing, and finishing networks" },
  { value: "100%", label: "Lab Inspected", detail: "Every batch verified before export" },
  { value: "25+", label: "Global Destinations", detail: "North America, Europe & Middle East" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBF8F1" }}>

      {/* ── 1. Page Header Banner ── */}
      <section
        className="relative overflow-hidden py-16 sm:py-24 text-white"
        style={{ backgroundColor: "#0B1B33" }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#C59B27 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Prominent Brand Logo Badge */}
          <div
            className="mb-5 relative h-24 w-24 sm:h-28 sm:w-28 rounded-full p-1.5 shadow-2xl transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.96)",
              border: "2.5px solid #C59B27",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(197, 155, 39, 0.35)",
            }}
          >
            <Image
              src="/assets/logo.png"
              alt="Fashion Home Sourcing Logo"
              fill
              className="object-contain p-1"
              unoptimized
            />
          </div>

          <nav className="mb-4 flex justify-center text-xs tracking-wider uppercase text-white/50">
            <Link href="/" className="hover:text-[#C59B27] transition-colors">
              Home
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <span style={{ color: "#C59B27" }}>About Us</span>
          </nav>

          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
            style={{
              borderColor: "#C59B27",
              color: "#C59B27",
              backgroundColor: "rgba(197,155,39,0.1)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#C59B27" }} />
            Textile Heritage &amp; Supply Chain Excellence
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Decades of Textile Heritage, Engineered for Modern Industry
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            Based in Karachi, Pakistan—one of the world&apos;s most vital textile corridors—we supply global brands with high-yield fabric sourcing and precision production.
          </p>
        </div>
      </section>

      {/* ── 2. Story & Heritage Section ── */}
      <section className="py-16 sm:py-24 border-b border-[#0B1B33]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

            {/* Left: Founder Photo Frame (5 cols - kept blank until real CEO photo is added) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Background accent frame */}
                <div
                  className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl"
                  style={{ border: "2px solid #C59B27", backgroundColor: "rgba(197,155,39,0.08)" }}
                />

                <LeaderPhoto
                  className="h-[440px] sm:h-[480px] w-full"
                  showOverlay={true}
                />
              </div>
            </div>

            {/* Right: Narrative & Legacy (7 cols) */}
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <svg
                  viewBox="0 0 80 24"
                  className="heartbeat w-14 h-5"
                  fill="none"
                  aria-hidden="true"
                >
                  <polyline
                    points="0,12 12,12 16,4 20,20 24,4 28,20 32,12 44,12 48,2 52,22 56,12 80,12"
                    stroke="#C59B27"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
                  Our Story &amp; Mission
                </span>
              </div>

              <h2
                className="text-2xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight"
                style={{ color: "#0B1B33" }}
              >
                Built on Three Decades of Weaving and Fiber Mastery
              </h2>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-6" style={{ color: "#0B1B33" }}>
                Founded on deep-rooted roots in weaving and fiber processing, our operations have evolved into an agile manufacturing and sourcing network.
              </p>

              <p className="text-sm leading-relaxed text-[#0B1B33]/70 mb-6">
                Originating in Pakistan&apos;s primary textile hub, Fashion Home Sourcing began with a dedicated team and a simple commitment: prioritizing quality, reliability, and long-term partnerships. Today, we bridge international retail buyers, hotel chains, and workwear distributors with Pakistan&apos;s most capable spinning, weaving, and processing mills.
              </p>

              <p className="text-sm leading-relaxed text-[#0B1B33]/70 mb-8">
                With specialized technical departments and a customer-first approach, we tailor fabric sourcing solutions to meet the evolving demands of top global brands—handling everything from raw greige yarn procurement to final container dispatch.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#0B1B33]/10">
                <div className="p-3">
                  <div className="text-sm font-bold text-[#0B1B33] mb-1">Direct Factory Pricing</div>
                  <div className="text-xs text-[#0B1B33]/60">Transparent mill contracts with zero intermediary markups.</div>
                </div>
                <div className="p-3">
                  <div className="text-sm font-bold text-[#0B1B33] mb-1">Claims Accountability</div>
                  <div className="text-xs text-[#0B1B33]/60">Proactive claim resolution to safeguard customer trust.</div>
                </div>
                <div className="p-3">
                  <div className="text-sm font-bold text-[#0B1B33] mb-1">Port-Ready Logistics</div>
                  <div className="text-xs text-[#0B1B33]/60">Seamless container bookings via Karachi Sea &amp; Air Ports.</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Ethical Manufacturing & Sustainable Focus ── */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ backgroundColor: "rgba(197,155,39,0.12)", color: "#C59B27" }}
            >
              Responsible Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B33]">
              Ethical Manufacturing &amp; Sustainable Commitments
            </h2>
            <p className="mt-3 text-sm text-[#0B1B33]/60 max-w-2xl mx-auto">
              Our sourcing ethos balances rigorous commercial performance with social accountability and environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            {/* Card 1: Ethical Manufacturing */}
            <div
              className="rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: "#FBF8F1",
                border: "2px solid #C59B27",
              }}
            >
              <div>
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}
                >
                  <ShieldCheck size={30} strokeWidth={1.8} />
                </div>

                <h3 className="text-2xl font-bold text-[#0B1B33] mb-3">
                  Ethical Manufacturing
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#0B1B33]/80 font-medium mb-6">
                  &ldquo;Zero-tolerance policies on child labor, safe factory working conditions, fair living wages, and continuous worker skill advancement.&rdquo;
                </p>

                <ul className="space-y-3 pt-4 border-t border-[#0B1B33]/10">
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-[#0B1B33]/75">
                    <CheckCircle2 size={16} className="text-[#C59B27] flex-shrink-0 mt-0.5" />
                    <span>Strict compliance with ILO (International Labour Organization) conventions.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-[#0B1B33]/75">
                    <CheckCircle2 size={16} className="text-[#C59B27] flex-shrink-0 mt-0.5" />
                    <span>Regular physical factory health, fire safety, and emergency exit audits.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-[#0B1B33]/75">
                    <CheckCircle2 size={16} className="text-[#C59B27] flex-shrink-0 mt-0.5" />
                    <span>Fair wage schedules and vocational skill-advancement workshops for mill staff.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#0B1B33]/10 text-xs font-semibold text-[#C59B27]">
                SEDEX &amp; BSCI Compliant Mill Auditing
              </div>
            </div>

            {/* Card 2: Sustainable Focus */}
            <div
              className="rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: "#FBF8F1",
                border: "2px solid #C59B27",
              }}
            >
              <div>
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}
                >
                  <Leaf size={30} strokeWidth={1.8} />
                </div>

                <h3 className="text-2xl font-bold text-[#0B1B33] mb-3">
                  Sustainable Focus
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#0B1B33]/80 font-medium mb-6">
                  &ldquo;Integrating closed-loop water treatment, lower-carbon logistics, and renewable energy across production partners.&rdquo;
                </p>

                <ul className="space-y-3 pt-4 border-t border-[#0B1B33]/10">
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-[#0B1B33]/75">
                    <CheckCircle2 size={16} className="text-[#C59B27] flex-shrink-0 mt-0.5" />
                    <span>Effluent Treatment Plants (ETP) ensuring safe zero-liquid discharge at dye houses.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-[#0B1B33]/75">
                    <CheckCircle2 size={16} className="text-[#C59B27] flex-shrink-0 mt-0.5" />
                    <span>GOTS-certified organic cotton and recycled polyester (rPET) raw material options.</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-[#0B1B33]/75">
                    <CheckCircle2 size={16} className="text-[#C59B27] flex-shrink-0 mt-0.5" />
                    <span>Rooftop solar power adoption and energy-efficient loom motors across partner plants.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#0B1B33]/10 text-xs font-semibold text-[#C59B27]">
                OEKO-TEX Standard 100 &amp; GOTS Aligned
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. Quality Assurance & Testing Lab (4-Step Workflow) ── */}
      <section className="py-20 sm:py-28 text-white" style={{ backgroundColor: "#0B1B33" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3 text-[#C59B27]"
              style={{ backgroundColor: "rgba(197,155,39,0.15)" }}
            >
              Zero Compromise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Quality Assurance &amp; Testing Lab
            </h2>
            <p className="mt-3 text-sm text-white/60 max-w-2xl mx-auto">
              Our 4-step QA methodology eliminates non-conformities before fabric rolls are packaged and sealed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualitySteps.map(({ step, title, description, icon: Icon, tag }) => (
              <div
                key={step}
                className="group relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(197,155,39,0.35)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-2xl font-black tracking-tight"
                      style={{ color: "#C59B27" }}
                    >
                      Step {step}
                    </span>
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors group-hover:bg-[#C59B27] group-hover:text-white"
                      style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <span
                    className="inline-block rounded-md px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider mb-3 text-white/70"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  >
                    {tag}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#C59B27] transition-colors">
                    {title}
                  </h3>

                  <p className="text-xs leading-relaxed text-white/65">
                    {description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#C59B27]">
                  <span>Lab Standardized</span>
                  <span>Verified ✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Metrics & Sourcing Footprint ── */}
      <section className="py-16 sm:py-20 border-b border-[#0B1B33]/10" style={{ backgroundColor: "#FBF8F1" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {impactStats.map(({ value, label, detail }) => (
              <div
                key={label}
                className="rounded-3xl p-6 sm:p-8 text-center bg-white shadow-sm border border-[#C59B27]/30 transition-transform duration-300 hover:scale-105"
              >
                <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: "#0B1B33" }}>
                  <span style={{ color: "#C59B27" }}>{value}</span>
                </div>
                <div className="text-sm font-bold text-[#0B1B33] mb-1">{label}</div>
                <div className="text-xs text-[#0B1B33]/60">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Sourcing Consultation CTA ── */}
      <section className="py-16 sm:py-20 text-white" style={{ backgroundColor: "#0B1B33" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "2px solid #C59B27",
            }}
          >
            <div
              className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}
            >
              <Globe2 size={28} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              Partner With Pakistan&apos;s Leading Sourcing Specialists
            </h2>

            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Schedule a factory audit, request lab dips, or consult our fabric engineers for custom specifications. Let&apos;s build a reliable supply chain for your brand.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
                style={{ backgroundColor: "#C59B27" }}
              >
                Share your query <ArrowRight size={16} />
              </Link>
              <a
                href="mailto:marketing@fashionhomesourcing.net"
                className="inline-flex items-center justify-center gap-2 rounded-xl border px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#C59B27] hover:bg-[#C59B27]/15"
                style={{ borderColor: "rgba(197,155,39,0.6)" }}
              >
                <Mail size={16} /> Contact
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
