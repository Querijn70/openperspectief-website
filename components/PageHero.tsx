type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pb-28 pt-24 text-white sm:pb-36 sm:pt-32"
      style={{ backgroundColor: "#51273f" }}
    >
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
