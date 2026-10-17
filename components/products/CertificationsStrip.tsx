import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const CERTIFICATIONS = [
  {
    name: "GOTS",
    fullName: "Global Organic Textile Standard",
    image: "/assets/certifications/gots.jfif",
  },
  {
    name: "GRS",
    fullName: "Global Recycled Standard",
    image: "/assets/certifications/global-recycled-standard.jfif",
  },
  {
    name: "ISO 9001:2015",
    fullName: "Quality Management System",
    image: "/assets/certifications/iso.jfif",
  },
  {
    name: "WRAP",
    fullName: "Worldwide Responsible Accredited Production",
    image: "/assets/certifications/wrap.jfif",
  },
  {
    name: "amfori BSCI",
    fullName: "Business Social Compliance Initiative",
    image: "/assets/certifications/amfori.jfif",
  },
  {
    name: "C-TPAT",
    fullName: "Customs-Trade Partnership Against Terrorism",
    image: "/assets/certifications/c-tpat.jfif",
  },
  {
    name: "QIMA",
    fullName: "Quality Inspection & Lab Testing",
    image: "/assets/certifications/qima.jfif",
  },
];

export default function CertificationsStrip() {
  return (
    <section className="py-16 sm:py-20 text-white" style={{ backgroundColor: "#0B1B33" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div
            className="mb-2 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold tracking-widest uppercase"
            style={{
              borderColor: "#C59B27",
              color: "#C59B27",
              backgroundColor: "rgba(197,155,39,0.1)",
            }}
          >
            <ShieldCheck size={14} /> Global Compliance
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Internationally Audited &amp; Certified Manufacturing
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/60 max-w-xl mx-auto">
            Our partner mills and processing houses comply with premier global social, environmental, and security standards.
          </p>
        </div>

        {/* Certifications Logo Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7 items-center justify-center">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center justify-center rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ border: "2px solid rgba(197,155,39,0.4)" }}
            >
              <div className="relative h-14 w-20 sm:h-16 sm:w-24">
                <Image
                  src={cert.image}
                  alt={cert.fullName}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#0B1B33] text-center">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
