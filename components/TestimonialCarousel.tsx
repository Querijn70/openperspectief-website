"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = testimonials.length;

  const changeTo = useCallback((index: number, fromAuto = false) => {
    setFading(true);
    if (!fromAuto) setAutoPlay(false);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 250);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setTimeout(
      () => changeTo((current + 1) % total, true),
      6000
    );
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [autoPlay, current, total, changeTo]);

  const item = testimonials[current];

  return (
    <div
      ref={containerRef}
      className="mx-auto max-w-3xl"
      style={{
        transform: visible ? "translateY(0)" : "translateY(40px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
      }}
    >
      <div className="flex items-center gap-3 sm:gap-5">
        <button
          onClick={() => changeTo((current - 1 + total) % total)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-op-blauw/30 bg-white text-op-blauw shadow-sm transition-all duration-200 hover:bg-op-blauw hover:text-white"
          aria-label="Vorige testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          className={`flex-1 transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
        >
          <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5 sm:p-10">
            <span
              className="mb-3 block font-heading text-5xl font-bold leading-none text-op-blauw"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="flex-1 text-base italic leading-relaxed text-op-body/80">
              {item.quote}
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-op-paars/10 text-sm font-bold text-op-paars">
                {item.initials}
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-op-paars">
                  {item.name}
                </p>
                <p className="text-xs text-op-body/50">
                  {[item.title, item.organization].filter(Boolean).join(", ")}
                </p>
              </div>
            </figcaption>
          </figure>
        </div>

        <button
          onClick={() => changeTo((current + 1) % total)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-op-blauw/30 bg-white text-op-blauw shadow-sm transition-all duration-200 hover:bg-op-blauw hover:text-white"
          aria-label="Volgende testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => changeTo(i)}
            aria-label={`Ga naar testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-op-blauw"
                : "w-2 bg-op-blauw/30 hover:bg-op-blauw/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
