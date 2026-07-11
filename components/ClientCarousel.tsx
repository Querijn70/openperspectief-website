"use client";

import Image from "next/image";
import { clientLogos } from "@/lib/data";

export default function ClientCarousel() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Fade-randen — matchen met bg-op-surface van de sectie */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-op-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-op-surface to-transparent" />

      <div className="animate-scroll-logos flex w-max items-center gap-14">
        {doubled.map((logo, index) => {
          const isLarge = logo.large === true;
          return (
            <div
              key={`${logo.alt}-${index}`}
              className={`group flex shrink-0 items-center justify-center rounded-xl border border-border bg-white shadow-sm ${isLarge ? "h-24 w-48 px-4" : "h-20 w-40 px-5"}`}
            >
              <div className={`relative w-full ${isLarge ? "h-[80px]" : "h-[60px]"}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes={isLarge ? "192px" : "160px"}
                  className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
