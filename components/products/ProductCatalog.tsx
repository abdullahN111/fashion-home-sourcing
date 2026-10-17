"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  Filter,
  CheckCircle2,
} from "lucide-react";

export interface ProductItem {
  id: string;
  name: string;
  category: "bath" | "bathrobes" | "kitchen" | "blankets";
  categoryLabel: string;
  image: string;
  specs: string;
  description: string;
}

const PRODUCTS_DATA: ProductItem[] = [
  // ── Bath & Towels ──
  {
    id: "hotel-towels",
    name: "Luxury Hotel Collection Towels",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/hotel-towels.jfif",
    specs: "100% Combed Cotton • 600 GSM",
    description: "Plush, high-absorbency towels with double-stitched hems built for commercial laundering.",
  },
  {
    id: "spa-towel",
    name: "Executive Spa & Wellness Towel",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/spa-towel.jfif",
    specs: "Zero-Twist Cotton • 650 GSM",
    description: "Ultra-soft touch with rapid moisture absorption for luxury wellness resorts and spas.",
  },
  {
    id: "solid-dyed-viscose-border",
    name: "Solid Dyed with Viscose Border",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/solid-dyed-viscose-border.jfif",
    specs: "Ring-Spun Cotton • Viscose Dobby Stripe",
    description: "Elegant sheen viscose border detail with reactive vat-dyed colorfastness.",
  },
  {
    id: "solid-jacquard-towel",
    name: "Solid Jacquard Weave Towel",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/solid-jacquard-towel.jfif",
    specs: "100% Cotton Jacquard • 550 GSM",
    description: "Textured geometric jacquard weave with reinforced selvedges and minimal linting.",
  },
  {
    id: "viscose-bath-towels",
    name: "Viscose Accent Bath Towels",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/viscose-bath-towels.jfif",
    specs: "Combed Cotton & Viscose • 500 GSM",
    description: "Subtle woven stripe accents offering a modern boutique hospitality aesthetic.",
  },
  {
    id: "pool-towel",
    name: "Resort & Cabana Pool Towel",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/pool-towel.jfif",
    specs: "Vat-Dyed Cotton • 480 GSM",
    description: "Chlorine and UV-resistant reactive formulation engineered for poolside durability.",
  },
  {
    id: "shower-towel",
    name: "Quick-Dry Daily Shower Towel",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/shower-towel.jfif",
    specs: "100% Ring-Spun Cotton • 450 GSM",
    description: "Lightweight and absorbent, optimized for fast drying cycles in commercial hospitality.",
  },
  {
    id: "solid-dyed-bath",
    name: "Solid Dyed Terry Bath Towel",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/solid-dyed-bath.jfif",
    specs: "100% Pure Cotton • 500 GSM",
    description: "Deep reactive dyed in bespoke Pantone shades with high wash fastness.",
  },
  {
    id: "institutional-towel",
    name: "Institutional Grade Bath Towel",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/institutional-towel.jfif",
    specs: "86/14 Poly-Cotton Blend • 420 GSM",
    description: "Engineered for institutional healthcare and high-temperature laundry cycles.",
  },
  {
    id: "regular-bath-towel",
    name: "Classic Hospitality Bath Towel",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/regular-bath-towel.jfif",
    specs: "100% Cotton • 400 GSM",
    description: "Reliable and durable terry towel tailored for commercial accommodation chains.",
  },
  {
    id: "polysten-towel",
    name: "Polysten Reinforced Towel",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/polysten-towel.jfif",
    specs: "Polysten Core • 450 GSM",
    description: "Extra-tensile polyester core wrapped in cotton terry loops for maximum longevity.",
  },
  {
    id: "premium-face-towel",
    name: "Premium Combed Face Towel",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/premium-face-towel.jfif",
    specs: "100% Long-Staple Cotton • 550 GSM",
    description: "Gentle on skin with plush density, 30x30 cm standard for executive hotel suites.",
  },
  {
    id: "popcorn-washcloth",
    name: "Popcorn Weave Washcloth",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/popcorn-washcloth.jfif",
    specs: "Textured Cotton Weave • 480 GSM",
    description: "Exfoliating popcorn texture provides superior lathering and tactile comfort.",
  },
  {
    id: "multicombo-washpacks",
    name: "Multi-Combo Hospitality Wash Packs",
    category: "bath",
    categoryLabel: "Bath & Towels",
    image: "/assets/products/multicombo-washpacks.jfif",
    specs: "Assorted Terry Packs • Custom GSM",
    description: "Bundled retail and hotel multipacks with custom ribbon or bellyband packaging.",
  },

  // ── Bathrobes & Spa Wear ──
  {
    id: "terry-velour-bathrobe",
    name: "Luxury Terry Velour Bathrobe",
    category: "bathrobes",
    categoryLabel: "Bathrobes & Spa",
    image: "/assets/products/terry-velour-bathrobe.jfif",
    specs: "Velour Exterior / Terry Interior • 420 GSM",
    description: "Silky sheared velour outer with absorbent cotton loop lining and plush shawl collar.",
  },
  {
    id: "full-terry-bathrobe",
    name: "Full Terry Kimono Bathrobe",
    category: "bathrobes",
    categoryLabel: "Bathrobes & Spa",
    image: "/assets/products/full-terry-bathrobe.jfif",
    specs: "100% Combed Cotton • 400 GSM",
    description: "Unisex kimono cut with deep patch pockets, double belt loops, and reinforced seams.",
  },
  {
    id: "waffle-bathrobe",
    name: "Lightweight Waffle Spa Bathrobe",
    category: "bathrobes",
    categoryLabel: "Bathrobes & Spa",
    image: "/assets/products/waffle-bathrobe.jfif",
    specs: "100% Cotton Waffle Weave • 280 GSM",
    description: "Breathable honeycomb waffle construction favored by executive day spas and resorts.",
  },

  // ── Kitchen & Bar Mops ──
  {
    id: "kitchen-towels",
    name: "Heavy Duty Kitchen Towels",
    category: "kitchen",
    categoryLabel: "Kitchen & Food Service",
    image: "/assets/products/kitchen-towels.jfif",
    specs: "100% Cotton Herringbone / Terry",
    description: "Lint-free, high-absorbency dish towels for commercial restaurants and retail kitchens.",
  },
  {
    id: "yarn-dyed-kitchen-towels",
    name: "Yarn-Dyed Plaid Kitchen Towels",
    category: "kitchen",
    categoryLabel: "Kitchen & Food Service",
    image: "/assets/products/yarn-dyed-kitchen-towels.jfif",
    specs: "Yarn-Dyed Cotton • 240 GSM",
    description: "Traditional check and stripe patterns with colorfast dyes resistant to boiling wash.",
  },
  {
    id: "polyweft-kitchen-towel",
    name: "Poly-Weft Absorbent Kitchen Towel",
    category: "kitchen",
    categoryLabel: "Kitchen & Food Service",
    image: "/assets/products/polyweft-kitchen-towel.jfif",
    specs: "Cotton Warp / Poly Weft",
    description: "Engineered for grease-cutting absorbency, fast drying, and zero shrinkage.",
  },
  {
    id: "barmops-pack",
    name: "Commercial Bar Mop Utility Pack",
    category: "kitchen",
    categoryLabel: "Kitchen & Food Service",
    image: "/assets/products/barmops-pack.jfif",
    specs: "100% Cotton Ribbed Terry • 32 oz/dz",
    description: "Heavyweight bar mops for foodservice, bar wiping, and catering cleanup.",
  },
  {
    id: "stripe-barmop-towel",
    name: "Center Stripe Bar Mop Towels",
    category: "kitchen",
    categoryLabel: "Kitchen & Food Service",
    image: "/assets/products/stripe-barmop-towel.jfif",
    specs: "Color-Coded Stripe • 100% Cotton",
    description: "Color-coded center stripe for HACCP kitchen hygiene separation and departmental use.",
  },
  {
    id: "terry-barmop-towel",
    name: "Full Terry Heavy Bar Mop",
    category: "kitchen",
    categoryLabel: "Kitchen & Food Service",
    image: "/assets/products/terry-barmop-towel.jfif",
    specs: "Full Terry Weave • 36 oz/dz",
    description: "Thick plush terry bar mop for heavy-duty commercial surface drying.",
  },

  // ── Blankets & Thermal ──
  {
    id: "baby-thermal-blanket",
    name: "100% Cotton Baby Thermal Blanket",
    category: "blankets",
    categoryLabel: "Blankets & Bedding",
    image: "/assets/products/baby-thermal-blanket.jfif",
    specs: "Open Cell Leno Weave • 100% Cotton",
    description: "Breathable open-cell cellular weave providing natural thermoregulation and safety.",
  },
  {
    id: "hospitality-blanket",
    name: "Snag-Free Hospitality Blanket",
    category: "blankets",
    categoryLabel: "Blankets & Bedding",
    image: "/assets/products/hospitality-blanket.jfif",
    specs: "Tight Leno Weave • 380 GSM",
    description: "Hospital and hotel grade snag-free thermal blanket resistant to industrial washing.",
  },
  {
    id: "un-bleached-bath-blanket",
    name: "Unbleached Eco Bath Blanket",
    category: "blankets",
    categoryLabel: "Blankets & Bedding",
    image: "/assets/products/un-bleached-bath-blanket.jfif",
    specs: "100% Natural Unbleached Cotton",
    description: "Chemical-free, unbleached cotton flannel blanket for patient care and eco-wellness.",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Products", count: PRODUCTS_DATA.length },
  { key: "bath", label: "Bath & Towels", count: 14 },
  { key: "bathrobes", label: "Bathrobes & Spa", count: 3 },
  { key: "kitchen", label: "Kitchen & Bar Mops", count: 6 },
  { key: "blankets", label: "Blankets & Thermal", count: 3 },
];

const INITIAL_VISIBLE_COUNT = 8;

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expanded, setExpanded] = useState<boolean>(false);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return PRODUCTS_DATA;
    return PRODUCTS_DATA.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // If a specific category is selected, show all items of that category.
  // If 'all' is selected and not expanded, show INITIAL_VISIBLE_COUNT items.
  const displayedProducts = useMemo(() => {
    if (activeCategory !== "all" || expanded) {
      return filteredProducts;
    }
    return filteredProducts.slice(0, INITIAL_VISIBLE_COUNT);
  }, [filteredProducts, activeCategory, expanded]);

  const hasMore = activeCategory === "all" && filteredProducts.length > INITIAL_VISIBLE_COUNT;

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: "#FBF8F1" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <div
            className="mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
            style={{
              borderColor: "#C59B27",
              color: "#C59B27",
              backgroundColor: "rgba(197,155,39,0.1)",
            }}
          >
            <Sparkles size={14} />
            Finished Goods Catalog
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1B33]"
          >
            Home Textiles &amp; Institutional Export Collection
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#0B1B33]/70 max-w-2xl mx-auto leading-relaxed">
            Browse our manufactured range of hospitality towels, premium bathrobes, kitchen linens, and thermal blankets available for private label export.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setExpanded(false);
                }}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-white shadow-md scale-105"
                    : "bg-white text-[#0B1B33]/80 border border-[#0B1B33]/15 hover:border-[#C59B27] hover:bg-[#FBF8F1]"
                }`}
                style={{
                  backgroundColor: isActive ? "#0B1B33" : undefined,
                  borderColor: isActive ? "#C59B27" : undefined,
                }}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                    isActive ? "bg-[#C59B27] text-white" : "bg-[#0B1B33]/10 text-[#0B1B33]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              style={{ border: "2px solid #C59B27" }}
            >
              <div>
                {/* Image Container with Aspect Ratio */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />

                  {/* Category Pill */}
                  <div
                    className="absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-md"
                    style={{ backgroundColor: "#0B1B33", border: "1px solid #C59B27" }}
                  >
                    {product.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Specs Badge */}
                  <div className="mb-2.5">
                    <span
                      className="inline-block rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#C59B27]"
                      style={{ backgroundColor: "rgba(197,155,39,0.12)" }}
                    >
                      {product.specs}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1B33] mb-2 leading-snug group-hover:text-[#C59B27] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs leading-relaxed text-[#0B1B33]/70 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Card Footer / Inquire Action */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-[#0B1B33]/10 flex items-center justify-between">
                <span className="text-[11px] text-[#0B1B33]/50">Export MOQ Available</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold transition-all hover:gap-1.5"
                  style={{ color: "#C59B27" }}
                >
                  Inquire Specs <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Expand Button */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:brightness-110 active:scale-95"
              style={{ backgroundColor: "#0B1B33", border: "2px solid #C59B27" }}
            >
              {expanded ? (
                <>
                  Show Less Products <ChevronUp size={18} />
                </>
              ) : (
                <>
                  View All Products ({filteredProducts.length - INITIAL_VISIBLE_COUNT} More)
                  <ChevronDown size={18} />
                </>
              )}
            </button>
            <p className="mt-3 text-xs text-[#0B1B33]/60">
              Showing {displayedProducts.length} of {filteredProducts.length} export products
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
