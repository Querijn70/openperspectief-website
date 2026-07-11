import ClientCarousel from "../ClientCarousel";
import FadeIn from "@/components/FadeIn";
import { testimonials } from "@/lib/data";

export default function ClientsSection() {
  return (
    <section className="overflow-hidden bg-op-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Titel */}
        <FadeIn>
          <h2 className="mb-4 text-center font-heading text-3xl font-bold sm:text-4xl">
            Klantervaringen
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-op-body/60">
            Organisaties die OpenPerspectief vertrouwen voor hun
            samenwerkingsvraagstukken.
          </p>
        </FadeIn>

        {/* Testimonial-kaarten */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={index} delay={index * 100}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">

                {/* Decoratief openingsaanhalingsteken */}
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
            </FadeIn>
          ))}
        </div>

        {/* Logo-carrousel */}
        <FadeIn>
          <div className="mt-20 border-t border-border pt-16">
            <ClientCarousel />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
