"use client";

import Image from "next/image";
import { clientLogos } from "@/lib/data";

export default function ClientCarousel() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-op-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-op-surface to-transparent" />

      <div className="animate-scroll-logos flex w-max items-center gap-10">
        {doubled.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border border-border bg-white px-5 shadow-sm"
          >
            <div className="relative h-[60px] w-full">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
