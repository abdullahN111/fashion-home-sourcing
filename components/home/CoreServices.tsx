import Image from "next/image";

const services = [
  {
    imageSrc: "/assets/service-vendor.jpg",
    imageAlt: "Global vendor sourcing and factory network",
    title: "Vendor Sourcing",
    description:
      "Connecting international buyers with certified weaving and dyeing mills in Pakistan's premier textile hub.",
    points: ["ISO-certified mill network", "Transparent pricing", "Direct factory access"],
  },
  {
    imageSrc: "/assets/service-design.jpg",
    imageAlt: "Textile product design, fabric swatches and samples",
    title: "Product Design & Development",
    description:
      "Developing market-ready home textile samples, color swatches, and GSM variations tailored to your brand.",
    points: ["Custom lab dips", "GSM & weave sampling", "Fast prototype turnaround"],
  },
  {
    imageSrc: "/assets/service-quality.jpg",
    imageAlt: "Textile laboratory testing and certified quality inspection",
    title: "Quality & Laboratory Auditing",
    description:
      "On-site 4-point inspection, tensile strength testing, and compliance reporting before container dispatch.",
    points: ["4-point inspection", "Tensile & colorfastness tests", "OEKO-TEX compliance"],
  },
];

export default function CoreServices() {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: "#0B1B33" }}
      aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#C59B27" }}>
            What We Do
          </p>
          <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Core Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map(({ imageSrc, imageAlt, title, description, points }) => (
            <div key={title}
              className="group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(197,155,39,0.3)",
              }}>
              <div>
                {/* Spot Illustration Thumbnail */}
                <div className="mb-6 inline-flex overflow-hidden rounded-2xl bg-white p-2.5 shadow-md border border-[#C59B27]/40">
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-[#C59B27] transition-colors">
                  {title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-white/65">
                  {description}
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-white/10">
                {points.map(p => (
                  <li key={p} className="flex items-center gap-2.5 text-xs text-white/70">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#C59B27" }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
