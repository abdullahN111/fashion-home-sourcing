import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Workwear & Industrial Garments",
    description:
      "High-durability poly-cotton twill, hi-vis standards, tear-resistant fabrics engineered for demanding environments.",
    tag: "Industrial",
    href: "/products",
  },
  {
    title: "Premium Woven & Greige",
    description:
      "Combed cotton, yarn-dyed, dobby, and jacquard patterns for fashion-forward and technical applications.",
    tag: "Woven",
    href: "/products",
  },
  {
    title: "Luxury Home Textiles",
    description:
      "Sheet sets, waffle bathrobes, and terry towels ranging from 200 to 1,000 GSM for premium hospitality brands.",
    tag: "Home",
    href: "/products",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="products-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#8B5E3C" }}
            >
              Product Portfolio
            </p>
            <h2
              id="products-heading"
              className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl"
            >
              Featured Product Categories
            </h2>
          </div>
          <Link
            href="/products"
            id="catalog-link"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: "#8B5E3C" }}
          >
            View Full Catalog
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map(({ title, description, tag, href }) => (
            <Link
              key={title}
              href={href}
              className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-[#F9F6F0] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-stone-300 hover:shadow-md"
            >
              {/* Tag */}
              <span
                className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{ backgroundColor: "#8B5E3C" }}
              >
                {tag}
              </span>

              <h3 className="mb-3 text-lg font-semibold leading-snug text-stone-900 group-hover:text-[#8B5E3C] transition-colors">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-stone-500">{description}</p>

              <div
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold transition-colors"
                style={{ color: "#8B5E3C" }}
              >
                Learn more <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
