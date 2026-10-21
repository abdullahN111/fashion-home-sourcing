import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import {
  MapPin,
  Mail,
  Clock,
  PhoneCall,
  ShieldCheck,
  PackageCheck,
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Sourcing Order | Fashion Home Sourcing",
  description:
    "Reach out for bulk fabric quotes, sample swatches, or supplier partnerships. Based in Metrovile Site Area Branch - Sector-1 Karachi, Pakistan.",
};

const sourcingPerks = [
  {
    icon: PackageCheck,
    title: "Free Swatch Dispatch",
    description: "Courier dispatch of physical fabric swatches and color cards within 3-5 business days.",
  },
  {
    icon: ShieldCheck,
    title: "4-Point Quality Guarantee",
    description: "Full defect inspection reports and lab certificates provided before container dispatch.",
  },
  {
    icon: FileText,
    title: "Complete Export Handling",
    description: "End-to-end customs clearance, Bill of Lading (B/L), and certificate of origin documentation.",
  },
];

const faqs = [
  {
    question: "What is your typical Minimum Order Quantity (MOQ)?",
    answer:
      "For regular running weaves (twill, plain, poplin), our MOQ typically begins at 3,000 meters. For specialized jacquards or custom yarn-dyed stripes, MOQs average 5,000 meters depending on loom setup requirements.",
  },
  {
    question: "How long does it take to prepare lab dips and sample swatches?",
    answer:
      "Standard Pantone-matched lab dips (under D65 lighting) are formulated within 4 to 6 business days. Physical swatch cards can be couriered immediately from our active inventory.",
  },
  {
    question: "Which global ports and destinations do you service?",
    answer:
      "We dispatch FCL (Full Container Load) and LCL shipments regularly through Karachi Port Trust (KPT) and Port Qasim, serving primary terminals across the US, UK, Germany, UAE, and Australia.",
  },
  {
    question: "Can we visit your office and partner mills in Pakistan?",
    answer:
      "Yes. We welcome international buying teams and technical auditors to our Karachi headquarters and facilitate escorted factory tours across our weaving and processing partner mills.",
  },
];

export default function ContactPage() {
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
            <span style={{ color: "#C59B27" }}>Contact</span>
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
            Direct Factory Access &bull; Karachi Textile Corridor
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Start Your Sourcing Order
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Reach out for bulk fabric quotes, sample swatches, or supplier partnerships.
          </p>
        </div>
      </section>

      {/* ── 2. Main Sourcing Form & Office Details ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">

            {/* Left Column: Interactive RFQ Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Direct Office & Factory Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">

              {/* Office & Factory Info Card */}
              <div
                className="rounded-3xl p-5 sm:p-8 shadow-lg bg-white"
                style={{ border: "2px solid #C59B27" }}
              >
                <div className="mb-6">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ backgroundColor: "rgba(197,155,39,0.12)", color: "#C59B27" }}
                  >
                    Direct Presence
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1B33]">
                    Direct Office &amp; Factory Details
                  </h3>
                </div>

                <div className="space-y-6">

                  {/* Office Location */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}
                    >
                      <MapPin size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0B1B33]/60 mb-0.5">
                        Office Location
                      </div>
                      <div className="text-sm font-semibold text-[#0B1B33] leading-snug">
                        Metrovile Site Area Branch - Sector-1 Karachi
                      </div>
                      <div className="text-xs text-[#0B1B33]/55 mt-1">
                        Minutes from major shipping terminals and textile mills.
                      </div>
                    </div>
                  </div>

                  {/* Sales & Sourcing */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}
                    >
                      <Mail size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0B1B33]/60 mb-0.5">
                        Sales &amp; Sourcing
                      </div>
                      <a
                        href="mailto:marketing@fashionhomesourcing.net"
                        className="text-[13px] sm:text-sm font-semibold text-[#0B1B33] hover:text-[#C59B27] transition-colors block break-all"
                      >
                        marketing@fashionhomesourcing.net
                      </a>
                    </div>
                  </div>

                  {/* Logistics & Support */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}
                    >
                      <PhoneCall size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0B1B33]/60 mb-0.5">
                        Logistics &amp; Support
                      </div>
                      <a
                        href="mailto:marketing@fashionhomesourcing.net"
                        className="text-[13px] sm:text-sm font-semibold text-[#0B1B33] hover:text-[#C59B27] transition-colors block break-all"
                      >
                        marketing@fashionhomesourcing.net
                      </a>
                      <div className="text-xs text-[#0B1B33]/55 mt-0.5">
                        Container booking, bill of lading &amp; tracking.
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}
                    >
                      <Clock size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0B1B33]/60 mb-0.5">
                        Availability
                      </div>
                      <div className="text-sm font-semibold text-[#0B1B33]">
                        24/7 available for your service
                      </div>
                      <div className="text-xs text-[#0B1B33]/55 mt-0.5">
                        Fast turnaround across all international time zones.
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Sourcing Perks Cards */}
              <div
                className="rounded-3xl p-6 sm:p-8 text-white space-y-4"
                style={{ backgroundColor: "#0B1B33", border: "1px solid rgba(197,155,39,0.3)" }}
              >
                <div className="text-xs font-bold uppercase tracking-widest text-[#C59B27] mb-2">
                  Client Assurance
                </div>
                <h4 className="text-lg font-bold text-white mb-4">
                  Why Global Brands Source Through Us
                </h4>

                <div className="space-y-4">
                  {sourcingPerks.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="flex items-start gap-3.5">
                      <div
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: "rgba(197,155,39,0.15)", color: "#C59B27" }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{title}</div>
                        <div className="text-xs text-white/65 leading-relaxed mt-0.5">{description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Frequently Asked Sourcing Questions ── */}
      <section className="py-16 sm:py-20 border-t border-[#0B1B33]/10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ backgroundColor: "rgba(197,155,39,0.12)", color: "#C59B27" }}
            >
              Order FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1B33]">
              Frequently Asked Sourcing Inquiries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map(({ question, answer }) => (
              <div
                key={question}
                className="rounded-2xl p-6 transition-all hover:shadow-md"
                style={{ backgroundColor: "#FBF8F1", border: "1px solid rgba(197,155,39,0.3)" }}
              >
                <h3 className="text-base font-bold text-[#0B1B33] mb-2">
                  {question}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#0B1B33]/70">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
