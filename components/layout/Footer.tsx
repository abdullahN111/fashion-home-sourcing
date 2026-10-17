import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home",       href: "/" },
  { label: "Products",   href: "/products" },
  { label: "About Us",   href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B1B33" }} className="text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Column 1 – Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo.png"
                alt="Fashion Home Sourcing"
                width={140}
                height={40}
                style={{ height: 40, width: "auto" }}
                className="object-contain brightness-0 invert"
                unoptimized
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              A premier global textile manufacturing and sourcing partner delivering woven,
              technical, and home textile solutions across international markets.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["OEKO-TEX Standard 100", "ISO Certified", "Ethical Sourcing"].map(c => (
                <span key={c}
                  className="rounded-full border px-2.5 py-0.5 text-xs font-medium text-white/50"
                  style={{ borderColor: "#C59B27", color: "#C59B27" }}>
                  {c}
                </span>
              ))}
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
                <a href="mailto:info@fashionhome.pk"
                  className="text-sm text-white/60 hover:text-white transition-colors">
                  info@fashionhome.pk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#C59B27" }} />
                <span className="text-sm text-white/60">Industrial Area, Karachi, Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#C59B27" }} />
                <span className="text-sm text-white/60">Mon – Fri | 9:00 AM – 6:00 PM (PKT)</span>
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
