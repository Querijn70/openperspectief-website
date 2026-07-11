type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pb-28 pt-24 text-white sm:pb-36 sm:pt-32"
      style={{
        background: "linear-gradient(135deg, #51273f 0%, #3a1a2e 55%, #2d1524 100%)",
      }}
    >
      {/* Dot-grid textuurlaag */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decoratieve gloed rechtsboven — blauw */}
      <div
        className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(18,172,223,0.18) 0%, transparent 70%)" }}
      />

      {/* Decoratieve gloed linksonder — groen */}
      <div
        className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(23,158,154,0.14) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <h1 className="hero-title font-heading text-5xl font-bold tracking-wider text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        {/* Decoratieve lijn — groen */}
        <div className="hero-sub mt-5 h-0.5 w-16 rounded-full bg-op-groen" />

        {subtitle && (
          <p className="hero-sub mt-4 text-sm font-semibold tracking-widest text-white/55 sm:text-base">
            {subtitle}
          </p>
        )}

      </div>

      {/* Golf naar volgende sectie */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-10 w-full sm:h-14"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
