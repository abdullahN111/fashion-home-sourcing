import type { Metadata } from "next";
import HeroCarousel    from "@/components/home/HeroCarousel";
import CoreValues      from "@/components/home/CoreValues";
import WhyChooseUs     from "@/components/home/WhyChooseUs";
import FounderStory    from "@/components/home/FounderStory";
import CoreServices    from "@/components/home/CoreServices";

export const metadata: Metadata = {
  title: "Fashion Home Sourcing | Global Textile Manufacturer & Exporter",
  description:
    "Fashion Home Sourcing engineers premium home textiles, workwear, and woven fabrics for luxury brands across 35+ export destinations from Pakistan.",
  keywords: ["textile manufacturer", "home textiles", "fabric sourcing", "Pakistan textile exporter"],
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <CoreValues />
      <WhyChooseUs />
      <FounderStory />
      <CoreServices />
    </>
  );
}
