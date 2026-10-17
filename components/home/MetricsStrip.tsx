const stats = [
  { value: "5,000+", label: "Global Shipments Completed" },
  { value: "20+", label: "Years of Manufacturing Heritage" },
  { value: "99%", label: "Client Satisfaction Rate" },
  { value: "35+", label: "Export Destinations Worldwide" },
];

export default function MetricsStrip() {
  return (
    <section className="border-y border-stone-200 bg-white" aria-label="Key metrics">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <dt
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "#8B5E3C" }}
              >
                {stat.value}
              </dt>
              <dd className="mt-1.5 text-xs font-medium uppercase tracking-wider text-stone-500 sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
