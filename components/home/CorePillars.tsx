import { Users, ShieldCheck, Cpu, Globe } from "lucide-react";

const pillars = [
  {
    Icon: Users,
    title: "Collaborative Sourcing",
    text: "Over three decades of active manufacturing leadership in Pakistan, building deep mill partnerships and transparent supply chains that deliver consistent quality batch after batch.",
  },
  {
    Icon: ShieldCheck,
    title: "Uncompromising Integrity",
    text: "We prioritize ethical compliance, fair trade policies, and rigorous laboratory inspection protocols at every phase from raw cotton to finished garment.",
  },
  {
    Icon: Cpu,
    title: "Technical Innovation",
    text: "Specialized research and development in high-GSM finishes, fire-retardant weaves, antimicrobial coatings, and sustainable fiber blends.",
  },
  {
    Icon: Globe,
    title: "Global Delivery Mission",
    text: "Connecting domestic spinning precision with Tier-1 international buyers, guaranteeing seamless freight dispatch, customs documentation, and timely delivery.",
  },
];

export default function CorePillars() {
  return (
    <section className="bg-[#F9F6F0] py-16 sm:py-24" aria-labelledby="pillars-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#8B5E3C" }}>
            Our Foundation
          </p>
          <h2
            id="pillars-heading"
            className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl"
          >
            Built on Principles That Endure
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: "#F9F6F0" }}
              >
                <Icon size={20} style={{ color: "#8B5E3C" }} strokeWidth={1.75} />
              </div>

              <h3 className="mb-2 text-base font-semibold text-stone-900">{title}</h3>
              <p className="text-sm leading-relaxed text-stone-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
