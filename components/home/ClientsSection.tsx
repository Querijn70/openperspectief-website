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
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <svg
                  className="mb-5 h-8 w-8 text-op-blauw/30"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <blockquote className="flex-1 text-sm leading-relaxed text-op-body/75 italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-op-paars/10 text-sm font-bold text-op-paars">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-op-paars">
                      {item.name}
                    </p>
                    <p className="text-xs text-op-body/55">
                      {item.title}, {item.organization}
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
            <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-op-body/40">
              In samenwerking met
            </p>
            <ClientCarousel />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
