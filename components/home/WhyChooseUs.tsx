import { CheckCircle, Sparkles, Smile, Truck } from "lucide-react";

const badges = [
  { Icon: CheckCircle, label: "Premium Quality Fabrics" },
  { Icon: Sparkles,   label: "Elegant & Timeless Designs" },
  { Icon: Smile,      label: "Customer Satisfaction First" },
  { Icon: Truck,      label: "Worldwide Reliable Export" },
];

export default function WhyChooseUs() {
  return (
    <section style={{ backgroundColor: "#0B1B33" }} aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p id="why-heading" className="mb-8 text-center text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#C59B27" }}>
          Why Choose Us
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {badges.map(({ Icon, label }) => (
            <div key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border p-6 text-center transition-all hover:scale-105"
              style={{ borderColor: "rgba(197,155,39,0.3)", backgroundColor: "rgba(197,155,39,0.06)" }}>
              <Icon size={30} style={{ color: "#C59B27" }} strokeWidth={1.5} />
              <span className="text-sm font-semibold leading-snug text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
