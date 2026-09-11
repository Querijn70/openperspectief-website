import Image from "next/image";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-op-paars pb-20 pt-16">

      {/* Laag 1 — achtergrondfoto (verborgen op mobiel, zichtbaar vanaf sm) */}
      <div className="absolute inset-0 hidden sm:block">
        <Image
          src="/images/Header_foto.jpg"
          alt=""
          fill
          className="object-cover object-[76%_28%] sm:object-[78%_30%]"
          aria-hidden="true"
          priority
        />
      </div>

      {/* Laag 2 — paarse overlay 60% dekkend (alleen nodig naast de foto, vanaf sm) */}
      <div
        className="absolute inset-0 z-10 hidden sm:block"
        style={{ backgroundColor: "rgba(81, 39, 63, 0.60)" }}
      />

      {/* Laag 3 — tekstblok, uitgelijnd met header-container */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-lg flex-col items-start">

        {/* Slogan pill */}
        <span
          className="rounded-full px-6 py-2 text-sm font-semibold tracking-widest text-white backdrop-blur-md"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          Resultaat door verbinding
        </span>

        {/* Quote */}
        <blockquote className="mt-8 w-full border-l-4 border-op-blauw py-2 pl-6 font-heading text-lg font-semibold leading-snug tracking-normal text-white sm:text-xl">
          De crux voor organisaties die in netwerken samenwerken is de
          onderlinge asymmetrie als fact-of-life erkennen, omarmen en benutten
          voor het beste resultaat
        </blockquote>

        {/* Naam — licht, elegant, ruime letterspatiëring */}
        <p className="mt-6 font-heading text-xs font-normal tracking-widest text-white/75 sm:text-sm">
          Rosemarie Mijlhoff
        </p>

        <div className="mt-10">
          <Button href="#contact">MAAK AFSPRAAK</Button>
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
