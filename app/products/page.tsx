import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronsRight,
  Layers,
  ShieldCheck,
  Sparkles,
  Leaf,
  ArrowRight,
  Mail,
  CheckCircle2,
  Gauge,
  Sliders,
  Maximize2,
} from "lucide-react";
import ProductCatalog from "@/components/products/ProductCatalog";
import CertificationsStrip from "@/components/products/CertificationsStrip";

export const metadata: Metadata = {
  title: "Our Product Range | Fashion Home Sourcing",
  description:
    "Explore our engineered fabrics and finished garments, including workwear, premium woven textiles, 5-star hotel linens, and GOTS-certified organic ranges.",
};

const technicalSpecs = [
  {
    icon: Gauge,
    title: "Thread Counts",
    value: "T-120 to T-1200",
    detail: "From everyday percale weaves to high-density luxury satin counts.",
  },
  {
    icon: Sliders,
    title: "Fabric Density",
    value: "200 GSM to 1000 GSM",
    detail: "Calibrated for lightweight shirting up to heavy institutional terry towels.",
  },
  {
    icon: Layers,
    title: "Fiber Blends",
    value: "100% Combed Cotton, CVC, TC",
    detail: "Cotton blends, Bamboo, Tencel, and long-staple PIMA cotton options.",
  },
  {
    icon: Maximize2,
    title: "Width Options",
    value: "Narrow & Wide Widths",
    detail: "Narrow width for fashion & utility wear; wide width for seamless bed linens.",
  },
];

const productCategories = [
  {
    id: "workwear",
    title: "Workwear & Protective Textiles",
    badge: "Industrial & Safety Compliance",
    badgeColor: "#C59B27",
    description:
      "Flame retardant, oil-repellent, high-visibility, and anti-static utility uniforms engineered for extreme resilience and occupational safety.",
    applications: [
      "Industrial safety & manufacturing",
      "Mining & offshore oil operations",
      "Hospital scrubs & medical barrier garments",
      "Tactical & security apparel",
    ],
    specs: ["Flame Retardant (FR)", "Oil & Water Repellent", "High-Visibility Strips", "Anti-Static Finish"],
    imageSrc: "/assets/prod-workwear.jpg",
    imageAlt: "Heavy-duty industrial workwear jackets with reflective strips",
  },
  {
    id: "woven",
    title: "Premium Woven Fabrics",
    badge: "Apparel & Shirting Weaves",
    badgeColor: "#C59B27",
    description:
      "Greige and finished fabrics manufactured in precision plain, twill, satin, dobby, and intricate jacquard weaves with rich colorfastness.",
    applications: [
      "Luxury formal shirting & blouses",
      "Tailored suiting & casual trousers",
      "Seasonal lightweight fashion apparel",
      "Specialty pocketing and lining fabrics",
    ],
    specs: ["Plain, Twill & Satin Weaves", "Mercerized Luster Finish", "Reactive Dyeing", "Custom Yarn Counts"],
    imageSrc: "/assets/prod-woven.jpg",
    imageAlt: "Luxury rolls of draped twill, satin, and jacquard woven fabrics",
  },
  {
    id: "home-textiles",
    title: "Institutional & Home Textiles",
    badge: "Hospitality & Retail Living",
    badgeColor: "#C59B27",
    description:
      "Luxury percale and satin sheet sets, plush Terry velour towels, and institutional bedding crafted for exceptional softness and wash endurance.",
    applications: [
      "5-star luxury hotels & resorts",
      "Executive wellness spas & retreats",
      "Retail department store collections",
      "Institutional healthcare bedding",
    ],
    specs: ["300TC to 1000TC Satin Sheets", "Double-Stitched Terry Hemming", "Bleach-Safe Chlorine Resistance", "Zero-Twist Softness"],
    imageSrc: "/assets/hero-slide1.jpg",
    imageAlt: "Luxury folded plush towel stacks and institutional navy bedding",
  },
  {
    id: "sustainable",
    title: "Sustainable & Organic Range",
    badge: "Eco-Certified & Circular",
    badgeColor: "#C59B27",
    description:
      "GOTS-certified organic cotton, recycled polyester (rPET) fibers, and closed-loop water-saving dye processes supporting circular fashion.",
    applications: [
      "Eco-conscious lifestyle & casual wear",
      "Sustainable hotel guest amenities",
      "Biodegradable retail home textiles",
      "Reusable organic textile packaging",
    ],
    specs: ["GOTS Certified Organic Cotton", "Recycled Polyester (rPET)", "OEKO-TEX Standard 100", "Low-Impact Reactive Dyes"],
    imageSrc: "/assets/service-design.jpg",
    imageAlt: "Organic fabric rolls, sustainable swatch swatches, and eco-textiles",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBF8F1" }}>

      {/* ── 1. Page Header Banner ── */}
      <section
        className="relative overflow-hidden py-16 sm:py-24 text-white"
        style={{ backgroundColor: "#0B1B33" }}
      >
        {/* Subtle geometric pattern accent */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#C59B27 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 flex justify-center text-xs tracking-wider uppercase text-white/50">
            <Link href="/" className="hover:text-[#C59B27] transition-colors">
              Home
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <span style={{ color: "#C59B27" }}>Products</span>
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
            Engineered Textiles &amp; Finished Garments
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Engineered Fabrics &amp; Finished Garments
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            Custom constructions, weaving widths, and high-performance finishes tailored for global export across North America, Europe, and the Middle East.
          </p>
        </div>
      </section>

      {/* ── 2. Our Product Range (Inspired by Reference Image - Section 1) ── */}
      <section className="py-16 sm:py-20 border-b border-[#0B1B33]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Left Narrative with ECG Heartbeat Accent */}
            <div>
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
                <h2
                  className="text-2xl sm:text-3xl font-bold tracking-tight"
                  style={{ color: "#0B1B33" }}
                >
                  Our Product Range
                </h2>
              </div>

              <p className="text-lg sm:text-xl font-medium leading-relaxed mb-6" style={{ color: "#0B1B33" }}>
                At <span className="font-bold text-[#0B1B33]">Fashion Home Sourcing</span>, we transform textile sourcing into a seamless experience—offering premium Fabric, Home Textiles, and Garments solutions to global brands, luxury hotels, resorts, fashion chains, and more.
              </p>

              <p className="text-sm leading-relaxed text-[#0B1B33]/70 mb-8">
                Operating directly from Pakistan’s primary textile manufacturing hubs, our export management provides direct access to high-speed air-jet weaving mills, certified dyeing houses, and vertical garmenting facilities. Every order is inspected under stringent 4-point international quality standards.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl p-4 bg-white border border-[#C59B27]/30 shadow-sm">
                  <div className="text-2xl font-bold" style={{ color: "#C59B27" }}>30+</div>
                  <div className="text-xs text-[#0B1B33]/70 font-medium mt-1">Years of Export Heritage</div>
                </div>
                <div className="rounded-2xl p-4 bg-white border border-[#C59B27]/30 shadow-sm">
                  <div className="text-2xl font-bold" style={{ color: "#C59B27" }}>100%</div>
                  <div className="text-xs text-[#0B1B33]/70 font-medium mt-1">Inspection Before Dispatch</div>
                </div>
              </div>
            </div>

            {/* Right Oval / Curved Image Frame */}
            <div className="flex justify-center">
              <div
                className="relative h-[340px] w-full max-w-[480px] sm:h-[400px] overflow-hidden rounded-[3rem] shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                style={{ border: "3px solid #C59B27" }}
              >
                <Image
                  src="/assets/products-range-rolls.jpg"
                  alt="Arrangement of colorful rolled textiles and luxury linens"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. We Are Handling All Constructions & Widths (Inspired by Reference Image - Section 2) ── */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Left Industrial Warehouse Photography */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div
                className="relative h-[340px] w-full max-w-[500px] sm:h-[400px] overflow-hidden rounded-3xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
                style={{ border: "2px solid #C59B27" }}
              >
                <Image
                  src="/assets/products-warehouse-racks.jpg"
                  alt="Industrial textile warehouse with fabric rolls stored on racks"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Width & Construction Capabilities */}
            <div className="order-1 lg:order-2">
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ backgroundColor: "rgba(197,155,39,0.12)", color: "#C59B27" }}
              >
                Manufacturing Capabilities
              </span>

              <h2
                className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 leading-snug"
                style={{ color: "#0B1B33" }}
              >
                We Are Handling All Possible Constructions, Weaves And Widths Of Grey And Finished Fabrics.
              </h2>

              <p className="text-sm leading-relaxed text-[#0B1B33]/70 mb-8">
                From precision high-speed rapier looms to wide-width air-jet machinery, our partner mills are capable of weaving custom constructions tailored precisely to your brand’s weight, drape, and tensile specifications.
              </p>

              {/* Bullet Points with Double Chevron >> */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl transition-colors hover:bg-[#FBF8F1]">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}>
                    <ChevronsRight size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1B33]">Narrow Width Fabrics for Fashion Wear</h3>
                    <p className="text-xs text-[#0B1B33]/60 mt-0.5">Widths from 44&quot; to 60&quot; designed for tailored apparel, casual shirting, pocketing, and bottom-wear.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl transition-colors hover:bg-[#FBF8F1]">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}>
                    <ChevronsRight size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1B33]">Narrow Width Fabrics for Work Wear and Technical Industry</h3>
                    <p className="text-xs text-[#0B1B33]/60 mt-0.5">High-tenacity twills, rip-stop weaves, and protective anti-static fabrics tested for industrial uniforms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl transition-colors hover:bg-[#FBF8F1]">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}>
                    <ChevronsRight size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1B33]">Wider Width Fabrics for Home Textiles</h3>
                    <p className="text-xs text-[#0B1B33]/60 mt-0.5">Extra-wide widths from 68&quot; to 140&quot; for seamless luxury bed sheets, duvet covers, and hospital curtains.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 4. Technical Specs Overview (Badge Strip) ── */}
      <section className="py-16 sm:py-20 text-white" style={{ backgroundColor: "#0B1B33" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "#C59B27" }}>
              Engineered Precision
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Technical Specifications Overview
            </h2>
            <p className="mt-3 text-sm text-white/60 max-w-xl mx-auto">
              Standardized export parameters available across our certified partner mills.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technicalSpecs.map(({ icon: Icon, title, value, detail }) => (
              <div
                key={title}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(197,155,39,0.3)",
                }}
              >
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}
                >
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                  {title}
                </div>
                <div className="text-lg font-bold text-white mb-2" style={{ color: "#FFFFFF" }}>
                  {value}
                </div>
                <p className="text-xs leading-relaxed text-white/65">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Product Categories & Detailed Cards ── */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#FBF8F1" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ backgroundColor: "rgba(197,155,39,0.12)", color: "#C59B27" }}
            >
              Export Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B33]">
              Core Product Categories
            </h2>
            <p className="mt-3 text-sm text-[#0B1B33]/60 max-w-2xl mx-auto">
              Manufactured with complete vertical traceability, rigorous tensile testing, and certified chemical compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ border: "2px solid #C59B27" }}
              >
                {/* Card Image */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={cat.imageSrc}
                    alt={cat.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div
                    className="absolute top-4 left-4 rounded-full px-3.5 py-1 text-xs font-bold text-white shadow-md"
                    style={{ backgroundColor: "#0B1B33", border: "1px solid #C59B27" }}
                  >
                    {cat.badge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B1B33] mb-3 group-hover:text-[#C59B27] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#0B1B33]/70 mb-6">
                      {cat.description}
                    </p>

                    {/* Applications */}
                    <div className="mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0B1B33]/80 mb-2.5">
                        Key Applications:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.applications.map((app) => (
                          <li key={app} className="flex items-center gap-2 text-xs text-[#0B1B33]/75">
                            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#C59B27" }} />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Specs Tags */}
                    <div className="pt-4 border-t border-[#0B1B33]/10">
                      <div className="flex flex-wrap gap-1.5">
                        {cat.specs.map((spec) => (
                          <span
                            key={spec}
                            className="rounded-lg px-2.5 py-1 text-[11px] font-medium"
                            style={{
                              backgroundColor: "rgba(11,27,51,0.06)",
                              color: "#0B1B33",
                            }}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-8 pt-4 border-t border-[#0B1B33]/10 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#0B1B33]/60">Custom weaving &amp; sampling</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:gap-2.5"
                      style={{ color: "#C59B27" }}
                    >
                      Inquire Specs <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Finished Products Showcase (26 Real Products with Filters & View More) ── */}
      <ProductCatalog />

      {/* ── 7. Global Certifications Strip ── */}
      <CertificationsStrip />

      {/* ── 8. Sourcing Lab Inquiry CTA Banner (from docs/content/products.md) ── */}
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
              <Sparkles size={28} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              Require Custom Thread Count or Dye Testing?
            </h2>

            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Contact our sourcing lab for free samples, customized GSM swatch analysis, and certified lab dip matchings tailored for your export requirements.
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
                href="mailto:ak8757796@gmail.com"
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
