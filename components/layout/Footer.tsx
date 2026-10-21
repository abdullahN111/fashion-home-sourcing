import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const certifications = [
  { name: "GOTS (Global Organic Textile Standard)", src: "/assets/certifications/gots.jfif" },
  { name: "GRS (Global Recycled Standard)", src: "/assets/certifications/global-recycled-standard.jfif" },
  { name: "ISO 9001:2015 Certified", src: "/assets/certifications/iso.jfif" },
  { name: "WRAP (Worldwide Responsible Accredited Production)", src: "/assets/certifications/wrap.jfif" },
  { name: "amfori BSCI", src: "/assets/certifications/amfori.jfif" },
  { name: "C-TPAT", src: "/assets/certifications/c-tpat.jfif" },
  { name: "QIMA Quality Testing", src: "/assets/certifications/qima.jfif" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B1B33" }} className="text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Column 1 – Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div
                className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full p-1 shadow-lg bg-white transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
                style={{ border: "2px solid #C59B27" }}
              >
                <Image
                  src="/assets/logo.png"
                  alt="Fashion Home Sourcing"
                  fill
                  className="object-contain p-0.5"
                  unoptimized
                />
              </div>
              <div>
                <span className="block text-base font-bold text-white tracking-wide">
                  Fashion Home Sourcing
                </span>
                <span className="block text-xs uppercase tracking-wider" style={{ color: "#C59B27" }}>
                  Global Textile Exporter
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              A premier global textile manufacturing and sourcing partner delivering woven,
              technical, and home textile solutions across international markets.
            </p>

            {/* Certifications Logo Grid */}
            <div className="pt-1">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C59B27] mb-2">
                Certified Manufacturing
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    title={cert.name}
                    className="relative h-8 w-14 sm:h-8 sm:w-16 flex-shrink-0 overflow-hidden rounded-md bg-white p-1 shadow-sm transition-transform duration-200 hover:scale-105"
                    style={{ border: "1px solid rgba(197,155,39,0.5)" }}
                  >
                    <Image
                      src={cert.src}
                      alt={cert.name}
                      fill
                      className="object-contain p-0.5"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 – Quick Links (exactly 4) */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C59B27" }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}
                    className="text-sm text-white/60 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C59B27" }}>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#C59B27" }} />
                <a href="mailto:marketing@fashionhomesourcing.net"
                  className="text-sm text-white/60 hover:text-white transition-colors break-all">
                  marketing@fashionhomesourcing.net
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#C59B27" }} />
                <span className="text-sm text-white/60">Metrovile Site Area Branch - Sector-1 Karachi</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#C59B27" }} />
                <span className="text-sm text-white/60">24/7 available for your service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-6 text-center text-xs text-white/30"
          style={{ borderColor: "#C59B27" + "33" }}>
          © 2026 Fashion Home. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
