"use client";
import { useEffect, useRef } from "react";

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left";
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const baseClass = direction === "left" ? "slide-in-left" : "fade-in";
  const visibleClass = direction === "left" ? "slide-in-left--visible" : "fade-in--visible";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            el.classList.add(visibleClass);
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay, visibleClass, threshold]);

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}
