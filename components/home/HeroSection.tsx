import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex h-[560px] items-center overflow-hidden sm:h-[580px]">

      {/* Laag 1 — achtergrondfoto
          object-position: 76% horizontaal (rechtsgericht, persoon in rechterhelft)
                           28% verticaal (vrij hoog zodat hoofd + brug/mast zichtbaar zijn) */}
      <Image
        src="/images/Header_foto.jpg"
        alt=""
        fill
        className="object-cover object-[76%_28%] sm:object-[78%_30%]"
        aria-hidden="true"
        priority
      />

      {/* Laag 2 — paarse overlay 60% dekkend (foto goed zichtbaar, lucht/wolken doorschemeren) */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(81, 39, 63, 0.60)" }}
      />

      {/* Laag 3 — tekstblok, links uitgelijnd, verticaal gecentreerd via parent items-center */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[510px]">

          {/* Quote — serif italic voor elegantie */}
          <blockquote className="font-tagline text-xl italic leading-relaxed text-white sm:text-2xl">
            &ldquo;De crux voor organisaties die in netwerken samenwerken is de
            onderlinge asymmetrie als fact-of-life erkennen, omarmen en benutten
            voor het beste resultaat&rdquo;
          </blockquote>

          {/* Naam — sans-serif, wit, bold, kleiner dan de quote */}
          <p className="mt-4 font-heading text-sm font-semibold text-white sm:text-base">
            Rosemarie Mijlhoff
          </p>

          {/* Knop — pil-vorm (rounded-full), blauw, pijl rechts */}
          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-op-blauw px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-op-blauw-dark hover:shadow-lg active:scale-100"
            >
              Maak afspraak
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* Laag 4 — golf naar volgende sectie */}
      <div className="absolute bottom-0 left-0 right-0 z-20 leading-none">
        <svg
          viewBox="0 0 1440 70"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-12 w-full sm:h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
