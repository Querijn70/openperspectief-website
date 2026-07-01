import Image from "next/image";
import { sustainabilityColumns } from "@/lib/data";
import FadeIn from "@/components/FadeIn";

export default function SustainabilitySection() {
  return (
    <section className="relative overflow-hidden py-32 text-white sm:py-40">

      {/* Laag 1 — achtergrondafbeelding */}
      <Image
        src="/images/duurzaamfoto.jpg"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
        priority={false}
      />

      {/* Laag 2 — paarse overlay (87% dekkend) zodat foto subtiel doorschemert */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(81, 39, 63, 0.87)" }}
      />

      {/* Laag 3 — golf bovenaan */}
      <div className="absolute left-0 right-0 top-0 z-20 leading-none">
        <svg
          viewBox="0 0 1440 70"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-12 w-full sm:h-16"
          preserveAspectRatio="none"
        >
          <path d="M0,35 C360,0 1080,70 1440,35 L1440,0 L0,0 Z" fill="#fafafa" />
        </svg>
      </div>

      {/* Laag 4 — content */}
      <div className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2
            className="mb-16 text-center font-heading text-3xl font-bold text-white sm:text-4xl"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            Een duurzaam perspectief voor klanten, relaties en maatschappij
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="grid gap-8 md:grid-cols-3">
            {sustainabilityColumns.map((text, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/10 p-8 ring-1 ring-white/20 backdrop-blur-sm"
              >
                <p className="text-base leading-relaxed text-white">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Laag 5 — golf onderaan */}
      <div className="absolute bottom-0 left-0 right-0 z-20 leading-none">
        <svg
          viewBox="0 0 1440 70"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-12 w-full sm:h-16"
          preserveAspectRatio="none"
        >
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
