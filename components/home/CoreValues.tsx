"use client";

import { useState } from "react";
import Image from "next/image";

const cards = [
  {
    imageSrc: "/assets/val-collab.jpg",
    imageAlt: "Team collaborating around table",
    title: "Collaboration",
    description:
      "Over the past three decades, our presence in Pakistan has cultivated strong connections with suppliers and customers, leading to new products, global markets, and trusted relationships, strengthening our reputation among suppliers and customers worldwide.",
    backTitle: "Pillar of Collaboration",
    highlights: [
      "Three decades of active mill partnerships in Pakistan",
      "Direct bridge between global buyers & certified manufacturers",
      "Collaborative product testing, pricing, and scheduling",
    ],
  },
  {
    imageSrc: "/assets/val-integrity.jpg",
    imageAlt: "Person holding scales of justice",
    title: "Integrity",
    description:
      "We've always prioritized fairness in our business policies, often covering customer claims ourselves to preserve strong supplier relationships and align with market standards. We empower our employees with accountability and best practices.",
    backTitle: "Pillar of Integrity",
    highlights: [
      "Client-first claims resolution & accountability",
      "Strict zero-tolerance policy on counterfeit yarn & substandard finishes",
      "Ethical labor compliance & fair workplace governance",
    ],
  },
  {
    imageSrc: "/assets/val-knowledge.jpg",
    imageAlt: "Clipboard checklist and bullseye target",
    title: "Knowledge",
    description:
      "We emphasize continuous research and development, offering ongoing staff training and cross-departmental meetings. We regularly publish reports, share content across social media, our website, and email marketing channels. We value constructive criticism and embrace innovation and sustainability.",
    backTitle: "Pillar of Knowledge & R&D",
    highlights: [
      "Continuous yarn count, tensile & GSM durability balancing",
      "Regular market intelligence reports & fabric trend forecasts",
      "Eco-friendly dyestuff & water-recycling innovations",
    ],
  },
  {
    imageSrc: "/assets/val-mission.jpg",
    imageAlt: "Globe with graduation cap, books, and lightbulb",
    title: "Mission Statement",
    description:
      "With our strong presence in Pakistan for the last three decades, we have built solid relationships with both our suppliers and customers. This has enabled us to develop new products, explore international markets, and establish strategic partnerships that have earned us a reliable name and trust among our global suppliers, local and international customers.",
    backTitle: "Our Global Mission",
    highlights: [
      "Seamless end-to-end export logistics worldwide",
      "Verified OEKO-TEX & GOTS certified sourcing networks",
      "Uncompromising quality assurance before container dispatch",
    ],
  },
];

function FlipCard({
  imageSrc,
  imageAlt,
  title,
  description,
  backTitle,
  highlights,
}: (typeof cards)[number]) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card h-[500px] cursor-pointer select-none"
      onClick={() => setFlipped(f => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      aria-label={`${title} – click to flip`}
      tabIndex={0}
      onKeyDown={e => e.key === "Enter" && setFlipped(f => !f)}
    >
      <div className={`flip-inner h-full ${flipped ? "flipped" : ""}`}>

        {/* Front Face: Tall Portrait with Small Illustrated Image */}
        <div
          className="flip-front flex flex-col items-center justify-between p-6 sm:p-7 text-left rounded-3xl transition-shadow duration-300 hover:shadow-xl"
          style={{
            border: "2px solid #C59B27",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Top spot illustration */}
          <div className="flex w-full items-center justify-center pt-2 pb-1">
            <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Title and paragraph text */}
          <div className="flex-1 flex flex-col justify-center w-full my-2">
            <h3
              className="text-xl font-bold tracking-tight mb-3 text-[#0B1B33]"
            >
              {title}
            </h3>
            <p className="text-[12.5px] leading-[1.65] text-[#0B1B33]/75 font-normal">
              {description}
            </p>
          </div>

          {/* Micro flip hint */}
          <div className="w-full pt-3 border-t border-[#0B1B33]/10 flex items-center justify-between text-[11px] font-medium" style={{ color: "#C59B27" }}>
            <span>Core Commitment</span>
            <span className="inline-flex items-center gap-1 opacity-80">
              Flip to see highlights ↻
            </span>
          </div>
        </div>

        {/* Back Face: Navy & Gold Detailed Highlights */}
        <div
          className="flip-back flex flex-col justify-between p-6 sm:p-7 text-left rounded-3xl"
          style={{
            border: "2px solid #C59B27",
            backgroundColor: "#0B1B33",
          }}
        >
          <div className="pt-2">
            <span
              className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#C59B27] mb-3"
              style={{ backgroundColor: "rgba(197,155,39,0.15)" }}
            >
              Fashion Home Standards
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{backTitle}</h3>
            <p className="text-xs text-white/60 mb-5">
              How we implement {title.toLowerCase()} across our sourcing operations:
            </p>

            <ul className="space-y-3.5">
              {highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-white/80">
                  <span
                    className="mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: "#C59B27" }}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#C59B27]">
            <span>Trusted Excellence</span>
            <span>Click to flip back ↺</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function CoreValues() {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: "#FBF8F1" }} aria-labelledby="values-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header with heartbeat accent */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3">
            {/* Heartbeat / ECG line */}
            <svg viewBox="0 0 80 24" className="heartbeat w-16 h-6" fill="none"
              aria-hidden="true">
              <polyline points="0,12 12,12 16,4 20,20 24,4 28,20 32,12 44,12 48,2 52,22 56,12 80,12"
                stroke="#C59B27" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 id="values-heading" className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#0B1B33" }}>
              Our Core Values
            </h2>
            <svg viewBox="0 0 80 24" className="heartbeat w-16 h-6" fill="none"
              style={{ animationDelay: "0.7s" }} aria-hidden="true">
              <polyline points="0,12 12,12 16,4 20,20 24,4 28,20 32,12 44,12 48,2 52,22 56,12 80,12"
                stroke="#C59B27" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="max-w-xl text-sm text-[#0B1B33]/60">
            The principles that have guided Fashion Home Sourcing for over three decades.
          </p>
        </div>

        {/* 4 flip cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(card => <FlipCard key={card.title} {...card} />)}
        </div>
      </div>
    </section>
  );
}
