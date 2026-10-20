"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

export default function LeaderPhoto({
  className = "h-[440px] sm:h-[480px] w-full max-w-[360px]",
  showOverlay = true,
}: {
  className?: string;
  showOverlay?: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-3xl shadow-2xl ${className}`}
      style={{
        border: "3px solid #C59B27",
        backgroundColor: "#0B1B33",
      }}
    >
      {/* Blank State Frame */}
      <div className="flex flex-col items-center justify-center p-8 text-center select-none">
        <div
          className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-[#C59B27]/40 shadow-inner"
          style={{ backgroundColor: "rgba(197,155,39,0.12)" }}
        >
          <User size={38} style={{ color: "#C59B27" }} strokeWidth={1.5} />
        </div>
        <span className="text-sm font-bold tracking-wide text-white">
          Executive Leadership
        </span>
        <span className="mt-1 text-xs text-[#C59B27]">
          Fashion Home Sourcing
        </span>
      </div>

      {/* Live Image: If founder.jpg is present in public/assets, it displays over the blank frame */}
      {!imgError && (
        <Image
          src="/assets/founder.jpg"
          alt="Fashion Home Sourcing Leadership"
          fill
          className="object-cover object-top"
          unoptimized
          onError={() => setImgError(true)}
        />
      )}

      {/* Bottom overlay badge */}
      {showOverlay && (
        <div
          className="absolute bottom-4 left-4 right-4 rounded-2xl p-3.5 backdrop-blur-md"
          style={{
            backgroundColor: "rgba(11,27,51,0.9)",
            border: "1px solid rgba(197,155,39,0.4)",
          }}
        >
          <div className="text-[11px] uppercase tracking-wider font-semibold text-[#C59B27]">
            Established Sourcing Bridge
          </div>
          <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
            Direct Hub in Karachi, Pakistan
          </div>
        </div>
      )}
    </div>
  );
}
