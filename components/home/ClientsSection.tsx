import ClientCarousel from "../ClientCarousel";
import TestimonialCarousel from "../TestimonialCarousel";
import FadeIn from "@/components/FadeIn";

export default function ClientsSection() {
  return (
    <section className="overflow-hidden bg-op-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Titel */}
        <FadeIn>
          <h2 className="mb-4 text-center font-heading text-3xl font-bold text-op-paars sm:text-4xl">
            Klantervaringen
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-op-body/60">
            Organisaties die OpenPerspectief vertrouwen voor hun
            samenwerkingsvraagstukken.
          </p>
        </FadeIn>

        {/* Testimonial-carrousel */}
        <FadeIn>
          <TestimonialCarousel />
        </FadeIn>

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
